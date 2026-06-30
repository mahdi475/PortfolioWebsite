import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const ForMadridCompanies: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="px-6 py-16 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-blue-200 bg-blue-50/80 p-7 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/30 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Madrid / Leganés
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            {t.forMadrid.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-800 dark:text-slate-200">
            {t.forMadrid.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForMadridCompanies;
