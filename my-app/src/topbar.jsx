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

      <ul className="desktop-links">
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>{t.home}</Link></li>
        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>{t.projects}</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>{t.contact}</Link></li>
      </ul>

      <div className="topbar-actions">
        <button
          className="lang-pill"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {language === 'sv' ? 'SV / EN' : 'EN / SV'}
        </button>
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`overlay${open ? ' show' : ''}`} onClick={() => setOpen(false)}></div>

      <div className={`mobile-menu${open ? ' slide-in' : ''}`}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        <ul>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>{t.home}</Link></li>
          <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={() => setOpen(false)}>{t.projects}</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setOpen(false)}>{t.contact}</Link></li>
          <li>
            <button className="language-toggle" onClick={() => { toggleLanguage(); setOpen(false); }} aria-label="Toggle language">
              {language === 'sv' ? 'EN' : 'SV'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar