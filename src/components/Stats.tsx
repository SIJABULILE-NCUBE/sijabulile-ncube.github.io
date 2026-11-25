import { stats } from '../data/content';
import { Counter, Reveal } from './ui';

/** Proof strip under the hero: big numbers that count up when scrolled into view. */
export function Stats() {
  return (
    <section aria-label="Key numbers" className="px-5 pb-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <dl className="glass grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-2 p-5 sm:p-6 md:p-8 ${i < 2 ? 'border-b border-white/5 md:border-b-0' : ''} ${
                  i % 2 === 0 ? 'border-r border-white/5' : ''
                } ${i === 1 ? 'md:border-r' : ''}`}
              >
                <dt className="order-last text-xs leading-snug font-medium tracking-[0.15em] text-slate-300 uppercase sm:text-sm">{s.label}</dt>
                <dd className="font-display font-semibold text-white">
                  <span className={`text-5xl leading-none md:text-6xl ${i === 1 ? 'text-gradient-gold' : ''}`}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  {s.qualifier && (
                    <span className="mt-1 block text-lg leading-tight text-gold-200 lg:mt-0 lg:ml-2 lg:inline lg:text-2xl">{s.qualifier}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
