import { personal, skills, techTags } from '../data'

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about__grid">

          {/* ── Left: photo ── */}
          <div className="about__photo-wrap">
            <div className="about__photo-bg" />
            <div className="about__photo">
              {personal.aboutPhoto
                ? <img src={personal.aboutPhoto} alt={personal.name} />
                : (
                  <div className="placeholder" style={{ borderRadius: 0, border: 'none', minHeight: 0, height: '100%' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                    <span>About Photo</span>
                    <small>520 × 650px · 4:5</small>
                  </div>
                )
              }
            </div>
          </div>

          {/* ── Right: text + skills ── */}
          <div>
            <p className="label">About Me</p>
            <h2 className="heading">Passionate about building<br />great web experiences</h2>
            <p className="subheading" style={{ marginBottom: '1.5rem' }}>{personal.bio}</p>

            <div className="about__info-list">
              <div className="about__info-item">
                <strong>Role</strong>
                <span>{personal.role}</span>
              </div>
              <div className="about__info-item">
                <strong>Location</strong>
                <span>{personal.location}</span>
              </div>
              <div className="about__info-item">
                <strong>Education</strong>
                <span>BSc. Computer Science</span>
              </div>
              <div className="about__info-item">
                <strong>Experience</strong>
                <span>2+ Years</span>
              </div>
              <div className="about__info-item">
                <strong>Domain</strong>
                <span>Ecommerce, BFSI, Digital Marketing</span>
              </div>
              <div className="about__info-item">
                <strong>Language</strong>
                <span>English</span>
              </div>
            </div>

            <p className="label">Core Skills</p>
            <div className="skills__list">
              {skills.map(s => (
                <div key={s.label}>
                  <div className="skill-item__header">
                    <span>{s.label}</span>
                    <span style={{ color: 'var(--blue)', fontWeight: 700 }}>{s.percent}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div className="skill-item__fill" style={{ width: `${s.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="tags-row">
              {techTags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
