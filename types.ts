
export type Language = 'en' | 'sv';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  links?: Array<{
    label: string;
    url: string;
  }>;
  demo?: string;
  status?: 'active' | 'completed';
  year?: string;
  features?: string[];
  gallery?: string[];
}

export interface TranslationSet {
  header: {
    home: string;
    madrid: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    intro: string;
    internship: string;
    cta_cv: string;
    cta_projects: string;
    cta_contact?: string;
    cta_linkedin: string;
    cta_github: string;
  };
  madrid: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
  about: {
    title: string;
    text: string;
  };
  projects: {
    title: string;
    view_more: string;
    view_code: string;
    view_live: string;
    status_active: string;
    status_completed: string;
    year_label: string;
    features_label: string;
    tech_label: string;
    close: string;
  };
  forMadrid: {
    title: string;
    text: string;
  };
  experience: {
    title: string;
    eyebrow: string;
  };
  linkedinPost: {
    title: string;
    intro: string;
    body: string;
  };
  contact: {
    title: string;
    call: string;
    write: string;
    follow: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success?: string;
    error?: string;
    sending?: string;
  };
  footer: {
    rights: string;
  };
}
