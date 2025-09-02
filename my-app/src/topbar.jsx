import { useState } from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

function Topbar() {
  const [open, setOpen] = useState(false)

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
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Topbar