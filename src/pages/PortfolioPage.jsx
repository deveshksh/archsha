import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getFilterOptions, getProjects } from '../data/contentStore'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const defaultFilters = {
  role: 'all',
  tag: 'all',
}

function PortfolioPage() {
  const [filters, setFilters] = useState(defaultFilters)
  const projects = getProjects()
  const options = getFilterOptions()

  useDocumentMeta({
    title: 'Portfolio — Archana Shaji',
    description: 'Filterable embroidery portfolio with couture project stories, tags, and role-based contributions.',
  })

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const roleMatch = filters.role === 'all' || project.roles.includes(filters.role)
        const tagMatch = filters.tag === 'all' || project.tags.includes(filters.tag)
        return roleMatch && tagMatch
      }),
    [filters, projects],
  )

  const handleFilterChange = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }))
  }

  return (
    <section className="section container">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Complete project archive"
          description="Projects are rendered from the data layer and adapt to new media, text, and taxonomy — filter by role or technique."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <FilterBar options={options} filters={filters} onFilterChange={handleFilterChange} />
      </Reveal>

      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Reveal>
          <p className="empty-state">No projects match this filter combination.</p>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <p style={{
          marginTop: 'var(--space-xl)',
          fontSize: 'var(--step--2)',
          color: 'var(--color-subtle-ink)',
          textAlign: 'center',
          letterSpacing: '0.06em',
        }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </Reveal>
    </section>
  )
}

export default PortfolioPage
