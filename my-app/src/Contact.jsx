import './Contact.css'

function Contact() {
  return (
    <div className="contact-page animated-bg">
      <h1 className="contact-title fade-in">Kontakta mig</h1>
      <p className="contact-desc fade-in">
        Vill du samarbeta, har frågor eller vill bara säga hej?<br />
        Tveka inte att höra av dig! Jag svarar snabbt och är alltid öppen för nya möjligheter.
      </p>
      <div className="contact-cards fade-in">
        <div className="contact-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-icon" />
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="contact-card">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" className="contact-icon" />
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="contact-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="contact-icon" />
          <a href="mailto:mahdi@example.com">mahdi@example.com</a>
        </div>
      </div>
      <form className="contact-form fade-in" autoComplete="off">
        <h2>Skicka ett meddelande</h2>
        <input type="text" name="name" placeholder="Ditt namn" required />
        <input type="email" name="email" placeholder="Din e-post" required />
        <textarea name="message" rows="5" placeholder="Ditt meddelande..." required />
        <button type="submit">Skicka</button>
      </form>
      <div className="contact-footer fade-in">
        <span>© {new Date().getFullYear()} Mahdi Mosavi | All rights reserved</span>
      </div>
    </div>
  )
}

export default Contact