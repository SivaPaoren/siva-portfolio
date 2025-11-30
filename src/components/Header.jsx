import React from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Header = ({ activeSection }) => {
  return (
    <header className="header blur-bg">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-mark">SP</span>
          <span className="logo-text">Siva Paoren</span>
        </div>
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? 'nav-link-active' : ''
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
