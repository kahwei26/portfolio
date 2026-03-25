import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useState, useEffect } from 'react'
import { FaGraduationCap, FaBriefcase, FaCode, FaArrowRight, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import {
    SiJavascript, SiTypescript, SiPython, SiPostgresql, SiR,
    SiNodedotjs, SiExpress, SiNextdotjs, SiReact,
    SiMongodb, SiMysql, SiGit, SiPostman
} from 'react-icons/si'
import { AiOutlineExperiment } from 'react-icons/ai'
import { VscCode, VscAzure } from 'react-icons/vsc'
import aboutMeImg from '../assets/about-me.jpg'
import './Home.css'

const iconMap = {
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'Python': <SiPython />,
    'SQL': <SiPostgresql />,
    'R': <SiR />,
    'Node.js': <SiNodedotjs />,
    'Express': <SiExpress />,
    'Next.js': <SiNextdotjs />,
    'React': <SiReact />,
    'MongoDB': <SiMongodb />,
    'MySQL': <SiMysql />,
    'Azure': <VscAzure />,
    'Git': <SiGit />,
    'VS Code': <VscCode />,
    'Postman': <SiPostman />,
    'RStudio': <SiR />,
    'Weka': <AiOutlineExperiment />
}

const skills = {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'R'],
    Backend: ['Node.js', 'Express'],
    Frontend: ['Next.js', 'React'],
    Databases: ['MongoDB', 'MySQL'],
    'Cloud & DevOps': ['Azure', 'Git'],
    Tools: ['VS Code', 'Postman', 'RStudio', 'Weka'],
}

const FULL_NAME = 'KAH WEI CHONG'

function useTypewriter(text, speed = 80, delay = 600) {
    const [displayed, setDisplayed] = useState('')
    const [done, setDone] = useState(false)
    useEffect(() => {
        let i = 0
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1))
                i++
                if (i >= text.length) {
                    clearInterval(interval)
                    setDone(true)
                }
            }, speed)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timer)
    }, [text, speed, delay])
    return { displayed, done }
}

export default function Home() {
    const pageRef = useReveal()
    const { displayed, done } = useTypewriter(FULL_NAME)

    return (
        <main ref={pageRef} className="home">
            {/* ── HERO ── */}
            <section className="hero" id="home">
                <div className="orb orb--hero-1" />
                <div className="orb orb--hero-2" />
                <div className="orb orb--hero-3" />
                <div className="container hero__content">
                    <p className="hero__greeting animate-fadeUp">// Hi there, I'm</p>
                    <h1 className="hero__name animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                        <span className="text-gradient">{displayed}</span>
                        {!done && <span className="brand-cursor--blink">_</span>}
                    </h1>
                    <div className="hero__title-wrapper animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                        <span className="hero__title-static">AI Engineer</span>
                    </div>
                    <p className="hero__bio animate-fadeUp" style={{ animationDelay: '0.3s' }}>
                        I build scalable AI-powered systems that transform complex documents into structured, actionable data to solve real-world problems.
                    </p>
                    <div className="hero__ctas animate-fadeUp" style={{ animationDelay: '0.4s' }}>
                        <a href="#about" className="btn btn-primary">Explore My Portfolio</a>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <span />
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="section about" id="about">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-tag">About Me</div>
                    </div>
                    <div className="reveal about__grid">
                        <div className="about__avatar-col">
                            <div className="about__avatar">
                                <img src={aboutMeImg} alt="Kah Wei Chong" className="about__avatar-img" />
                            </div>
                        </div>
                        <div className="about__text-col">
                            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                                Passionate about solving <span className="text-amber">real-world problems with AI.</span>
                            </h2>
                            <p style={{ marginBottom: '1.25rem' }}>
                                I graduated with a Bachelor of Computer Science (Bioinformatics) from Universiti Teknologi Malaysia, where I developed a strong foundation in data-driven problem solving. During my internship, I gained hands-on experience in Vision AI, turning computer vision concepts into practical applications.
                            </p>
                            <p style={{ marginBottom: '1.25rem' }}>
                                Now, as an AI Engineer with 1.5+ years of experience, I’m focused on building production-ready, AI-powered systems. At <strong>FinXtract</strong>, I design and develop document intelligence pipelines that transform unstructured documents into structured, actionable data.
                            </p>
                            <p style={{ marginBottom: '1.25rem' }}>
                                My work spans training extraction models, building scalable pipelines, developing backend APIs, automating workflows, and creating conversational AI and lightweight interfaces that make data easier to interact with.
                            </p>
                            <p style={{ marginBottom: '1.25rem' }}>
                                I’m currently focused on building smarter, more scalable AI solutions at FinXtract—and there’s more exciting work ahead!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section className="section skills" id="skills">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-tag">Tech Stack</div>
                        <h2 className="section-title">Skills &amp; Technologies</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="skills__grid reveal">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="skills__category card">
                                <h3 className="skills__category-title">{category}</h3>
                                <div className="skills__pills">
                                    {items.map(skill => (
                                        <span key={skill} className="skills__pill">
                                            <span className="skill-icon">{iconMap[skill]}</span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUICK LINKS ── */}
            <section className="section quick-links" id="experience">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-tag">Explore</div>
                        <h2 className="section-title">My Experience &amp; Projects</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="quick-links__grid reveal">
                        <Link to="/university" className="ql-card card">
                            <div className="ql-card__icon"><FaGraduationCap /></div>
                            <h3>University</h3>
                            <p>Academic journey at Universiti Teknologi Malaysia</p>
                            <span className="ql-card__arrow"><FaArrowRight /></span>
                        </Link>
                        <Link to="/internship" className="ql-card card">
                            <div className="ql-card__icon"><FaBriefcase /></div>
                            <h3>Internship</h3>
                            <p>Internship experience at Imagine AI Sdn Bhd</p>
                            <span className="ql-card__arrow"><FaArrowRight /></span>
                        </Link>
                        <Link to="/work" className="ql-card card">
                            <div className="ql-card__icon"><FaCode /></div>
                            <h3>Current Role</h3>
                            <p>My current AI Engineer contributions at FinXtract</p>
                            <span className="ql-card__arrow"><FaArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section className="section contact" id="contact">
                <div className="container">
                    <div className="contact__card reveal card">
                        <div className="section-tag">Get In Touch</div>
                        <h2 className="contact__title">Let's Build Something Together</h2>
                        <p className="contact__text">
                            Whether it's a collaboration, job opportunity, or just a friendly chat —
                            my inbox is always open.
                        </p>
                        <div className="contact__actions">
                            <a href="mailto:kahweichong210@gmail.com" className="btn btn-outline">
                                <FaEnvelope /> Send an Email
                            </a>
                            <a href="https://www.linkedin.com/in/kah-wei-chong/" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
