import './Skills.css'

const languages = [
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
]
const frameworks = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
]
const tools = [
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
]
const softSkills = [
  "Problem solving",
  "Teamwork",
  "Communication",
  "Creativity",
  "Adaptability",
  "Leadership"
]

function Skills() {
  return (
    <div className="skills-page animated-bg">
      <h1 className="skills-title fade-in">Skills & Tools</h1>
      <section className="skills-section fade-in">
        <h2>Programming Languages</h2>
        <div className="skills-list">
          {languages.map(skill => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section fade-in">
        <h2>Frameworks & Libraries</h2>
        <div className="skills-list">
          {frameworks.map(skill => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section fade-in">
        <h2>Tools</h2>
        <div className="skills-list">
          {tools.map(skill => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section fade-in">
        <h2>Soft Skills</h2>
        <ul className="soft-skills-list">
          {softSkills.map(s => <li key={s}>{s}</li>)}
        </ul>
      </section>
    </div>
  )
}

export default Skills