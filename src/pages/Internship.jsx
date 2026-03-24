import { useReveal } from '../hooks/useReveal'
import { FaBuilding } from 'react-icons/fa'
import ProjectGallery from '../components/ProjectGallery'
import './Internship.css'

const internships = [
    {
        company: 'Imagine AI Sdn Bhd',
        role: 'AI Developer Intern',
        period: 'Sep 2023 – Feb 2024',
        location: 'Kuala Lumpur, Malaysia (20 Weeks)',
        description:
            'Researched and implemented Computer Vision solutions for industrial and commercial applications, with a primary focus on OCR systems using YOLO-based architectures. Developed and optimized models for text extraction and machine part inspection tasks, improving accuracy and deployment efficiency. Additionally, gained full-stack development experience, contributing to backend systems using MongoDB and Microsoft SQL Server, as well as frontend applications built with C# WinForms.',
        contributions: [
            'YOLO-based OCR Research: Evaluated YOLOv8 feasibility for Optical Character Recognition, managing the end-to-end pipeline from data collection to model training.',
            'Full-Stack Desktop Engineering: Developed offline-capable backend and frontend solutions using C# .NET 6.0 (WinForms) for high-precision inspection software.',
            'Industrial Defect Detection: Supported the development of automated machine-part inspection models through robust data annotation and performance testing.',
            'Computer Vision Prototype: Engineered a real-time American Sign Language (ASL) detection system using Python and OpenCV.',
            'System Maintenance: Debugged and optimized core C# software modules to ensure reliability in localized client environments.',
        ],
        tech: ['YOLOv8', 'Python', 'C#', '.NET 6.0', 'WinForms', 'Roboflow', 'OpenCV'],
    },
]

export default function Internship() {
    const ref = useReveal()

    return (
        <main ref={ref} className="internship-page">
            {/* Page Header */}
            <section className="page-hero dot-bg">
                <div className="orb orb--page" />
                <div className="orb orb--page-left" />
                <div className="container page-hero__content">
                    <div className="section-tag animate-fadeUp">Career Journey</div>
                    <h1 className="page-hero__title animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                        Internship Experience
                    </h1>
                    <p className="page-hero__sub animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                        A timeline of my internship roles, the teams I joined, and what I built along the way.
                    </p>
                </div>
            </section>

            {/* ROLE OVERVIEW */}
            <section className="section">
                <div className="container">
                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Imagine AI Sdn Bhd</h2>
                            <p className="exp-role-title">AI Developer Intern · Sep 2023 – Feb 2024</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>
                                    Researched and implemented Computer Vision solutions for industrial and commercial applications, with a primary focus on OCR systems using YOLO-based architectures.
                                </p>
                                <p>
                                    Developed and optimized models for text extraction and machine part inspection tasks, improving accuracy and deployment efficiency. Additionally, gained full-stack development experience, contributing to backend systems using <strong>MongoDB</strong> and <strong>Microsoft SQL Server</strong>, as well as frontend applications built with <strong>C# WinForms</strong>.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['YOLOv8', 'Python', 'C#', '.NET 6.0', 'Roboflow', 'OpenCV'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="section-header reveal" style={{ marginTop: '4rem' }}>
                        <div className="section-tag">Featured Research</div>
                        <h2 className="section-title">YOLO-as-an-OCR Pipeline</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="exp-project-grid reveal">
                        <div className="exp-project-card card" style={{ gridColumn: '1 / -1' }}>
                            <ProjectGallery folder="internship-yolo-ocr" />
                            <div className="exp-project-header">
                                <h3 className="exp-project-title">YOLO-based OCR Pipeline &amp; Industrial Software</h3>
                                <div className="exp-project-tech">
                                    {['YOLOv8', 'Python', 'Roboflow', 'C#', '.NET 6.0', 'WinForms', 'Data Annotation'].map(t => <span key={t} className="tag tag-navy">{t}</span>)}
                                </div>
                            </div>
                            <p className="exp-project-overview">
                                Architected and developed an end-to-end text extraction system—from raw data annotation and OCR model training with YOLOv8, to building robust, offline-capable desktop frontend interfaces for machine operators.
                            </p>
                            <div className="exp-project-details">
                                <h4 className="exp-project-subtitle">Key Contributions</h4>
                                <ul className="list-standard">
                                    <li><span className="list-bullet">▹</span><span><strong>Data Annotation:</strong> Collected, processed, and precisely labeled extensive datasets of complex industrial machine components using Roboflow.</span></li>
                                    <li><span className="list-bullet">▹</span><span><strong>Model Training:</strong> Trained and optimized YOLOv8 artificial intelligence models for high-speed, precise character detection and extraction.</span></li>
                                    <li><span className="list-bullet">▹</span><span><strong>Frontend &amp; Backend:</strong> Developed intuitive desktop UI dashboards and robust backend architecture using C# .NET 6.0 (WinForms).</span></li>
                                    <li><span className="list-bullet">▹</span><span><strong>Integration:</strong> Integrated the trained AI inference models directly with the localized desktop software for real-time performance.</span></li>
                                </ul>
                            </div>
                            <div className="exp-project-impact">
                                <strong>Impact:</strong> Successfully delivered a YOLO-based OCR solution, including both the trained model and a frontend interface for access and usage. This project served as an initial proof of concept during that period.
                            </div>
                        </div>
                    </div>

                    {/* Additional Practice */}
                    <div className="reveal" style={{ marginTop: '5rem' }}>
                        <div className="section-header">
                            <div className="section-tag">Additional Experience</div>
                            <h2 className="section-title">Other Work &amp; Projects</h2>
                            <div className="section-divider" />
                        </div>
                        <div className="exp-project-grid">
                            {[
                                {
                                    title: 'Real-Time ASL Detection',
                                    folder: 'internship-asl-detection',
                                    objectFit: 'cover',
                                    overview: 'Engineered a real-time American Sign Language detection system.',
                                    tech: ['Python', 'OpenCV'],
                                    contributions: [
                                        'Developed a computer vision pipeline using OpenCV to process live video feeds.',
                                        'Optimized machine learning models to accurately detect and classify sign language gestures.'
                                    ],
                                    impact: 'Demonstrated the feasibility of building real-time accessibility tools using modern computer vision technologies.'
                                },
                                {
                                    title: 'Industrial Data Annotation and Defect Detection Model Training',
                                    folder: 'internship-data-annotation',
                                    objectFit: 'cover',
                                    overview: 'Managed large-scale data annotation and model training efforts to support high-precision industrial inspection systems.',
                                    tech: ['Data Annotation', 'Model Training', 'Quality Assurance'],
                                    contributions: [
                                        'Annotated and labeled large-scale datasets of industrial objects, including machine components and containers, for AI model training.',
                                        'Trained and fine-tuned defect detection models to improve accuracy and robustness.',
                                        'Maintained high annotation quality standards to ensure reliable model performance.'
                                    ],
                                    impact: 'Improved the precision, reliability, and recall of the company’s defect detection AI models.'
                                },
                                {
                                    title: 'Functional WinForms UI Prototype',
                                    folder: 'internship-winforms-prototype',
                                    overview: 'Designed and developed a functional desktop frontend prototype to accelerate downstream engineering.',
                                    tech: ['C#', 'WinForms', 'UI/UX'],
                                    contributions: [
                                        'Built the initial responsive and offline-capable application layouts using C# and WinForms.',
                                        'Delivered a structured, functional frontend foundation that was successfully handed off to senior developers for advanced feature integration.'
                                    ],
                                    impact: 'Accelerated the project development timeline by rapidly providing a functional, structured UI foundation for the engineering team.'
                                },

                            ].map((p, i) => (
                                <div key={i} className="exp-project-card card" style={{ transitionDelay: `${i * 0.05}s` }}>
                                    <ProjectGallery folder={p.folder} objectFit={p.objectFit || 'contain'} />
                                    <div className="exp-project-header">
                                        <h3 className="exp-project-title">{p.title}</h3>
                                        <div className="exp-project-tech">
                                            {p.tech.map(t => <span key={t} className="tag tag-navy">{t}</span>)}
                                        </div>
                                    </div>
                                    <p className="exp-project-overview">{p.overview}</p>
                                    <div className="exp-project-details">
                                        <h4 className="exp-project-subtitle">Key Contributions</h4>
                                        <ul className="list-standard">
                                            {p.contributions.map((c, j) => (
                                                <li key={j}><span className="list-bullet">▹</span>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="exp-project-impact">
                                        <strong>Impact:</strong> {p.impact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
