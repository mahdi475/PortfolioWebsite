import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const buttonBase =
  'inline-flex min-h-12 w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-black tracking-tight transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:w-auto';

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const heroStats = [
    { value: '4+', label: 'real builds' },
    { value: 'Madrid', label: 'Autumn 2026' },
    { value: 'AI/Web', label: 'internship focus' },
  ];

  const actions = [
    {
      label: t.hero.cta_projects,
      href: '#projects',
      className: 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700',
    },
    {
      label: t.hero.cta_cv,
      href: '/resume.pdf#view=Fit',
      external: true,
      className:
        'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800',
    },
    {
      label: t.hero.cta_contact,
      href: '#contact',
      className:
        'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800',
    },
    {
      label: t.hero.cta_linkedin,
      href: 'https://linkedin.com/in/mahdi-mosavi-802690229',
      external: true,
      className:
        'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800',
    },
    {
      label: t.hero.cta_github,
      href: 'https://github.com/mahdi475',
      external: true,
      className:
        'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800',
    },
  ];

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden px-6 pb-12 pt-14 transition-colors duration-500 md:pb-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-90">
        <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-700/20" />
        <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-indigo-200/70 blur-3xl dark:bg-indigo-700/20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="font-mono-tech inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
            {t.hero.name}
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl">
            <p>{t.hero.intro}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">{t.hero.internship}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:gap-2">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                download={action.download}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
                className={`${buttonBase} ${action.className}`}
              >
                {action.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 sm:p-4">
                <p className="font-display text-lg font-extrabold text-slate-950 dark:text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="shader-card rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-black/30 md:p-4">
          <div className="shader-sheen overflow-hidden rounded-2xl">
            <img src="/profile-photo.png" alt="Mahdi Mosavi" className="aspect-[5/6] w-full object-cover object-center" />
          </div>

          <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-900">
              <p className="font-display font-extrabold text-slate-950 dark:text-white">Computer Engineering</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">University West - UC3M Leganes</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/40">
              <p className="font-display font-extrabold text-blue-800 dark:text-blue-200">Internship focus</p>
              <p className="mt-1 text-slate-700 dark:text-slate-300">Software, Web, AI, Full-stack</p>
            </div>
          </div>

          <div className="mt-3 hidden rounded-2xl border border-slate-200 bg-slate-950 p-4 text-left shadow-inner dark:border-slate-800 sm:block">
            <p className="font-mono-tech text-xs text-blue-300">mahdi.system.check()</p>
            <p className="font-mono-tech mt-2 text-sm text-slate-100">status: available_for_madrid_internship</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
