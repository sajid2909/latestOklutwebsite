import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import './EndToEndSolutionsPage.css'

export default function EndToEndSolutionsPage() {
  useDocumentMeta({
    title: 'End-to-End Solution Framework — Oklut Technologies',
    description: 'A comprehensive delivery approach covering the complete technology lifecycle—from strategy, requirements, and architecture to development, integration, deployment, governance, monitoring, and support.'
  })
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
    const reveals = () => Array.from(document.querySelectorAll('.reveal')); const revealEl = (el) => el.classList.add('revealed')
    const isInView = (el) => { const r = el.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight; return r.top < vh && r.bottom > 0 }
    const revealInView = () => reveals().forEach((el) => { if (!el.classList.contains('revealed') && isInView(el)) revealEl(el) })
    if (!('IntersectionObserver' in window)) { reveals().forEach(revealEl); return }
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { revealEl(entry.target); io.unobserve(entry.target) } }), { threshold: 0.12 })
    reveals().forEach((el) => io.observe(el))
    let raf=0; const onScroll=()=>{ if(raf) return; raf=requestAnimationFrame(()=>{raf=0; revealInView()})}
    window.addEventListener('scroll', onScroll,{passive:true}); window.addEventListener('resize', onScroll); revealInView(); setTimeout(revealInView,50)
    return ()=>{ io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if(raf) cancelAnimationFrame(raf)}
  }, [])
  const handleBook = () => navigate('/book-consultation', { state: { service: 'End-to-End Solution Framework' } })

  const coreCapabilities = [
    'Strategy',
    'Requirements',
    'Architecture',
    'Development',
    'Integration',
    'Testing',
    'Security',
    'Deployment',
    'Governance',
    'Monitoring',
    'Managed Support',
  ]

  return (
    <div className="e2e-page">
      <section className="e2e-hero">
        <img src={`${import.meta.env.BASE_URL}img/end-to-end-solution-framework.jpg`} alt="End to End Solution Framework" className="e2e-hero-bg" />
        <div className="e2e-hero-copy reveal">
          <div className="e2e-eyebrow">Complete Technology Lifecycle</div>
          <h1>End-to-End <em>Solution Framework</em></h1>
          <p>A comprehensive delivery approach covering the complete technology lifecycle—from strategy, requirements, and architecture to development, integration, deployment, governance, monitoring, and support.</p>
          <div className="e2e-hero-actions">
            <button type="button" className="e2e-btn-primary" onClick={handleBook}>
              Start Your Lifecycle Journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <Link to="/services/digital-transformation" className="e2e-btn-outline">Explore Transformation</Link>
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

      <section className="e2e-section"><div className="e2e-wrap">
        <div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Strategy &amp; Architecture</div><h2>Requirements Engineering &amp; Solution Design</h2><p>Collaborative workshops, business domain mapping, and cloud architecture specifications designed to eliminate risk before a line of code is written.</p><p>We define data models, security frameworks, and scalability milestones that set up long-term success.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={`${import.meta.env.BASE_URL}img/one-stop-overview.jpg`} alt="Solution Framework Design" /></div></div></div>
        <div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Engineering &amp; Quality</div><h2>Full-Stack Development &amp; Automated Testing</h2><p>Modular microservices, type-safe APIs, and responsive frontends combined with automated unit, integration, and security scans.</p><p>Continuous integration pipelines with GitHub Actions, Terraform, and automated security guardrails.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={`${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg`} alt="Build" /></div></div></div>
        <div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Deployment &amp; Operations</div><h2>Cloud Deployment &amp; 24/7 Managed Monitoring</h2><p>Multi-cloud orchestration on AWS/Azure/GCP with automated rollback, zero-downtime cutovers, and real-time observability.</p><p>We provide SLA-backed maintenance and continuous telemetry monitoring to evolve your product seamlessly.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={`${import.meta.env.BASE_URL}img/one-stop-solutions-hero.png`} alt="Operate" /></div></div></div>
        <div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Enterprise Governance</div><h2>Unified Governance &amp; Ongoing Support</h2><p>Single-point accountability across your entire digital stack — transparent sprint velocity, predictable budgeting, and continuous innovation.</p><p>Regular feature rollouts and modernization cycles keep your enterprise ahead of the competition.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={`${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg`} alt="Why" /></div></div></div>
      </div></section>
      <section className="e2e-capabilities-section"><div className="e2e-wrap"><div className="e2e-section-header reveal"><h2>Lifecycle Framework Pillars</h2><p>Every phase engineered with enterprise rigor.</p></div><div className="e2e-grid">
        <div className="e2e-card reveal"><div className="e2e-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div><h3>Strategy &amp; Requirements</h3><p>Domain discovery, architectural roadmaps, and stakeholder alignment to eliminate execution risks.</p></div>
        <div className="e2e-card reveal"><div className="e2e-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div><h3>Architecture &amp; Build</h3><p>Resilient cloud-native microservices, API integrations, and continuous QA testing.</p></div>
        <div className="e2e-card reveal"><div className="e2e-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg></div><h3>Security &amp; Deployment</h3><p>Zero-trust security compliance, containerized releases, and automated cloud deployments.</p></div>
        <div className="e2e-card reveal"><div className="e2e-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><h3>Governance &amp; Support</h3><p>24/7 SLA monitoring, health telemetry, and ongoing evolutionary engineering.</p></div>
      </div></div></section>
      <section className="e2e-cta-section"><div className="e2e-wrap"><div className="e2e-cta-box reveal"><h2>Need a Complete Lifecycle Partner?</h2><p>We own the full technology lifecycle so your team can focus on core business outcomes.</p><button type="button" className="e2e-btn-primary" onClick={handleBook}>Partner for the Full Lifecycle <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div></div></section>
    </div>
  )
}
