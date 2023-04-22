import projectsData from '../data/Projects-data'

function Projects() {

  const projectsElements = projectsData.map(project => {
    return (
      <a key={project.id} href='#1' style={{backgroundImage:`url(${project.img})`}} className='project-link'>
        <div className='project'>
          <h3>{project.name}</h3>
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