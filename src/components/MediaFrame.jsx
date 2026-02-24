function MediaFrame({ item, priority = false, portrait = false }) {
  if (!item) return null

  const frameClass = `media-frame media-frame--${item.type === 'video' ? 'video' : 'image'}${portrait ? ' media-frame--portrait' : ''}`

  if (item.type === 'video') {
    return (
      <div className={frameClass}>
        <video controls playsInline preload="metadata" aria-label={item.alt || 'Project video'}>
          <source src={item.src} />
        </video>
      </div>
    )
  }

  return (
    <div className={frameClass}>
      <img
        src={item.src}
        alt={item.alt || ''}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  )
}

export default MediaFrame
