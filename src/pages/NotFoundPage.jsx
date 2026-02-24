import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section container">
      <h1>Page not found</h1>
      <p className="empty-state">The page you requested does not exist.</p>
      <Link className="button button--ghost" to="/">
        Return home
      </Link>
    </section>
  )
}

export default NotFoundPage
