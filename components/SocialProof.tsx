import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const metrics = [
  { value: '4+', label: { en: 'real projects', sv: 'riktiga projekt' } },
  { value: '2', label: { en: 'universities in path', sv: 'universitet i resan' } },
  { value: '8+', label: { en: 'core technologies', sv: 'karntekniker' } },
  { value: 'UC3M', label: { en: 'current exchange', sv: 'pågående utbyte' } },
];

const logos = ['React', 'TypeScript', 'Supabase', 'Python', 'C#', 'SQL', 'Git', 'Linux'];

const proofCards = [
  {
    title: { en: 'Startup build signal', sv: 'Startup-signal' },
    quote: {
      en: 'Chocolata is built like a real marketplace MVP: auth, catalog, seller, buyer and admin flows.',
      sv: 'Chocolata ar byggt som en riktig marketplace-MVP: auth, katalog, saljare, kopare och adminfloden.',
    },
  },
  {
    title: { en: 'Automation signal', sv: 'Automation-signal' },
    quote: {
      en: 'The Telegram job mail bot turns inbox noise into useful interview and recruiter alerts.',
      sv: 'Telegram job mail-botten gor mailbrus till anvandbara intervju- och rekryterarnotiser.',
    },
  },
  {
    title: { en: 'Community signal', sv: 'Community-signal' },
    quote: {
      en: 'The Uganda football website was shipped for a real team that needed visibility and support.',
      sv: 'Uganda-fotbollssidan byggdes for ett riktigt lag som behovde synlighet och stod.',
    },
  },
];

const SocialProof: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section id="proof" className="px-6 py-12 transition-colors duration-500 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card overflow-hidden rounded-2xl">
          <div className="grid border-b border-slate-200/70 dark:border-slate-800 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 md:p-8">
              <p className="font-mono-tech text-xs font-bold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                {lang === 'sv' ? 'Social proof' : 'Social proof'}
              </p>
              <h2 className="font-display mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {lang === 'sv' ? 'Ser ut som tech, men bevisas av riktiga byggen.' : 'Looks technical, backed by real builds.'}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {lang === 'sv'
                  ? 'En snabb credibility-yta for rekryterare: stack, siffror och konkreta signaler fran projekten.'
                  : 'A quick credibility layer for recruiters: stack, numbers and concrete signals from the projects.'}
              </p>
            </div>

            <div className="grid grid-cols-2 border-t border-slate-200/70 dark:border-slate-800 sm:grid-cols-4 lg:border-l lg:border-t-0">
              {metrics.map((metric) => (
                <div key={metric.value} className="p-5 md:p-6">
                  <p className="font-display text-3xl font-extrabold text-slate-950 dark:text-white md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {metric.label[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-slate-200/70 p-6 dark:border-slate-800 md:p-8">
            <div className="flex flex-wrap gap-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="logo-chip flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 font-mono text-xs font-black text-white dark:bg-blue-600">
                    {logo.slice(0, 2)}
                  </span>
                  <span className="text-sm font-bold">{logo}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
            {proofCards.map((card) => (
              <article key={card.title.en} className="rounded-xl bg-slate-50 p-5 dark:bg-slate-900/70">
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-950 dark:text-white">
                  {card.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  "{card.quote[lang]}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
