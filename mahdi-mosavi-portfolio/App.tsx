
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
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
  const [lang, setLang] = useState<Language>('sv');
  const [theme, setTheme] = useState<Theme>('dark');

  const t = useMemo(() => translations[lang], [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        <div className="theme-shell min-h-screen transition-all duration-500 text-black dark:text-slate-100">
          <Header />
          <main>
            <Hero />
            <ProjectsGrid />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
