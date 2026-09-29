import { useDocumentMeta } from '../../lib/useDocumentMeta'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  ArchitectureFlowDiagram,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function CloudModernizationPerspective() {
  useDocumentMeta({
    title: 'Modernizing Legacy Applications for the Cloud | Perspectives | Oklut',
    description:
      'Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures.',
  })

  usePerspectiveScrollReveal()

  // 4 Modernization Approaches (The 4 Rs)
  const modernizationApproaches = [
    {
      num: '01',
      title: 'Rehost (Lift and Shift)',
      desc: 'Moving legacy application workloads directly to cloud virtual machines or IaaS with minimal code changes. Delivers immediate datacenter exit and infrastructure cost consolidation.',
      benefits: 'Fastest migration path, minimal application disruption, immediate physical infrastructure retirement.',
    },
    {
      num: '02',
      title: 'Replatform (Lift and Reshape)',
      desc: 'Upgrading the runtime environment to managed cloud services—such as managed relational databases, caching tiers, or container hosts—without changing core application business logic.',
      benefits: 'Reduces operational maintenance, automates patching, and boosts reliability with modest refactoring.',
    },
    {
      num: '03',
      title: 'Refactor (Code and API Restructure)',
      desc: 'Restructuring and optimizing existing code into modular microservices and well-documented REST/GraphQL APIs, taking advantage of cloud-native features and micro-segmentation.',
      benefits: 'High development velocity, independent component scaling, and elimination of technical debt.',
    },
    {
      num: '04',
      title: 'Re-architect (Cloud-Native Redesign)',
      desc: 'Completely reimagining legacy monolithic applications into serverless, event-driven architectures with distributed messaging queues and distributed cloud databases.',
      benefits: 'Maximum elasticity, near-zero idle compute cost, extreme fault tolerance, and limitless scale.',
    },
  ]

  // Cloud Architecture Flow
  const cloudArchitectureFlow = [
    { title: 'Legacy Applications', desc: 'Monolithic on-premise systems with tightly coupled code and databases.' },
    { title: 'Modernization Strategy', desc: 'Structured application portfolio assessment and dependency mapping.' },
    { title: 'Cloud Infrastructure', desc: 'Resilient multi-zone cloud foundations with automated CI/CD pipelines.' },
    { title: 'Modern Applications', desc: 'Containerized, API-first microservices with automated scaling policies.' },
    { title: 'Scalable Business Services', desc: 'High-availability digital capabilities delivering continuous business value.' },
  ]

  // Qualitative Benefits
  const cloudModernizationBenefits = [
    'Improved scalability to effortlessly absorb peak transactional demand spikes',
    'Better overall application performance with sub-second distributed response times',
    'Greater business flexibility to roll out new features and digital capabilities rapidly',
    'Improved maintainability with clean modular code and automated testing suites',
    'Better security posture through automated identity controls and cloud-native encryption',
    'Reduced infrastructure limitations and elimination of physical datacenter refresh cycles',
  ]

  const landscapeAssessmentPoints = [
    'Portfolio Criticality: Evaluating revenue impact, operational reliance, and user sensitivity for each application.',
    'Dependency Mapping: Uncovering hidden coupling between legacy databases, shared file systems, and external batch jobs.',
    'Data Architecture: Auditing schema complexity, transaction volume, latency requirements, and data residency mandates.',
    'Technical Debt & TCO: Calculating total cost of ownership including maintenance overhead, hardware licenses, and compliance risks.',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category="CLOUD & MODERNIZATION"
          title="Modernizing Legacy Applications for the Cloud"
          subtitle="Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."
          date="July 2026"
          readTime="7 min read"
          image="/img/perspectives/legacy-application-cloud-modernization.jpg"
          imageAlt="Modernizing Legacy Applications for the Cloud"
          imageCaption="Enterprise Technology Perspective — Application Modernization & Cloud Architecture"
        />

        {/* Section: The Legacy Challenge */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE REALITY OF LEGACY SYSTEMS</span>
            <h2 className="p-heading">The Legacy Challenge</h2>
            <p className="p-subtext">
              Mission-critical applications built a decade ago still drive billions in enterprise revenue,
              yet their architectural rigidities create growing operational risk.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                Every enterprise faces the tension between stability and modernization. Legacy systems were engineered
                for durability, and they have performed reliably for years. However, as business requirements accelerate,
                these aging architectures encounter structural limits:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Aging software stacks:</strong> Monolithic codebases built on deprecated frameworks with diminishing talent pools available for maintenance.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Difficult maintenance cycles:</strong> Tightly coupled components where changing a single feature risks breaking unrelated operational modules.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Limited scalability:</strong> Vertical scaling limits that require purchasing expensive proprietary hardware to handle seasonal traffic spikes.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Integration challenges:</strong> Inability to interface smoothly with modern mobile apps, customer portals, or partner APIs without fragile batch scripts.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Infrastructure constraints:</strong> Physical server room lifecycles, backup vulnerabilities, and high power/cooling operational expenditures.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/migration-modernization.jpg`}
                alt="Cloud modernization and server migration"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Understanding the Application Landscape */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">ASSESSMENT &amp; DISCOVERY</span>
            <h2 className="p-heading">Understanding the Application Landscape</h2>
            <p className="p-subtext">
              Successful cloud modernization begins with rigorous assessment. Jumping directly into migration
              without auditing application dependencies is the primary cause of delayed cutovers.
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                A pragmatic modernization journey begins by establishing total clarity across the existing estate:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Applications:</strong> Cataloging all active workloads, custom modules, background scripts, and historical third-party packages.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Dependencies:</strong> Mapping complex runtime coupling, shared database tables, direct file system calls, and external service contracts.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Data:</strong> Evaluating data structures, transactional integrity requirements, backup cadence, and regulatory sovereignty rules.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Infrastructure:</strong> Auditing CPU, memory, storage utilization, and network throughput to right-size target cloud specifications.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Business criticality:</strong> Categorizing applications into tiers to design safe, staged migration waves with clear fallback procedures.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/custom-dev-sec2.jpg`}
                alt="Application landscape and architecture assessment"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Modernization Approaches (4 Visual Cards) */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE 4 MODERNIZATION PATHS</span>
            <h2 className="p-heading">Modernization Approaches</h2>
            <p className="p-subtext">
              There is no one-size-fits-all migration strategy. Leading enterprises match the right modernization pattern
              to each specific workload based on business value, urgency, and technical debt.
            </p>
          </div>

          <div className="p-card-grid-4">
            {modernizationApproaches.map((app, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <span className="p-card-number">{app.num}</span>
                <h3 className="p-card-title">{app.title}</h3>
                <p className="p-card-desc" style={{ marginBottom: '1rem' }}>{app.desc}</p>
                <div style={{
                  borderTop: '1px solid rgba(148, 163, 184, 0.15)',
                  paddingTop: '0.85rem',
                  marginTop: 'auto',
                  fontSize: '0.8rem',
                  color: 'var(--accent, #2dd4bf)',
                  lineHeight: '1.45',
                }}>
                  <strong>Advantage:</strong> {app.benefits}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Cloud Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">TARGET TRANSFORMATION MODEL</span>
            <h2 className="p-heading">Modern Cloud Architecture</h2>
            <p className="p-subtext">
              A structured roadmap that transforms legacy monoliths into elastic, secure, and maintainable cloud services.
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge="Modernization Lifecycle"
            title="End-to-End Cloud Modernization Flow"
            steps={cloudArchitectureFlow}
          />

          <div className="p-editorial-grid" style={{ marginTop: '2.5rem' }}>
            <div className="p-editorial-text reveal">
              <p>
                The destination architecture decouples core applications into modular, containerized services hosted
                on elastic cloud platforms (such as Kubernetes or managed serverless runtimes).
              </p>
              <p>
                By establishing automated CI/CD deployment pipelines, automated blue-green cutovers, and infrastructure
                as code, deployments transform from nerve-wracking weekend events into seamless daily routines.
              </p>
              <p>
                Elastic compute automatically scales up during demand surges and scales down during lulls, eliminating
                idle resource costs while guaranteeing sub-second response times for global users.
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/build-scratch-architecture.jpg`}
                alt="Cloud architecture modernization"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Benefits */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">TRANSFORMATION OUTCOMES</span>
            <h2 className="p-heading">Key Modernization Benefits</h2>
            <p className="p-subtext">
              Moving legacy systems onto modern cloud architectures delivers tangible operational agility and cost predictability.
            </p>
          </div>

          <BusinessImpactGrid outcomes={cloudModernizationBenefits} />
        </section>

        {/* Key Perspective */}
        <KeyPerspectiveBox
          eyebrow="MODERNIZATION BEST PRACTICES"
          title="Four Pillars of a Successful Migration"
          lead="Experience shows that modernization projects succeed when founded on comprehensive preparation, clear wave sequencing, and rigorous testing:"
          points={landscapeAssessmentPoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading="Modernize Your Legacy Applications"
          description="Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."
          buttonText="Talk to Our Experts"
          serviceContext="Legacy Modernization & Cloud Migration"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="cloud-modernization" />
      </div>
    </div>
  )
}
