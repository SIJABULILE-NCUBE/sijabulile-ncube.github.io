// Pre-renders the app shell (nav and hero) into dist/index.html so the headline paints before any JavaScript runs.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ssrDir = path.resolve('dist-ssr');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const file = path.resolve('dist/index.html');
const html = await readFile(file, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('root marker not found in dist/index.html');
await writeFile(file, html.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('pre-rendered dist/index.html');
