import './Footer.css'

function Footer() {
  return (
    <footer className="lux-footer fade-in">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Mahdi Mosavi</span>
        <span className="footer-links">
          <a href="mailto:mahdi@example.com">mahdi@example.com</a>
          <a href="https://github.com/mahdi475" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer