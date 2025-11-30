import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className={`app theme-${theme}`}>
      <Header activeSection={activeSection} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section id="hero">
          <Hero onInView={() => setActiveSection('hero')} />
        </section>

        <section id="projects">
          <Projects onInView={() => setActiveSection('projects')} />
        </section>

        <section id="about">
          <About onInView={() => setActiveSection('about')} />
        </section>

        <section id="news">
          <NewsSection onInView={() => setActiveSection('news')} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
