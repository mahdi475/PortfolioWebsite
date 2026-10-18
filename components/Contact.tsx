import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTACT } from '../site';
import ExternalLink, { linkClass } from './ExternalLink';

const Contact: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">{t.contact}</h2>
        <ul className="mt-4 space-y-2 text-lg text-slate-700 dark:text-slate-300">
          <li>
            {t.email}:{' '}
            <a href={`mailto:${CONTACT.email}`} className={linkClass}>
              {CONTACT.email}
            </a>
          </li>
          <li>
            {t.phone}:{' '}
            <a href={CONTACT.phoneLink} className={linkClass}>
              {CONTACT.phone}
            </a>
          </li>
          <li>
            GitHub: <ExternalLink href={CONTACT.github}>github.com/mahdi475</ExternalLink>
          </li>
          <li>
            LinkedIn: <ExternalLink href={CONTACT.linkedin}>linkedin.com/in/mahdi-mosavi-802690229</ExternalLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
