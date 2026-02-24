/* eslint-disable no-unused-vars */
import { m, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectCard({ project, index = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <m.article
      className="project-card"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay: reducedMotion ? 0 : index * 0.07 }}
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
