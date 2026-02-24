import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import ProjectCard from '../components/ProjectCard'
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
    title: 'Portfolio | Archana Shaji',
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
      <SectionHeading
        eyebrow="Portfolio"
        title="Auto-generated archive"
        description="Projects are rendered from the data layer and adapt to new media, text, and taxonomy without template edits."
      />

      <FilterBar options={options} filters={filters} onFilterChange={handleFilterChange} />

      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="empty-state">No projects match this filter combination.</p>
      )}
    </section>
  )
}

export default PortfolioPage
