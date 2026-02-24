import EditorialHero from '../components/EditorialHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getProfile, getProjects, getTechniques } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function HomePage() {
  const profile = getProfile() || {}
  const projects = getProjects() || []
  const techniques = getTechniques() || []

  useDocumentMeta({
    title: 'Archana Shaji | Haute Couture Embroidery',
    description:
      'Editorial portfolio of embroidery designer and embroidery manager Archana Shaji, featuring couture projects, techniques, and atelier process.',
  })

  return (
    <>
      <EditorialHero profile={profile} leadProject={projects[0]} />

      <section className="section container">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Works"
            title="Selected couture narratives"
            description="Each project aligns material storytelling with production rigor from first sample to final fitting."
          />
        </Reveal>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No projects found. Add entries to <code>src/data/content/projects.json</code>.
          </p>
        )}
      </section>

      <section className="section container">
        <Reveal>
          <SectionHeading
            eyebrow="Technique Library"
            title="Atelier capabilities"
            description="A living index of stitch methods and finishing systems used in couture development."
          />
        </Reveal>

        {techniques.length > 0 ? (
          <div className="technique-grid" role="list">
            {techniques.map((technique, index) => (
              <Reveal key={technique.id} delay={index * 0.05}>
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
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No techniques found. Add entries to <code>src/data/content/techniques.json</code>.
          </p>
        )}
      </section>
    </>
  )
}

export default HomePage
