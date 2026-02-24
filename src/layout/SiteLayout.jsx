import { useState, useCallback, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import PageTransition from '../components/motion/PageTransition'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary">
        <div className="site-header__inner container">
          <NavLink to="/" className="site-mark" aria-label="Archana Shaji home">
            <span className="site-mark__name">Archana Shaji</span>
            <span className="site-mark__meta">Embroidery · Couture</span>
          </NavLink>

          <button
            className="site-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="site-menu-toggle__bar" />
          </button>

          <nav
            id="main-nav"
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            aria-label="Main navigation"
          >
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
