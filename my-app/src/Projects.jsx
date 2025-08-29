import { Routes, Route, Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: "project1",
    name: "Portfolio Website",
    desc: "En modern portfolio byggd med React, Vite och avancerad CSS.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
    details: "Detta projekt visar min personliga portfolio med animationer, responsiv design och integration av sociala medier. All kod är optimerad för prestanda och tillgänglighet.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "project2",
    name: "Weather App",
    desc: "En väderapplikation med API-integration och snygga effekter.",
    tech: ["JavaScript", "CSS", "API"],
    details: "Appen hämtar väderdata från ett externt API och visar det med interaktiva grafer och animationer. Designen är mörk och lyxig, med smooth transitions.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "project3",
    name: "Unity Game",
    desc: "Ett 2D-plattformsspel med AI-fiender och specialeffekter.",
    tech: ["Unity", "C#", "AI"],
    details: "Spelet är byggt i Unity och har avancerad AI för fiender, snygga partikeleffekter och responsiv kontroll. All grafik är handgjord och spelet är optimerat för både desktop och mobil.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "project4",
    name: "AI Chatbot",
    desc: "En smart chatbot byggd med Python och maskininlärning.",
    tech: ["Python", "ML", "API"],
    details: "Chatboten använder NLP och maskininlärning för att förstå och svara på frågor. UI:t är modernt med mörkt tema och animationer för varje interaktion.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
]

// Project details component
function ProjectDetail({ project }) {
  if (!project) return <div className="project-detail"><h2>Projektet hittades inte.</h2></div>
  return (
    <div className="project-detail animated-bg fade-in">
      <img src={project.img} alt={project.name} className="project-detail-img" />
      <h1 className="project-detail-title">{project.name}</h1>
      <p className="project-detail-desc">{project.details}</p>
      <div className="project-detail-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <Link to="/projects" className="back-btn">← Tillbaka till projekt</Link>
    </div>
  )
}

function Projects() {
  return (
    <div className="projects-page animated-bg">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="projects-title fade-in">Mina projekt</h1>
              <div className="projects-list fade-in">
                {projects.map(project => (
                  <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                    <img src={project.img} alt={project.name} className="project-card-img" />
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                    <div className="project-tech">
                      {project.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
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