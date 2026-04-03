import { FiBook, FiBriefcase } from 'react-icons/fi'
import { journey } from '../data'

export default function Journey() {
  const education   = journey.filter(j => j.type === 'education')
  const experience  = journey.filter(j => j.type === 'experience')

  return (
    <section id="journey" className="section">
      <div className="container">
        <p className="label">My Journey</p>
        <h2 className="heading">Education &amp; Experience</h2>
        <p className="subheading">The path that has shaped my skills and perspective.</p>

        <div className="journey__grid">
          {/* Education column */}
          <div>
            <div className="journey__column-title">
              <FiBook /> Education
            </div>
            <div className="journey__timeline">
              {education.map((item, i) => (
                <JourneyItem key={i} item={item} icon={<FiBook />} />
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div>
            <div className="journey__column-title">
              <FiBriefcase /> Experience
            </div>
            <div className="journey__timeline">
              {experience.length > 0
                ? experience.map((item, i) => (
                    <JourneyItem key={i} item={item} icon={<FiBriefcase />} />
                  ))
                : (
                  <div style={{ color: 'var(--gray-400)', fontSize: '0.9rem', padding: '1rem 0' }}>
                    Work experience entries coming soon.
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneyItem({ item, icon }) {
  return (
    <div className="journey-item">
      <div className="journey-item__left">
        <div className="journey-item__dot">{icon}</div>
        <div className="journey-item__line" />
      </div>
      <div>
        <p className="journey-item__date">{item.date}</p>
        <p className="journey-item__title">{item.title}</p>
        <p className="journey-item__institution">{item.institution}</p>
        <p className="journey-item__desc">{item.description}</p>
      </div>
    </div>
  )
}
