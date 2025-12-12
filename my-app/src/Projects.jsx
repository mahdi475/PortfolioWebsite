import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import { projectsData } from './projectsData'
import './Projects.css'

const socials = [
  { name: 'LinkedIn', url: "https://www.linkedin.com/in/mahdi-mousavi-802690229/", icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'fab fa-github' },
  { name: 'Instagram', url: "https://www.instagram.com/mahdi.mouusavi4/", icon: 'fab fa-instagram' },
]

// Projects data is now imported from projectsData.js


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
  const projects = projectsData[language]
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])
  
  return (
    <div className="projects-page animated-bg">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="projects-spacer" aria-hidden="true"></div>
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
                      <p className="project-role">{project.status} · {project.year}</p>
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