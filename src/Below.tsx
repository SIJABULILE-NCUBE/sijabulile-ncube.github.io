import { useEffect } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { About, Awards, Contact, Experience, Skills } from './components/Sections';
import { Footer } from './components/Layout';

/** Everything below the hero. Loaded as its own chunk so Framer Motion never delays the first paint. */
export default function Below() {
  useEffect(() => {
    // Honour deep links like /#contact once the lazy content exists.
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && id !== 'top') document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      {/* reducedMotion="user" turns off transform and opacity animations when the OS asks for less motion */}
      <MotionConfig reducedMotion="user">
        <Stats />
        <Projects />
        <About />
        <Experience />
        <Awards />
        <Skills />
        <Contact />
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
