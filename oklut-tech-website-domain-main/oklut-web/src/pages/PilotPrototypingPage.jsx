import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import './PilotPrototypingPage.css'

export default function PilotPrototypingPage() {
  useDocumentMeta({
    title: 'Proof of Concept (PoC) & Pilot Implementation — Oklut Technologies',
    description:
      'Rapid development and validation of technology solutions to assess technical feasibility, business value, integration requirements, performance, and scalability before full-scale implementation.',
  })

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const reveals = () => Array.from(document.querySelectorAll('.reveal'))
    const revealEl = (el) => el.classList.add('revealed')
    const isInView = (el) => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh && r.bottom > 0
    }
    const revealInView = () => {
      reveals().forEach((el) => {
        if (!el.classList.contains('revealed') && isInView(el)) revealEl(el)
      })
    }

    if (!('IntersectionObserver' in window)) {
      reveals().forEach(revealEl)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals().forEach((el) => io.observe(el))

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        revealInView()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    revealInView()
    setTimeout(revealInView, 50)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const handleBookConsultation = () => {
    navigate('/book-consultation', { state: { service: 'Proof of Concept (PoC) & Pilot Implementation' } })
  }

  const coreCapabilities = [
    'PoC Development',
    'Prototyping',
    'MVP Development',
    'Feasibility Assessment',
    'Technical Validation',
    'Integration Testing',
    'Scalability Assessment',
    'Business Case Validation',
  ]

  return (
    <div className="pp-page">
      {/* Full-screen Hero Section */}
      <section className="pp-hero">
        <img
          src={`${import.meta.env.BASE_URL}img/poc-pilot-implementation.jpg`}
          alt="Proof of Concept and Pilot Implementation"
          className="pp-hero-bg"
        />
        <div className="pp-hero-copy reveal">
          <div className="pp-eyebrow">Rapid Validation &amp; Feasibility</div>
          <h1>
            Proof of Concept (PoC) &amp; <em>Pilot Implementation</em>
          </h1>
          <p>
            Rapid development and validation of technology solutions to assess technical feasibility, business value, integration requirements, performance, and scalability before full-scale implementation.
          </p>
          <div className="pp-hero-actions">
            <button type="button" className="pp-btn-primary" onClick={handleBookConsultation}>
              Initiate PoC Discovery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <Link to="/services/custom-development-customization" className="pp-btn-outline">
              Explore Custom Development
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities Ribbon */}
      <div style={{ background: '#0a1527', borderBottom: '1px solid rgba(45, 212, 191, 0.2)', padding: '20px 24px' }}>
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

      {/* Main Content Rows */}
      <section className="pp-content-section">
        <div className="pp-wrap">
          {/* Row 1: Why Prototype First */}
          <div className="pp-row reveal">
            <div className="pp-col-text">
              <div className="pp-tag">Rapid Validation</div>
              <h2>From Concept to Validated Feasibility</h2>
              <p>
                Turning an idea into an enterprise-scale solution requires rigorous upfront validation. Our PoC &amp;
                Pilot service evaluates technology viability, stress-tests critical integration hooks, and validates business ROI before major capital commitments.
              </p>
              <p>
                We construct high-fidelity MVPs and focused sandbox pilots that prove technical feasibility, measure system latency, and gather direct stakeholder validation early.
              </p>
            </div>
            <div className="pp-col-image">
              <div className="pp-img-frame">
                <img src={`${import.meta.env.BASE_URL}img/pilot-prototyping-hero.jpg`} alt="PoC Development and Feasibility Discovery" />
                <div className="pp-cap">Rapid MVP Prototyping &amp; Technical Benchmarks</div>
              </div>
            </div>
          </div>

          {/* Row 2: Agile Concept Validation (Reverse) */}
          <div className="pp-row reverse reveal">
            <div className="pp-col-text">
              <div className="pp-tag">Agile Prototyping</div>
              <h2>Interactive MVPs &amp; UX Validation</h2>
              <p>
                We build interactive wireframes, clickable user flows, and functional proof-of-concepts in days, not months. Test real user interactions, refine UI/UX patterns, and gather actionable feedback from stakeholders.
              </p>
              <p>
                By shortening feedback loops during early development, your team minimizes rework and establishes clear technical specifications before capital-intensive build phases begin.
              </p>
            </div>
            <div className="pp-col-image">
              <div className="pp-img-frame">
                <img src={`${import.meta.env.BASE_URL}img/proto-concept-sec.jpg`} alt="Rapid Prototyping and UX Testing" />
                <div className="pp-cap">Rapid Iteration &amp; Clickable UX Prototypes</div>
              </div>
            </div>
          </div>

          {/* Row 3: Technical Feasibility & Risk Reduction */}
          <div className="pp-row reveal">
            <div className="pp-col-text">
              <div className="pp-tag">Integration &amp; Scalability Testing</div>
              <h2>De-Risk Complex System Integrations</h2>
              <p>
                Uncover technical bottlenecks, API limitations, and performance constraints before full capital commitment. Our pilot engineering team stress-tests integrations, data pipelines, and third-party APIs in isolated sandbox environments.
              </p>
              <p>
                This proactive risk mitigation ensures high system availability, security compliance, and predictable development timelines when transitioning your PoC into enterprise production.
              </p>
            </div>
            <div className="pp-col-image">
              <div className="pp-img-frame">
                <img src={`${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`} alt="De-Risking Cloud & System Architecture" />
                <div className="pp-cap">Sandbox Integration &amp; Stress Testing</div>
              </div>
            </div>
          </div>

          {/* Row 4: Controlled Production Pilot (Reverse) */}
          <div className="pp-row reverse reveal">
            <div className="pp-col-text">
              <div className="pp-tag">Controlled Production Pilot</div>
              <h2>Targeted Pilot Launch &amp; Business Case Validation</h2>
              <p>
                Deploy targeted pilot releases to a select user segment or test market. Track performance metrics, user adoption analytics, and operational feedback to quantify business value and establish a data-backed business case.
              </p>
              <p>
                With real-world pilot insights, executive sponsors gain clear ROI metrics to justify broader deployment and strategic digital transformation investments.
              </p>
            </div>
            <div className="pp-col-image">
              <div className="pp-img-frame">
                <img src={`${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg`} alt="Pilot Production Deployment and Analytics" />
                <div className="pp-cap">Controlled Deployment &amp; Performance Telemetry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles Section */}
      <section className="pp-principles-section">
        <div className="pp-wrap">
          <div className="pp-section-header reveal">
            <h2>Our Pilot Engineering Principles</h2>
            <p>Guiding principles that turn technical uncertainty into predictable business success.</p>
          </div>
          <div className="pp-grid">
            <div className="pp-card reveal">
              <div className="pp-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>PoC &amp; MVP Prototyping</h3>
              <p>Deliver functional prototypes rapidly to validate value propositions early in the lifecycle.</p>
            </div>
            <div className="pp-card reveal">
              <div className="pp-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Feasibility &amp; Validation</h3>
              <p>Verify API compatibility, throughput thresholds, and compliance constraints in sandbox environments.</p>
            </div>
            <div className="pp-card reveal">
              <div className="pp-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Scalability Assessment</h3>
              <p>Simulate production load to establish capacity limits and determine cloud architecture sizing.</p>
            </div>
            <div className="pp-card reveal">
              <div className="pp-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3>Business Case Validation</h3>
              <p>Quantify tangible ROI and productivity metrics to support enterprise-wide rollout decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pp-cta-section">
        <div className="pp-wrap">
          <div className="pp-cta-box reveal">
            <h2>Ready to validate your next digital solution?</h2>
            <p>
              Connect with our solution engineering team to explore your project requirements, build a prototype, and test feasibility with zero risk.
            </p>
            <button type="button" className="pp-btn-primary" onClick={handleBookConsultation}>
              Book a PoC Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
