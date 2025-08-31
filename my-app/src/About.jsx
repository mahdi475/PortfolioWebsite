import './About.css'

const skills = [
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Assembly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
]

const highlights = [
  "Game development in Unity & C#",
  "AI-driven tools & experiments",
  "Full-stack web development",
  "Embedded systems & assembly programming",
  "Optimized, high-quality code",
  "Creative problem solving",
  "Always learning new tech"
]

function About() {
  return (
    <div className="about-page animated-bg">
      {/* Profilbild med glow */}
      <div className="about-img-glow fade-in">
        <img
          src="/pic1.jpg"
          alt="Profilbild"
          className="about-profile-img"
        />
      </div>
      {/* Animated headline */}
      <h1 className="about-title fade-in">
        Om mig <span className="about-emoji">🚀</span>
      </h1>
      {/* Animated intro text */}
      <div className="about-intro fade-in">
        <p>
          I am a <span className="about-highlight">passionate software developer</span> currently studying <span className="about-highlight">Computer Engineering</span> at <span className="about-highlight">Högskolan Väst</span>.<br />
          I have been programming for <span className="about-highlight">over four years</span>, specializing in <span className="about-highlight">game development</span>, <span className="about-highlight">full-stack web development</span>, and all sorts of applications.
        </p>
        <p>
          My expertise includes <span className="about-highlight">C#, Python, JavaScript, C++,</span> and various other programming languages and frameworks.<br />
          I have worked on multiple projects, including <span className="about-highlight">game development in Unity</span>, <span className="about-highlight">AI-driven tools</span>, and <span className="about-highlight">full-stack applications</span>.<br />
          Additionally, I have experience in <span className="about-highlight">embedded systems</span> and <span className="about-highlight">assembly programming</span>.
        </p>
        <p>
          I am always eager to learn and explore new technologies while striving to create <span className="about-highlight">high-quality, optimized software solutions</span>.<br />
          I also enjoy working on <span className="about-highlight">game projects</span>, experimenting with <span className="about-highlight">AI</span>, and pushing the limits of interactive experiences.
        </p>
      </div>
      {/* Animated skill icons */}
      <div className="about-skills fade-in">
        {skills.map(skill => (
          <div key={skill.name} className="about-skill-card">
            <img src={skill.icon} alt={skill.name} title={skill.name} className="about-skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      {/* Highlights with animation */}
      <div className="about-highlights fade-in">
        <h2>Highlights</h2>
        <ul>
          {highlights.map((item, i) => (
            <li key={i} className="about-highlight-item">{item}</li>
          ))}
        </ul>
      </div>
      {/* Animated divider */}
      <div className="about-divider">
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
        <span className="about-divider-dot"></span>
      </div>
      {/* Animated quote */}
      <div className="about-quote fade-in">
        <blockquote>
          "Code is like magic – the more you learn, the more powerful you become."
        </blockquote>
      </div>
    </div>
  )
}

export default About