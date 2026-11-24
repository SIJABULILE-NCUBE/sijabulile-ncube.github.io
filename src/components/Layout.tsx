import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cvPath, hero } from '../data/content';

/** Subtle animated background: drifting colour fields, a fading grid and a few twinkling stars. */
export function Background() {
  const stars = [
    [8, 14], [22, 32], [37, 9], [55, 22], [71, 12], [86, 28], [93, 8], [15, 52], [64, 44], [80, 60], [30, 70], [48, 84], [90, 82], [5, 88],
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-900">
      <div className="aurora aurora--emerald -top-[20vh] -left-[15vw] h-[70vh] w-[70vw]" />
      <div className="aurora aurora--gold top-[30vh] -right-[20vw] h-[65vh] w-[60vw]" />
      <div className="aurora aurora--blue -bottom-[25vh] left-[10vw] h-[70vh] w-[80vw]" />
      <div className="grid-overlay absolute inset-0" />
      {stars.map(([x, y], i) => (
        <span
          key={i}
          className="twinkle absolute size-0.5 rounded-full bg-gold-200"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 7) * 0.6}s` }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(5_10_23/0.7))]" />
    </div>
  );
}

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/5 bg-navy-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Sijabulile <span className="text-gradient-gold">Ncube</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-2 text-sm font-medium text-gold-200 transition-colors hover:bg-gold-400/10"
            >
              <Download className="size-4" aria-hidden="true" />
              {hero.cvCta}
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/5 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base text-slate-200 hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={cvPath}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-4 py-3 font-semibold text-navy-950"
              >
                <Download className="size-4" aria-hidden="true" />
                {hero.cvCta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} {hero.name}</p>
    </footer>
  );
}
