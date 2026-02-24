const requiredString = (value) => typeof value === 'string' && value.trim().length > 0

const isMediaObject = (media) => {
  if (!media || typeof media !== 'object') {
    return false
  }

  if (!['image', 'video'].includes(media.type || 'image')) {
    return false
  }

  return requiredString(media.src) && requiredString(media.alt ?? 'media')
}

const validators = {
  profile: (value) =>
    value &&
    requiredString(value.name) &&
    requiredString(value.title) &&
    requiredString(value.heroQuote) &&
    requiredString(value.intro) &&
    requiredString(value.email),

  techniques: (value) =>
    Array.isArray(value) &&
    value.every(
      (item) =>
        requiredString(item.id) &&
        requiredString(item.name) &&
        requiredString(item.category) &&
        requiredString(item.description) &&
        Array.isArray(item.tags),
    ),

  experience: (value) =>
    Array.isArray(value) &&
    value.every(
      (item) =>
        requiredString(item.id) &&
        requiredString(item.period) &&
        requiredString(item.role) &&
        requiredString(item.company) &&
        requiredString(item.summary),
    ),

  projects: (value) =>
    Array.isArray(value) &&
    value.every(
      (item) =>
        requiredString(item.id) &&
        requiredString(item.slug) &&
        requiredString(item.title) &&
        requiredString(item.year) &&
        Array.isArray(item.roles) &&
        Array.isArray(item.tags) &&
        Array.isArray(item.techniques) &&
        isMediaObject({ ...item.thumbnail, type: 'image' }) &&
        isMediaObject({ ...item.heroMedia, type: item.heroMedia?.type || 'image' }) &&
        Array.isArray(item.gallery) &&
        item.gallery.every(isMediaObject),
    ),
}

export function validateContent(type, data) {
  const validate = validators[type]

  if (!validate) {
    throw new Error(`Unknown schema type: ${type}`)
  }

  if (!validate(data)) {
    throw new Error(`Invalid content schema for: ${type}`)
  }

  return data
}
