import { TranslationSet } from './types';

export const translations: Record<'en' | 'sv', TranslationSet> = {
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Open to opportunities',
      name: 'Mahdi Mosavi',
      intro:
        'Computer Engineering student from Sweden, currently studying as an exchange student at UC3M in Spain after studying at University West.',
      opportunity:
        'Looking for roles in Computer Engineering. My interests are broad across software, web, AI, systems and more — and I am open to opportunities anywhere.',
      cta_cv: 'Download CV',
      cta_projects: 'View Projects',
      cta_contact: 'Contact Me',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    about: {
      title: 'About Mahdi',
      text:
        'I am a Computer Engineering student with broad interests across software development, web, AI, systems and automation. I like building useful products with clean frontends, practical backends and solutions that make real workflows easier.',
    },
    projects: {
      title: 'Selected Projects',
      view_more: 'View Details',
      view_code: 'View on GitHub',
      view_live: 'Open Demo',
      status_active: 'Ongoing',
      status_completed: 'Completed',
      year_label: 'Year',
      features_label: 'Key Features',
      tech_label: 'Tech Stack',
      close: 'Close',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Relevant Experience',
    },
    contact: {
      title: 'Get In Touch',
      call: 'Call',
      write: 'Write',
      follow: 'Follow',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Your email app should open with the message ready to send.',
      error: 'Something went wrong. Please email me directly.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  sv: {
    header: {
      home: 'Hem',
      projects: 'Projekt',
      experience: 'Erfarenhet',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Öppen för möjligheter',
      name: 'Mahdi Mosavi',
      intro:
        'Datateknikstudent från Sverige som just nu studerar som utbytesstudent på UC3M i Spanien, efter studier på Högskolan Väst.',
      opportunity:
        'Söker jobb inom datateknik. Mina intressen är breda inom mjukvara, webb, AI, system och mer — och jag är öppen för möjligheter var som helst.',
      cta_cv: 'Ladda ner CV',
      cta_projects: 'Visa projekt',
      cta_contact: 'Kontakta mig',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    about: {
      title: 'Om Mahdi',
      text:
        'Jag är datateknikstudent med breda intressen inom mjukvaruutveckling, webb, AI, system och automation. Jag gillar att bygga användbara produkter med tydliga gränssnitt, praktiska backend-lösningar och lösningar som gör riktiga arbetsflöden enklare.',
    },
    projects: {
      title: 'Viktigaste projekt',
      view_more: 'Visa detaljer',
      view_code: 'Se på GitHub',
      view_live: 'Öppna demo',
      status_active: 'Pågående',
      status_completed: 'Avslutat',
      year_label: 'År',
      features_label: 'Huvudfunktioner',
      tech_label: 'Teknikstack',
      close: 'Stäng',
    },
    experience: {
      eyebrow: 'Erfarenhet',
      title: 'Relevant erfarenhet',
    },
    contact: {
      title: 'Kontakta mig',
      call: 'Ring',
      write: 'Skriv',
      follow: 'Följ',
      name: 'Namn',
      email: 'E-post',
      message: 'Meddelande',
      send: 'Skicka meddelande',
      sending: 'Skickar...',
      success: 'Din mailapp ska öppnas med meddelandet färdigt att skicka.',
      error: 'Något gick fel. Mejla mig direkt istället.',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.',
    },
  },
};
