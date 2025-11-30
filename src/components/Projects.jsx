import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = ({ onInView }) => {
  const { ref, inView } = useInView()
  const [selectedProject, setSelectedProject] = useState(null)

  if (inView) {
    onInView?.()
  }

  return (
    <div
      ref={ref}
      className={`section fade-up ${inView ? 'fade-up-visible' : ''}`}
    >
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p className="section-subtitle">
            Highlighting the work that best represents how I think about systems,
            reliability, and user experience.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects
