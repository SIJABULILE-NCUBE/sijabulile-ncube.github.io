import { ArrowUpRight, Check, Clock, Lock, Trophy } from 'lucide-react';
import { alsoBuilt, bitByBitDemo, COMING_SOON, featured, projects, type Project } from '../data/content';
import { Chip, GitHubIcon, Reveal, SectionHeading, Tilt } from './ui';
import { DemoPlayer } from './DemoPlayer';

const btn =
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-offset-2';

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {typeof p.live === 'string' && p.live !== 'none' && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${btn} glow-gold bg-emerald-400 text-navy-950 hover:bg-emerald-300`}>
          Live
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">: {p.name} (opens in a new tab)</span>
        </a>
      )}
      {p.live === null && (
        <span className={`${btn} cursor-default border border-white/10 text-slate-300`}>
          <Clock className="size-4" aria-hidden="true" />
          <span>
            Live<span aria-hidden="true">: </span>
            <span className="sr-only"> link for {p.name}: </span>
            {COMING_SOON}
          </span>
        </span>
      )}
      {'url' in p.github ? (
        <a href={p.github.url} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-slate-100 hover:border-white/30 hover:bg-white/5`}>
          <GitHubIcon />
          GitHub
          <span className="sr-only">: {p.name} repository (opens in a new tab)</span>
        </a>
      ) : (
        <span className={`${btn} cursor-default border border-white/10 text-slate-300`}>
          <Lock className="size-4" aria-hidden="true" />
          {p.github.label}
        </span>
      )}
    </div>
  );
}

/** Decorative art for projects that have no screenshot yet. */
function ProjectArt({ p }: { p: Project }) {
  return (
    <div aria-hidden="true" className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-navy-850">
      {p.id === 'matshiya' && (
        <>
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent to-gold-200/70"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: `${12 + ((i * 7) % 30)}px`,
                transform: `rotate(${(i * 23) % 360}deg)`,
              }}
            />
          ))}
          <div className="absolute -bottom-24 size-56 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6ee7b7,#10b981_35%,#16264a_70%)]" />
        </>
      )}
      {p.id === 'creditwise' && (
        <svg viewBox="0 0 200 120" className="w-3/5">
          <path d="M20 110a80 80 0 0 1 160 0" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="14" strokeLinecap="round" />
          <path d="M20 110a80 80 0 0 1 128-64" fill="none" stroke="url(#cw)" strokeWidth="14" strokeLinecap="round" />
          <defs>
            <linearGradient id="cw" x1="0" x2="1">
              <stop offset="0" stopColor="#10b981" />
              <stop offset="1" stopColor="#e3b65b" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {p.id === 'fixmykasi' && (
        <div className="grid-overlay absolute inset-0 [mask-image:none]">
          {[
            [24, 30, 'bg-gold-400'],
            [62, 22, 'bg-emerald-400'],
            [44, 58, 'bg-emerald-400'],
            [76, 64, 'bg-gold-400'],
            [18, 72, 'bg-emerald-400'],
          ].map(([x, y, c], i) => (
            <span key={i} className={`absolute size-3 rounded-full ${c} ring-8 ring-white/5`} style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
        </div>
      )}
      <span className="relative font-display text-3xl font-semibold text-white/80">{p.name}</span>
    </div>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mb-1 text-[0.7rem] font-semibold tracking-[0.2em] text-emerald-300 uppercase">{label}</dt>
      <dd className="text-sm leading-relaxed text-slate-300">{children}</dd>
    </div>
  );
}

function Featured() {
  const p = featured;
  return (
    <Reveal as="article" className="relative mb-10">
      <div aria-hidden="true" className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-gold-400/50 via-emerald-400/10 to-emerald-400/40" />
      <div className="relative grid overflow-hidden rounded-[2rem] bg-navy-850 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative p-4 md:p-6 lg:self-center">
          <DemoPlayer
            slides={bitByBitDemo.slides}
            label={bitByBitDemo.label}
            embed={bitByBitDemo.embed}
            title={`${p.name} demo video`}
            part2={bitByBitDemo.part2}
          />
        </div>

        <div className="flex flex-col gap-6 p-6 md:p-10">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Chip tone="gold">Featured</Chip>
              <Chip tone="emerald">{p.label}</Chip>
            </div>
            <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">{p.name}</h3>
            <p className="mt-2 font-display text-xl text-gold-300 italic">{p.tagline}</p>
          </div>
          <dl className="grid gap-5">
            <Detail label="Problem">{p.problem}</Detail>
            <Detail label="Solution">{p.whatItDoes}</Detail>
            <Detail label="Result">{p.result}</Detail>
            <Detail label="My role">{p.role}</Detail>
          </dl>
          <ProjectLinks p={p} />
        </div>

        <div className="border-t border-white/5 p-6 md:p-10 lg:col-span-2">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h4 className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-emerald-300 uppercase">Highlights</h4>
              <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {p.highlights!.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-300" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-emerald-300 uppercase">Stack</h4>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const img = p.images?.[0];
  const wide = Boolean(p.award);
  return (
    <Reveal as="li" delay={(index % 2) * 0.08} className={`h-full ${wide ? 'md:col-span-2' : ''}`}>
      <Tilt className="h-full rounded-3xl">
        <article
          className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-navy-850/90 ${
            wide ? 'border-gold-400/40 lg:grid lg:grid-cols-2' : 'border-white/10'
          }`}
        >
          <div className={`relative overflow-hidden border-b border-white/5 ${wide ? 'aspect-[16/9] lg:aspect-auto lg:h-full lg:border-r lg:border-b-0' : 'aspect-[16/9]'}`}>
            {img ? (
              <img src={img.src} alt={img.alt} width={1200} height={675} loading="lazy" decoding="async" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${wide ? 'object-center' : 'object-top'}`} />
            ) : (
              <ProjectArt p={p} />
            )}
            {p.award && (
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950 shadow-lg">
                <Trophy className="size-3.5" aria-hidden="true" />
                {p.award}
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
              {p.label && <Chip tone="emerald">{p.label}</Chip>}
            </div>
            <dl className="grid gap-4">
              <Detail label="Problem">{p.problem}</Detail>
              <Detail label="What it does">{p.whatItDoes}</Detail>
              <Detail label="My role">{p.role}</Detail>
            </dl>
            <ul className="flex flex-wrap gap-2" aria-label={`${p.name} stack`}>
              {p.stack.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <ProjectLinks p={p} />
            </div>
          </div>
        </article>
      </Tilt>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="work-title" eyebrow="Work" title={<>Featured <span className="text-gradient-gold italic">projects</span></>} />
        <Featured />
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </ul>

        <Reveal className="mt-16">
          <h3 className="mb-6 font-display text-2xl font-semibold text-white">Also built</h3>
          <ul className="grid gap-6">
            {alsoBuilt.map((a) => (
              <li key={a.name} className="glass grid items-center gap-6 overflow-hidden rounded-3xl p-4 sm:grid-cols-[240px_1fr] md:p-5">
                <img src={a.image.src} alt={a.image.alt} width={1200} height={750} loading="lazy" decoding="async" className="w-full rounded-xl border border-white/10" />
                <div className="flex flex-col gap-4">
                  <p className="text-slate-300">
                    <strong className="font-display text-xl font-semibold text-white">{a.name}</strong>
                    <span className="block pt-1">{a.description.charAt(0).toUpperCase() + a.description.slice(1)}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href={a.live} target="_blank" rel="noopener noreferrer" className={`${btn} glow-gold bg-emerald-400 text-navy-950 hover:bg-emerald-300`}>
                      Live <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">: {a.name} (opens in a new tab)</span>
                    </a>
                    <a href={a.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-slate-100 hover:border-white/30 hover:bg-white/5`}>
                      <GitHubIcon /> GitHub
                      <span className="sr-only">: {a.name} repository (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
