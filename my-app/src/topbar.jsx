import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import './topbar.css'

function Topbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav

  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/') ||
           (path !== '/' && location.pathname.startsWith(path))
  }

  return (
    <nav className="topbar">
      <Link to="/" className="topbar-logo-btn">Mahdi Portfolio</Link>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        &#9776;
      </button>
      <ul className={`topbar-links${open ? ' open' : ''}`}>
        <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>{t.home}</Link></li>
        <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setOpen(false)}>{t.about}</Link></li>
        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={() => setOpen(false)}>{t.projects}</Link></li>
        <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={() => setOpen(false)}>{t.skills}</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setOpen(false)}>{t.contact}</Link></li>
        <li>
          <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            {language === 'sv' ? '🇬🇧 EN' : '🇸🇪 SV'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Topbar