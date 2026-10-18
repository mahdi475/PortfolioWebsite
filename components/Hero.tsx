import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTACT } from '../site';
import ExternalLink from './ExternalLink';

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

const Hero: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  const email = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
  const cv = (
    <a href="/resume" onClick={openCv}>
      CV
    </a>
  );
  const github = <ExternalLink href={CONTACT.github}>GitHub</ExternalLink>;
  const linkedin = <ExternalLink href={CONTACT.linkedin}>LinkedIn</ExternalLink>;

  return (
    <header>
      <p className="language">
        <a href={lang === 'en' ? '/?lang=sv' : '/'} hrefLang={lang === 'en' ? 'sv' : 'en'}>
          {t.switchLanguage}
        </a>
      </p>

      <h1>Mahdi Mosavi</h1>

      <img className="photo" src="/profile-photo.png" width={870} height={1165} alt="Mahdi Mosavi" />

      {lang === 'en' ? (
        <>
          <p>
            I study computer engineering at University West in Sweden and graduate in June 2027. This autumn I'm an
            exchange student at UC3M in Madrid.
          </p>
          <p>
            I'm looking for a summer internship in 2027 or a first job after I graduate. I'm interested in software,
            web, AI and systems, and I'm open to jobs both in Sweden and abroad.
          </p>
          <p>
            Email me at {email}, or have a look at my {cv}, {github} and {linkedin}.
          </p>
        </>
      ) : (
        <>
          <p>
            Jag läser datateknik på Högskolan Väst och tar examen i juni 2027. I höst är jag utbytesstudent på UC3M i
            Madrid.
          </p>
          <p>
            Jag söker sommarpraktik 2027 eller ett första jobb efter examen. Jag är intresserad av mjukvara, webb, AI
            och system, och är öppen för jobb både i Sverige och utomlands.
          </p>
          <p>
            Mejla mig på {email}, eller kolla mitt {cv}, min {github} och min {linkedin}.
          </p>
        </>
      )}
    </header>
  );
};

export default Hero;
