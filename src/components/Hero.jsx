import React from 'react'
import { useInView } from '../hooks/useInView'

const Hero = ({ onScrollTo }) => {
  const { ref, inView } = useInView()

  const openLink = url => {
    if (!url) return
    window.open(url, '_blank', 'noopener noreferrer')
  }

  return (
    <section ref={ref} className={`section hero-section fade-up ${inView ? 'fade-up-visible' : ''}`}>
      <div className="container hero-grid">
        {/* LEFT: main hero */}
        <div>
          <div className="eyebrow">Backend • Cloud • Systems</div>
          <h1 className="hero-title">Siva Paoren</h1>
          <p className="hero-subtitle">
            Software Engineer | Backend Developer | CS Student
          </p>
          <p className="hero-subtitle">
            I&apos;m a mixed Thai Nepali,Thai national , 3rd-year Computer Science student at Assumption University,
            focused on backend engineering, cloud, and system design. 
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => openLink('/siva-resume.pdf')}
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
              onClick={() => openLink('https://www.linkedin.com/in/sivapaoren')}
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* RIGHT: info card (the “side thing”) */}
        <div className="hero-card">
          <span className="hero-badge">Currently building</span>

          <h3 className="hero-card-title">Backend · Spring Boot · React</h3>
          <p className="hero-card-text">
            Currently  working  on Bankify (core banking system).
          </p>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Stack</span>
              <div className="meta-value">
                Java, Spring Boot, React, PostgreSQL, MongoDB, Docker
              </div>
            </div>
            <div>
              <span className="meta-label">Hobbies</span>
              <div className="meta-value">
                Football, programming, and teaching on YouTube.
              </div>
            </div>
            <div>
              <span className="meta-label">YouTube</span>
              <div className="meta-value">
                YouTube: @yourfavprogrammer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
