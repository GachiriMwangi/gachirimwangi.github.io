import { FiArrowRight, FiDownload, FiCode } from 'react-icons/fi'
import { personal } from '../data'
import useTypingAnimation from '../hooks/useTypingAnimation'

const roles = ['Full Stack Engineer', 'React Developer', 'Laravel Developer', 'AI Integration Specialist']

export default function Hero() {
  const role = useTypingAnimation(roles, 120)

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__grid">

          {/* ── Left: text ── */}
          <div>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for work
            </div>

            <h1 className="hero__title">
              Hi, I'm<br /><span>{personal.name}</span>
            </h1>

            <p className="hero__role">
              <span>{role}</span>
              <span style={{ opacity: 0.4 }}>|</span>
            </p>

            <p className="hero__desc">{personal.tagline}</p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View Projects <FiArrowRight />
              </a>
              <a href={personal.cvPath} className="btn btn-outline" target="_blank" rel="noreferrer">
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="hero__stats">
              {personal.stats.map(s => (
                <div key={s.label}>
                  <div className="hero__stat-value">{s.value}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="hero__visual">
            <div className="hero__photo-wrap">
              <div className="hero__photo-bg" />
              <div className="hero__photo">
                {personal.heroPhoto
                  ? <img src={personal.heroPhoto} alt={personal.name} />
                  : (
                    <div className="placeholder" style={{ borderRadius: 0, border: 'none' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                      <span>Hero Photo</span>
                      <small>600 × 800px · 3:4</small>
                    </div>
                  )
                }
              </div>
              <div className="hero__deco-1" />
              <div className="hero__deco-2" />
              <div className="hero__tag-card">
                <div className="hero__tag-icon"><FiCode /></div>
                React · Laravel
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
