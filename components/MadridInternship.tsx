import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const MadridInternship: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="madrid" className="scroll-mt-24 px-6 pb-16 transition-colors duration-500">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card overflow-hidden rounded-2xl shadow-sm">
          <div className="border-b border-slate-200/80 bg-white/55 px-6 py-5 dark:border-slate-800 dark:bg-slate-950/40 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Focus
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              {t.madrid.title}
            </h2>
          </div>

          <dl className="grid gap-0 divide-y divide-slate-200/80 dark:divide-slate-800 md:grid-cols-2 md:divide-x md:divide-y-0">
            {t.madrid.items.map((item) => (
              <div key={item.label} className="p-6 md:p-8">
                <dt className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-950 dark:text-slate-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default MadridInternship;
