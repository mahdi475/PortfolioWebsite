
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-900 dark:text-slate-400 text-sm gap-3">
        <p>© 2025 Mahdi Mosavi. {t.footer.rights}</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="https://www.linkedin.com/in/mahdi-mousavi-802690229/" className="hover:text-blue-600" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/mahdi475" className="hover:text-blue-600" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:mahdimousavi8909@icloud.com" className="hover:text-blue-600">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
