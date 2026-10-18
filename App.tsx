import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';
import { Language } from './types';
import { translations } from './translations';

export const LanguageContext = React.createContext<{
  lang: Language;
  t: typeof translations.en;
}>({ lang: 'en', t: translations.en });

// English by default. The Swedish version is at /?lang=sv, so it can be shared as a link.
const lang: Language = new URLSearchParams(window.location.search).get('lang') === 'sv' ? 'sv' : 'en';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, []);

  if (window.location.pathname === '/resume') {
    return <ResumeViewer />;
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      <div className="page">
        <Hero />
        <main>
          <Projects />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
