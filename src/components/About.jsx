import React from 'react'
import { useInView } from '../hooks/useInView'

const About = ({ onInView }) => {
  const { ref, inView } = useInView()

  if (inView) {
    onInView?.()
  }

  return (
    <div
      ref={ref}
      className={`section fade-up ${inView ? 'fade-up-visible' : ''}`}
    >
      <div className="container about-grid">
        <div className="about-text">
          <h2>About Me</h2>
          <p className="section-subtitle">
            
          </p>
          <p>
            I&apos;m a Thai Nepali mixed ,Thai national , third-year CS student at Assumption University, love 
            building reliable backend systems, clean APIs.
          </p>
          <p>
            I also like  diving into cloud deployments, system design concepts, and
            optimizing bottlenecks whether that&apos;s a database query, a slow API,
            or a piece of business logic.
          </p>

          <div className="about-hobbies">
            <h3>When I&apos;m not coding</h3>
            <ul>
              <li>
                <strong>Football</strong> – My main hobby. I love playing, watching,
                and talking about the game.
              </li>
              <li>
                <strong>Programming & learning</strong> – Exploring new frameworks,
                tools, and patterns.
              </li>
              <li>
                <strong>Teaching on YouTube</strong> – I share what I learn on my
                channel <span className="highlight"><a
                    href="https://www.youtube.com/@yourfavprogrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YourFavProgrammer
                  </a></span>,
                helping others grow in tech.
              </li>
            </ul>
          </div>
        </div>

             <div className="about-photo">
  <div className="photo-frame">
    <div className="photo-placeholder">
      <img width={200} height={250} 
        src={`${import.meta.env.BASE_URL}assets/profile.png`}
        alt="profile"
      />
    </div>
    <div className="photo-tag">
      CS Student • Backend • Football • Socialising
    </div>
  </div>
</div>


      </div>
    </div>
  )
}

export default About
