import { Link, useParams } from 'react-router-dom'
import MediaFrame from '../components/MediaFrame'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getProjectBySlug } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useDocumentMeta({
    title: project ? `${project.title} — Archana Shaji` : 'Project — Archana Shaji',
    description: project?.overview || 'Editorial embroidery project details and process documentation.',
  })

  if (!project) {
    return (
      <section className="section container">
        <p className="empty-state">Project not found.</p>
        <Link className="button button--ghost" to="/portfolio" style={{ marginTop: 'var(--space-md)' }}>
          Back to portfolio
        </Link>
      </section>
    )
  }

  return (
    <article className="project-page">
      {/* ── Back Link ── */}
      <section className="container" style={{ paddingTop: 'var(--space-lg)' }}>
        <Link to="/portfolio" className="project-page__back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>
      </section>

      {/* ── Header ── */}
      <section className="section container project-page__header">
        <Reveal y={20}>
          <p className="project-page__eyebrow">{project.year}</p>
        </Reveal>
        <Reveal delay={0.08} y={24}>
          <h1 className="project-page__title">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="project-page__subtitle">{project.subtitle}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="project-page__roles">
            {project.roles.map((role) => (
              <span key={role} className="project-page__role-badge">{role}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Hero Image ── */}
      <section className="container">
        <Reveal y={30}>
          <MediaFrame item={project.heroMedia} priority />
        </Reveal>
      </section>

      {/* ── Overview ── */}
      <section className="section container">
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--step-1)',
            lineHeight: 1.7,
            maxWidth: '65ch',
            color: 'var(--color-subtle-ink)',
            fontStyle: 'italic',
          }}>
            {project.overview}
          </p>
        </Reveal>
      </section>

      {/* ── Narrative ── */}
      <section className="section container project-page__narrative-grid">
        <Reveal>
          <SectionHeading eyebrow="Process" title="Project narrative" />
        </Reveal>

        <div className="narrative-blocks">
          <Reveal delay={0.05}>
            <article>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article>
              <h2>Approach</h2>
              <p>{project.approach}</p>
            </article>
          </Reveal>
          <Reveal delay={0.19}>
            <article>
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section container">
        <Reveal>
          <SectionHeading
            eyebrow="Macro Details"
            title="Process and finish"
            description="Media blocks auto-adapt to image or video assets uploaded through the content layer."
          />
        </Reveal>

        <div className="project-media-grid">
          {project.gallery.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={index * 0.08}>
              <MediaFrame item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="tag-list" aria-label="Project techniques and tags">
            {[...project.techniques, ...project.tags].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Next Project CTA ── */}
      <section className="container" style={{ paddingBottom: 'var(--space-2xl)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--color-line-subtle)' }}>
            <Link className="button button--ghost" to="/portfolio">
              Explore More Projects
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  )
}

export default ProjectPage
