import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../App';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'chocolata',
    title: {
      en: 'Chocolata MVP',
      sv: 'Chocolata MVP',
    },
    description: {
      en: 'Startup-style marketplace/web platform with React, TypeScript and Supabase.',
      sv: 'Startup-liknande marketplace/webbplattform med React, TypeScript och Supabase.',
    },
    longDescription: {
      en:
        'A marketplace MVP designed around real seller, buyer and admin flows. The platform uses React and TypeScript on the frontend, Supabase for auth/database/storage, and role-based flows for product management, verification, catalog browsing and admin oversight.',
      sv:
        'En marketplace-MVP byggd kring riktiga flöden för säljare, köpare och admin. Plattformen använder React och TypeScript i frontend, Supabase för auth/databas/storage samt rollbaserade flöden för produktadministration, verifiering, katalog och admin-översikt.',
    },
    tech: ['React', 'TypeScript', 'Supabase', 'Auth', 'SQL', 'Marketplace'],
    features: [
      'Seller, buyer and admin flows',
      'Authentication and role-based access',
      'Supabase database and storage',
      'Marketplace product/catalog structure',
    ],
    image: '/oompaloompa4.png',
    gallery: ['/oompaloompa1.png', '/oompaloompa2.png', '/oompaloompa3.png'],
    status: 'active',
    year: '2024-2026',
    links: [
      {
        label: 'Live catalog',
        url: 'https://chocolata-mvp-ksrb.vercel.app/catalog',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/mahdi475/ChocolataMVP',
      },
    ],
  },
  {
    id: 'telegram-job-mail-bot',
    title: {
      en: 'Telegram Job Mail Bot',
      sv: 'Telegram Job Mail Bot',
    },
    description: {
      en: 'AI-assisted email monitoring bot that sends Telegram alerts for interview and job-related emails.',
      sv: 'AI-assisterad mailbot som skickar Telegram-notiser för intervju- och jobbrelevanta mail.',
    },
    longDescription: {
      en:
        'A practical automation project for job searching. The bot monitors incoming email, looks for interview/recruiter/job signals, and sends Telegram notifications so I do not have to manually check 100 emails one by one every day.',
      sv:
        'Ett praktiskt automation-projekt för jobbsökning. Botten bevakar inkommande mail, letar efter intervju-, rekryterar- och jobbsignaler och skickar Telegram-notiser så att jag inte behöver gå igenom 100 mail manuellt varje dag.',
    },
    tech: ['AI', 'Telegram Bot', 'Email Monitoring', 'Automation', 'Notifications'],
    features: [
      'Monitors job-related email',
      'Detects interview and recruiter signals',
      'Sends Telegram notifications',
      'Reduces manual inbox checking',
    ],
    status: 'active',
    year: '2026',
    github: 'https://github.com/mahdi475/telegram-job-mail-bot',
  },
  {
    id: 'tam400-mpg-prediction',
    title: {
      en: 'TAM400 AI/ML Project - MPG Prediction',
      sv: 'TAM400 AI/ML Project - MPG Prediction',
    },
    description: {
      en: 'Machine learning regression projects with Python, pandas and scikit-learn.',
      sv: 'Machine learning-regressionsprojekt med Python, pandas och scikit-learn.',
    },
    longDescription: {
      en:
        'Structured AI/ML coursework focused on vehicle efficiency and MPG prediction. The work includes data cleaning, preprocessing, train/test workflow, regression modeling and pipeline thinking with Python, pandas and scikit-learn.',
      sv:
        'Strukturerade AI/ML-kursprojekt med fokus på fordons-effektivitet och MPG-prediktion. Arbetet innehåller datarensning, preprocessing, train/test-flöde, regressionsmodellering och pipeline-tänk med Python, pandas och scikit-learn.',
    },
    tech: ['Python', 'pandas', 'scikit-learn', 'Regression', 'Preprocessing'],
    features: [
      'Data preprocessing pipeline',
      'Regression model training',
      'Feature handling and evaluation',
      'AI/ML project documentation',
    ],
    status: 'completed',
    year: '2025',
    links: [
      {
        label: 'Vehicle efficiency model',
        url: 'https://github.com/mahdi475/Mahdi-Firat-vehical-efficiency-ai-model',
      },
      {
        label: 'ML lab course',
        url: 'https://github.com/mahdi475/ml-lab-course',
      },
    ],
  },
  {
    id: 'uganda-stars-on-rise',
    title: {
      en: 'Uganda Stars On Rise Website',
      sv: 'Uganda Stars On Rise Website',
    },
    description: {
      en: 'Free website for a football team in Uganda that needs visibility, financial help and support.',
      sv: 'Gratis webbplats för ett fotbollslag i Uganda som behöver synlighet, ekonomisk hjälp och stöd.',
    },
    longDescription: {
      en:
        'A community-focused website created through Lovable for a football team in Uganda. The goal was to help them look more professional online, share their story and make it easier for people to support them financially or through contacts.',
      sv:
        'En samhällsfokuserad webbplats skapad genom Lovable för ett fotbollslag i Uganda. Målet var att hjälpa dem se mer professionella ut online, berätta sin historia och göra det enklare för människor att stötta ekonomiskt eller genom kontakter.',
    },
    tech: ['Lovable', 'Web Design', 'React', 'Community Support'],
    features: [
      'Built for a real team/community need',
      'Clear public-facing website',
      'Support and donation-oriented messaging',
      'Fast no-cost delivery with Lovable',
    ],
    status: 'completed',
    year: '2026',
    links: [
      {
        label: 'Live website',
        url: 'https://ugandafootballacademy.lovable.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/mahdi475/ugandastarsonrise',
      },
    ],
  },
];

const projectVisualClasses = [
  'from-blue-600 to-indigo-700',
  'from-slate-800 to-blue-800',
  'from-emerald-600 to-sky-700',
  'from-amber-500 to-orange-700',
];

const getProjectLinks = (project: Project, fallbackLabel: string) => {
  if (project.links?.length) return project.links;
  if (project.github) return [{ label: fallbackLabel, url: project.github }];
  if (project.demo) return [{ label: 'Open Demo', url: project.demo }];

  return [];
};

const ProjectVisual: React.FC<{ project: Project; index: number; lang: 'en' | 'sv' }> = ({
  project,
  index,
  lang,
}) => (
  <div className={`aspect-video bg-gradient-to-br ${projectVisualClasses[index % projectVisualClasses.length]} p-5 text-white`}>
    <div className="flex h-full flex-col justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">Project</p>
        <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white">{project.title[lang]}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsGrid: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const [selected, setSelected] = useState<Project | null>(null);

  const mapped = useMemo(
    () =>
      projects.map((p) => ({
        ...p,
        statusLabel:
          p.status === 'active'
            ? t.projects.status_active
            : p.status === 'completed'
              ? t.projects.status_completed
              : '',
      })),
    [t]
  );

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 transition-colors duration-500">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 transition-colors duration-500 dark:text-white">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mapped.map((p, index) => {
            const links = getProjectLinks(p, t.projects.view_code);

            return (
              <article
                key={p.id}
                className="shader-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
                onClick={() => setSelected(p)}
              >
                <div className="overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ProjectVisual project={p} index={index} lang={lang} />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-950 transition-colors duration-500 dark:text-white">
                      {p.title[lang]}
                    </h3>
                    {p.status && (
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${p.status === 'active' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200'}`}>
                        {p.statusLabel}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700 transition-colors duration-500 dark:text-slate-300">
                    {p.description[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((tag) => (
                      <span key={tag} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 transition-colors duration-500 dark:bg-blue-950/50 dark:text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="min-w-32 flex-1 rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-bold text-slate-900 transition-all hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-900"
                      >
                        {link.label}
                      </a>
                    ))}
                    <button
                      className="min-w-32 flex-1 rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(p);
                      }}
                    >
                      {t.projects.view_more}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selected.image ? (
                <img src={selected.image} alt={selected.title[lang]} className="h-64 w-full object-cover" />
              ) : (
                <ProjectVisual project={selected} index={projects.findIndex((p) => p.id === selected.id)} lang={lang} />
              )}
              <button
                aria-label={t.projects.close}
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-xl font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white dark:hover:bg-slate-800"
              >
                x
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{selected.title[lang]}</h3>
                {selected.year && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
                    {t.projects.year_label}: {selected.year}
                  </span>
                )}
              </div>

              <p className="leading-relaxed text-slate-700 dark:text-slate-200">{selected.longDescription[lang]}</p>

              {selected.features && (
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                    {t.projects.features_label}
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    {selected.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  {t.projects.tech_label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {getProjectLinks(selected, t.projects.view_code).length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {getProjectLinks(selected, t.projects.view_code).map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
