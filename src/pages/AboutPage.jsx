import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getExperience, getProfile } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function AboutPage() {
  const profile = getProfile() || {}
  const experience = getExperience() || []
  const stats = profile.stats || {}

  useDocumentMeta({
    title: 'About — Archana Shaji',
    description:
      'Creative philosophy and management approach of embroidery designer and embroidery manager Archana Shaji.',
  })

  return (
    <section className="section container about-page">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title={profile.name || 'Archana Shaji'}
          description="Designer precision meets atelier operations leadership across couture timelines and international teams."
        />
      </Reveal>

      {/* ── Stats ── */}
      {stats && Object.keys(stats).length > 0 && (
        <Reveal delay={0.1}>
          <div className="about-stats">
            <div className="about-stat">
              <p className="about-stat__number">{stats.yearsOfExperience}</p>
              <p className="about-stat__label">Years Experience</p>
            </div>
            <div className="about-stat">
              <p className="about-stat__number">{stats.coutureProjects}</p>
              <p className="about-stat__label">Couture Projects</p>
            </div>
            <div className="about-stat">
              <p className="about-stat__number">{stats.techniquesSpecialty}</p>
              <p className="about-stat__label">Techniques</p>
            </div>
            <div className="about-stat">
              <p className="about-stat__number">{stats.ateliersLed}</p>
              <p className="about-stat__label">Ateliers Led</p>
            </div>
          </div>
        </Reveal>
      )}

      {/* ── Philosophy & Management ── */}
      <div className="about-page__grid">
        <Reveal>
          <article className="about-card">
            <h2>Creative Philosophy</h2>
            {(profile.philosophy || []).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="about-card">
            <h2>Management Expertise</h2>
            <ul className="editorial-list">
              {(profile.managementHighlights || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      {/* ── Timeline ── */}
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Career journey"
          description="A decade of progressive growth from artisan craft to atelier leadership."
        />
      </Reveal>

      <div className="timeline" aria-label="Experience timeline">
        {experience.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.08}>
            <article className="timeline-item">
              <p className="timeline-item__period">{entry.period}</p>
              <h3>
                {entry.role} · {entry.company}
              </h3>
              <p>{entry.summary}</p>
            </article>
          </Reveal>
        ))}
        {experience.length === 0 && (
          <p className="empty-state">No experience entries found.</p>
        )}
      </div>
    </section>
  )
}

export default AboutPage
