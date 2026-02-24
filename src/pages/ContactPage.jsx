import { getProfile } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function ContactPage() {
  const profile = getProfile() || {}

  useDocumentMeta({
    title: 'Contact | Archana Shaji',
    description: 'Contact details for couture embroidery collaborations, commissions, and consulting.',
  })

  return (
    <section className="section container contact-page">
      <header>
        <p className="section-heading__eyebrow">Contact</p>
        <h1 className="contact-page__title">Commission & collaboration inquiries</h1>
        <p className="contact-page__body">
          For couture development, atelier direction, or private client commissions, contact the studio.
        </p>
      </header>

      <div className="contact-card">
        <p>
          <span>Email</span>
          <a href={`mailto:${profile.email || 'atelier@archanashaji.com'}`}>
            {profile.email || 'atelier@archanashaji.com'}
          </a>
        </p>
        <p>
          <span>Location</span>
          <strong>{profile.location || 'Paris / Mumbai'}</strong>
        </p>
      </div>

      <ul className="contact-links" aria-label="Social links">
        {(profile.social || []).map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactPage
