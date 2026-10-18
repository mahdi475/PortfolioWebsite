import { Language, TranslationSet } from './types';

// Short labels. The longer texts are written in each component, in both languages.
export const translations: Record<Language, TranslationSet> = {
  en: {
    switchLanguage: 'På svenska',
    projects: 'Projects',
    experience: 'Experience',
    about: 'About me',
    contact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    updated: 'Updated October 2026.',
  },
  sv: {
    switchLanguage: 'In English',
    projects: 'Projekt',
    experience: 'Erfarenhet',
    about: 'Om mig',
    contact: 'Kontakt',
    email: 'E-post',
    phone: 'Telefon',
    updated: 'Uppdaterad oktober 2026.',
  },
};
