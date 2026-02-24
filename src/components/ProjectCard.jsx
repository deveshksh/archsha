import { m, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectCard({ project, index = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <m.article
      className="project-card"
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portfolio/${project.slug}`} className="project-card__image-wrap">
        <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" />
      </Link>

      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{project.year}</span>
          <span>{project.subtitle}</span>
        </p>

        <h3 className="project-card__title">
          <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="project-card__excerpt">{project.overview}</p>

        <ul className="tag-list" aria-label="Project tags">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </m.article>
  )
}

export default ProjectCard
