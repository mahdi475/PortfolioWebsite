import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../App';

const bullets = {
  en: [
    'Frontend that feels clean and recruiter-friendly',
    'Automation projects that solve boring real problems',
    'AI/ML coursework with Python pipelines and regression',
  ],
  sv: [
    'Frontend som kanns tydlig och rekryterarvanlig',
    'Automation som loser trakiga riktiga problem',
    'AI/ML-kursprojekt med Python pipelines och regression',
  ],
};

const imageTiles = [
  {
    src: '/profile-photo.png',
    label: { en: 'Computer Engineering profile', sv: 'Datateknikprofil' },
    className: 'md:row-span-2',
  },
  {
    src: '/oompaloompa4.png',
    label: { en: 'Marketplace UI', sv: 'Marketplace UI' },
    className: '',
  },
  {
    src: '/Skärmbild 2025-12-11 144413.png',
    label: { en: 'Unity / systems work', sv: 'Unity / systemarbete' },
    className: '',
  },
];

const TechShowcase: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // The poster frame keeps the section useful if a browser blocks autoplay.
    });
  }, []);

  return (
    <section id="systems" className="px-6 py-16 transition-colors duration-500 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tech text-xs font-bold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
              {lang === 'sv' ? 'Systemkansla' : 'System feel'}
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {lang === 'sv' ? 'Mer IT-kansla: kod, produkt och leverans i samma vy.' : 'More IT character: code, product and delivery in one view.'}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {lang === 'sv'
              ? 'Videon ar en snabb loop, inte en grej man maste vanta pa. Den ger direkt teknisk kansla och sidan funkar aven om autoplay blockas.'
              : 'The video is a fast ambient loop, not something visitors need to wait for. It gives instant technical energy and still looks good if autoplay is blocked.'}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="video-shell shader-card overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-blue-950/20 dark:border-slate-800">
            <video
              ref={videoRef}
              className="aspect-[120/68] w-full object-cover"
              src="/tech-loop.mp4"
              poster="/tech-loop-poster.png"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Animated technical dashboard loop"
            />
            <div className="border-t border-white/10 bg-slate-950/95 p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono-tech text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                    Portfolio signal
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-extrabold text-white">
                    {lang === 'sv' ? 'Praktisk systembyggare' : 'Practical system builder'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TS', 'AI', 'SQL'].map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-display text-xl font-extrabold text-slate-950 dark:text-white">
                {lang === 'sv' ? 'Vad arbetsgivare ser snabbt' : 'What employers see fast'}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {bullets[lang].map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {imageTiles.map((tile) => (
                <figure
                  key={tile.src}
                  className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 ${tile.className}`}
                >
                  <img
                    src={tile.src}
                    alt={tile.label[lang]}
                    className="h-44 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {tile.label[lang]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
