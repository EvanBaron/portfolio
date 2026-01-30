import { useState } from 'react'
import Illustration from './Illustration'
import '../styles/menu.css'
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className={`nav-absolute ${theme}`}>
        <button className="menu-btn" onClick={toggleMenu}>
          <Illustration name="menu" className="menu-icon" />
        </button>
      </nav>

      <div
        className={`menu-backdrop ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      <aside className={`menu-overlay ${theme} ${isOpen ? 'open' : ''}`}>
        <div className="close-btn-container">
          <button className="close-btn" onClick={closeMenu}>
            <Illustration name="close" className="menu-icon" />
          </button>
        </div>

        <nav className="menu-nav">
          <a href="#hero" className="menu-link" onClick={closeMenu}>
            Home
          </a>
          <a href="#tech" className="menu-link" onClick={closeMenu}>
            Skills & Tech
          </a>
          <a href="#experiences" className="menu-link" onClick={closeMenu}>
            Experiences
          </a>
          <a href="#projects" className="menu-link" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" className="menu-link" onClick={closeMenu}>
            About Me
          </a>
        </nav>
      </aside>
    </>
  )
}
