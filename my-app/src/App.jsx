import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Topbar from './topbar.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Topbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

export default App