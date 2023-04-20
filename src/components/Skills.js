import React from 'react'
import skillsData from '../data/Skills-data'

function Skills() {

  const skillsElements = skillsData.map(skill =>{
    return (
      <div className="skill" key={skill.id}>
          <img alt="img" src={skill.img} className='skills-logo'/>
          <h3>{skill.name}</h3>
      </div>
    )
  })
  return (
    <div className='skills-container'>
      {skillsElements}
    </div>
  )
}

export default Skills