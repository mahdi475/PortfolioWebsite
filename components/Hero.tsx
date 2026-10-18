import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTACT } from '../site';

// Downloads the CV and opens the on-site viewer in a new tab.
const openCv = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  const downloadLink = document.createElement('a');
  downloadLink.href = '/resume.pdf';
  downloadLink.download = 'MahdiMosaviResume.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  window.open('/resume', '_blank', 'noopener,noreferrer');
};

const button = 'inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-colors';
const primary = `${button} bg-blue-600 text-white hover:bg-blue-700`;
const secondary = `${button} border border-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800`;

const Hero: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const sv = lang === 'sv';

  return (
    <section className="px-6 pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Mahdi Mosavi</h1>

          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              {sv
                ? 'Jag läser datateknik på Högskolan Väst och tar examen i juni 2027. I höst är jag utbytesstudent på UC3M i Madrid.'
                : "I study computer engineering at University West in Sweden and graduate in June 2027. This autumn I'm an exchange student at UC3M in Madrid."}
            </p>
            <p>
              {sv
                ? 'Jag söker sommarpraktik 2027 eller ett första jobb efter examen. Jag är intresserad av mjukvara, webb, AI och system, och är öppen för jobb både i Sverige och utomlands.'
                : "I'm looking for a summer internship in 2027 or a first job after I graduate. I'm interested in software, web, AI and systems, and I'm open to jobs both in Sweden and abroad."}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={primary}>
              {sv ? 'Visa projekt' : 'View projects'}
            </a>
            <a href="/resume" onClick={openCv} className={secondary}>
              {sv ? 'Ladda ner CV' : 'Download CV'}
            </a>
            <a href={`mailto:${CONTACT.email}`} className={secondary}>
              {sv ? 'Mejla mig' : 'Email me'}
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className={secondary}>
              GitHub
            </a>
          </div>
        </div>

        <img
          src="/profile-photo.png"
          width={870}
          height={1165}
          alt="Mahdi Mosavi"
          className="w-48 rounded-2xl object-cover sm:w-56 md:w-72"
        />
      </div>
    </section>
  );
};

export default Hero;
