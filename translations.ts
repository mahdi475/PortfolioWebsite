import { TranslationSet } from './types';

const linkedInPost = `This autumn I'm moving from Sweden to Madrid

I'm going there as an exchange student, but I'm also hoping to find a small place in the tech world there, even if it starts with learning, helping out and being useful wherever I can.

I'm a Computer Engineering student and I'll be studying at Universidad Carlos III de Madrid in Leganés during my exchange semester.

At the same time, I'm looking for an internship in Madrid something related to software, web development, AI, frontend, full-stack, or just a good tech team where I can learn and contribute.

If it works with the university setup, I would love to do it through an internship agreement as part of my studies.

Lately I've been building projects with React, TypeScript, Supabase, C#, Python and some AI/automation tools.

They are not huge projects, but they are real things I've learned a lot from. I know I still have a lot to learn, and that's exactly why I would love to use this Madrid semester to grow, work with good people and learn from real engineers.

My portfolio:

https://mahdiportfolio.com

If you know any company, recruiter, developer, founder, or just someone in Madrid who might know a place where I could fit in, I would be really grateful for a comment, share or message.

Even a small lead could mean a lot.

Madrid, see you soon 🤝

#Madrid #Internship #SoftwareEngineering #WebDevelopment #React #TypeScript #AI #UC3M #ComputerEngineering`;

export const translations: Record<'en' | 'sv', TranslationSet> = {
  en: {
    header: {
      home: 'Home',
      madrid: 'Madrid',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Madrid Internship 2026',
      name: 'Mahdi Mosavi',
      intro: 'Computer Engineering student from Sweden, moving to Madrid for exchange studies at UC3M Leganés.',
      internship:
        'Looking for a Software / Web / AI internship in Madrid where a university agreement may be possible.',
      cta_cv: 'Download CV',
      cta_projects: 'View Projects',
      cta_contact: 'Contact Me',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    madrid: {
      title: 'Madrid Internship 2026',
      items: [
        { label: 'Availability', value: 'Madrid / Leganés, Autumn 2026' },
        {
          label: 'Looking for',
          value: 'Software Engineering Internship, Frontend, Full-stack, AI/Web, IT/Tech',
        },
        {
          label: 'University setup',
          value:
            'Exchange student at Universidad Carlos III de Madrid. Open to curricular or academic internship agreement if approved by UC3M and University West.',
        },
        { label: 'Languages', value: 'English, Swedish, Persian/Farsi, basic Spanish' },
        { label: 'Tech', value: 'React, TypeScript, JavaScript, C#, Python, Supabase, SQL, Git, Linux' },
      ],
    },
    about: {
      title: 'About Mahdi',
      text:
        'I like building useful products with clean frontends, practical backends, and enough automation to make real workflows easier. My strongest direction right now is web, software engineering, and AI-enabled products.',
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
    forMadrid: {
      title: 'For Madrid Companies',
      text:
        'I am already planning my exchange semester in Madrid and I am especially interested in teams that can host students through a university internship agreement. I am happy to handle the academic process together with the university and provide all required documents.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Relevant Experience',
    },
    linkedinPost: {
      title: 'Madrid Outreach Post',
      intro: '',
      body: linkedInPost,
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
      madrid: 'Madrid',
      projects: 'Projekt',
      experience: 'Erfarenhet',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Madrid Internship 2026',
      name: 'Mahdi Mosavi',
      intro:
        'Datateknikstudent från Sverige som flyttar till Madrid för utbytesstudier på UC3M Leganés.',
      internship:
        'Söker Software / Web / AI internship i Madrid där ett universitetsavtal kan vara möjligt.',
      cta_cv: 'Ladda ner CV',
      cta_projects: 'Visa projekt',
      cta_contact: 'Kontakta mig',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    madrid: {
      title: 'Madrid Internship 2026',
      items: [
        { label: 'Tillgänglighet', value: 'Madrid / Leganés, hösten 2026' },
        {
          label: 'Söker',
          value: 'Software Engineering Internship, Frontend, Full-stack, AI/Web, IT/Tech',
        },
        {
          label: 'Universitetsupplägg',
          value:
            'Utbytesstudent på Universidad Carlos III de Madrid. Öppen för curricular eller academic internship agreement om det godkänns av UC3M och Högskolan Väst.',
        },
        { label: 'Språk', value: 'Engelska, svenska, persiska/farsi, grundläggande spanska' },
        { label: 'Tech', value: 'React, TypeScript, JavaScript, C#, Python, Supabase, SQL, Git, Linux' },
      ],
    },
    about: {
      title: 'Om Mahdi',
      text:
        'Jag gillar att bygga användbara produkter med tydliga gränssnitt, praktiska backend-lösningar och automation som gör riktiga arbetsflöden enklare. Min starkaste riktning just nu är webbutveckling, mjukvaruutveckling och AI-drivna produkter.',
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
    forMadrid: {
      title: 'För företag i Madrid',
      text:
        'I am already planning my exchange semester in Madrid and I am especially interested in teams that can host students through a university internship agreement. I am happy to handle the academic process together with the university and provide all required documents.',
    },
    experience: {
      eyebrow: 'Erfarenhet',
      title: 'Relevant erfarenhet',
    },
    linkedinPost: {
      title: 'Madrid outreach-post',
      intro: '',
      body: linkedInPost,
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
