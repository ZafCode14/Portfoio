import { useState } from 'react'
import projectsData from '../data/Projects-data'

function Projects() {
  const [onHover, setOnHover] = useState(true)

  function hover(){
    setOnHover(prevHover => !prevHover)
  }

  
  const projectsElements = projectsData.map(project => {
    const backgroundStyle = {
      transition: "0.3s",
      backgroundColor: onHover?"rgba(0, 0, 0, 0":"rgba(0, 0, 0, .9",
      border:onHover?"none":"2px solid white",
      height:"100%",
      borderRadius:"20px"
    }

    const contentStyle = {
      opacity: onHover? "0":"1",
      transition: "0.3s"
    }
    return (
      <a href='#1' style={{backgroundImage:`url(${project.img})`}} className='project'>
        <div onMouseEnter={hover} onMouseLeave={hover}  style={backgroundStyle} key={project.id}>
          <h4 style={contentStyle}>{project.name}</h4>
        </div>
      </a>
    )
  })
  return (
    <div className="projects-container">
      {projectsElements}
    </div>
  )
}

export default Projects