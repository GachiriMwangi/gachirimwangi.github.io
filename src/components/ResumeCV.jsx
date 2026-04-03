import { FiDownload, FiFileText, FiCheckCircle } from 'react-icons/fi'
import { personal } from '../data'

const highlights = [
  'React (JavaScript) on the frontend — responsive, component-driven UIs',
  'Laravel (PHP) on the backend — clean MVC architecture and REST APIs',
  'SQL / MySQL as the primary database layer',
  'AI integration experience — built a full customer support chatbot into a live IFMS system',
  'BSc. Computer Science graduate — Jomo Kenyatta University of Agriculture & Technology',
]

export default function ResumeCV() {
  return (
    <section id="resume" className="section section-blue">
      <div className="container">
        <div className="resumecv__inner">

          {/* Left: description */}
          <div>
            <p className="label">Resume &amp; CV</p>
            <h2 className="heading">A Snapshot of My Profile</h2>
            <p className="subheading">
              Flexible Full Stack Engineer with hands-on experience building responsive, production-ready
              web applications. I enjoy clear communication, clean code, and shipping things that work.
            </p>

            <div className="resumecv__highlights">
              {highlights.map((h, i) => (
                <div key={i} className="resumecv__highlight">
                  <div className="resumecv__highlight-icon">
                    <FiCheckCircle />
                  </div>
                  <span style={{ paddingTop: '0.2rem', fontSize: '0.9rem', color: 'var(--gray-700)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: download cards */}
          <div className="resumecv__cards">
            <a
              href={personal.cvPath}
              className="resumecv__card"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="resumecv__card-icon blue">
                  <FiFileText />
                </div>
                <div>
                  <p className="resumecv__card-label">Full Document</p>
                  <p className="resumecv__card-title">Curriculum Vitae (CV)</p>
                  <p className="resumecv__card-desc">Detailed work history, projects &amp; skills</p>
                </div>
              </div>
              <div className="btn btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                <FiDownload /> Download
              </div>
            </a>

            <a
              href={personal.resumePath}
              className="resumecv__card"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="resumecv__card-icon orange">
                  <FiFileText />
                </div>
                <div>
                  <p className="resumecv__card-label">1-Page Summary</p>
                  <p className="resumecv__card-title">Resume</p>
                  <p className="resumecv__card-desc">Concise overview for recruiters</p>
                </div>
              </div>
              <div className="btn btn-outline" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                <FiDownload /> Download
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
