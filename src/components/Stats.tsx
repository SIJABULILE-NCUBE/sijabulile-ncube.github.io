import { stats } from '../data/content';
import { Counter, Reveal } from './ui';

export function Stats() {
  return (
    <section aria-label="Key numbers" className="px-5 pb-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <dl className="glass grid grid-cols-2 divide-white/5 overflow-hidden rounded-3xl md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col gap-2 p-6 md:p-8 ${i < 2 ? 'border-b border-white/5 md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-white/5 md:border-r-0' : ''}`}>
                <dt className="order-last text-sm leading-snug text-slate-300">{s.label}</dt>
                <dd className={`font-display text-4xl font-semibold md:text-5xl ${i === 2 ? 'text-gradient-gold' : 'text-white'}`}>
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
