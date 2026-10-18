import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer>
      <p>{t.updated}</p>
    </footer>
  );
};

export default Footer;
