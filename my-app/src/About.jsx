import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
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

function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <div className="about-page animated-bg">
      {/* Profilbild med glow */}
      <div className="about-img-glow fade-in">
        <img
          src="/pic1.jpg"
          alt={language === 'sv' ? 'Mahdi Mosavi - profilbild' : 'Mahdi Mosavi - profile picture'}
          className="about-profile-img"
          loading="lazy"
        />
      </div>
      {/* Animated headline */}
      <h1 className="about-title fade-in">
        {t.title} <span className="about-emoji">🚀</span>
      </h1>
      {/* Animated intro text */}
      <div className="about-intro fade-in">
        <p>{t.intro}</p>
      </div>
      {/* Animated skill icons */}
      <div className="about-skills fade-in">
        {skills.map(skill => (
          <div key={skill.name} className="about-skill-card">
            <img 
              src={skill.icon} 
              alt={`${skill.name} ${language === 'sv' ? 'teknologikon' : 'technology icon'}`} 
              title={skill.name} 
              className="about-skill-icon"
              loading="lazy"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      {/* Highlights with animation */}
      <div className="about-highlights fade-in">
        <h2>{t.highlights.title}</h2>
        <ul>
          <li className="about-highlight-item">{t.highlights.item1}</li>
          <li className="about-highlight-item">{t.highlights.item2}</li>
          <li className="about-highlight-item">{t.highlights.item3}</li>
          <li className="about-highlight-item">{t.highlights.item4}</li>
          <li className="about-highlight-item">{t.highlights.item5}</li>
          <li className="about-highlight-item">{t.highlights.item6}</li>
          <li className="about-highlight-item">{t.highlights.item7}</li>
        </ul>
      </div>
      {/* Animated divider */}
      <div className="about-divider">
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
      </div>
      {/* Animated quote */}
      <div className="about-quote fade-in">
        <blockquote>
          "{t.quote}"
        </blockquote>
      </div>
    </div>
  )
}

export default About