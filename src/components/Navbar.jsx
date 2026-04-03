import { useState, useEffect } from 'react'
import { personal } from '../data'

const links = [
  { href: '#home',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#journey',      label: 'Journey' },
  { href: '#projects',     label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#resume',       label: 'Resume' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(e, href) {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(href)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo" onClick={e => scrollTo(e, '#home')}>
            {personal.firstName}<span>.</span>
          </a>

          <div className="navbar__links">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={e => scrollTo(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:gachirimwangi2021@gmail.com"
            className="btn btn-orange navbar__cta"
          >
            Hire Me
          </a>

          <button
            className="navbar__burger"
            onClick={() => setOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`navbar__mobile${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:gachirimwangi2021@gmail.com" className="btn btn-orange" style={{ marginTop: '0.5rem' }}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
