import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { personal } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Portfolio enquiry — ' + name)}&body=${encodeURIComponent(`Hi Gachiri,\n\n${message}\n\nRegards,\n${name}\n${email}`)}`
    window.location.href = mailto
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Henry William" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="henry@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project enquiry" value={form.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <FiSend /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
