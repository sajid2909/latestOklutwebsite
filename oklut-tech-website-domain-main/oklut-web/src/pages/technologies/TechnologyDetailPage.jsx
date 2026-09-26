import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { TECHNOLOGIES_DATA } from '../../data/technologiesData'
import { useDocumentMeta } from '../../lib/useDocumentMeta'
import '../DigitalTransformationPage.css'

export default function TechnologyDetailPage({ fixedId }) {
  const { techId } = useParams()
  const currentId = fixedId || techId || 'ai-robotics-solutions'

  const tech =
    TECHNOLOGIES_DATA.find(
      (t) => t.id === currentId || t.slug === currentId || t.slug.includes(currentId)
    ) || TECHNOLOGIES_DATA[0]

  useDocumentMeta({
    title: `${tech.title} — Oklut Technologies`,
    description: tech.tagline + ' ' + (tech.overview[0] || ''),
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
  }, [currentId])

  const handleBook = () => {
    navigate('/book-consultation', { state: { service: tech.title } })
  }

  // Define unique 4-row image pairs for each technology
  const techRowImages = {
    'ai-robotics-solutions': [
      `${import.meta.env.BASE_URL}img/bpa-workflow-orchestration.jpg`,
      `${import.meta.env.BASE_URL}img/digital-transformation.jpg`,
      `${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`,
      `${import.meta.env.BASE_URL}img/build-scratch-devops.jpg`,
    ],
    'business-automation-solutions': [
      `${import.meta.env.BASE_URL}img/business-process-automation.jpg`,
      `${import.meta.env.BASE_URL}img/devops-automation-sec.jpg`,
      `${import.meta.env.BASE_URL}img/cloud-integration-sec.jpg`,
      `${import.meta.env.BASE_URL}img/build-scratch-support.jpg`,
    ],
    'cloud-migration-solutions': [
      `${import.meta.env.BASE_URL}img/carousel-1.jpg`,
      `${import.meta.env.BASE_URL}img/carousel-2.jpg`,
      `${import.meta.env.BASE_URL}img/feature.jpg`,
      `${import.meta.env.BASE_URL}img/hero-poster.jpg`,
    ],
    'data-center-solutions': [
      `${import.meta.env.BASE_URL}img/solution-arch-design.jpg`,
      `${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg`,
      `${import.meta.env.BASE_URL}img/cloud-integration-sec.jpg`,
      `${import.meta.env.BASE_URL}img/shared-services-managed-operations.jpg`,
    ],
    'cognitive-analytics-ai': [
      `${import.meta.env.BASE_URL}img/custom-dev-hero.jpg`,
      `${import.meta.env.BASE_URL}img/custom-dev-sec2.jpg`,
      `${import.meta.env.BASE_URL}img/proto-concept-sec.jpg`,
      `${import.meta.env.BASE_URL}img/build-scratch-architecture.jpg`,
    ],
    'information-reporting-systems': [
      `${import.meta.env.BASE_URL}img/one-stop-solutions-hero.png`,
      `${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg`,
      `${import.meta.env.BASE_URL}img/custom-dev-sec1.jpg`,
      `${import.meta.env.BASE_URL}img/shared-services-hero.jpg`,
    ],
    'managed-services': [
      `${import.meta.env.BASE_URL}img/build-scratch-support.jpg`,
      `${import.meta.env.BASE_URL}img/case-shared-services.jpg`,
      `${import.meta.env.BASE_URL}img/shared-services-hero.jpg`,
      `${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg`,
    ],
    'one-stop-technology-solutions': [
      `${import.meta.env.BASE_URL}img/one-stop-overview.jpg`,
      `${import.meta.env.BASE_URL}img/build-scratch-architecture.jpg`,
      `${import.meta.env.BASE_URL}img/build-scratch-devops.jpg`,
      `${import.meta.env.BASE_URL}img/build-from-scratch.jpg`,
    ],
  }

  const rowImgs = techRowImages[tech.id] || [
    `${import.meta.env.BASE_URL}img/bpa-workflow-orchestration.jpg`,
    `${import.meta.env.BASE_URL}img/devops-automation-sec.jpg`,
    `${import.meta.env.BASE_URL}img/cloud-integration-sec.jpg`,
    `${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`,
  ]

  return (
    <div className="dt-page">
      {/* Hero Section */}
      <section className="dt-hero">
        <img
          src={`${import.meta.env.BASE_URL}${tech.image}`}
          alt={tech.title}
          className="dt-hero-bg"
        />
        <div className="dt-hero-copy reveal">
          <div className="dt-eyebrow">{tech.heroBadge || 'Enterprise Technology Solutions'}</div>
          <h1>
            {tech.title}
          </h1>
          <p>{tech.tagline}</p>
          <div className="dt-hero-actions">
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book Technology Discovery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a
              href="#gallery"
              className="dt-btn-outline"
              onClick={(e) => {
                e.preventDefault()
                navigate('/', { state: { scrollTo: 'gallery' } })
              }}
            >
              Explore All Technologies
            </a>
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
            {tech.capabilities.map((cap) => (
              <span
                key={cap.title || cap}
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
                {cap.title || cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Breakdown Rows */}
      <section className="dt-section">
        <div className="dt-wrap">
          {/* Row 1: Overview */}
          <div className="dt-row reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">Enterprise Overview</div>
              <h2>Intelligent Technology for Measurable Outcomes</h2>
              {tech.overview.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img src={rowImgs[0]} alt={`${tech.title} Overview`} />
              </div>
            </div>
          </div>

          {/* Row 2: Transformation (Reverse) */}
          <div className="dt-row reverse reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">Operational Transformation</div>
              <h2>Transforming Business Through Intelligent Workflows</h2>
              {tech.transformation && tech.transformation.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img src={rowImgs[1]} alt={`${tech.title} Transformation`} />
              </div>
            </div>
          </div>

          {/* Row 3: Lifecycle Framework */}
          <div className="dt-row reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">Structured Delivery Approach</div>
              <h2>End-to-End Execution &amp; Continuous Optimization</h2>
              <p>
                Our proven implementation approach follows a rigorous delivery lifecycle:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0 20px' }}>
                {tech.lifecycleSteps.map((step, idx) => (
                  <span
                    key={step}
                    style={{
                      background: 'rgba(13, 27, 42, 0.08)',
                      border: '1px solid rgba(13, 27, 42, 0.2)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--dt-navy)',
                    }}
                  >
                    {idx + 1}. {step}
                  </span>
                ))}
              </div>
              <p>
                This structured sequence ensures tight alignment with business goals, robust security posture, and measurable ROI benchmarks at every phase.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img src={rowImgs[2]} alt={`${tech.title} Lifecycle`} />
              </div>
            </div>
          </div>

          {/* Row 4: Security & Governance (Reverse) */}
          <div className="dt-row reverse reveal">
            <div className="dt-text-col">
              <div className="dt-eyebrow">Security &amp; Governance</div>
              <h2>Enterprise-Grade Reliability &amp; Compliance Safeguards</h2>
              <p>{tech.security}</p>
              <p>
                We embed strict role-based access control, automated vulnerability scanning, model governance, and multi-tier encryption to ensure your production environment remains resilient and fully compliant.
              </p>
            </div>
            <div className="dt-img-col">
              <div className="dt-img-frame">
                <img src={rowImgs[3]} alt={`${tech.title} Security & Governance`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities 4-Pillars Grid */}
      <section className="dt-capabilities-section">
        <div className="dt-wrap">
          <div className="dt-section-header reveal">
            <h2>Core Technology Capabilities</h2>
            <p>Comprehensive technical competencies engineered to scale your digital operations.</p>
          </div>
          <div className="dt-grid">
            {tech.capabilities.slice(0, 4).map((cap, idx) => (
              <div key={idx} className="dt-card reveal">
                <div className="dt-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="dt-cta-section" style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="dt-wrap">
          <div className="dt-cta-box reveal" style={{ background: 'radial-gradient(circle at center, rgba(13, 148, 136, 0.25) 0%, rgba(15, 23, 42, 0.8) 100%)', border: '1px solid rgba(45, 212, 191, 0.4)', borderRadius: '20px', padding: '56px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#ffffff', margin: '0 0 16px' }}>
              {tech.ctaHeadline || 'Ready to transform your technology environment?'}
            </h2>
            <p style={{ color: '#c7d2dd', fontSize: '16px', maxWidth: '640px', margin: '0 auto 32px' }}>
              {tech.ctaSub || 'Contact our team to discuss your requirements and build the right solution for your organization.'}
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book a Consultation
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
