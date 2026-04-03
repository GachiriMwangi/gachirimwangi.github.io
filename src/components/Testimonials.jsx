import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <p className="label">Testimonials</p>
        <h2 className="heading">What People Say</h2>
        <p className="subheading">Feedback from clients and colleagues I've worked with.</p>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {t.avatar
                    ? <img src={t.avatar} alt={t.name} />
                    : t.initials
                  }
                </div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
