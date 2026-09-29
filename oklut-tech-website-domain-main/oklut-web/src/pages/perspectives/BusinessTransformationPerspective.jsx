import { useDocumentMeta } from '../../lib/useDocumentMeta'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  ArchitectureFlowDiagram,
  TechnologyGrid,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function BusinessTransformationPerspective() {
  useDocumentMeta({
    title: 'Modernizing Business Applications for a Data-Driven Enterprise | Perspectives | Oklut',
    description:
      'How modern application architecture and connected data improve operational efficiency, scalability, and business visibility across the enterprise.',
  })

  usePerspectiveScrollReveal()

  // Stages for the legacy landscape flow
  const legacyLandscapeFlow = [
    { title: 'Business Applications', desc: 'Disparate legacy CRM, ERP, and departmental tools running in silos.' },
    { title: 'Multiple Data Sources', desc: 'Fragmented operational tables, CSV extracts, and ad-hoc schemas.' },
    { title: 'Disconnected Databases', desc: 'Isolated on-premise and uncoordinated cloud data repositories.' },
    { title: 'Reports & Business Users', desc: 'Manual reconciliations, conflicting spreadsheets, and delayed reporting.' },
  ]

  // Stages for the modern connected architecture flow
  const modernArchitectureFlow = [
    { title: 'Business Applications', desc: 'Core operational platforms and modern responsive interfaces.' },
    { title: 'API / Integration Layer', desc: 'Secure, event-driven API gateway connecting enterprise workflows.' },
    { title: 'Data Services', desc: 'Unified master data models, pipelines, and optimized storage engines.' },
    { title: 'Analytics & Reporting', desc: 'Real-time telemetry, semantic models, and automated reporting.' },
    { title: 'Business Decision Makers', desc: 'Live operational dashboards providing unified executive visibility.' },
  ]

  // Technology Foundation Grid Table
  const techFoundationRows = [
    { area: 'Enterprise Applications', purpose: 'Business process management' },
    { area: 'APIs', purpose: 'System integration' },
    { area: 'Databases', purpose: 'Structured business data' },
    { area: 'Data Integration', purpose: 'Connecting multiple sources' },
    { area: 'Analytics', purpose: 'Business insights' },
    { area: 'Cloud Infrastructure', purpose: 'Scalability and flexibility' },
    { area: 'Monitoring', purpose: 'Reliability and performance' },
  ]

  // Qualitative business impact
  const businessImpactOutcomes = [
    'Improved operational visibility across cross-functional units',
    'Better data consistency and single source of enterprise truth',
    'Reduced manual reporting effort and automated data compilation',
    'Improved application performance and reduced transaction latency',
    'Easier system integration through standardized, secure APIs',
    'Greater scalability to support organic growth and acquisition',
    'Better foundation for future innovation and intelligence adoption',
  ]

  const keyPerspectivePoints = [
    'Understanding business processes and real operational workflows',
    'Connecting systems through dependable integration standards',
    'Improving data quality, governance, and master data models',
    'Modernizing applications without destabilizing day-to-day operations',
    'Creating scalable architecture suited for elastic growth',
    'Enabling better business visibility for proactive decision-making',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category="BUSINESS TRANSFORMATION"
          title="Modernizing Business Applications for a Data-Driven Enterprise"
          subtitle="A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations."
          date="September 2026"
          readTime="7 min read"
          image="/img/perspectives/modernizing-business-applications.jpg"
          imageAlt="Modern enterprise applications and connected data architecture"
          imageCaption="Enterprise Technology Perspective — Application Architecture & Connected Data"
        />

        {/* Section: The Business Challenge */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE BUSINESS CHALLENGE</span>
            <h2 className="p-heading">Navigating Complexity in a Growing Enterprise</h2>
            <p className="p-subtext">
              As businesses scale, technology ecosystems inevitably expand. What begins as focused solutions
              for individual departments can evolve into a tangled web of disparate systems.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                In a typical enterprise environment, growth often introduces multiple generations of software.
                Finance, supply chain, customer service, and field operations often operate on separate software stacks
                acquired or built at different times. Over years of operational evolution, these systems develop their
                own data formats, update cadences, and integration quirks.
              </p>
              <p>
                The friction manifests across the enterprise through common operational bottlenecks:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Multiple disconnected business applications</strong> that require duplicate data entry and manual cross-referencing.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Disconnected databases</strong> operating without centralized governance or unified master records.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Manual reporting overhead</strong>, where analytical teams spend days stitching together exports rather than uncovering insights.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Data inconsistencies</strong> across departments, creating conflicting answers to fundamental operational questions.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Application maintenance overhead and scalability limits</strong>, as brittle legacy point-to-point connections struggle to support growing transaction volumes.</span>
                </li>
              </ul>
              <p>
                Addressing these challenges requires viewing the technology landscape not as a collection of isolated
                software purchases, but as an interconnected business platform designed to support strategic agility.
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/custom-dev-sec1.jpg`}
                alt="Enterprise application landscape complexity"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: A Complex Technology Landscape */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">SYSTEM EVOLUTION</span>
            <h2 className="p-heading">A Complex Technology Landscape</h2>
            <p className="p-subtext">
              When business applications, databases, and operational systems evolve independently,
              information flows become fragmented. Understanding this fragmentation is the critical first step.
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge="Legacy Baseline"
            title="Fragmented Information Flow"
            steps={legacyLandscapeFlow}
          />

          <div className="p-card-grid-3">
            <div className="p-feature-card reveal">
              <span className="p-card-number">01</span>
              <h3 className="p-card-title">Data Silos</h3>
              <p className="p-card-desc">
                Crucial customer, financial, and inventory data remains trapped in departmental platforms,
                preventing a single unified view of business operations.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <span className="p-card-number">02</span>
              <h3 className="p-card-title">Integration Gaps</h3>
              <p className="p-card-desc">
                Point-to-point connections and nightly batch extracts create latency, high failure rates,
                and costly maintenance overhead across operational teams.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <span className="p-card-number">03</span>
              <h3 className="p-card-title">Delayed Information</h3>
              <p className="p-card-desc">
                When executives must wait days for month-end reconciliation to understand performance,
                decision-making is reactive rather than predictive.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Modern Application Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE CONNECTED MODEL</span>
            <h2 className="p-heading">Modern Application Architecture</h2>
            <p className="p-subtext">
              Enterprises move toward an event-driven, API-first architecture where data flows reliably
              across core platforms and reaches decision-makers in real time.
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge="Target Architecture"
            title="Connected Enterprise Application Model"
            steps={modernArchitectureFlow}
          />

          <div className="p-editorial-grid p-reverse" style={{ marginTop: '2.5rem' }}>
            <div className="p-editorial-text reveal">
              <p>
                A modern application architecture replaces brittle point-to-point connections with an agile,
                decoupled foundation. By establishing a robust API and integration layer, systems interact through
                governed, secure endpoints while preserving the autonomy of individual business units.
              </p>
              <p>
                Key technical capabilities of this architectural shift include:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Application modernization:</strong> Decoupling core business logic into scalable modular services.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>API integration:</strong> Establishing standardized, documented interfaces for internal and partner interoperability.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Data integration &amp; database optimization:</strong> Unifying operational data pipelines with high-throughput query optimization.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Observability &amp; security:</strong> Implementing centralized telemetry, audit trails, and role-based access controls across all services.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/solution-arch-design.jpg`}
                alt="Modern application architecture design"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Connected Data & Analytics */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">INTELLIGENCE &amp; VISIBILITY</span>
            <h2 className="p-heading">Connected Data &amp; Analytics</h2>
            <p className="p-subtext">
              When business applications communicate seamlessly, data ceases to be a reporting byproduct
              and becomes a primary driver of operational agility.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                Integrated data foundations transform how leadership and operational teams interact with information.
                Rather than relying on retrospective reports that show what occurred weeks ago, organizations gain
                live operational telemetry across business units.
              </p>
              <p>
                Connected data and analytics support sustainable business outcomes through:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Operational visibility:</strong> Continuous transparency across sales, inventory, fulfillment, and financial performance.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Faster reporting cadences:</strong> On-demand data aggregation that eliminates repetitive manual spreadsheets.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Consistent information:</strong> Single definitions for metrics like margin, customer lifetime value, and lead velocity.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Better business insights:</strong> Predictive pattern detection that surfaces risks and opportunities ahead of time.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Improved decision-making:</strong> Confident executive action supported by validated data lineage and transparency.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`}
                alt="Connected enterprise data analytics and real-time dashboard"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Technology Foundation Grid */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">ARCHITECTURE BLUEPRINT</span>
            <h2 className="p-heading">Technology Foundation</h2>
            <p className="p-subtext">
              A comprehensive view of the core technology areas that compose a modern, scalable enterprise foundation.
            </p>
          </div>

          <TechnologyGrid rows={techFoundationRows} />
        </section>

        {/* Section: Business Impact */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">QUALITATIVE VALUE</span>
            <h2 className="p-heading">Business Impact</h2>
            <p className="p-subtext">
              Modernizing application architecture and connecting fragmented data delivers tangible operational improvements
              across the organization.
            </p>
          </div>

          <BusinessImpactGrid outcomes={businessImpactOutcomes} />
        </section>

        {/* Section: Key Perspective */}
        <KeyPerspectiveBox
          eyebrow="STRATEGIC PERSPECTIVE"
          title="Modernization Is More Than Software Replacement"
          lead="Modernizing business applications is not simply replacing old software with new tools. It is an intentional alignment of technology with how the business operates, scales, and delivers value."
          points={keyPerspectivePoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading="Ready to Modernize Your Technology Environment?"
          description="Explore how modern application architecture, connected data and scalable technology can help organizations improve efficiency and prepare for future growth."
          buttonText="Talk to Our Experts"
          serviceContext="Business Transformation & Application Modernization"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="business-transformation" />
      </div>
    </div>
  )
}
