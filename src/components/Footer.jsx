import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a
            href="https://github.com/SivaPaoren"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sivapaoren"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sivapaoren@example.com">Email</a>
        </div>
        <p className="footer-copy">© 2025 Siva Paoren. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
