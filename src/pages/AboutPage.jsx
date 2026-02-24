import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getExperience, getProfile } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function AboutPage() {
  const profile = getProfile() || {}
  const experience = getExperience() || []

  useDocumentMeta({
    title: 'About | Archana Shaji',
    description:
      'Creative philosophy and management approach of embroidery designer and embroidery manager Archana Shaji.',
  })

  return (
    <section className="section container about-page">
      <SectionHeading
        eyebrow="About"
        title={profile.name || 'Archana Shaji'}
        description="Designer precision with atelier operations leadership across couture timelines."
      />

      <div className="about-page__grid">
        <Reveal>
          <article className="about-card">
            <h2>Creative Philosophy</h2>
            {(profile.philosophy || []).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="about-card">
            <h2>Management Expertise</h2>
            <ul className="editorial-list">
              {(profile.managementHighlights || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <div className="timeline" aria-label="Experience timeline">
        {experience.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.07}>
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
          <p className="empty-state">
            No experience entries found. Add entries to <code>src/data/content/experience.json</code>.
          </p>
        )}
      </div>
    </section>
  )
}

export default AboutPage
