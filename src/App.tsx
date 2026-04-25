import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { cafeDetails } from './data/cafeDetails'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { RentPage } from './pages/RentPage'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="site-shell">
        <header className="site-header">
          <p className="brand-kicker">San Pedro, Laguna</p>
          <div className="site-nav-row">
            <NavLink to="/" className="brand-name">
              <img
                src={import.meta.env.BASE_URL + cafeDetails.logoPath}
                alt="Rocky's Cafe logo"
                className="brand-logo"
              />
              <span>Rocky&apos;s Cafe</span>
            </NavLink>
            <nav className="site-nav" aria-label="Main navigation">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/menu">Online Menu</NavLink>
              <NavLink to="/rent">Rent a Cart</NavLink>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/rent" element={<RentPage />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>{cafeDetails.address}</p>
          <div className="footer-links">
            <a href={cafeDetails.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={cafeDetails.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={cafeDetails.phoneLink}>{cafeDetails.phoneDisplay}</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
