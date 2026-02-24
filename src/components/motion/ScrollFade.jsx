import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * ScrollFade — fades content in and optionally applies
 * a subtle parallax shift as the user scrolls past it.
 * GPU-friendly, uses transform + opacity only.
 */
function ScrollFade({
  children,
  className = '',
  parallaxAmount = 0,
  scaleFrom = 1,
  opacityRange = [0, 1],
  offset = ['start end', 'end start'],
}) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [parallaxAmount, -parallaxAmount],
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    reducedMotion ? [1, 1, 1, 1] : [opacityRange[0], 1, 1, opacityRange[1]],
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    reducedMotion ? [1, 1, 1, 1] : [scaleFrom, 1, 1, scaleFrom],
  )

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ y, opacity, scale, willChange: 'transform, opacity' }}
    >
      {children}
    </m.div>
  )
}

export default ScrollFade
