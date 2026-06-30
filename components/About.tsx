
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const About: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section className="px-6 py-16 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card rounded-2xl p-7 shadow-sm transition-colors duration-500 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            {lang === 'sv' ? 'Kort om mig' : 'Quick profile'}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 transition-colors duration-500 dark:text-white">
            {t.about.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700 transition-colors duration-500 dark:text-slate-300">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
