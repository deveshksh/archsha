/* eslint-disable no-unused-vars */
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

function EditorialHero({ profile, leadProject }) {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reducedMotion ? '0%' : '10%'])

  return (
    <section className="hero container" aria-label="Introductory hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Atelier Portfolio</p>
        <h1 className="hero__title">{profile?.title || 'Embroidery Designer & Manager'}</h1>
        <p className="hero__quote">
          “{profile?.heroQuote || 'Embroidery is architecture made from thread, light, and patience.'}”
        </p>
        <p className="hero__intro">
          {profile?.intro ||
            'A couture-focused embroidery practice centered on craftsmanship, precision, and atelier execution.'}
        </p>

        <div className="hero__actions">
          <Link className="button button--primary" to="/portfolio">
            View Portfolio
          </Link>
          <Link className="button button--ghost" to="/about">
            About Archana
          </Link>
        </div>
      </div>

      <m.figure className="hero__media" style={{ y: imageY }}>
        {leadProject?.heroMedia?.src ? (
          <>
            <img
              src={leadProject.heroMedia.src}
              alt={leadProject.heroMedia.alt}
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>
              Featured project:{' '}
              <Link to={`/portfolio/${leadProject.slug}`}>{leadProject.title}</Link>
            </figcaption>
          </>
        ) : (
          <figcaption>
            Featured project unavailable. Add one entry in <code>src/data/content/projects.json</code>.
          </figcaption>
        )}
      </m.figure>
    </section>
  )
}

export default EditorialHero
