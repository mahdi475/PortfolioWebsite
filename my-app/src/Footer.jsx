import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="lux-footer fade-in">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><a href="/">{t.nav.home}</a></li>
              <li><a href="/about">{t.nav.about}</a></li>
              <li><a href="/projects">{t.nav.projects}</a></li>
              <li><a href="/skills">{t.nav.skills}</a></li>
              <li><a href="/contact">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.footer.social}</h4>
            <ul>
              <li><a href="https://github.com/mahdi475" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mahdi-mousavi-802690229/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com/mahdi_m475" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.footer.contactInfo}</h4>
            <ul>
              <li><a href="mailto:mahdimousavi8909@icloud.com">{language === 'sv' ? 'E-post' : 'Email'}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer