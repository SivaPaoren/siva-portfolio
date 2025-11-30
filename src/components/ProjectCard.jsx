import React from 'react'

const ProjectCard = ({ project, onOpen }) => {
  return (
    <article className="project-card" onClick={onOpen}>
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="stack-pills">
          {project.stack.map(tech => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="project-description">{project.shortDescription}</p>
      <div className="project-footer">
        <button className="link-button" type="button">
          View details
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
