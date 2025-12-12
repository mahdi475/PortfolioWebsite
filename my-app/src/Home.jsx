import { Link } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import './Home.css'

const socials = [
  { name: 'LinkedIn', url: "https://www.linkedin.com/in/mahdi-mousavi-802690229/", icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'fab fa-github' },
  { name: 'Instagram', url: "https://www.instagram.com/mahdi.mouusavi4/", icon: 'fab fa-instagram' },
]

function Home() {
  const { language } = useLanguage()
  const t = translations[language].home

  return (
    <div className="home-page">
      <div className="home-spacer" aria-hidden="true"></div>
      
      <div className="hero-container">
        {/* Left side - Profile Card */}
        <div className="hero-card">
          <div className="profile-stack">
            <div className="profile-img-shell">
              <img
                src="/pic1.jpg"
                alt={language === 'sv' ? 'Profilbild av Mahdi Mosavi' : 'Profile picture of Mahdi Mosavi'}
                className="profile-img"
              />
            </div>
            <h2 className="hero-greeting">{language === 'sv' ? 'Jag heter Mahdi' : 'I am Mahdi'}</h2>
            <h3 className="hero-lastname">{language === 'sv' ? 'Mosavi' : 'Mosavi'}</h3>
            <div className="divider"></div>
            <p className="hero-subtitle">{language === 'sv' ? 'MJUKVARUUTVECKLARE' : 'SOFTWARE DEVELOPER'}</p>
            <div className="hero-social-row">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - CTA and Description */}
        <div className="hero-content">
          <p className="hero-tagline">{language === 'sv' ? 'Vem är jag och vad jag gör' : 'Who I am and what I do'}</p>
          <div className="cta-row">
            <a href="/cv.pdf" download className="btn-solid">CV</a>
            <Link to="/projects" className="btn-ghost">{language === 'sv' ? 'PROJEKT' : 'PROJECTS'}</Link>
          </div>
          <section className="hero-description-block">
            <h3>{language === 'sv' ? 'Hej' : 'Hello'}</h3>
            <p>{translations[language].about.intro}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home