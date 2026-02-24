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
    title: project ? `${project.title} | Archana Shaji` : 'Project | Archana Shaji',
    description: project?.overview || 'Editorial embroidery project details and process documentation.',
  })

  if (!project) {
    return (
      <section className="section container">
        <p className="empty-state">Project not found.</p>
        <Link className="button button--ghost" to="/portfolio">
          Back to portfolio
        </Link>
      </section>
    )
  }

  return (
    <article className="project-page">
      <section className="section container">
        <p className="project-page__eyebrow">{project.year}</p>
        <h1 className="project-page__title">{project.title}</h1>
        <p className="project-page__subtitle">{project.subtitle}</p>
      </section>

      <section className="container">
        <MediaFrame item={project.heroMedia} priority />
      </section>

      <section className="section container project-page__narrative-grid">
        <Reveal>
          <SectionHeading eyebrow="Overview" title="Project narrative" />
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

      <section className="section container">
        <SectionHeading
          eyebrow="Macro Details"
          title="Process and finish"
          description="Media blocks auto-adapt to image or video assets uploaded through the content layer."
        />

        <div className="project-media-grid">
          {project.gallery.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={index * 0.08}>
              <MediaFrame item={item} />
            </Reveal>
          ))}
        </div>

        <ul className="tag-list" aria-label="Project techniques and tags">
          {[...project.techniques, ...project.tags].map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ProjectPage
