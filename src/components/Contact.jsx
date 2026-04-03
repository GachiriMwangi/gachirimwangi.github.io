import { useForm, ValidationError } from '@formspree/react'
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { personal } from '../data'

export default function Contact() {
  const [state, handleSubmit] = useForm('mreoygnr')

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="label">Get In Touch</p>
        <h2 className="heading">Contact Me</h2>
        <p className="subheading">Have a project in mind or just want to say hi? My inbox is always open.</p>

        <div className="contact__grid">

          {/* Left: info */}
          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.8 }}>
              I'm currently open to freelance projects and full-time opportunities.
              Whether you have a question or want to start a project together, feel free to reach out.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon"><FiMapPin /></div>
                <div>
                  <p className="contact__info-label">Location</p>
                  <p className="contact__info-value">{personal.location}</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><FiPhone /></div>
                <div>
                  <p className="contact__info-label">Phone</p>
                  <a href={`tel:${personal.phone}`} className="contact__info-value">{personal.phone}</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><FiMail /></div>
                <div>
                  <p className="contact__info-label">Email</p>
                  <a href={`mailto:${personal.email}`} className="contact__info-value">{personal.email}</a>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a href={personal.linkedin} className="contact__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={personal.github} className="contact__social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={`mailto:${personal.email}`} className="contact__social-link" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form">
            {state.succeeded
              ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', padding: '3rem 0', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--blue)' }}>✓</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-900)' }}>Message sent!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              )
              : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input id="name" name="name" type="text" placeholder="Henry William" required />
                      <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: 'red', fontSize: '0.8rem' }} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="henry@example.com" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: 'red', fontSize: '0.8rem' }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="Project enquiry" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell me about your project..." required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: 'red', fontSize: '0.8rem' }} />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={state.submitting}
                  >
                    <FiSend /> {state.submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )
            }
          </div>

        </div>
      </div>
    </section>
  )
}
