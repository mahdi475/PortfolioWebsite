
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const About: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section className="py-20 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
            {lang === 'sv' ? 'Hej' : 'Hi'}
          </h2>
          <p className="text-lg leading-relaxed text-slate-900 dark:text-slate-300 transition-colors duration-500">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
