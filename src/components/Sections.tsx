import {
  Award,
  BookOpen,
  Bot,
  CodeXml,
  Download,
  FileText,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Medal,
  PanelsTopLeft,
  PenTool,
  Phone,
  Server,
  Star,
  Trophy,
} from 'lucide-react';
import { about, awards, certificate, contact, cvPath, education, experience, hero, skills, topAward, udemy } from '../data/content';
import { Chip, GitHubIcon, LinkedInIcon, Reveal, SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading id="about-title" eyebrow="About" title={<>An <span className="text-gradient-gold italic">unusual edge</span></>} />
        <div className="space-y-6">
          {about.paragraphs.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className={`leading-relaxed text-slate-300 ${i === 0 ? 'text-xl text-slate-200' : 'text-lg'}`}>{t}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-6">
              <p className="mb-1 font-display text-lg font-semibold text-emerald-300">{about.lookingForTitle}</p>
              <p className="text-slate-200">{about.lookingFor.charAt(0).toUpperCase() + about.lookingFor.slice(1)}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading id="experience-title" eyebrow="Experience" title={<>Experience</>} />
        <ol className="relative">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-gold-400 via-emerald-400/50 to-transparent md:left-[calc(9rem+11px)]" />
          {experience.map((e, i) => (
            <Reveal as="li" key={e.title + e.dates} delay={i * 0.05} className="relative grid gap-1 pb-12 pl-10 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-10 md:pl-0">
              <p className="text-sm font-medium text-slate-400 md:pt-0.5 md:text-right">{e.dates}</p>
              <div className="relative md:pl-10">
                <span
                  aria-hidden="true"
                  className={`absolute top-1 -left-10 flex size-6 items-center justify-center rounded-full border md:-left-[0.05rem] ${
                    e.current ? 'border-gold-400 bg-navy-900' : 'border-white/20 bg-navy-900'
                  }`}
                >
                  <span className={`size-2 rounded-full ${e.current ? 'bg-gold-400' : 'bg-emerald-400/70'}`} />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{e.title}</h3>
                <p className="mt-0.5 text-emerald-300">{e.org}</p>
                {e.body && <p className="mt-3 leading-relaxed text-slate-300">{e.body}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const awardIcons = { star: Star, medal: Medal, grad: GraduationCap };

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="awards-title" eyebrow="Awards" title={<>Awards and <span className="text-gradient-gold italic">achievements</span></>} />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-400/15 via-navy-850 to-navy-850 p-8 md:p-10">
            <Trophy aria-hidden="true" className="absolute -right-6 -bottom-6 size-56 text-gold-400/10" strokeWidth={1} />
            <div className="relative">
              <span className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gold-400 text-navy-950 shadow-[0_10px_40px_-8px_rgb(227_182_91/0.6)]">
                <Trophy className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">
                <span className="text-gradient-gold">1st place</span>, Demo Day
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">{topAward.detail}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass flex flex-col rounded-3xl p-6">
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-white/10 bg-white"
            >
              <picture>
                <source srcSet={certificate.thumb} type="image/webp" />
                <img
                  src={certificate.image}
                  alt={`${certificate.alt}. Opens the PDF in a new tab.`}
                  width={480}
                  height={366}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </picture>
            </a>
            <div className="mt-5 flex items-start gap-3">
              <Award className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">{certificate.title}</p>
                <p className="text-sm text-slate-400">
                  {certificate.org} · {certificate.date}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => {
            const Icon = awardIcons[a.icon];
            return (
              <Reveal as="li" key={a.title + a.detail} delay={(i % 3) * 0.06} className="glass flex gap-4 rounded-2xl p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-white">{a.title}</p>
                  <p className="text-sm leading-relaxed text-slate-400">{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-20">
          <h3 className="mb-6 font-display text-2xl font-semibold text-white">Education and certifications</h3>
          <ul className="grid gap-x-10 divide-y divide-white/5 md:grid-cols-2 md:divide-y-0">
            {education.map((e) => (
              <li key={e.title} className="flex gap-3 border-white/5 py-4 md:border-b">
                <BookOpen className="mt-1 size-4 shrink-0 text-gold-300" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-medium text-slate-100">{e.title}</p>
                  <p className="text-sm text-slate-400">{e.meta.join(' · ')}</p>
                  {(e.tags || e.certificate) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {e.tags?.map((t) => (
                        <Chip key={t} tone={t.includes('1st') || t === 'Distinction' ? 'gold' : 'emerald'}>
                          {t}
                        </Chip>
                      ))}
                      {e.certificate && (
                        <a
                          href={e.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-white/5"
                        >
                          <FileText className="size-3.5" aria-hidden="true" />
                          Certificate
                          <span className="sr-only"> (PDF, opens in a new tab)</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li className="flex gap-3 py-4 md:col-span-2">
              <BookOpen className="mt-1 size-4 shrink-0 text-gold-300" aria-hidden="true" />
              <div>
                <p className="font-medium text-slate-100">{udemy.title}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {udemy.courses.map((c) => (
                    <li key={c}>
                      <Chip>{c}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const skillIcons = {
  code: CodeXml,
  layout: PanelsTopLeft,
  server: Server,
  test: FlaskConical,
  git: GitBranch,
  ai: Bot,
  design: PenTool,
  domain: Landmark,
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title" eyebrow="Skills" title={<>Skills</>} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = skillIcons[s.icon];
            const highlight = s.group === 'AI engineering' || s.group === 'Domain';
            return (
              <Reveal as="li" key={s.group} delay={(i % 4) * 0.06} className={`glass rounded-2xl p-5 ${highlight ? 'border-gold-400/25!' : ''}`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex size-9 items-center justify-center rounded-lg ${highlight ? 'bg-gold-400/15 text-gold-300' : 'bg-emerald-400/10 text-emerald-300'}`}>
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-white">{s.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <li key={it}>
                      <Chip>{it}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/sijabulilemn', href: contact.linkedin, external: true },
    { icon: GitHubIcon, label: 'GitHub', value: 'github.com/Sijabulile-Ncube', href: contact.github, external: true },
    { icon: MapPin, label: 'Location', value: contact.location },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-24 md:px-8 md:py-32">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 via-navy-850 to-navy-900 p-8 md:p-14">
        <div aria-hidden="true" className="absolute -top-32 -right-32 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(227_182_91/0.18),transparent)]" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-20 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(16_185_129/0.18),transparent)]" />
        <div className="relative grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-emerald-300 uppercase">Contact</p>
            <h2 id="contact-title" className="font-display text-3xl leading-tight font-semibold text-white md:text-4xl">
              {contact.cta.replace(" Let's talk.", '')} <span className="text-gradient-gold italic">Let's talk.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-navy-950 shadow-[0_10px_40px_-10px_rgb(227_182_91/0.7)] transition hover:bg-gold-300"
              >
                <Download className="size-4" aria-hidden="true" />
                {hero.cvCta}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-slate-100 transition hover:bg-white/5"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
          <ul className="grid content-start gap-3">
            {items.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald-300">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">{label}</span>
                    <span className="block truncate text-slate-100">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      {inner}
                      {external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-2">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
