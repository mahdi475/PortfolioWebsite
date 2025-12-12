import { useLanguage } from './contexts/LanguageContext'
import './Footer.css'

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahdi-mousavi-802690229/', icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'fab fa-github' },
  { name: 'Instagram', url: 'https://www.instagram.com/mahdi.mouusavi4/', icon: 'fab fa-instagram' },
]

function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="main-footer">
      <div className="footer-contact">
        <div>
          <strong>{language === 'sv' ? 'Ring' : 'Call'}</strong>
          <div>+46760458391</div>
        </div>
        <div>
          <strong>{language === 'sv' ? 'Skriv' : 'Write'}</strong>
          <div>mahdimousavi8909@icloud.com</div>
        </div>
        <div>
          <strong>{language === 'sv' ? 'Följ' : 'Follow'}</strong>
          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                style={{ marginRight: '12px', color: '#111', fontSize: '1.2rem' }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-meta">
        <div>
          © 2025 {language === 'sv' ? 'av Mahdi Mosavi. Alla rättigheter förbehållna.' : 'by Mahdi Mosavi. All rights reserved.'}
        </div>
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
      </div>
    </footer>
  )
}

export default Footer