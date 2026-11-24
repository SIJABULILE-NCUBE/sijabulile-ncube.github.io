# Sijabulile Ncube · Portfolio

My personal portfolio website: who I am, the products I've built, my experience in software and credit risk, and how to contact me.

**Live site:** https://sijabulile-ncube.github.io

## What's inside

- **Hero** with my headline, highlights and a Download CV button
- **Animated stats** strip
- **Featured projects**, led by Bit by Bit, with real screenshots, problem, role, stack and links
- **Experience** timeline
- **Awards and achievements**, including the GAIC × Tether Demo Day 1st place and the bootcamp certificate
- **Education and certifications**, **skills** grouped by area, and **contact** details

All site copy comes from [`PORTFOLIO_CONTENT.md`](./PORTFOLIO_CONTENT.md), the single source of truth. The words live in code in `src/data/content.ts`, which mirrors that file.

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for scroll reveals, counters and hover tilt (respects `prefers-reduced-motion`)
- [Lucide](https://lucide.dev) icons, self-hosted Fraunces and Inter variable fonts
- [Playwright](https://playwright.dev) + [sharp](https://sharp.pixelplumbing.com) to capture and optimise project screenshots
- Build-time pre-render of the hero (`react-dom/server`) so the headline paints before any JavaScript runs
- GitHub Actions + GitHub Pages for build and deployment

## Run it locally

You need Node.js 22 or newer.

```bash
git clone https://github.com/Sijabulile-Ncube/sijabulile-ncube.github.io.git
cd sijabulile-ncube.github.io
npm install
npm run dev        # start the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check, build to dist/ and pre-render the hero into index.html
npm run preview    # serve the production build locally
node scripts/capture-screenshots.mjs   # refresh project screenshots from the live sites
```

(For the screenshot script, install the browser once with `npx playwright install chromium`.)

## Project structure

```
public/                  static files served as-is
  Sijabulile_Ncube_CV.pdf
  certificates/          GAIC × Tether bootcamp certificate (PDF and image)
  projects/              project screenshots (WebP)
src/
  data/content.ts        all site copy, mirrored from PORTFOLIO_CONTENT.md
  entry-server.tsx       build-time render used by scripts/prerender.mjs
  Below.tsx              below-the-fold sections, lazy-loaded with Framer Motion
  components/            page sections and shared UI (reveal, counter, tilt)
scripts/                 screenshot capture, image optimisation and pre-render
.github/workflows/       build on every PR, deploy to Pages on main
```

## Deployment

Every pull request runs the build. Every push to `main` builds the site and deploys `dist/` to GitHub Pages through the **Build and deploy** workflow. Pages is set to deploy from GitHub Actions.

## Updating content

1. Edit `PORTFOLIO_CONTENT.md`.
2. Mirror the change in `src/data/content.ts`.
3. Open a pull request. The site deploys when it merges.

Please keep the copy free of em dashes (the CI check fails if it finds one).
