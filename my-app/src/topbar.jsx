import './topbar.css'

function Topbar() {
  return (
    <nav className="topbar">
      <a href="/" className="topbar-logo-btn">MyPortfolio</a>
      <ul className="topbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Topbar