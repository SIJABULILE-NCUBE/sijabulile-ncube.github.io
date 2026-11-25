import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import { useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, Pause, Play, Trophy, X } from 'lucide-react';
import { deckFor, type Deck, type Slide } from '../data/slides';
import { GitHubIcon } from './ui';

const AUTOPLAY_MS = 4000;
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Gold "View slides" button that opens the project's deck. Renders nothing for projects without one. */
export function SlidesButton({ id, className = '' }: { id: string; className?: string }) {
  const deck = deckFor(id);
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  if (!deck) return null;

  return (
    <>
      <button
        ref={button}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`glow-gold inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 ${className}`}
      >
        <Play className="size-3.5 fill-current" aria-hidden="true" />
        View slides
        <span className="sr-only">: {deck.name}</span>
      </button>
      {open &&
        createPortal(
          <Lightbox
            deck={deck}
            onClose={() => {
              setOpen(false);
              // Return focus to the button that opened the slides.
              requestAnimationFrame(() => button.current?.focus());
            }}
          />,
          document.body,
        )}
    </>
  );
}

function Lightbox({ deck, onClose }: { deck: Deck; onClose: () => void }) {
  const reduce = useReducedMotion();
  const total = deck.slides.length;
  const [index, setIndex] = useState(0);
  // Autoplay starts on, unless the visitor asked for less motion.
  const [playing, setPlaying] = useState(!reduce);
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((n: number) => setIndex(((n % total) + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Autoplay: a fresh timer per slide, so manual navigation always gets the full 4 seconds.
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [playing, index, next]);

  // Lock page scroll and focus the close button while open.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  // Keyboard: arrows to move, Esc to close, Tab kept inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Tab' && dialog.current) {
        const items = [...dialog.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => !el.closest('[inert]'));
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || !dialog.current.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (active === last || !dialog.current.contains(active))) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [next, prev, onClose]);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 45) return;
    if (dx < 0) next();
    else prev();
  };

  const ctrl =
    'inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-100 transition hover:border-gold-400/60 hover:text-gold-200';

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={`${deck.name} slides`}
      className="fixed inset-0 z-[80] flex flex-col bg-navy-950/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="truncate font-display text-lg font-semibold text-white">
          {deck.name} <span className="text-gold-300">slides</span>
        </p>
        <button ref={closeBtn} type="button" onClick={onClose} className={ctrl} aria-label="Close slides">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center px-3 sm:px-6" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div
          className="relative aspect-video w-full max-w-[min(100%,calc((100dvh-9rem)*16/9))] overflow-hidden rounded-2xl border border-gold-400/25 bg-navy-850 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] [container-type:inline-size]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
        >
          {deck.slides.map((s, n) => (
            <div
              key={n}
              role="group"
              aria-roledescription="slide"
              aria-label={`${n + 1} of ${total}`}
              aria-hidden={n !== index}
              inert={n !== index}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${n === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <SlideView slide={s} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button type="button" onClick={prev} className={ctrl} aria-label="Previous slide">
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-1">
          {deck.slides.map((_, n) => (
            <button
              key={n}
              type="button"
              onClick={() => go(n)}
              aria-label={`Go to slide ${n + 1}`}
              aria-current={n === index}
              className="flex h-8 items-center px-0.5"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${n === index ? 'w-6 bg-gold-300' : 'w-1.5 bg-white/35 hover:bg-white/60'}`} />
            </button>
          ))}
        </div>
        <span className="min-w-12 text-center text-sm font-medium text-slate-300 tabular-nums" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Slide </span>
          {index + 1} <span aria-hidden="true">/</span>
          <span className="sr-only">of</span> {total}
        </span>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className={ctrl}
          aria-label={playing ? 'Pause autoplay' : 'Start autoplay'}
          aria-pressed={!playing}
        >
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        </button>
        <button type="button" onClick={next} className={ctrl} aria-label="Next slide">
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* Slide layouts. Sizes use container units (cqw) so every slide scales like a real 16:9 presentation. */

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-[2.2cqw] flex items-center gap-[1.5cqw] text-[max(9px,1.5cqw)] font-semibold tracking-[0.25em] text-emerald-300 uppercase">
      <span aria-hidden="true" className="h-px w-[5cqw] bg-gradient-to-r from-emerald-400 to-gold-400" />
      {children}
    </p>
  );
}

function Frame({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden px-[7cqw] py-[5cqw]">
      <div aria-hidden="true" className="absolute -top-[20cqw] -right-[15cqw] size-[50cqw] rounded-full bg-[radial-gradient(circle,rgb(227_182_91/0.14),transparent_65%)]" />
      <div aria-hidden="true" className="absolute -bottom-[25cqw] -left-[15cqw] size-[55cqw] rounded-full bg-[radial-gradient(circle,rgb(16_185_129/0.12),transparent_65%)]" />
      <div className={`relative ${center ? 'text-center' : ''}`}>{children}</div>
    </div>
  );
}

function SlideView({ slide: s }: { slide: Slide }) {
  switch (s.kind) {
    case 'title':
      return (
        <Frame>
          <div className="mb-[3cqw] flex flex-wrap gap-[1.2cqw]">
            {s.award && (
              <span className="inline-flex items-center gap-[0.8cqw] rounded-full bg-gold-400 px-[1.8cqw] py-[0.6cqw] text-[max(9px,1.6cqw)] font-bold text-navy-950">
                <Trophy className="size-[max(10px,1.8cqw)]" aria-hidden="true" />
                {s.award}
              </span>
            )}
            {s.label && (
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-[1.8cqw] py-[0.6cqw] text-[max(9px,1.6cqw)] font-semibold text-emerald-300">
                {s.label}
              </span>
            )}
          </div>
          <h2 className="font-display text-[max(26px,7.5cqw)] leading-[1.02] font-semibold text-white">{s.name}</h2>
          <p className="mt-[2.5cqw] max-w-[75cqw] font-display text-[max(13px,2.8cqw)] leading-snug text-gold-200 italic">{s.pitch}</p>
        </Frame>
      );
    case 'problem':
      return (
        <Frame>
          <Kicker>Problem</Kicker>
          <p className="max-w-[80cqw] font-display text-[max(13px,3.4cqw)] leading-snug text-white">{s.text}</p>
        </Frame>
      );
    case 'solution':
      return (
        <Frame>
          <Kicker>Solution</Kicker>
          <ul className="grid grid-cols-2 gap-[1.8cqw]">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-[1.5cqw] rounded-[1.5cqw] border border-white/10 bg-white/[0.04] p-[2cqw] text-[max(11px,2.2cqw)] leading-snug text-slate-100">
                <span aria-hidden="true" className="mt-[0.7cqw] size-[max(6px,1cqw)] shrink-0 rounded-full bg-gold-400" />
                {f}
              </li>
            ))}
          </ul>
        </Frame>
      );
    case 'screenshot':
      return (
        <div className="flex h-full items-center justify-center bg-navy-950 p-[2.5cqw]">
          <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="max-h-full max-w-full rounded-[1.2cqw] border border-white/10 object-contain" />
        </div>
      );
    case 'stack':
      return (
        <Frame>
          <Kicker>Built with</Kicker>
          <ul className="flex flex-wrap gap-[1.4cqw]">
            {s.items.map((t) => (
              <li key={t} className="rounded-full border border-gold-400/35 bg-gold-400/10 px-[2.2cqw] py-[1cqw] text-[max(11px,2.3cqw)] font-medium text-gold-200">
                {t}
              </li>
            ))}
          </ul>
        </Frame>
      );
    case 'end': {
      const big = 'inline-flex items-center gap-[1.2cqw] rounded-full px-[4cqw] py-[1.8cqw] text-[max(13px,2.6cqw)] font-semibold transition';
      return (
        <Frame center>
          <h2 className="font-display text-[max(22px,5.5cqw)] leading-tight font-semibold text-white">
            See <span className="text-gradient-gold italic">{s.name}</span>
          </h2>
          <div className="mt-[4cqw] flex flex-wrap justify-center gap-[2cqw]">
            {s.live && (
              <a href={s.live} target="_blank" rel="noopener noreferrer" className={`${big} glow-gold bg-emerald-400 text-navy-950 hover:bg-emerald-300`}>
                Live <ArrowUpRight className="size-[max(14px,2.6cqw)]" aria-hidden="true" />
                <span className="sr-only">: {s.name} (opens in a new tab)</span>
              </a>
            )}
            {s.github && (
              <a href={s.github} target="_blank" rel="noopener noreferrer" className={`${big} border border-white/20 text-slate-100 hover:border-gold-400/60 hover:bg-white/5`}>
                <GitHubIcon className="size-[max(14px,2.6cqw)]" /> GitHub
                <span className="sr-only">: {s.name} repository (opens in a new tab)</span>
              </a>
            )}
            {s.githubLabel && (
              <span className={`${big} cursor-default border border-white/10 text-slate-300`}>
                <Lock className="size-[max(14px,2.6cqw)]" aria-hidden="true" /> {s.githubLabel}
              </span>
            )}
          </div>
        </Frame>
      );
    }
  }
}
