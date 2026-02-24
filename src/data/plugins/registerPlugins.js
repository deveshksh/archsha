import experience from '../content/experience.json'
import profile from '../content/profile.json'
import projects from '../content/projects.json'
import techniques from '../content/techniques.json'
import { validateContent } from '../schema'

const plugins = [
  {
    type: 'profile',
    source: 'local-json',
    load: () => profile,
  },
  {
    type: 'projects',
    source: 'local-json',
    load: () => projects,
  },
  {
    type: 'techniques',
    source: 'local-json',
    load: () => techniques,
  },
  {
    type: 'experience',
    source: 'local-json',
    load: () => experience,
  },
]

export function buildContentRegistry() {
  return plugins.reduce((registry, plugin) => {
    const payload = plugin.load()
    registry[plugin.type] = {
      source: plugin.source,
      data: validateContent(plugin.type, payload),
    }
    return registry
  }, {})
}
