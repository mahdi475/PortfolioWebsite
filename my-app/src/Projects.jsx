import { Routes, Route, Link } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import { projectsData } from './projectsData'
import './Projects.css'

const projects = [
  {
    id: "project1",
    name: "Portfolio Website",
    desc: "En modern portfolio byggd med React, Vite och avancerad CSS.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
    details: "Detta projekt visar min personliga portfolio med animationer, responsiv design och integration av sociala medier. All kod är optimerad för prestanda och tillgänglighet.",
    img: "/pic1.jpg",
    features: ["Responsiv design", "Smooth animationer", "Glassmorphism UI", "Contact form integration"],
    status: "Avslutad",
    year: "2025"
  },
  {
    id: "project2",
    name: "Weather App",
    desc: "En väderapplikation med API-integration och snygga effekter.",
    tech: ["JavaScript", "CSS", "API", "HTML"],
    details: "Appen hämtar väderdata från ett externt API och visar det med interaktiva grafer och animationer. Designen är mörk och lyxig, med smooth transitions.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    features: ["Real-time väderdata", "Interaktiva grafer", "Geolocation", "5-dagars prognos"],
    status: "Avslutad",
    year: "2024"
  },
  {
    id: "project2b",
    name: "Oompaloompa (MVP Website)",
    desc: "En fullstack choklad-marketplace med rollbaserad access för köpare, säljare och admins.",
    tech: ["React", "TypeScript", "Supabase", "Redux Toolkit", "PostgreSQL"],
    details: "Ett ambitiöst grupprojekt där vi bygger en komplett e-handelsplattform för chokladprodukter från hela världen - tänk Facebook Marketplace fast för choklad. Istället för att gå till ett specifikt chokladföretag samlar vi alla säljare på en plats.\n\nPlattformen har tre separata flöden: Buyers kan browsa produkter och checka ut, Sellers kan registrera sig (med verifiering via ID-upload), skapa produkter och hantera orders, medan Admins godkänner säljare och övervakar hela plattformen. Vi använder Supabase för backend (auth, databas, storage) vilket gör det sjukt smidigt att jobba med real-time data.\n\nGrupparbetet har varit lärorikt - vi har delat upp arbetet mellan frontend, backend-logik och databas-design. Projektet är fortfarande ongoing och vi lägger till nya features kontinuerligt. Koden är skriven i TypeScript för bättre type-safety, och vi använder Redux Toolkit för state management vilket håller allt organiserat.",
    img: "/oompaloompa4.png",
    gallery: ["/oompaloompa1.png", "/oompaloompa2.png", "/oompaloompa3.png"],
    features: [
      "Rollbaserad autentisering (Buyer/Seller/Admin)",
      "Seller-verifiering med dokumentuppladdning",
      "Real-time produktkatalog med Supabase",
      "Kundvagn och checkout-flow",
      "Admin-dashboard för seller-godkännande",
      "PostgreSQL databas med RLS (Row Level Security)",
      "TypeScript för type-safety",
      "Redux Toolkit för global state management",
      "Internationalisering (i18next) - flerspråkigt stöd"
    ],
    status: "Pågående",
    year: "2025 - Present",
    github: "https://github.com/mahdi475/ChocolataMVP"
  },
  {
    id: "project3",
    name: "Parkour Runner 3D",
    desc: "Ett utmanande 3D-plattformsspel med avancerad player-mekanik och dynamiska banor.",
    tech: ["Unity", "Physics", "Game Design", "C#(44%)", "Shaderlab (33.5%)", "HlSL(22.5%)"],
    details: "Ett påkostigt 3D-plattformsspel där spelaren styr en karaktär som måste navigera genom komplexa banor fullt med hinder, spöken och fällor. Spelet kräver precision, timing och problemlösning. Utvecklat i grupp under en hel termin med fokus på samarbete, testning och professionell kodkvalitet.\n\nSpelmekanik inkluderar avancerad player-kontroll med acceleration/deacceleration, hold-jump för variabel hopphöjd, dash-mekanik för snabb förflyttning, och intelligent jump-buffering för responsiv feel. Spelet har ingen traditionell AI-fiender utan fokuserar på level-design som instruktör - hindren som traps, eldväggar och platformer guider spelaren genom utmaningen.",
    img: "/Skärmbild 2025-12-11 144413.png",
    features: [
      "Avancerad player-kontroll (acceleration, deacceleration, hold-jump)",
      "Dash-mekanik med cooldown-system",
      "Intelligent jump-buffering och coyote-time",
      "Dynamiska banor med traps, eldväggar och hinder",
      "Sound Manager med walking/dash-audio",
      "Pausmeny och start-meny",
      "Partikeleffekter för movement-feedback",
      "Professionell gruppsamarbete och kodstandard"
    ],
    status: "Avslutad",
    year: "2024",
    github: "https://github.com/mahdi475/3DUnityGame",
    scripts: ["PlayerController", "SoundManager", "PauseMenu", "StartMenu"]
  },
  {
    id: "project4",
    name: "AI Chatbot",
    desc: "En smart chatbot byggd med Python och maskininlärning.",
    tech: ["Python", "ML", "API", "React"],
    details: "Chatboten använder NLP och maskininlärning för att förstå och svara på frågor. UI:t är modernt med mörkt tema och animationer för varje interaktion.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    features: ["NLP-integration", "Machine Learning", "Natural responses", "Learning capability"],
    status: "Avslutad",
    year: "2023"
  }
]

// Project details component
function ProjectDetail({ project }) {
  const { language } = useLanguage()
  const t = translations[language].projects
  
  if (!project) return (
    <div className="project-detail">
      <div className="detail-content error">
        <h2>{t.notFound}</h2>
        <Link to="/projects" className="back-btn">{t.backToProjects}</Link>
      </div>
    </div>
  )
  
  return (
    <div className="project-detail animated-bg fade-in">
      <div className="detail-content">
        <img 
          src={project.img} 
          alt={`${project.name} - ${language === 'sv' ? 'detaljer och galleri' : 'details and gallery'}`}
          className="project-detail-img"
          loading="lazy"
        />

        {project.gallery && project.gallery.length > 0 && (
          <div className="detail-section">
            <h3>{t.screenshots}</h3>
            <div className="project-gallery">
              {project.gallery.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${project.name} - skärmdump ${idx + 1}`} 
                  className="gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
        
        <div className="detail-header">
          <h1 className="project-detail-title">{project.name}</h1>
          <div className="detail-meta">
            <span className={`status ${project.status === 'Pågående' ? 'active' : 'completed'}`}>
              {project.status}
            </span>
            <span className="year">{project.year}</span>
          </div>
        </div>

        <p className="project-detail-desc">{project.details}</p>

        <div className="detail-section">
          <h3>{t.technologies}</h3>
          <div className="project-detail-tech">
            {project.tech.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h3>{t.features}</h3>
          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
        </div>

        {project.scripts && (
          <div className="detail-section">
            <h3>{t.keyScripts}</h3>
            <div className="scripts-list">
              {project.scripts.map(script => (
                <span key={script} className="script-tag">{script}</span>
              ))}
            </div>
          </div>
        )}

        {project.github && (
          <div className="detail-section">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              {t.viewOnGithub}
            </a>
          </div>
        )}

        <Link to="/projects" className="back-btn">{t.backToProjects}</Link>
      </div>
    </div>
  )
}

function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  
  return (
    <div className="projects-page animated-bg">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="projects-title fade-in">{t.title}</h1>
              <p className="projects-subtitle fade-in">{t.subtitle}</p>
              <div className="projects-list fade-in">
                {projects.map(project => (
                  <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                    <div className="project-card-image">
                      <img 
                        src={project.img} 
                        alt={`${project.name} - ${language === 'sv' ? 'portföljprojekt' : 'portfolio project'}`} 
                        className="project-card-img"
                        loading="lazy"
                      />
                      <span className={`project-status ${project.status === 'Pågående' ? 'active' : 'completed'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="project-card-content">
                      <h2>{project.name}</h2>
                      <p>{project.desc}</p>
                      <div className="project-tech">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                        {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                      </div>
                    </div>
                    <span className="project-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          }
        />
        {projects.map(project => (
          <Route
            key={project.id}
            path={`/${project.id}`}
            element={<ProjectDetail project={project} />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default Projects