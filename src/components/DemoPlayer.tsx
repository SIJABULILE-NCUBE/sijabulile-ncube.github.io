import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

type Slide = { src: string; alt: string };

const INTERVAL = 2500;

/**
 * A 16:9 "video player" that crossfades through stills (with a slow Ken Burns zoom) until it is clicked,
 * then swaps itself for the real video embed. With reduced motion the slides stay still and only change from the dots.
 */
export function DemoPlayer({
  slides,
  label,
  embed,
  title,
  part2,
}: {
  slides: Slide[];
  label: string;
  embed: string;
  title: string;
  part2: { label: string; url: string };
}) {
  const frame = useRef<HTMLDivElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);
  const inView = useInView(frame, { margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  // prev is the slide fading out, so its zoom keeps running instead of snapping back mid-fade.
  const [{ index, prev }, setSlide] = useState<{ index: number; prev: number | null }>({ index: 0, prev: null });
  const [playing, setPlaying] = useState(false);

  const go = (next: number) => setSlide((s) => (s.index === next ? s : { index: next, prev: s.index }));

  useEffect(() => {
    if (playing || reduce || !inView) return;
    const id = setInterval(() => setSlide((s) => ({ index: (s.index + 1) % slides.length, prev: s.index })), INTERVAL);
    return () => clearInterval(id);
  }, [playing, reduce, inView, slides.length]);

  // Keyboard and screen reader users land on the video once it replaces the play button.
  useEffect(() => {
    if (playing) iframe.current?.focus();
  }, [playing]);

  return (
    <div>
      <div
        ref={frame}
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-[0_18px_40px_-18px_rgb(0_0_0/0.8)]"
      >
        {playing ? (
          <iframe
            ref={iframe}
            src={embed}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <>
            {slides.map((s, n) => {
              const shown = n === index;
              const zoom = !reduce && (shown || n === prev);
              return (
                <img
                  key={s.src}
                  src={s.src}
                  alt={shown ? s.alt : ''}
                  aria-hidden={!shown}
                  width={1920}
                  height={1080}
                  loading={n === 0 ? undefined : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 size-full object-cover object-top transition-opacity duration-700 ease-out ${
                    shown ? 'opacity-100' : 'opacity-0'
                  } ${zoom ? 'kenburns' : ''}`}
                />
              );
            })}

            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-navy-950/10" />

            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl focus-visible:outline-offset-[-4px]"
              aria-label={`Play the ${title} (5 minutes)`}
            >
              <span className="play-pulse relative isolate flex size-16 items-center justify-center rounded-full bg-gold-400 text-navy-950 shadow-[0_0_40px_-4px_rgb(227_182_91/0.7)] transition-transform duration-300 group-hover:scale-110 sm:size-20">
                <Play className="ml-1 size-7 fill-current sm:size-8" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-navy-950/85 px-3.5 py-1.5 text-sm font-semibold text-white">{label}</span>
            </button>

            <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
              {slides.map((s, n) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => go(n)}
                  aria-label={`Show slide ${n + 1} of ${slides.length}`}
                  aria-current={n === index}
                  className="flex h-6 items-center px-0.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      n === index ? 'w-5 bg-gold-300' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <a
        href={part2.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-200 underline-offset-4 hover:underline"
      >
        {part2.label}
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
