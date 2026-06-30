
import React, { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

const Header: React.FC = () => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-card sticky top-0 z-50 w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Mahdi Mosavi
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">{t.header.home}</a>
          <a href="#madrid" className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">{t.header.madrid}</a>
          <a href="#projects" className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">{t.header.projects}</a>
          <a href="#experience" className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">{t.header.experience}</a>
          <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">{t.header.contact}</a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'sv' : 'en')}
            className="px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {lang === 'en' ? 'SV' : 'EN'}
          </button>
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={() => setLang(lang === 'en' ? 'sv' : 'en')}
            className="px-2 py-1 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-100"
          >
            {lang === 'en' ? 'SV' : 'EN'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-slate-900 dark:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-panel absolute left-0 top-full flex w-full flex-col items-center space-y-4 border-t border-slate-200 bg-white px-4 py-6 text-slate-900 shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:text-white md:hidden">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            {t.header.home}
          </a>
          <a
            href="#madrid"
            onClick={() => setIsMenuOpen(false)}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            {t.header.madrid}
          </a>
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            {t.header.projects}
          </a>
          <a
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            {t.header.experience}
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            {t.header.contact}
          </a>
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="w-11/12 text-center py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          >
            Theme: {theme === 'light' ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
