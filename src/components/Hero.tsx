import { ArrowDown, Download, GraduationCap, MapPin, Star, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contact, cvPath, hero } from '../data/content';

/**
 * Cycles through short role lines. The pre-rendered HTML shows the first line; rotation starts after hydration.
 * With reduced motion the lines are shown together and never move. Screen readers always get the full list once.
 */
function RotatingLine({ items }: { items: readonly string[] }) {
  const [i, setI] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 2600);
    return () => clearInterval(id);
  }, [still, items.length]);

  const cls = 'font-display text-lg font-medium text-gold-200 sm:text-xl md:text-2xl';
  return (
    <p className={cls}>
      <span className="sr-only">{items.join(', ')}</span>
      {still ? (
        <span aria-hidden="true">{items.join(' · ')}</span>
      ) : (
        <span aria-hidden="true" className="grid">
          {items.map((t, n) => (
            <span
              key={t}
              className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${
                n === i ? 'translate-y-0 opacity-100' : n === (i - 1 + items.length) % items.length ? '-translate-y-3 opacity-0' : 'translate-y-3 opacity-0'
              }`}
            >
              {t}
            </span>
          ))}
        </span>
      )}
    </p>
  );
}

const badgeIcons = { trophy: Trophy, star: Star, grad: GraduationCap };

export function Hero() {
  // Hero uses CSS-only entrance (transform only, never invisible) so it paints before any JS animation library loads.
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

  const [before, after] = hero.headline.split('trust');

  return (
    <section id="top" aria-labelledby="hero-title" className="relative px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 {...rise(0.05)} id="hero-title" className="rise font-display text-white">
            <span className="mb-4 block text-2xl font-medium text-slate-300 md:text-3xl">{hero.name}</span>
            <span className="block text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {before}
              <span className="text-gradient-gold italic">trust</span>
              {after}
            </span>
          </h1>

          <div {...rise(0.09)} className="rise mt-6 flex flex-col items-start gap-3">
            <RotatingLine items={hero.rotating} />
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
                <span className="relative size-2 rounded-full bg-emerald-400" />
              </span>
              {hero.availability}
            </span>
          </div>

          <p {...rise(0.12)} className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {hero.subHeadline}
          </p>

          <ul {...rise(0.18)} className="rise mt-7 flex flex-wrap gap-2" aria-label="Highlights">
            {hero.badges.map((b) => {
              const Icon = badgeIcons[b.icon];
              const gold = b.icon === 'trophy';
              return (
                <li
                  key={b.text}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm ${
                    gold ? 'border-gold-400/40 bg-gold-400/10 text-gold-200' : 'border-white/10 bg-white/[0.04] text-slate-200'
                  }`}
                >
                  <Icon className={`size-4 shrink-0 ${gold ? 'text-gold-300' : 'text-emerald-300'}`} aria-hidden="true" />
                  {b.text}
                </li>
              );
            })}
          </ul>

          <div {...rise(0.24)} className="rise mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="glow-gold group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-semibold text-navy-950 transition hover:bg-emerald-300"
            >
              {hero.primaryCta}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3.5 font-semibold text-gold-200 transition hover:bg-gold-400/10"
            >
              <Download className="size-4" aria-hidden="true" />
              {hero.cvCta}
            </a>
          </div>
        </div>

        <div
          className="rise-scale relative mx-auto w-full max-w-sm lg:mt-8 lg:max-w-none"
        >
          <div aria-hidden="true" className="absolute -inset-2 rounded-[2.25rem] sm:-inset-4 bg-gradient-to-br from-gold-400/30 via-transparent to-emerald-400/30 opacity-70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/35 bg-navy-800 p-2 shadow-[0_0_0_1px_rgb(227_182_91/0.08),0_0_42px_-8px_rgb(227_182_91/0.45)]">
            <img
              src="/profile-sketch.webp"
              alt="Pencil sketch portrait of Sijabulile Ncube"
              width={814}
              height={654}
              fetchPriority="high"
              className="aspect-[4/4.2] w-full rounded-[1.6rem] object-cover object-[50%_30%]"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl border border-gold-400/25 bg-navy-900/90 px-4 py-3 shadow-[0_8px_24px_-8px_rgb(0_0_0/0.6)] backdrop-blur-sm">
              <div>
                <p className="font-display text-base font-semibold text-white">{hero.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="size-3.5 text-emerald-300" aria-hidden="true" />
                  {contact.location}
                </p>
              </div>
              <Trophy className="size-6 text-gold-300" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
