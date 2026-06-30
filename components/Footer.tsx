import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-700 dark:text-slate-400 md:flex-row">
        <p>Copyright 2026 Mahdi Mosavi. {t.footer.rights}</p>
        <div className="mt-2 flex space-x-6 md:mt-0">
          <a
            href="https://linkedin.com/in/mahdi-mosavi-802690229"
            className="hover:text-blue-600 dark:hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mahdi475"
            className="hover:text-blue-600 dark:hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:mahdi.mosavi.work@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
