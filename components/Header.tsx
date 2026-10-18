import React, { useContext, useState } from 'react';
import { LanguageContext, ThemeContext } from '../App';

const Header: React.FC = () => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  const languageButton = (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'sv' : 'en')}
      aria-label={t.switchLanguage}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {lang === 'en' ? 'SV' : 'EN'}
    </button>
  );

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.toggleTheme}
      className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-extrabold tracking-tight">
          Mahdi Mosavi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          {languageButton}
          {themeButton}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {languageButton}
          {themeButton}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.toggleMenu}
            aria-expanded={menuOpen}
            className="p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 px-6 py-2 dark:border-slate-800 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-semibold text-slate-800 dark:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
