import { useState } from 'react'
import './Home.css'

const logos = [
  { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'C#', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Vite', url: 'https://vitejs.dev/logo.svg' },
  { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
]

const socials = [
  { name: 'LinkedIn', url: "https://www.linkedin.com/in/mahdi-mousavi-802690229/", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Instagram', url: "https://www.instagram.com/mahdi.mouusavi4/" , icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg' },
  { name: 'Email', url: "mailto:mahdimousavi8909@icloud.com", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
]

const strengths = [
  "Problemlösning",
  "Samarbete",
  "Snabblärd",
  "Kreativ kodare",
  "Kommunikativ",
  "Noggrann & strukturerad"
]

const projects = [
  { name: "Portfolio Website", desc: "Min personliga portfolio byggd med React och Vite.", url: "#" },
  { name: "Weather App", desc: "En väderapplikation med API-integration.", url: "#" },
  { name: "Todo App", desc: "En modern todo-app med C# backend.", url: "#" }
]

function Home() {
  const [pop, setPop] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleCVClick = () => {
    setPop(true);
    setTimeout(() => {
      setPop(false);
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 2500);
    }, 900);
  };

  return (
    <div className="home-page animated-bg">
      {/* Flytande bakgrundsbollar */}
      <div className="floating-balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      {/* Profilbild */}
      <img
        src="/pic1.jpg"
        alt="Profilbild"
        className="profile-img fade-in"
      />
      {/* Animated Welcome */}
      <h1 className="welcome-text fade-in">Välkommen till min portfoliosida!</h1>
      <p className="fade-in">
        <span className="highlight">Mahdi Mosavi</span> | Högskolan Väst<br />
        Passionerad utvecklare med erfarenhet av <span className="highlight">CSS, C#, Python, HTML, Java, Vite, C++</span>.<br />
        Utforska mina projekt och färdigheter!
      </p>
      {/* Sociala medier */}
      <div className="socials fade-in">
        {socials.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={social.name} title={social.name} className="social-icon" />
          </a>
        ))}
      </div>
      {/* CV-knapp med fet animation */}
      <div className="cv-btn-wrapper">
        <a
          href="/cv.pdf"
          className={`cv-btn fade-in${pop ? ' cv-explode' : ''}`}
          download
          onClick={handleCVClick}
        >
          <span role="img" aria-label="cv">📄</span> Ladda ner mitt CV
        </a>
        {pop && (
          <div className="cv-confetti">
            <div className="cv-confetti-piece cv-c1"></div>
            <div className="cv-confetti-piece cv-c2"></div>
            <div className="cv-confetti-piece cv-c3"></div>
            <div className="cv-confetti-piece cv-c4"></div>
            <div className="cv-confetti-piece cv-c5"></div>
            <div className="cv-confetti-piece cv-c6"></div>
          </div>
        )}
        {showThanks && (
          <div className="cv-thanks fade-in">
            Tack för att du laddade ner mitt CV!
          </div>
        )}
      </div>
      {/* Logotyper med roterande effekt */}
      <div className="tech-logos fade-in">
        {logos.map(logo => (
          <img key={logo.name} src={logo.url} alt={logo.name} title={logo.name} className="tech-logo active-spin" />
        ))}
      </div>
      {/* Om mig */}
      <section className="about-section fade-in">
        <h2>Om mig</h2>
        <p>
          Jag är en driven och nyfiken utvecklare som älskar att lära mig nya tekniker och skapa smarta lösningar.<br />
          Jag studerar på Högskolan Väst och söker alltid nya utmaningar inom programmering och IT.
        </p>
      </section>
      {/* Mina styrkor */}
      <section className="strengths-section fade-in">
        <h2>Mina styrkor</h2>
        <ul>
          {strengths.map(strength => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>
      {/* Senaste projekt */}
      <section className="projects-section fade-in">
        <h2>Senaste projekt</h2>
        <div className="project-list">
          {projects.map(project => (
            <a key={project.name} href={project.url} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home