import { buildContentRegistry } from './plugins/registerPlugins'

const registry = buildContentRegistry()

export function getProfile() {
  return registry.profile.data
}

export function getProjects() {
  return registry.projects.data
}

export function getProjectBySlug(slug) {
  return registry.projects.data.find((project) => project.slug === slug)
}

export function getTechniques() {
  return registry.techniques.data
}

export function getExperience() {
  return registry.experience.data
}

export function getFilterOptions() {
  const projects = getProjects()

  const tags = [...new Set(projects.flatMap((project) => project.tags))].sort()
  const roles = [...new Set(projects.flatMap((project) => project.roles))].sort()

  return { tags, roles }
}
