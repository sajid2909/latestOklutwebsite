import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CentreOfExcellencePage.css'

// CoE Image Assets
import coeHeroImg from '../assets/coe/coe_hero.jpg'
import coeEngImg from '../assets/coe/coe_engineering.jpg'
import coeInnovImg from '../assets/coe/coe_innovation.jpg'
import coeCloudImg from '../assets/coe/coe_cloud.jpg'

export default function CentreOfExcellencePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Center of Excellence | Oklut Technologies'
  }, [])

  const coreCapabilities = [
    'Governance',
    'Technology Standards',
    'Best Practices',
    'Architecture',
    'Competency Development',
    'Knowledge Management',
    'Innovation',
    'Continuous Improvement',
  ]

  const FRAMEWORK_PILLARS = [
    {
      icon: '🏛️',
      title: 'Governance & Frameworks',
      description: 'Establish enterprise-wide architectural governance, policy guardrails, and compliance standards.',
      tag: 'Governance'
    },
    {
      icon: '📐',
      title: 'Technology Standards & Architecture',
      description: 'Define modern reference architectures, vetted technology stacks, and microservices patterns.',
      tag: 'Architecture'
    },
    {
      icon: '📦',
      title: 'Reusable Assets & Libraries',
      description: 'Accelerate development velocity with shared components, templates, starter kits, and design systems.',
      tag: 'Reusability'
    },
    {
      icon: '🎓',
      title: 'Competency Development',
      description: 'Structured training, tech mentorship, and skill enablement to elevate team engineering prowess.',
      tag: 'Competency'
    },
    {
      icon: '💡',
      title: 'Innovation & Emerging Tech',
      description: 'R&D on AI agents, automation pipelines, and next-generation frameworks to maintain market edge.',
      tag: 'Innovation'
    },
    {
      icon: '📈',
      title: 'Continuous Improvement',
      description: 'Data-driven engineering metrics (DORA), SLA benchmarking, and ongoing quality optimization.',
      tag: 'Quality'
    }
  ]

  return (
    <div className="coe-page">
      {/* HERO SECTION */}
      <section className="coe-hero">
        <img
          src={`${import.meta.env.BASE_URL}img/center-of-excellence.jpg`}
          alt="Oklut Technologies Center of Excellence"
          className="coe-hero-img-bg"
        />
        <div className="coe-hero-overlay" />
        <div className="coe-hero-content">
          <div className="coe-hero-badge">
            <span>OKLUT TECHNOLOGIES COE</span>
          </div>
          <h1 className="coe-hero-title">
            Center of <span>Excellence</span>
          </h1>
          <p className="coe-hero-subtitle">
            Establishment of specialized technology and business capability centers that provide governance, standards, expertise, frameworks, reusable assets, and continuous improvement across the organization.
          </p>
          <div className="coe-hero-actions">
            <Link to="/book-consultation" className="coe-btn-primary">
              Book CoE Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="#engineering" className="coe-btn-secondary">
              Explore Capabilities
            </a>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll</span>
          <div className="line" />
        </div>
      </section>

      {/* CORE CAPABILITIES RIBBON */}
      <div style={{ background: '#071526', borderBottom: '1px solid rgba(45, 212, 191, 0.2)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Core Capabilities
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {coreCapabilities.map((cap) => (
              <span
                key={cap}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(45, 212, 191, 0.08)',
                  border: '1px solid rgba(45, 212, 191, 0.25)',
                  borderRadius: '999px',
                  color: '#eef2f9',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf' }} />
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="coe-stats-strip">
        <div className="coe-stats-container">
          <div className="coe-stat-item">
            <div className="coe-stat-num">99.99%</div>
            <div className="coe-stat-label">Enterprise Uptime</div>
          </div>
          <div className="coe-stat-item">
            <div className="coe-stat-num">150+</div>
            <div className="coe-stat-label">Engineers & Architects</div>
          </div>
          <div className="coe-stat-item">
            <div className="coe-stat-num">50+</div>
            <div className="coe-stat-label">AI & Cloud Deployments</div>
          </div>
          <div className="coe-stat-item">
            <div className="coe-stat-num">4.9/5</div>
            <div className="coe-stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* SECTION 1: ENGINEERING MASTERY */}
      <section id="engineering" className="coe-section">
        <div className="coe-split">
          <div className="coe-copy">
            <div className="coe-eyebrow">Pillar 01 — Engineering Standard</div>
            <h2>High-Performance Software Engineering</h2>
            <p>
              Our Centre of Excellence establishes standardized design patterns, rigorous automated testing, and zero-defect code review practices that accelerate time-to-market while keeping technical debt to zero.
            </p>
            <ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Automated CI/CD release pipelines with DORA metrics analytics
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Strict architectural review boards & microservices governance
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Continuous security linting and automated vulnerability patching
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Learn Engineering Standards
            </Link>
          </div>
          <div className="coe-visual">
            <img src={coeEngImg} alt="Engineering Excellence Center Dashboard" />
            <div className="tag">
              <span>DevOps & Quality Engineering</span>
            </div>
          </div>
        </div>
      </section>

      <div className="coe-divider" />

      {/* SECTION 2: AI & INNOVATION HUB */}
      <section className="coe-section">
        <div className="coe-split reverse">
          <div className="coe-copy">
            <div className="coe-eyebrow">Pillar 02 — R&D Innovation</div>
            <h2>AI Innovation Lab & Emerging Technology</h2>
            <p>
              We experiment with state-of-the-art machine learning models, custom AI agents, and intelligent workflow automation to build next-generation enterprise products.
            </p>
            <ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Enterprise Generative AI & RAG knowledge integration
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Autonomous AI agent workflows for business process automation
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Custom machine learning model optimization & fine-tuning
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Explore AI Lab
            </Link>
          </div>
          <div className="coe-visual">
            <img src={coeInnovImg} alt="AI Innovation Hub Visualization" />
            <div className="tag">
              <span>Artificial Intelligence & Neural R&D</span>
            </div>
          </div>
        </div>
      </section>

      <div className="coe-divider" />

      {/* SECTION 3: CLOUD & SECURITY */}
      <section className="coe-section">
        <div className="coe-split">
          <div className="coe-copy">
            <div className="coe-eyebrow">Pillar 03 — Infrastructure</div>
            <h2>Enterprise Cloud Architecture & Zero-Trust Security</h2>
            <p>
              We design and manage resilient multi-cloud environments built on zero-trust security frameworks, ensuring your data remains protected against evolving global cyber threats.
            </p>
            <ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                AWS, Azure, & GCP multi-cloud infrastructure orchestration
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Zero-Trust network security & ISO 27001 / SOC2 compliance
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Infra-as-Code (Terraform) with automated disaster recovery
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Consult Cloud Architect
            </Link>
          </div>
          <div className="coe-visual">
            <img src={coeCloudImg} alt="Cloud Infrastructure & Security Center" />
            <div className="tag">
              <span>Cloud & Zero-Trust Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK GRID SECTION */}
      <section className="coe-grid-section">
        <div className="coe-header-center">
          <div className="coe-eyebrow">Comprehensive Capabilities</div>
          <h2>Our Core Excellence Frameworks</h2>
          <p>
            Designed to empower enterprise clients with scalable, secure, and modern digital platforms.
          </p>
        </div>

        <div className="coe-cards-grid">
          {FRAMEWORK_PILLARS.map((pillar, idx) => (
            <div key={idx} className="coe-card">
              <div className="coe-card-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="coe-card-tag">{pillar.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="coe-cta-section">
        <div className="coe-cta-box">
          <h2>Elevate Your Engineering Standard</h2>
          <p>
            Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.
          </p>
          <Link to="/book-consultation" className="coe-btn-primary">
            Schedule Executive Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
