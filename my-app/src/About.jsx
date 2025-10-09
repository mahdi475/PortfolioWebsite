import './About.css'

const skills = [
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Assembly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
]

const highlights = [
  'Spelutveckling i Unity & C#',
  'AI‑drivna verktyg och experiment',
  'Full‑stack webbutveckling',
  'Inbyggda system & assembler',
  'Optimerad, högkvalitativ kod',
  'Kreativ problemlösning',
  'Lär mig alltid ny teknik'
]

function About() {
  return (
    <div className="about-page animated-bg">
      {/* Profilbild med glow */}
      <div className="about-img-glow fade-in">
        <img
          src="/pic1.jpg"
          alt="Profilbild"
          className="about-profile-img"
        />
      </div>

      {/* Rubrik */}
      <h1 className="about-title fade-in">
        Om mig <span className="about-emoji">🚀</span>
      </h1>

      {/* Intro */}
      <div className="about-intro fade-in">
        <p>
          Jag är en <span className="about-highlight">passionerad mjukvaruutvecklare</span> som studerar
          <span className="about-highlight"> Datateknik</span> vid
          <span className="about-highlight"> Högskolan Väst</span>.<br />
          Jag har programmerat i <span className="about-highlight">över fyra år</span> med fokus på
          <span className="about-highlight"> spelutveckling</span>,
          <span className="about-highlight"> full‑stack webbutveckling</span> och olika typer av applikationer.
        </p>
        <p>
          Min expertis inkluderar <span className="about-highlight">C#, Python, JavaScript, C++</span> samt flera andra
          språk och ramverk.<br />
          Jag har byggt projekt inom <span className="about-highlight">Unity‑spel</span>,
          <span className="about-highlight"> AI‑drivna verktyg</span> och
          <span className="about-highlight"> full‑stack‑applikationer</span>.<br />
          Dessutom har jag erfarenhet av <span className="about-highlight">inbyggda system</span> och
          <span className="about-highlight"> assemblerprogrammering</span>.
        </p>
        <p>
          Jag är alltid nyfiken på nya tekniker och strävar efter att skapa
          <span className="about-highlight"> högkvalitativa, optimerade mjukvarulösningar</span>.<br />
          Jag gillar även att arbeta med <span className="about-highlight">spelprojekt</span>,
          experimentera med <span className="about-highlight">AI</span> och tänja på gränserna för interaktiva upplevelser.
        </p>
      </div>

      {/* Skills */}
      <div className="about-skills fade-in">
        {skills.map((skill) => (
          <div key={skill.name} className="about-skill-card">
            <img src={skill.icon} alt={skill.name} title={skill.name} className="about-skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Höjdpunkter */}
      <div className="about-highlights fade-in">
        <h2>Höjdpunkter</h2>
        <ul>
          {highlights.map((item, i) => (
            <li key={i} className="about-highlight-item">{item}</li>
          ))}
        </ul>
      </div>

      {/* Avdelare */}
      <div className="about-divider">
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
      </div>

      {/* Citat */}
      <div className="about-quote fade-in">
        <blockquote>
          ”Kod är som magi – ju mer du lär dig, desto mer kraftfull blir du.”
        </blockquote>
      </div>
    </div>
  )
}

export default About