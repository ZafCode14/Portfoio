import React from 'react'
import skillsData from '../data/Skills-data'

function Skills() {

  const skillsElements = skillsData.map(skill =>{
    return (
      <div className="skill" key={skill.id}>
          <img alt="img" src={skill.img} className='skills-logo'/>
          <h4>{skill.name}</h4>
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