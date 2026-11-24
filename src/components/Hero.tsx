import { ArrowDown, Download, GraduationCap, MapPin, Star, Trophy } from 'lucide-react';
import { contact, cvPath, hero } from '../data/content';

const badgeIcons = { trophy: Trophy, star: Star, grad: GraduationCap };

export function Hero() {
  // Hero uses CSS-only entrance (transform only, never invisible) so it paints before any JS animation library loads.
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

  const [before, after] = hero.headline.split('trust');

  return (
    <section id="top" aria-labelledby="hero-title" className="relative px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p {...rise(0)} className="rise mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
            {hero.titleLine.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-gold-400" />}
                {t}
              </span>
            ))}
          </p>

          <h1 {...rise(0.05)} id="hero-title" className="rise font-display text-white">
            <span className="mb-4 block text-2xl font-medium text-slate-300 md:text-3xl">{hero.name}</span>
            <span className="block text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {before}
              <span className="text-gradient-gold italic">trust</span>
              {after}
            </span>
          </h1>

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
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-semibold text-navy-950 transition hover:bg-emerald-300"
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
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-800 p-2">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.jpg"
                alt="Portrait of Sijabulile Ncube"
                width={814}
                height={654}
                fetchPriority="high"
                className="aspect-[4/4.2] w-full rounded-[1.6rem] object-cover object-[50%_30%]"
              />
            </picture>
            <div className="glass absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-navy-900/80">
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
