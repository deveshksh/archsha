/* eslint-disable no-unused-vars */
import { m, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function PageTransition({ children }) {
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return children
  }

  return (
    <m.div
      key={location.pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}

export default PageTransition
