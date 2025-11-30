import React from "react";

const Hero = () => {
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener noreferrer");
  };

  // Correct URL for Vite + GitHub Pages
  const resumeUrl = `${import.meta.env.BASE_URL}siva-resume.pdf`;
  const profileUrl = `${import.meta.env.BASE_URL}profile.png`;

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-grid">
        {/* LEFT SIDE – MAIN TEXT */}
        <div className="hero-text">
          <p className="hero-kicker">Backend • Cloud • Systems</p>

          <h1 className="hero-title">Siva Paoren</h1>

          <h2 className="hero-subtitle">
            Software Engineer &nbsp;|&nbsp; Backend Developer &nbsp;|&nbsp; CS Student
          </h2>

          <p className="hero-description">
            I&apos;m a 3rd-year Computer Science student at Assumption University,
            focused on backend engineering, cloud, and system design. I love
            building reliable systems, playing football, and teaching people
            through content.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => openLink(resumeUrl)}
            >
              Download Resume (PDF)
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => openLink("https://github.com/SivaPaoren")}
            >
              View GitHub
            </button>

            <button
              className="btn btn-outline"
              onClick={() =>
                openLink("https://www.linkedin.com/in/siva-paoren-dhakal/")
              }
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – THE BOX CARD */}
        <aside className="hero-card">
          <div className="hero-card-inner">
            <div className="hero-card-header">
              <div className="hero-avatar">
                <img src={profileUrl} alt="Siva Paoren" />
              </div>
              <div>
                <p className="hero-card-name">Siva Paoren</p>
                <p className="hero-card-role">Backend • Spring Boot • React</p>
              </div>
            </div>

            <div className="hero-card-body">
              <div className="hero-card-row">
                <span className="hero-card-label">Current Focus</span>
                <span className="hero-card-value">
                  Core banking system • Note sharing platform
                </span>
              </div>

              <div className="hero-card-row">
                <span className="hero-card-label">Stack</span>
                <span className="hero-card-value">
                  Java, Spring Boot, React, PostgreSQL, MongoDB, Docker
                </span>
              </div>

              <div className="hero-card-row">
                <span className="hero-card-label">Hobbies</span>
                <span className="hero-card-value">
                  Football, programming, teaching on YouTube
                </span>
              </div>
            </div>

            <div className="hero-card-footer">
              <a
                href="https://www.youtube.com/@yourfavprogrammer"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-card-link"
              >
                YouTube: @yourfavprogrammer
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
