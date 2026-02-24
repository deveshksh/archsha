import { Link } from 'react-router-dom'
import EditorialHero from '../components/EditorialHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/motion/Reveal'
import ScrollFade from '../components/motion/ScrollFade'
import SectionHeading from '../components/SectionHeading'
import { getProfile, getProjects, getTechniques } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function HomePage() {
  const profile = getProfile() || {}
  const projects = getProjects() || []
  const techniques = getTechniques() || []

  useDocumentMeta({
    title: 'Archana Shaji — Haute Couture Embroidery',
    description:
      'Editorial portfolio of embroidery designer and embroidery manager Archana Shaji, featuring couture projects, techniques, and atelier process.',
  })

  return (
    <>
      <EditorialHero profile={profile} leadProject={projects[0]} />

      {/* ── Featured Works ── */}
      <section className="section container">
        <ScrollFade parallaxAmount={20}>
          <SectionHeading
            eyebrow="Featured Works"
            title="Selected couture narratives"
            description="Each project aligns material storytelling with production rigor — from first sample to final fitting."
          />
        </ScrollFade>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ScrollFade key={project.id} parallaxAmount={index % 2 === 0 ? 10 : -10} delay={index * 0.1}>
                <ProjectCard project={project} index={index} />
              </ScrollFade>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No projects found.
          </p>
        )}

        {projects.length > 3 && (
          <Reveal delay={0.2}>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
              <Link className="button button--ghost" to="/portfolio">
                View Full Portfolio
              </Link>
            </div>
          </Reveal>
        )}
      </section>

      {/* ── Technique Library ── */}
      <section className="section container">
        <Reveal>
          <SectionHeading
            eyebrow="Technique Library"
            title="Atelier capabilities"
            description="A living index of stitch methods and finishing systems refined across years of couture development."
          />
        </Reveal>

        {techniques.length > 0 ? (
          <div className="technique-grid" role="list">
            {techniques.map((technique, index) => (
              <ScrollFade key={technique.id} parallaxAmount={index * 2} scaleFrom={0.98}>
                <article className="technique-card" role="listitem">
                  <p className="technique-card__category">{technique.category}</p>
                  <h3>{technique.name}</h3>
                  <p>{technique.description}</p>
                  <ul className="tag-list" aria-label={`${technique.name} tags`}>
                    {technique.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </ScrollFade>
            ))}
          </div>
        ) : (
          <p className="empty-state">No techniques found.</p>
        )}
      </section>

      {/* ── Closing CTA ── */}
      <section className="section container">
        <ScrollFade parallaxAmount={15} opacityRange={[0, 1]}>
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-2xl) var(--space-md)',
            borderTop: '1px solid var(--color-line-subtle)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--step-2)',
              fontWeight: 400,
              marginBottom: 'var(--space-md)',
              fontStyle: 'italic',
              color: 'var(--color-subtle-ink)',
            }}>
              Every thread carries a decision. Every stitch tells a story.
            </p>
            <Link className="button button--primary" to="/contact">
              Commission & Collaborate
            </Link>
          </div>
        </ScrollFade>
      </section>
    </>
  )
}

export default HomePage
