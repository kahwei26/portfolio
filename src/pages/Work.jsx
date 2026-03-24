import { useReveal } from '../hooks/useReveal'
import { FaBuilding } from 'react-icons/fa'
import ProjectGallery from '../components/ProjectGallery'
import './Work.css'

const projects = [
    {
        title: 'FinXtract Document Processing Pipeline & API System',
        overview: 'Led the development of a scalable backend system that transforms raw financial documents into structured, machine-readable data using AI-powered extraction.',
        contributions: [
            'Designed and built a Node.js (Express) REST API to orchestrate the end-to-end document extraction workflow.',
            'Implemented a preprocessing pipeline (PDF decryption, page filtering, input validation) to improve extraction accuracy and robustness.',
            'Integrated an intelligent document processing service for automated financial data extraction.',
            'Developed custom transformation layers to convert raw OCR/AI outputs into structured, client-specific JSON formats.',
            'Managed API deployment through a cloud API gateway to ensure secure, scalable access.',
            'Handled complex edge cases including corrupted files and inconsistent document structures.',
        ],
        tech: ['Node.js', 'Express', 'Cloud API Gateway', 'Intelligent Document Processing'],
        impact: 'Delivered reliable, structured financial data pipelines that reduced manual processing effort and improved data accuracy for clients.',
    },
    {
        title: 'AI Chatbot Backend for Conversational Form Automation',
        overview: 'Developed a backend system enabling clients to embed intelligent conversational interfaces for dynamic form-based data collection.',
        contributions: [
            'Built a modular NestJS backend to integrate with a conversational AI service.',
            'Enabled seamless embedding of AI-driven assistants into client applications for guided data input.',
            'Implemented usage tracking and consumption logging for monitoring and scalability.',
            'Designed dynamic Q&A workflows to collect structured data based on schema-driven form definitions.',
            'Developed a reusable client-side SDK to simplify integration and enhance developer experience.',
        ],
        tech: ['NestJS', 'TypeScript', 'Conversational AI', 'Schema-driven Forms'],
        impact: 'Transformed traditional form filling into an interactive conversational experience, reducing friction and improving completion rates.',
    },
    {
        title: 'DMS (Document Management System) NPM Module',
        // folder: 'work-dms-npm',
        overview: 'Designed and developed a reusable NPM package to standardize document storage and metadata management across services.',
        contributions: [
            'Built a modular NPM package encapsulating Azure storage operations.',
            'Integrated Azure Blob Storage for file persistence.',
            'Used Azure Table Storage to manage document metadata.',
            'Enabled seamless integration with FinXtract to automatically store processed files.',
        ],
        tech: ['Node.js', 'NPM Package Design', 'Azure Blob', 'Azure Table Storage'],
        impact: 'Centralized document storage across services while improving traceability and auditability.',
    },
    {
        title: 'Accounting Receipt Processor (Electron Application)',
        // folder: 'work-receipt-processor',
        overview: 'Enhanced and extended an Electron-based desktop application for processing receipts and generating accounting outputs.',
        contributions: [
            'Developed both frontend and backend features within an existing Electron framework.',
            'Integrated FinXtract for automated receipt data extraction.',
            'Enabled users to upload receipts and generate structured accounting data.',
            'Implemented export functionalities: Excel and SQL Accounting for payment voucher generation.',
        ],
        tech: ['Electron', 'Node.js', 'ExcelJS', 'SQL Integration'],
        impact: 'Streamlined receipt processing and accounting workflows by reducing manual data entry.',
    },
    {
        title: 'Automated Email-to-Report Workflow',
        // folder: 'work-email-workflow',
        overview: 'Developed an automated workflow allowing clients to submit documents via email and receive processed financial reports in Excel format.',
        contributions: [
            'Implemented Power Automate workflows for end-to-end email-based processing.',
            'Integrated FinXtract API for automated extraction from submitted documents.',
            'Built Excel automation scripts to perform calculations and generate structured reports.',
            'Automated final report delivery via email to clients.',
        ],
        tech: ['Power Automate', 'Excel Scripts', 'API Integration'],
        impact: 'Enabled a zero-manual-touch workflow from document submission to report delivery.',
    },
    {
        title: 'FinXtract Testing Interface',
        // folder: 'work-finxtract-testing',
        overview: 'Developed a lightweight Next.js frontend interface to allow clients and internal teams to test and validate FinXtract APIs interactively.',
        contributions: [
            'Built a Next.js frontend for API testing and validation.',
            'Enabled users to upload documents and inspect structured extraction results.',
            'Improved developer and client experience by simplifying debugging and integration.',
        ],
        tech: ['Next.js', 'REST API', 'React'],
        impact: 'Accelerated debugging and client onboarding by reducing friction in API testing and validation.',
    },
]

export default function Work() {
    const ref = useReveal()

    return (
        <main ref={ref} className="work-page">
            <section className="page-hero dot-bg">
                <div className="orb orb--page" />
                <div className="orb orb--page-left" />
                <div className="container page-hero__content">
                    <div className="section-tag animate-fadeUp">Current Role</div>
                    <h1 className="page-hero__title animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                        AI Engineer
                    </h1>
                    <p className="page-hero__sub animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                        Leading the development of intelligent document processing and automation ecosystems at FinXtract.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Current Position</div>
                            <h2 className="exp-role-name">FinXtract Sdn Bhd</h2>
                            <p className="exp-role-title">AI Engineer · September 2025 – Present</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>
                                    A company under <strong>FinHero Sdn Bhd</strong>. I specialize in building and optimizing <strong>AI-powered document extraction pipelines</strong> within the <strong>FinXtract Ecosystem</strong>. My work focuses on transforming unstructured data from PDFs and images—such as bank statements, audited financial reports, receipts, and identification documents—into <strong>structured, system-ready JSON</strong> for downstream processing and analytics.
                                </p>
                                <p>
                                    I am involved in designing <strong>high-volume, scalable extraction workflows</strong>, ensuring accuracy and reliability across diverse document formats. Beyond the core pipeline, I also contribute to AI-driven initiatives including <strong>conversational chatbot development, extraction interface design, and frontend integration</strong> to enhance the usability and accessibility of the entire system.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['Node.js', 'NestJS', 'Azure AI', 'Next.js', 'Electron', 'Power Automate'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="section-header reveal" style={{ marginTop: '4rem' }}>
                        <div className="section-tag">Featured Projects</div>
                        <h2 className="section-title">FinXtract Ecosystem</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="exp-project-grid reveal">
                        {projects.map((p, i) => (
                            <div key={i} className="exp-project-card card" style={{ transitionDelay: `${i * 0.05}s` }}>
                                {/* <ProjectGallery folder={p.folder} /> */}
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
            </section>
        </main>
    )
}
