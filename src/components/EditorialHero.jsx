import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './motion/Reveal'

function EditorialHero({ profile, leadProject }) {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.5], ['0%', reducedMotion ? '0%' : '8%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, reducedMotion ? 1 : 1.05])

  return (
    <section className="hero container" aria-label="Introductory hero">
      <div className="hero__content">
        <Reveal y={20}>
          <p className="hero__eyebrow">Atelier Portfolio</p>
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <h1 className="hero__title">
            {profile?.name || 'Archana Shaji'}
          </h1>
        </Reveal>

        <Reveal delay={0.2} y={20}>
          <p className="hero__quote">
            &ldquo;{profile?.heroQuote || 'Embroidery is architecture made from thread, light, and patience.'}&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.3} y={20}>
          <p className="hero__intro">
            {profile?.intro ||
              'A couture-focused embroidery practice centered on craftsmanship, precision, and atelier execution.'}
          </p>
        </Reveal>

        <Reveal delay={0.4} y={14}>
          <div className="hero__actions">
            <Link className="button button--primary" to="/portfolio">
              View Portfolio
            </Link>
            <Link className="button button--ghost" to="/about">
              About Archana
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25} y={40}>
        <m.figure className="hero__media" style={{ y: imageY, scale: imageScale }}>
          {leadProject?.heroMedia?.src ? (
            <>
              <img
                src={leadProject.heroMedia.src}
                alt={leadProject.heroMedia.alt}
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>
                Featured:{' '}
                <Link to={`/portfolio/${leadProject.slug}`}>{leadProject.title}</Link>
              </figcaption>
            </>
          ) : (
            <figcaption>
              Featured project unavailable.
            </figcaption>
          )}
        </m.figure>
      </Reveal>
    </section>
  )
}

export default EditorialHero
