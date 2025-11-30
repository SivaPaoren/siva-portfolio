import React from 'react'

const ProjectModal = ({ project, onClose }) => {
  const openLink = url => {
    if (!url) return
    window.open(url, '_blank', 'noopener noreferrer')
  }

  const hasScreenshots =
    Array.isArray(project.screenshots) && project.screenshots.length > 0

  const isImageShot = shot => {
    if (!shot) return false
    const u = typeof shot === 'object' ? shot.url : shot
    if (typeof u !== 'string') return false

    const lower = u.toLowerCase()
    const looksLikePathOrUrl =
      lower.startsWith('/') ||
      lower.startsWith('http://') ||
      lower.startsWith('https://') ||
      lower.startsWith('assets/')

    const hasImageExt =
      lower.endsWith('.png') ||
      lower.endsWith('.jpg') ||
      lower.endsWith('.jpeg') ||
      lower.endsWith('.webp') ||
      lower.endsWith('.gif')

    return looksLikePathOrUrl && hasImageExt
  }

  const resolveImageUrl = raw => {
    if (!raw) return ''
    // if already full URL, just use it
    if (raw.startsWith('http://') || raw.startsWith('https://')) return raw

    // remove any leading slash so we can safely prepend BASE_URL
    const clean = raw.replace(/^\/+/, '')
    // BASE_URL is '' or '/siva-portfolio/' depending on dev/prod
    return `${import.meta.env.BASE_URL}${clean}`
  }

  const getShotUrlAndLabel = (shot, idx) => {
    if (typeof shot === 'object') {
      const urlRaw = shot.url || ''
      return {
        url: resolveImageUrl(urlRaw),
        label: shot.label || `${project.title} screenshot ${idx + 1}`,
      }
    }

    if (typeof shot === 'string') {
      return {
        url: resolveImageUrl(shot),
        label: `${project.title} screenshot ${idx + 1}`,
      }
    }

    return { url: '', label: '' }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className="modal-header">
          <div>
            <h3>{project.title}</h3>
            <div className="stack-pills">
              {project.stack.map(tech => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button className="icon-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h4>Overview</h4>
            <p>{project.shortDescription}</p>
          </section>

          <section className="modal-section">
            <h4>Key Features</h4>
            <ul className="bullet-list">
              {project.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h4>Tech Stack &amp; Implementation</h4>
            <ul className="bullet-list">
              {project.techDetails.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {hasScreenshots && (
            <section className="modal-section">
              <h4>Screenshots</h4>
              <div className="screenshots-grid">
                {project.screenshots.map((shot, idx) => {
                  if (isImageShot(shot)) {
                    const { url, label } = getShotUrlAndLabel(shot, idx)
                    return (
                      <div key={idx} className="screenshot-placeholder">
                        <img src={url} alt={label} />
                      </div>
                    )
                  }

                  // fallback: text label
                  return (
                    <div key={idx} className="screenshot-placeholder">
                      <span>
                        {typeof shot === 'string'
                          ? shot
                          : shot?.label || `Screenshot ${idx + 1}`}
                      </span>
                    </div>
                  )
                })}
              </div>
            </section>
          )}
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-primary"
            onClick={() => openLink(project.github)}
          >
            View Code
          </button>
          {project.liveDemo && (
            <button
              className="btn btn-outline"
              onClick={() => openLink(project.liveDemo)}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
