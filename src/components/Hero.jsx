import React from 'react'
import { useInView } from '../hooks/useInView'

const Hero = ({ onInView }) => {
  const { ref, inView } = useInView()

  if (inView) {
    onInView?.()
  }

  const openLink = url => {
    window.open(url, '_blank', 'noopener noreferrer')
  }

  return (
    <div
      ref={ref}
      className={`section hero-section fade-up ${inView ? 'fade-up-visible' : ''}`}
    >
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Software Engineer • Backend • CS Student</p>
          <h1 className="hero-title">Hi, I&apos;m Siva Paoren.</h1>
          <p className="hero-subtitle">
            Software Engineer | Backend Developer | CS Student who loves building
            reliable systems, clean APIs, and always excited for new technologies.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() =>
                openLink('/siva-resume.pdf') // put your resume in public/
              }
            >
              Download Resume (PDF)
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => openLink('https://github.com/SivaPaoren')}
            >
              View GitHub
            </button>
            <button
              className="btn btn-outline"
              onClick={() =>
                openLink('https://www.linkedin.com/in/sivapaoren')
              }
            >
              LinkedIn
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-badge">Now</div>
          <p className="hero-card-title">Building backend-heavy core banking system</p>
          <p className="hero-card-text">
            3rd-year CS student at Assumption University, focusing on backend
            engineering, cloud, and system design fundamentals.
          </p>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Primary stack</span>
              <span className="meta-value">Java • Spring • Node • React • JavaScript • Next</span>
            </div>
            <div>
              <span className="meta-label">Interests</span>
              <span className="meta-value">Socilising, Programming, Football, teaching, problem-solving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
