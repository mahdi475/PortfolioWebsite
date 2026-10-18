import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';
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

const readTheme = (): Theme => {
  try {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Storage can be blocked; fall back to the system setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const App: React.FC = () => {
  // English by default. /?lang=sv opens the Swedish version directly.
  const [lang, setLang] = useState<Language>(() =>
    new URLSearchParams(window.location.search).get('lang') === 'sv' ? 'sv' : 'en',
  );
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // Ignore blocked storage.
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  if (window.location.pathname === '/resume') {
    return <ResumeViewer />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <Header />
          <main>
            <Hero />
            <Projects />
            <Experience />
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
