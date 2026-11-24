import { lazy, Suspense, useEffect, useState } from 'react';
import { Background, Nav } from './components/Layout';
import { Hero } from './components/Hero';

const Below = lazy(() => import('./Below'));

export default function App() {
  // The pre-rendered HTML contains only the placeholder. Mounting the lazy content after hydration keeps the
  // server and client markup identical (no hydration errors) and lets the hero paint before anything else.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const placeholder = <div className="min-h-screen" />;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main">
        <Hero />
        {mounted ? (
          <Suspense fallback={placeholder}>
            <Below />
          </Suspense>
        ) : (
          placeholder
        )}
      </main>
    </>
  );
}
