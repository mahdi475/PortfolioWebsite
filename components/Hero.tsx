
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-6 transition-colors duration-500">
      {/* Dynamic Background Glow for Dark Mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-0 dark:opacity-20 transition-opacity duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Pic */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl mx-auto transition-colors duration-500">
            <img
              src="/pic1.jpg"
              alt="Mahdi Mosavi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 right-4 bg-blue-600 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 transition-colors duration-500"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2 transition-colors duration-500">
            {t.hero.greeting}
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-sm tracking-widest text-slate-900 dark:text-slate-300 font-semibold uppercase mt-4 transition-colors duration-500">
            {t.hero.title}
          </p>
          <p className="text-base text-slate-900 dark:text-slate-300 mt-2 transition-colors duration-500">
            {t.hero.tagline}
          </p>
          
          <div className="flex justify-center space-x-6 py-6">
            <a href="https://www.linkedin.com/in/mahdi-mousavi-802690229/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/mahdi475" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.instagram.com/mahdi.mouusavi4/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm10 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-slate-200 py-4 transition-colors duration-500">
            {t.hero.subtitle}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-64 text-center py-4 px-8 bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
            >
              {t.hero.cta_cv}
            </a>
            <a
              href="#projects"
              className="w-full sm:w-64 text-center py-4 px-8 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 font-bold rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all hover:scale-105 active:scale-95"
            >
              {t.hero.cta_projects}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-64 text-center py-4 px-8 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-full shadow-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              {t.hero.cta_contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
