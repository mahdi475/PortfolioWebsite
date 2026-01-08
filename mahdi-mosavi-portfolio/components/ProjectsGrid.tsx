
import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../App';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'portfolio',
    title: {
      en: 'Portfolio Website',
      sv: 'Portfolio-webbplats',
    },
    description: {
      en: 'A modern portfolio built with React, Vite and glassmorphism design.',
      sv: 'En modern portfolio byggd med React, Vite och glassmorphism design.',
    },
    longDescription: {
      en: 'Personal portfolio with smooth animations, responsive layout, and social/contact integrations. Tuned for accessibility and performance.',
      sv: 'Personlig portfolio med mjuka animationer, responsiv layout och integrerade sociala länkar/kontakt. Optimerad för tillgänglighet och prestanda.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'CSS', 'WebDev'],
    features: ['Responsive design', 'Glassmorphism UI', 'Multi-language'],
    image: '/pic1.jpg',
    status: 'completed',
    year: '2025',
    github: 'https://github.com/mahdi475/PortfolioWebsite',
  },
  {
    id: 'oompaloompa',
    title: {
      en: 'Chocolate Website',
      sv: 'Chocolate Website',
    },
    description: {
      en: 'Fullstack chocolate marketplace with Supabase. Real-time catalog and auth system.',
      sv: 'Fullstack choklad-marketplace med Supabase. Realtidskatalog och auth system.',
    },
    longDescription: {
      en: 'Role-based marketplace for buyers, sellers, and admins. Uses Supabase for auth, database, storage, and real-time product catalogs.',
      sv: 'Rollbaserad marketplace för köpare, säljare och admins. Supabase för auth, databas, storage och realtidskatalog.',
    },
    tech: ['React', 'TypeScript', 'Supabase', 'Redux', 'PostgreSQL', 'WebDev'],
    features: [
      'Role-based auth (Buyer/Seller/Admin)',
      'Seller verification with uploads',
      'Real-time product catalog',
      'Checkout flow + admin dashboard',
    ],
    image: '/oompaloompa4.png',
    gallery: ['/oompaloompa1.png', '/oompaloompa2.png', '/oompaloompa3.png'],
    status: 'active',
    year: '2024-2025',
    github: 'https://github.com/mahdi475/ChocolataMVP',
  },
  {
    id: 'parkour',
    title: { en: 'Parkour Runner 3D', sv: 'Parkour Runner 3D' },
    description: {
      en: 'Challenging 3D platformer with advanced movement. Dash system and obstacles.',
      sv: 'Utmanande 3D-plattformare med avancerad rörelse. Dash-system och hinder.',
    },
    longDescription: {
      en: 'Semester-long team project with precise movement (dash, jump-buffering, coyote-time) and dynamic obstacle courses.',
      sv: 'Terminsprojekt i team med precis rörelse (dash, jump-buffer, coyote-time) och dynamiska hinderbanor.',
    },
    tech: ['Unity', 'C#', 'Shaderlab', 'HLSL', 'GameDev', '3D'],
    features: ['Advanced player controller', 'Dash & cooldown system', 'Dynamic traps and fire walls'],
    image: '/Sk%C3%A4rmbild%202025-12-11%20144413.png',
    status: 'completed',
    year: '2024',
    github: 'https://github.com/mahdi475/3DUnityGame',
  },
];

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
    [lang, t]
  );

  return (
    <section id="projects" className="py-20 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white transition-colors duration-500">
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {mapped.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl card-tint shadow-lg hover:shadow-2xl dark:shadow-blue-900/10 transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-black dark:text-white transition-colors duration-500">{p.title[lang]}</h3>
                  {p.status && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.status === 'active' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200'}`}>
                      {p.statusLabel}
                    </span>
                  )}
                </div>
                <p className="text-slate-900 dark:text-slate-300 text-sm transition-colors duration-500">{p.description[lang]}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all"
                    >
                      {t.projects.view_code}
                    </a>
                  )}
                  <button
                    className={`py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all ${p.github ? 'flex-1' : 'w-full'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(p);
                    }}
                  >
                    {t.projects.view_more}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-3xl w-full bg-white dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 card-tint"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.image} alt={selected.title[lang]} className="w-full h-64 object-cover" />
              <button
                aria-label={t.projects.close}
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-black dark:text-white">{selected.title[lang]}</h3>
                {selected.status && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${selected.status === 'active' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200'}`}>
                    {selected.status === 'active' ? t.projects.status_active : t.projects.status_completed}
                  </span>
                )}
                {selected.year && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    {t.projects.year_label}: {selected.year}
                  </span>
                )}
              </div>

              <p className="text-slate-900 dark:text-slate-200 leading-relaxed">{selected.longDescription[lang]}</p>

              {selected.features && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-300 mb-2">{t.projects.features_label}</h4>
                  <ul className="space-y-1 text-slate-900 dark:text-slate-300 text-sm list-disc list-inside">
                    {selected.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-300 mb-2">{t.projects.tech_label}</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(selected.github || selected.demo) && (
                <div className="flex flex-wrap gap-3">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-slate-900 dark:bg-blue-600 text-white rounded-lg text-sm font-semibold hover:opacity-90"
                    >
                      {t.projects.view_code}
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {t.projects.view_live}
                    </a>
                  )}
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
