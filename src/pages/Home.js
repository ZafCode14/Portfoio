import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects'

function Home() {

  return (
    <div className="Home">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Frontend Developer</h1>
          <a href="#skills" className="cta-button">View My Skills</a>
          <a href="#projects" className="cta-button">View My Projects</a>
        </div>
      </div>
      <div className="skills-section" id="skills">
        <h2>My Skills</h2>
        <Skills/>
      </div>
      <div className="projects-section" id='projects'>
        <h2>My Projects</h2>
        <Projects/>
      </div>
    </div>
  );
}

export default Home;