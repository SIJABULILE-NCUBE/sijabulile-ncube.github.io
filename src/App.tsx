import { lazy, Suspense } from 'react';
import { Background, Nav } from './components/Layout';
import { Hero } from './components/Hero';

const Below = lazy(() => import('./Below'));

export default function App() {
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
        <Suspense fallback={<div className="min-h-screen" />}>
          <Below />
        </Suspense>
      </main>
    </>
  );
}
