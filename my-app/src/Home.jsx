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
  { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Instagram', url: 'https://instagram.com/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg' },
  { name: 'Email', url: 'mailto:mahdi@example.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
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
  return (
    <div className="home-page animated-bg">
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
      {/* CV-knapp */}
      <a href="/cv.pdf" className="cv-btn fade-in" download>
        <span role="img" aria-label="cv">📄</span> Ladda ner mitt CV
      </a>
      {/* Logotyper */}
      <div className="tech-logos fade-in">
        {logos.map(logo => (
          <img key={logo.name} src={logo.url} alt={logo.name} title={logo.name} className="tech-logo" />
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