import { useState } from 'react'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'
import './Contact.css'

const socials = [
  { name: 'LinkedIn', url: "https://www.linkedin.com/in/mahdi-mousavi-802690229/", icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/mahdi475', icon: 'fab fa-github' },
  { name: 'Instagram', url: "https://www.instagram.com/mahdi.mouusavi4/", icon: 'fab fa-instagram' },
]

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
      <form
        className="contact-form fade-in"
        onSubmit={handleSubmit}
      >
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
    </div>
  )
}

export default Contact