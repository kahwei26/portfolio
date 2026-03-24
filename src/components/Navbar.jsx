import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { hash: '#about', label: 'About Me' },
    { hash: '#skills', label: 'Skills' },
    {
        hash: '#experience',
        label: 'Experience',
        dropdown: [
            { to: '/university', label: 'University' },
            { to: '/internship', label: 'Internship' },
            { to: '/work', label: 'Current Role' },
        ]
    },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
        setDropdownOpen(false)
    }, [location])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.has-dropdown')) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const scrollToHash = (hash) => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const handleHashClick = (e, hash) => {
        e.preventDefault()
        setMenuOpen(false)
        setDropdownOpen(false)
        if (location.pathname === '/') {
            scrollToHash(hash)
        } else {
            navigate('/')
            setTimeout(() => scrollToHash(hash), 300)
        }
    }

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="brand-bracket">&lt;</span>
                    KW <span className="brand-bracket"> /&gt;</span>
                </Link>

                <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <div key={link.hash} className={`navbar__item ${link.dropdown ? 'has-dropdown' : ''} ${link.dropdown && dropdownOpen ? 'dropdown-open' : ''}`}>
                            <a
                                href={link.hash}
                                className="navbar__link"
                                onClick={(e) => {
                                    if (link.dropdown) {
                                        e.preventDefault()
                                        setDropdownOpen(!dropdownOpen)
                                    } else {
                                        handleHashClick(e, link.hash)
                                    }
                                }}
                            >
                                {link.label}
                                {link.dropdown && <span className="dropdown-caret">▼</span>}
                            </a>
                            {link.dropdown && (
                                <div className="navbar__dropdown">
                                    {link.dropdown.map(drop => (
                                        <Link
                                            key={drop.to}
                                            to={drop.to}
                                            className="navbar__dropdown-link"
                                            onClick={() => {
                                                setMenuOpen(false)
                                                setDropdownOpen(false)
                                            }}
                                        >
                                            {drop.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a
                        href="#contact"
                        className="btn btn-primary navbar__cta"
                        onClick={(e) => handleHashClick(e, '#contact')}
                    >
                        Contact
                    </a>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}

