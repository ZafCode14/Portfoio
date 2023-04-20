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
      backgroundColor: onHover?"rgba(255, 255, 255, 0":"rgba(255, 255, 255, .8",
      border:onHover?"2px solid grey":"2px solid black",
      height:"100%",
      borderRadius:"20px",
      display: "flex",
      alignItems: "center"
    }

    const contentStyle = {
      opacity: onHover? "0":"1",
      transition: "0.3s"
    }
    return (
      <a key={project.id} href='#1' style={{backgroundImage:`url(${project.img})`}} className='project'>
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