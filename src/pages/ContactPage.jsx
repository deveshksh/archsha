import Reveal from '../components/motion/Reveal'
import { getProfile } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function ContactPage() {
  const profile = getProfile() || {}

  useDocumentMeta({
    title: 'Contact — Archana Shaji',
    description: 'Contact details for couture embroidery collaborations, commissions, and consulting.',
  })

  return (
    <section className="section container contact-page">
      <Reveal>
        <header>
          <p className="section-heading__eyebrow">Contact</p>
          <h1 className="contact-page__title">Commission & collaboration inquiries</h1>
          <p className="contact-page__body">
            For couture embroidery development, atelier direction, private client commissions,
            or creative consulting — reach out directly to the studio.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="contact-card">
          <div className="contact-card__row">
            <span className="contact-card__label">Email</span>
            <span className="contact-card__value">
              <a href={`mailto:${profile.email || 'atelier@archanashaji.com'}`}>
                {profile.email || 'atelier@archanashaji.com'}
              </a>
            </span>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__label">Location</span>
            <span className="contact-card__value">
              {profile.location || 'Paris / Mumbai'}
            </span>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__label">Availability</span>
            <span className="contact-card__value">
              Open to commissions & consulting
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <ul className="contact-links" aria-label="Social links">
          {(profile.social || []).map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="contact-cta">
          <p className="contact-cta__text">
            &ldquo;The best embroidery conversations begin with a simple question: what do you want the fabric to feel?&rdquo;
          </p>
          <a
            className="button button--primary"
            href={`mailto:${profile.email || 'atelier@archanashaji.com'}`}
          >
            Start a Conversation
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default ContactPage
