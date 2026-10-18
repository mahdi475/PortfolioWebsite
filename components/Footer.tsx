import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTACT } from '../site';

const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="mt-8 border-t border-slate-200 px-6 py-10 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:justify-between">
        <p>© 2026 Mahdi Mosavi. {t.updated}</p>
        <div className="flex gap-6">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
