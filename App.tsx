
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResumeViewer from './components/ResumeViewer';
import About from './components/About';
import MadridInternship from './components/MadridInternship';
import ProjectsGrid from './components/ProjectsGrid';
import Experience from './components/Experience';
import ForMadridCompanies from './components/ForMadridCompanies';
import LinkedInPost from './components/LinkedInPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language, Theme } from './types';
import { translations } from './translations';

export const LanguageContext = React.createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
}>({ lang: 'en', setLang: () => {}, t: translations.en });

export const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const t = useMemo(() => translations[lang], [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  if (typeof window !== 'undefined' && window.location.pathname === '/resume') {
    return <ResumeViewer />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        <div className="theme-shell min-h-screen transition-all duration-500 text-black dark:text-slate-100">
          <Header />
          <main>
            <Hero />
            <MadridInternship />
            <ProjectsGrid />
            <Experience />
            <About />
            <ForMadridCompanies />
            <LinkedInPost />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
