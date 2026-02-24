import { Link } from 'react-router-dom'
import Reveal from '../components/motion/Reveal'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function NotFoundPage() {
  useDocumentMeta({
    title: '404 — Page Not Found | Archana Shaji',
    description: 'The page you requested does not exist.',
  })

  return (
    <section className="section container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Reveal>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--step-4)',
          fontWeight: 300,
          color: 'var(--color-accent-light)',
          lineHeight: 1,
          marginBottom: 'var(--space-sm)',
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--step-2)',
          fontWeight: 400,
          marginBottom: 'var(--space-sm)',
        }}>
          Page not found
        </h1>
        <p className="empty-state" style={{ marginBottom: 'var(--space-lg)' }}>
          The page you requested does not exist or has been moved.
        </p>
        <Link className="button button--ghost" to="/">
          Return Home
        </Link>
      </Reveal>
    </section>
  )
}

export default NotFoundPage
