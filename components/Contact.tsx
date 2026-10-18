import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTACT } from '../site';
import ExternalLink from './ExternalLink';

const Contact: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact">
      <h2>{t.contact}</h2>
      <ul className="contact-list">
        <li>
          {t.email}: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </li>
        <li>
          {t.phone}: <a href={CONTACT.phoneLink}>{CONTACT.phone}</a>
        </li>
        <li>
          GitHub: <ExternalLink href={CONTACT.github}>github.com/mahdi475</ExternalLink>
        </li>
        <li>
          LinkedIn: <ExternalLink href={CONTACT.linkedin}>linkedin.com/in/mahdi-mosavi-802690229</ExternalLink>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
