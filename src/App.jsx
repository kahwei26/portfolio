import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Internship from './pages/Internship'
import Work from './pages/Work'
import University from './pages/University'
import StarField from './components/StarField'
import './index.css'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <StarField />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/work" element={<Work />} />
        <Route path="/university" element={<University />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
