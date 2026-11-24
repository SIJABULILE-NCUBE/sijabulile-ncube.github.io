import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Preloads the Latin subsets of the two variable fonts so text does not reflow when they arrive. */
function preloadFonts(): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      const files = Object.keys(ctx.bundle ?? {}).filter((f) =>
        /(inter-latin-wght-normal|fraunces-latin-wght-normal|fraunces-latin-wght-italic)-.*\.woff2$/.test(f),
      );
      return {
        html,
        tags: files.map((f) => ({
          tag: 'link',
          attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${f}`, crossorigin: '' },
          injectTo: 'head' as const,
        })),
      };
    },
  };
}

// User site (username.github.io) is served from the domain root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), preloadFonts()],
  build: { target: 'es2022', cssMinify: true },
});
