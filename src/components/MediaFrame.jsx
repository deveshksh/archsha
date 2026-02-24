function MediaFrame({ item, priority = false }) {
  if (item.type === 'video') {
    return (
      <div className="media-frame media-frame--video">
        <video controls playsInline preload="metadata">
          <source src={item.src} />
        </video>
      </div>
    )
  }

  return (
    <div className="media-frame media-frame--image">
      <img
        src={item.src}
        alt={item.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  )
}

export default MediaFrame
