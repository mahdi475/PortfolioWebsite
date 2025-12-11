import { useState } from 'react'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import './Contact.css'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const { language } = useLanguage()
  const t = translations[language].contact

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://formspree.io/f/xyzdwnkl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setMessageType('success')
        setMessage(`✓ ${t.success}`)
        e.target.reset()
      } else {
        setMessageType('error')
        setMessage(`✗ ${t.error}`)
      }
    } catch (error) {
      setMessageType('error')
      setMessage(`✗ ${t.error}`)
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <div className="contact-page animated-bg">
      <h1 className="contact-title fade-in">{t.title}</h1>
      <p className="contact-desc fade-in">
        {t.subtitle}
      </p>
      <div className="contact-cards fade-in">
        <div className="contact-card">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
            alt={`LinkedIn ${language === 'sv' ? 'ikon - socialt nätverksprofil' : 'icon - professional network'}`}
            className="contact-icon"
            loading="lazy"
          />
          <a href="https://www.linkedin.com/in/mahdi-mousavi-802690229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <p>{t.linkedin}</p>
        </div>
        <div className="contact-card">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt={`GitHub ${language === 'sv' ? 'ikon - kodlagringsplattform' : 'icon - code repository'}`}
            className="contact-icon"
            loading="lazy"
          />
          <a href="https://github.com/mahdi475" target="_blank" rel="noopener noreferrer">GitHub</a>
          <p>{t.github}</p>
        </div>
        <div className="contact-card">
          <img 
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" 
            alt={`Instagram ${language === 'sv' ? 'ikon - sociala medier' : 'icon - social media'}`}
            className="contact-icon"
            loading="lazy"
          />
          <a href="https://www.instagram.com/mahdi.mouusavi4/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <p>{t.instagram}</p>
        </div>
        <div className="contact-card">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
            alt={`${language === 'sv' ? 'E-post ikon - kontakt' : 'Email icon - contact'}`}
            className="contact-icon"
            loading="lazy"
          />
          <a href="mailto:mahdimousavi8909@icloud.com">mahdimousavi8909@icloud.com</a>
          <p>{t.email}</p>
        </div>
      </div>
      <form
        className="contact-form fade-in"
        onSubmit={handleSubmit}
      >
        <h2>{language === 'sv' ? 'Skicka ett meddelande' : 'Send a message'}</h2>
        <div className="form-group">
          <label htmlFor="name">{t.form.name} *</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            placeholder={t.form.name}
            required 
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t.form.email} *</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder={t.form.email}
            required 
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t.form.message} *</label>
          <textarea 
            id="message"
            name="message" 
            rows="5" 
            placeholder={t.form.message}
            required 
            disabled={loading}
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className={loading ? 'loading' : ''}
        >
          {loading ? t.form.sending : t.form.send}
        </button>
        {message && (
          <div className={`form-message ${messageType}`}>
            {message}
          </div>
        )}
      </form>
      <div className="contact-footer fade-in">
        <span>© {new Date().getFullYear()} Mahdi Mosavi | All rights reserved</span>
      </div>
    </div>
  )
}

export default Contact