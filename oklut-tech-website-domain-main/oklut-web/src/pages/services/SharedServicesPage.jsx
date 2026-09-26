import { ServicePageTemplate } from './ServicePageTemplate'
import './ServicePage.css'

export default function SharedServicesPage() {
  const heroImageUrl = `${import.meta.env.BASE_URL}img/shared-services-managed-operations.jpg`
  const overviewImageUrl = `${import.meta.env.BASE_URL}img/case-shared-services.jpg`

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
    <div className="shared-services-page">
      <ServicePageTemplate
        title="Shared Services & Managed Operations"
        tagline="Centralized Technology & Operations Delivery"
        heroImage={heroImageUrl}
        hideHeroTitle={false}
        description="Centralized delivery of technology and operational capabilities across business units through standardized processes, skilled resources, governance frameworks, service management, and measurable service levels."
        overviewImage={overviewImageUrl}
        sectionHeadline="Unified Delivery Hub. Predictable SLAs. Cost Optimization."
        sectionDescription="Oklut Technologies provides centralized shared services and 24/7 managed operations that empower enterprises to standardize IT functions, ensure 99.99% availability, and achieve significant operational cost efficiencies."
        featuresTitle="Core Capabilities"
        features={[
          'Managed IT Services & 24/7 Operations',
          'Application Maintenance & Support',
          'IT Service Management (ITSM)',
          'Resource & Infrastructure Optimization',
          'SLA & Incident Management',
          'Governance & Compliance Standards',
          'Continuous Improvement & Kaizen Automation',
          'Cost Optimization & FinOps Governance',
        ]}
        benefits={[
          'Reduce enterprise operating overhead by up to 45%',
          'Guaranteed 99.99% uptime and response time SLAs',
          'Centralized visibility across all business units',
          'Dedicated L1/L2/L3 support and site reliability engineers',
          'Standardized ITIL-aligned governance and audit trails',
          'Flexible scaling models that adapt to seasonal demand',
        ]}
        technologies={[
          'Datadog', 'New Relic', 'PagerDuty', 'ServiceNow', 'Jira Service Desk',
          'Prometheus', 'Grafana', 'AWS CloudWatch', 'Azure Monitor', 'Terraform',
        ]}
        ctaText="Explore Managed Operations"
      />

      {/* Core Capabilities Strip */}
      <div style={{ background: '#0a1527', borderBottom: '1px solid rgba(45, 212, 191, 0.2)', padding: '24px' }}>
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

      {/* How It Works */}
      <section className="section service-overview">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">
              <span className="eyebrow-bar" aria-hidden="true" />
              How It Works
            </span>
            <h2>A proven path to shared services success</h2>
            <p className="service-overview-desc">
              Whether you need to centralize back-office operations, establish a global services hub,
              or optimize an existing shared service center, our structured approach ensures a smooth
              transition with minimal disruption.
            </p>
          </div>
          <div className="service-features-grid" style={{ marginTop: '48px' }}>
            {[
              { title: 'Assess & Map', description: 'We analyze your current processes, cost structures, and pain points to identify consolidation opportunities.' },
              { title: 'Design & Plan', description: 'We architect the shared services model — defining governance, SLAs, technology stack, and team structure.' },
              { title: 'Migrate & Launch', description: 'We execute a phased migration with knowledge transfer, training, and parallel-run validation.' },
              { title: 'Optimize & Scale', description: 'Continuous improvement through automation, analytics, and iterative process refinement.' },
            ].map((item, i) => (
              <article key={item.title} className="service-feature-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '8px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
