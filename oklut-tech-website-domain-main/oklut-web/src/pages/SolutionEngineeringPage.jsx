import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import './SolutionEngineeringPage.css'

function FeatureIcon({ name }) {
  const icons = {
    cpu: (
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    ),
    cloud: (
      <path d="M17.5 19a4.5 4.5 0 1 0-.42-8.98A6 6 0 0 0 5.5 13 3.5 3.5 0 0 0 7 20h10.5z" />
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    layers: (
      <>
        <path d="m12 2 10 5-10 5L2 7l10-5z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    check: (
      <path d="M20 6 9 17l-5-5" />
    )
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] || icons.cpu}
    </svg>
  )
}

export default function SolutionEngineeringPage() {
  useDocumentMeta({
    title: 'Custom Development & Customization — Oklut Technologies',
    description:
      'Development and enhancement of applications, platforms, workflows, and enterprise solutions to address unique business requirements and deliver tailored functionality.',
  })

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

  const coreCapabilities = [
    'Custom Development',
    'Platform Configuration',
    'Extensions',
    'Custom Workflows',
    'API Development',
    'System Integration',
    'UI/UX Enhancement',
    'Performance Optimization',
  ]

  return (
    <div className="se-page">
      {/* Hero Section */}
      <section className="se-hero">
        <img
          src={`${import.meta.env.BASE_URL}img/solution-engineering-hero.jpg`}
          alt="Custom Development and Customization"
          className="se-hero-bg"
        />
        <div className="se-hero-content reveal">
          <span className="se-hero-badge">Tailored Digital Engineering</span>
          <h1>Custom Development &amp; Customization</h1>
          <p>
            Development and enhancement of applications, platforms, workflows, and enterprise solutions to address unique business requirements and deliver tailored functionality.
          </p>
          <div className="se-hero-actions">
            <Link to="/book-consultation" className="btn btn-primary">
              Book a Consultation
            </Link>
            <a href="#customization" className="btn btn-secondary">
              Explore Capabilities
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

      {/* Main Section 1 */}
      <section id="customization" className="se-section reveal">
        <div className="text">
          <span className="se-eyebrow">TAILORED FUNCTIONALITY</span>
          <h2>Bespoke Features Built for Your Workflow</h2>
          <p>
            Standard enterprise software often falls short of meeting specialized business needs. Our custom engineering team develops bespoke application modules, custom business rules, and specialized extensions tailored to your operations.
          </p>
          <p>
            From custom CRM and ERP enhancements to specialized operational portals, we build features that seamlessly align with your team's exact workflow patterns.
          </p>
        </div>
        <div className="media">
          <img
            src={`${import.meta.env.BASE_URL}img/custom-development-customization.jpg`}
            alt="Custom Application Features and Platform Engineering"
            loading="lazy"
          />
        </div>
      </section>

      <div className="se-divider" />

      {/* Main Section 2 */}
      <section className="se-section reverse reveal">
        <div className="text">
          <span className="se-eyebrow">ENTERPRISE SYSTEM INTEGRATION</span>
          <h2>Platform Configuration &amp; API Development</h2>
          <p>
            Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.
          </p>
          <p>
            We configure commercial and open-source platforms to your exact operational requirements while preserving upgradeability and data security.
          </p>
        </div>
        <div className="media">
          <img
            src={`${import.meta.env.BASE_URL}img/solution-arch-design.jpg`}
            alt="Enterprise API Architecture and System Integration"
            loading="lazy"
          />
        </div>
      </section>

      <div className="se-divider" />

      {/* Main Section 3 */}
      <section className="se-section reveal">
        <div className="text">
          <span className="se-eyebrow">UI/UX &amp; PERFORMANCE</span>
          <h2>UI/UX Enhancements &amp; Performance Optimization</h2>
          <p>
            Upgrade sluggish legacy user interfaces to modern, reactive, accessible web and mobile experiences. We audit and optimize database queries, caching layers, and frontend rendering for blazing-fast speed.
          </p>
          <p>
            Our improvements reduce friction for internal users and end customers alike, driving immediate gains in productivity and satisfaction.
          </p>
        </div>
        <div className="media">
          <img
            src={`${import.meta.env.BASE_URL}img/custom-dev-sec1.jpg`}
            alt="Performance Optimization and Modern UI Enhancement"
            loading="lazy"
          />
        </div>
      </section>

      {/* Capabilities & Engineering Principles */}
      <section className="se-principles">
        <div className="se-principles-container">
          <div className="se-principles-head reveal">
            <span className="se-eyebrow">CORE CAPABILITIES</span>
            <h2 className="section-title">Engineered to Your Exact Specifications</h2>
          </div>
          <div className="se-principles-grid">
            <div className="se-card reveal" style={{ transitionDelay: '0ms' }}>
              <div className="se-card-icon">
                <FeatureIcon name="layers" />
              </div>
              <h3>Custom Workflows &amp; Extensions</h3>
              <p>
                Bespoke automation rules, custom forms, approval chains, and domain-specific logic designed around your team.
              </p>
            </div>
            <div className="se-card reveal" style={{ transitionDelay: '80ms' }}>
              <div className="se-card-icon">
                <FeatureIcon name="cloud" />
              </div>
              <h3>API &amp; System Integration</h3>
              <p>
                High-performance API gateways and data bridges connecting your ERP, CRM, payment, and analytics platforms.
              </p>
            </div>
            <div className="se-card reveal" style={{ transitionDelay: '160ms' }}>
              <div className="se-card-icon">
                <FeatureIcon name="shield" />
              </div>
              <h3>Platform Configuration</h3>
              <p>
                Expert tuning of enterprise software platforms to fit organizational hierarchy, security roles, and audit compliance.
              </p>
            </div>
            <div className="se-card reveal" style={{ transitionDelay: '240ms' }}>
              <div className="se-card-icon">
                <FeatureIcon name="cpu" />
              </div>
              <h3>Performance Optimization</h3>
              <p>
                Database indexing, query profiling, CDN edge caching, and memory tuning to handle peak user volumes effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="se-cta">
        <div className="se-cta-container reveal">
          <h2>Ready to Customize Your Enterprise Platform?</h2>
          <p>
            Partner with Oklut Technologies to develop tailored extensions, custom workflows, and high-performance integrations.
          </p>
          <div className="se-hero-actions">
            <Link to="/book-consultation" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
