import { startTransition, useEffect, useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { About, Awards, Contact, Experience, Skills } from './components/Sections';
import { Footer } from './components/Layout';

const sections = [Stats, Projects, About, Experience, Awards, Skills, Contact, Footer];

/**
 * Everything below the hero. Loaded as its own chunk so Framer Motion never delays the first paint,
 * and mounted one section per task (in time-sliced transitions) so the main thread never blocks for long.
 */
export default function Below() {
  const [count, setCount] = useState(1);
  const done = count >= sections.length;

  useEffect(() => {
    if (done) return;
    const id = setTimeout(() => startTransition(() => setCount((c) => c + 1)), 0);
    return () => clearTimeout(id);
  }, [count, done]);

  useEffect(() => {
    if (!done) return;
    // Honour deep links like /#contact once every section exists.
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && id !== 'top') document.getElementById(id)?.scrollIntoView();
  }, [done]);

  return (
    <LazyMotion features={domAnimation} strict>
      {/* reducedMotion="user" turns off transform and opacity animations when the OS asks for less motion */}
      <MotionConfig reducedMotion="user">
        {sections.slice(0, count).map((Section, i) => (
          <Section key={i} />
        ))}
      </MotionConfig>
    </LazyMotion>
  );
}
