import { FiLinkedin, FiGithub, FiMail, FiHeart } from 'react-icons/fi'
import { personal } from '../data'

const navLinks = [
  ['#home',         'Home'],
  ['#about',        'About'],
  ['#journey',      'Journey'],
  ['#projects',     'Projects'],
  ['#testimonials', 'Testimonials'],
  ['#resume',       'Resume'],
  ['#contact',      'Contact'],
]

function scrollTo(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-name">
              {personal.firstName}<span>.</span>
            </div>
            <p className="footer__brand-desc">
              Full Stack Engineer based in Nairobi, Kenya. Building fast, scalable full stack applications
              with clean code and a sharp eye for detail.
            </p>
            <div className="footer__social" style={{ marginTop: '1.25rem' }}>
              <a href={personal.linkedin} className="footer__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={personal.github}   className="footer__social-link" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={`mailto:${personal.email}`} className="footer__social-link" aria-label="Email"><FiMail /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer__col-title">Navigation</p>
            <nav className="footer__links">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={e => scrollTo(e, href)}>{label}</a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <p className="footer__col-title">Contact</p>
            <nav className="footer__links">
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              <span style={{ color: 'var(--gray-500)' }}>{personal.location}</span>
            </nav>
          </div>

        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>      
        </div>
      </div>
    </footer>
  )
}
