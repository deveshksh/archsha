import { NavLink, Outlet } from 'react-router-dom'
import PageTransition from '../components/motion/PageTransition'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary">
        <div className="site-header__inner container">
          <NavLink to="/" className="site-mark" aria-label="Archana Shaji home">
            <span className="site-mark__name">Archana Shaji</span>
            <span className="site-mark__meta">Embroidery Designer & Manager</span>
          </NavLink>

          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <PageTransition>
        <main id="main-content" className="site-main" tabIndex="-1">
          <Outlet />
        </main>
      </PageTransition>

      <footer className="site-footer">
        <div className="site-footer__inner container">
          <p>Atelier portfolio for couture embroidery practice and leadership.</p>
          <p>© {new Date().getFullYear()} Archana Shaji</p>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
