import { Link } from 'react-router-dom'
import './topbar.css'

function Topbar() {
  return (
    <nav className="topbar">
      <Link to="/" className="topbar-logo-btn">MyPortfolio</Link>
      <ul className="topbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Topbar