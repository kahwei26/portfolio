import { useReveal } from '../hooks/useReveal'
import { FaFilter, FaLayerGroup, FaCogs, FaBrain, FaCheckCircle, FaExclamationCircle, FaLightbulb, FaArrowRight } from 'react-icons/fa'
import './University.css'

export default function University() {
    const ref = useReveal()

    return (
        <main ref={ref} className="university-page">
            {/* Page Hero */}
            <section className="page-hero dot-bg">
                <div className="orb orb--page" />
                <div className="orb orb--page-left" />
                <div className="container page-hero__content">
                    <div className="section-tag animate-fadeUp">Universiti Teknologi Malaysia (UTM)</div>
                    <h1 className="page-hero__title animate-fadeUp" style={{
                        animationDelay: '0.1s',
                        whiteSpace: 'nowrap',
                        fontSize: 'clamp(1.5rem, 4vw, 3.5rem)'
                    }}>
                        Bachelor of Computer Science
                    </h1>
                    <p className="page-hero__sub animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                        Majoring in <strong>Bioinformatics</strong> with a final CGPA of <strong>3.99</strong>.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    {/* Project Overview */}
                    <div className="reveal university-overview card">
                        <div className="university-overview__header">
                            <div>
                                <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Final Year Project · 2024</div>
                                <h2 className="university-overview__title">Cirrhotic Stage Detection of Primary Biliary Cholangitis (PBC) using SVM, Random Forest, and XGBoost based on EF-BPSO</h2>
                            </div>
                            <div className="university-overview__links">
                                <a href="https://github.com/kahwei26/PBC-Cirrhotic-Prediction" target="_blank" rel="noreferrer" className="btn btn-outline">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="university-overview__abstract">
                            <ul className="list-standard" style={{ marginTop: '0.5rem' }}>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>Developed an innovative machine learning framework for medical diagnostics, specifically targeting the detection of cirrhotic stages in <strong>Primary Biliary Cholangitis (PBC)</strong>.</span>
                                </li>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>The core innovation lies in the <strong>EF-BPSO</strong> (Ensemble Filter - Binary Particle Swarm Optimization) feature selection method, structured as a <strong>3-layer hybrid architecture</strong>.</span>
                                </li>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>This multi-stage approach first generates candidate features using <strong>four diverse filter-based techniques</strong>, aggregates them into a <strong>unified feature pool</strong>, and subsequently refines the selection using <strong>BPSO</strong> to identify the most robust diagnostic features.</span>
                                </li>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>This strategy improves feature selection efficiency and robustness, achieving a state-of-the-art classification accuracy of <strong>95.24%</strong> using a <strong>Random Forest</strong> model.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="university-ps-grid reveal">
                        <div className="university-ps-card card">
                            <div className="university-ps-icon"><FaExclamationCircle /></div>
                            <h3>The Challenge</h3>
                            <p>
                                Identifying the critical diagnostic features for cirrhotic stage detection in PBC is complex.
                                High-dimensional medical data often contains noise that can decrease the performance of
                                standard machine learning models.
                            </p>
                        </div>
                        <div className="university-ps-arrow"><FaArrowRight /></div>
                        <div className="university-ps-card card" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
                            <div className="university-ps-icon"><FaLightbulb /></div>
                            <h3>The EF-BPSO Approach</h3>
                            <p>
                                An innovative 3-layer feature selection method that ensures medical data
                                efficiency by combining multiple filter selection techniques with evolutionary
                                optimization, resulting in highly precise diagnostics.
                            </p>
                        </div>
                    </div>

                    {/* Architecture */}
                    <div className="reveal university-arch card">
                        <h3 className="university-arch__title">📐 3-Layer EF-BPSO Hybrid Architecture</h3>
                        <div className="university-arch__diagram">
                            {[
                                { step: '01', label: 'Multi-Filter', sub: 'Information Gain, Chi-Square, Fisher Score and ReliefF', icon: <FaFilter /> },
                                { step: '02', label: 'Ensemble Core', sub: 'Ensemble Feature Pool', icon: <FaLayerGroup /> },
                                { step: '03', label: 'BPSO Refinement', sub: 'Feature Pruning', icon: <FaCogs /> },
                                { step: '04', label: 'ML Ensemble', sub: 'SVM / RF / XGB', icon: <FaBrain /> },
                                { step: '05', label: 'Classification', sub: '95.24% Accuracy', icon: <FaCheckCircle /> },
                            ].map((step, i) => (
                                <div key={i} className="university-arch__step-wrapper">
                                    <div className="university-arch__step">
                                        <span className="university-arch__step-icon">{step.icon}</span>
                                        <span className="university-arch__step-num">{step.step}</span>
                                        <span className="university-arch__step-label">{step.label}</span>
                                        <span className="university-arch__step-sub">{step.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Academic Paragraphs */}
                    <div className="reveal university-overview card" style={{ marginTop: '2rem' }}>
                        <h3 className="university-overview__title" style={{ marginBottom: '1rem' }}>Beyond the FYP: My Academic Experience</h3>
                        <div className="university-overview__abstract" style={{ marginBottom: '1.5rem' }}>
                            <ul className="list-standard">
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>During my studies at Universiti Teknologi Malaysia (UTM), I gained extensive experience applying <strong>data science</strong> within the <strong>life sciences domain</strong>. My projects involved disease classification using complex <strong>genomic and clinical datasets</strong>, bridging biological insights with computational approaches.</span>
                                </li>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>I was also exposed to diverse areas of software development, including cross-platform mobile application development with <strong>Flutter</strong> and <strong>web architectures</strong>.</span>
                                </li>
                                <li>
                                    <span className="list-bullet">▹</span>
                                    <span>Graduating with a <strong>CGPA of 3.99</strong>, I developed strong problem-solving skills, technical depth, and the discipline required to consistently deliver high-quality work.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="university-overview__meta">
                            <span className="tag">🎓 Bachelor of Computer Science (Bioinformatics)</span>
                            <span className="tag">📅 Final CGPA: 3.99 / 4.00</span>
                            <span className="tag">📍 UTM Skudai</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
