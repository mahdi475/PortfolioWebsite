import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const experience = {
  title: {
    en: 'Crew 4 You - IT & Web Coordinator',
    sv: 'Crew 4 You - IT & Web Coordinator',
  },
  period: '2024-2025',
  description: {
    en:
      'Helped with website planning, internal app planning, IT coordination, Google/business profiles and process improvement for a real service business.',
    sv:
      'Hjälpte med webbplatsplanering, intern app-planering, IT-koordinering, Google/business-profiler och processförbättring för ett riktigt tjänsteföretag.',
  },
  points: {
    en: [
      'Website planning and content structure',
      'Internal app and workflow planning',
      'IT coordination and Google/business profile support',
      'Process improvement with non-technical stakeholders',
    ],
    sv: [
      'Webbplatsplanering och innehållsstruktur',
      'Planering av intern app och arbetsflöden',
      'IT-koordinering och stöd med Google/business-profiler',
      'Processförbättring tillsammans med icke-tekniska personer',
    ],
  },
  tech: ['Web Planning', 'IT Coordination', 'Google Business', 'Process Improvement'],
};

const Experience: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-16 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            {t.experience.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            {t.experience.title}
          </h2>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                {experience.title[lang]}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {experience.description[lang]}
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
              {experience.period}
            </span>
          </div>

          <ul className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
            {experience.points[lang].map((point) => (
              <li key={point} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tech.map((tag) => (
              <span key={tag} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
