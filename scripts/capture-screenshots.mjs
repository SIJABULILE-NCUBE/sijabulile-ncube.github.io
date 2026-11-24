// Captures project screenshots from live sites and optimises local ones.
// Usage: node scripts/capture-screenshots.mjs
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = 'public/projects';
await mkdir(OUT, { recursive: true });

const live = [
  { name: 'house-of-laundry', url: 'https://house-of-laundry.netlify.app' },
  { name: 'neighbourloan', url: 'https://neighbourloan.netlify.app' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
for (const { name, url } of live) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500); // let intro animations settle
  const buf = await page.screenshot();
  await sharp(buf).resize(1200).webp({ quality: 80 }).toFile(`${OUT}/${name}.webp`);
  console.log('captured', name);
}
await browser.close();

// Screenshots kept in the projects' own repos (docs/screenshots)
const raw = (repo, file) => `https://raw.githubusercontent.com/${repo}/main/docs/screenshots/${file}`;
const fromRepos = [
  { url: raw('SIJABULILE-NCUBE/bit-by-bit', '1-landing-desktop.png'), out: 'bit-by-bit.webp' },
  { url: raw('SIJABULILE-NCUBE/bit-by-bit', '2-owner-dashboard-desktop.png'), out: 'bit-by-bit-dashboard.webp' },
  // crop away the Windows taskbar captured in the original
  { url: raw('Sijabulile-Ncube/thembeka', 'offline-scam-high-risk.png'), out: 'thembeka.webp', crop: { left: 0, top: 0, width: 1045, height: 588 } },
];
for (const { url, out, crop } of fromRepos) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  let img = sharp(Buffer.from(await res.arrayBuffer()));
  if (crop) img = img.extract(crop);
  await img.resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${OUT}/${out}`);
  console.log('optimised', out);
}
