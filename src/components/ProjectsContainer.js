import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsContainer = () => {
  return (
    <div class="container">
      <div class="projects-section">
        <h3>Take a look to my projects!</h3>
        <div class="project-container">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
      <div class="arrow"></div>
    </div>
  )
}

export default ProjectsContainer
