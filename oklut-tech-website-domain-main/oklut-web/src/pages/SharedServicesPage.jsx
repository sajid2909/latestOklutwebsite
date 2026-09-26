import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import './DigitalTransformationPage.css'

export default function SharedServicesPage() {
  useDocumentMeta({
    title: 'Shared Services & Managed Operations — Oklut Technologies',
    description:
      'Centralized delivery of technology and operational capabilities across business units through standardized processes, skilled resources, governance frameworks, service management, and measurable service levels.',
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

  const handleBook = () => {
    navigate('/book-consultation', { state: { service: 'Shared Services & Managed Operations' } })
  }

  const coreCapabilities = [
    'Managed Services',
    'IT Operations',
    'Application Support',
    'Service Management',
    'Resource Optimization',
    'SLA Management',
    'Governance',
    'Continuous Improvement',
    'Cost Optimization',
  ]

  return (
    <div className="dt-page">
      <section className="dt-hero">
        <img
          src={`${import.meta.env.BASE_URL}img/shared-services-managed-operations.jpg`}
          alt="Shared Services & Managed Operations Hero"
          className="dt-hero-bg"
        />
        <div className="dt-hero-copy reveal">
          <div className="dt-eyebrow">Centralized Operations Hub</div>
          <h1>
            Shared Services &amp; <em>Managed Operations</em>
          </h1>
          <p>
            Centralized delivery of technology and operational capabilities across business units through standardized processes, skilled resources, governance frameworks, service management, and measurable service levels.
          </p>
          <div className="dt-hero-actions">
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book Managed Operations Discovery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <Link to="/services/end-to-end-solution-framework" className="dt-btn-outline">
              Explore Solution Framework
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

      {/* Alternating Breakdown Rows */}
      <section className="dt-section">
        <div className="dt-wrap">
          {/* Row 1: Centralized Operations Hub */}
          <div className="dt-row reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">Unified Delivery Hub</div>
              <h2>Standardized Services Across All Business Units</h2>
              <p>
                Consolidate back-office IT, infrastructure management, and technical support into a single high-efficiency delivery center.
              </p>
              <p>
                By eliminating duplicative team overhead and standardizing service delivery models, your organization secures consistent quality and lowers total operating expenditure.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img
                  src={`${import.meta.env.BASE_URL}img/case-shared-services.jpg`}
                  alt="Centralized Shared Services Operations Center"
                />
              </div>
            </div>
          </div>

          {/* Row 2: 24/7 Application Maintenance (Reverse) */}
          <div className="dt-row reverse reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">24/7 SRE &amp; Application Support</div>
              <h2>Proactive Monitoring &amp; Rapid Incident Resolution</h2>
              <p>
                Our dedicated Site Reliability Engineers (SRE) and support specialists provide 24/7/365 telemetry monitoring, automated alert triage, and rapid L1/L2/L3 issue resolution.
              </p>
              <p>
                Backed by strict SLA commitments, we guarantee 99.99% availability for your mission-critical applications and cloud infrastructure.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img
                  src={`${import.meta.env.BASE_URL}img/build-scratch-support.jpg`}
                  alt="24/7 NOC Telemetry Monitoring and Support"
                />
              </div>
            </div>
          </div>

          {/* Row 3: ITIL-Aligned Governance */}
          <div className="dt-row reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">ITIL Governance &amp; Compliance</div>
              <h2>Structured Service Management Frameworks</h2>
              <p>
                Implement industry-leading ITSM standards (ServiceNow, Jira Service Management) with transparent ticketing, root-cause analyses, and change management guardrails.
              </p>
              <p>
                Comprehensive audit trails and governance policies ensure your operations stay compliant with international security standards.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img
                  src={`${import.meta.env.BASE_URL}img/shared-services-hero.jpg`}
                  alt="ITIL Governance and Standardized Operations"
                />
              </div>
            </div>
          </div>

          {/* Row 4: FinOps Cost Optimization (Reverse) */}
          <div className="dt-row reverse reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">FinOps &amp; Continuous Improvement</div>
              <h2>Predictable Budgeting &amp; Resource Optimization</h2>
              <p>
                Eliminate cloud waste, optimize compute sizing, and automate routine operational maintenance with FinOps best practices.
              </p>
              <p>
                Monthly transparency reports and capacity forecasts ensure continuous operational cost optimization and high capital efficiency.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img
                  src={`${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg`}
                  alt="FinOps Resource Optimization and Budgeting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="dt-capabilities-section">
        <div className="dt-wrap">
          <div className="dt-section-header reveal">
            <h2>Operations Pillars</h2>
            <p>Proven operational levers for dependable enterprise scalability.</p>
          </div>
          <div className="dt-grid">
            <div className="dt-card reveal">
              <div className="dt-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>24/7 Managed IT Operations</h3>
              <p>Proactive NOC telemetry, server patching, infrastructure maintenance, and 99.99% uptime guarantees.</p>
            </div>
            <div className="dt-card reveal">
              <div className="dt-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>ITSM &amp; Service Desk</h3>
              <p>Tier 1/2/3 multi-channel helpdesk, incident routing, and structured ticket resolution workflows.</p>
            </div>
            <div className="dt-card reveal">
              <div className="dt-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>SLA &amp; Performance Control</h3>
              <p>Contractually backed response times, MTTR benchmarks, and transparent monthly performance audits.</p>
            </div>
            <div className="dt-card reveal">
              <div className="dt-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>FinOps &amp; Cost Optimization</h3>
              <p>Continuous resource right-sizing, license reclamation, and automated cloud cost reduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="dt-cta-section" style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="dt-wrap">
          <div className="dt-cta-box reveal" style={{ background: 'radial-gradient(circle at center, rgba(13, 148, 136, 0.25) 0%, rgba(15, 23, 42, 0.8) 100%)', border: '1px solid rgba(45, 212, 191, 0.4)', borderRadius: '20px', padding: '56px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#ffffff', margin: '0 0 16px' }}>Ready to Scale Your Managed Operations?</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto 32px' }}>
              Partner with Oklut Technologies for reliable, 24/7 managed services that optimize costs and eliminate operational downtime.
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book a Managed Operations Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
