import { FiMessageSquare } from 'react-icons/fi'
import { projects } from '../data'

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="label">Portfolio</p>
            <h2 className="heading" style={{ marginBottom: 0 }}>Projects I've Built</h2>
          </div>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-card__img">
                {project.image
                  ? <img src={project.image} alt={project.title} />
                  : (
                    <div className="placeholder" style={{ borderRadius: 0, border: 'none', aspectRatio: '16/9', minHeight: 0, height: '100%' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><polyline points="3 20 7.5 14 11 18 15 12 21 20"/></svg>
                      <small>1280 × 720px · 16:9</small>
                    </div>
                  )
                }
              </div>
              <div className="project-card__body">
                <div className="project-card__tags">
                  {project.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__links">
                  <button
                    onClick={scrollToContact}
                    className="project-card__link"
                  >
                    <FiMessageSquare /> View Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
