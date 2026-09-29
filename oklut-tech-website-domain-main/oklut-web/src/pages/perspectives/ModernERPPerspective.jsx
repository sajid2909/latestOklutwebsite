import { useDocumentMeta } from '../../lib/useDocumentMeta'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function ModernERPPerspective() {
  useDocumentMeta({
    title: 'Accelerating Business Transformation with Modern ERP | Perspectives | Oklut',
    description:
      'Explore how modern ERP platforms connect finance, procurement, supply chain, and business operations through a unified digital foundation.',
  })

  usePerspectiveScrollReveal()

  // 6 Connected Business Functions
  const connectedFunctions = [
    {
      title: 'Finance & Accounting',
      desc: 'Unified multi-currency general ledgers, automated accounts payable/receivable, streamlined tax compliance, and accelerated period-end financial close.',
      icon: '💳',
    },
    {
      title: 'Procurement & Vendor Management',
      desc: 'Requisition-to-pay automation, automated purchase order generation, supplier scorecards, and spend analytics with built-in policy controls.',
      icon: '📋',
    },
    {
      title: 'Supply Chain Management',
      desc: 'End-to-end logistics coordination, supplier integration, multi-location demand planning, and automated replenishment alerts.',
      icon: '🚚',
    },
    {
      title: 'Inventory & Warehouse Operations',
      desc: 'Real-time multi-warehouse tracking, serialized asset management, batch tracking, barcode/RFID scanning, and dead-stock mitigation.',
      icon: '📦',
    },
    {
      title: 'Human Resources & Payroll',
      desc: 'Integrated workforce management, compliance, automated payroll runs, benefits administration, and synchronized labor cost-to-serve analytics.',
      icon: '👥',
    },
    {
      title: 'Manufacturing & Field Operations',
      desc: 'Work order routing, bill of materials (BOM) management, capacity planning, equipment maintenance schedules, and quality assurance logging.',
      icon: '🏭',
    },
  ]

  // Modern ERP Capabilities
  const modernCapabilities = [
    {
      title: 'Cloud ERP Architecture',
      desc: 'Secure, multi-tenant cloud infrastructure with continuous zero-downtime updates, high availability, and elastic capacity scaling.',
      icon: '☁️',
    },
    {
      title: 'End-to-End Automation',
      desc: 'Eliminating manual handoffs through intelligent routing of approvals, automatic ledger reconciliations, and exception alerts.',
      icon: '⚡',
    },
    {
      title: 'API & Extensibility Layer',
      desc: 'REST and GraphQL APIs that connect seamlessly with third-party logistics, CRMs, banking networks, and specialized legacy tools.',
      icon: '🔌',
    },
    {
      title: 'Embedded Analytics',
      desc: 'Out-of-the-box analytical dashboards and drill-down KPIs that provide real-time operational insights without external BI tools.',
      icon: '📊',
    },
    {
      title: 'Dynamic Workflow Management',
      desc: 'Configurable business process rules that adapt to shifting organizational structures, compliance mandates, and subsidiary needs.',
      icon: '🔄',
    },
    {
      title: 'Enterprise Scalability',
      desc: 'Architected to support multi-entity hierarchies, complex global tax jurisdictions, and surging transaction volumes effortlessly.',
      icon: '🌐',
    },
  ]

  // Qualitative Business Benefits
  const erpBusinessBenefits = [
    'Better operational visibility with a single source of enterprise truth across all departments',
    'Reduced manual processes through automated invoice matching, approvals, and reconciliations',
    'Improved cross-functional collaboration by eliminating disconnected departmental spreadsheets',
    'Better data consistency across inventory, financial ledgers, and procurement pipelines',
    'Faster executive and operational decision-making supported by live operational telemetry',
  ]

  const erpStrategyPoints = [
    'Treat ERP as the foundational operating model of the business, not merely a back-office accounting upgrade',
    'Standardize operational processes where applicable to reduce custom code sprawl',
    'Connect operational applications through robust, governed APIs and master data models',
    'Implement in phased, low-risk milestone waves rather than disruptive big-bang cutovers',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category="MODERN ERP"
          title="Accelerating Business Transformation with Modern ERP"
          subtitle="Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."
          date="August 2026"
          readTime="6 min read"
          image="/img/perspectives/accelerating-business-transformation-modern-erp.jpg"
          imageAlt="Modern ERP platform connecting enterprise business operations"
          imageCaption="Enterprise Technology Perspective — ERP & Connected Business Operations"
        />

        {/* Section: Why Modern ERP Matters */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE OPERATIONAL BACKBONE</span>
            <h2 className="p-heading">Why Modern ERP Matters</h2>
            <p className="p-subtext">
              ERP is no longer just back-office accounting. It is the operating model of the modern enterprise
              expressed in software.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                In fast-moving enterprise landscapes, traditional Enterprise Resource Planning systems often struggle.
                Built in an era of batch processing and isolated local servers, legacy ERPs were heavily customized,
                difficult to upgrade, and painfully opaque. Crucial business operations functioned in parallel siloes,
                relying on fragile overnight exports to synchronize ledgers with warehouses.
              </p>
              <p>
                Modern, cloud-native ERP fundamentally redefines this dynamic. It operates as the unified digital backbone
                of the enterprise—a living foundation where finance, procurement, supply chain, inventory, and human resources
                transact on a shared data model.
              </p>
              <p>
                By bringing core operations into a single harmonized environment, modern ERP eliminates the operational
                blind spots that slow down growth, enabling leaders to steer the business using real-time signals
                rather than stale historical summaries.
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/business-process-automation.jpg`}
                alt="Automated ERP process orchestration"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Connected Business Functions */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">INTEGRATED ECOSYSTEM</span>
            <h2 className="p-heading">Connected Business Functions</h2>
            <p className="p-subtext">
              Real organizational value emerges when core business functions transact together on a shared digital foundation.
            </p>
          </div>

          <div className="p-card-grid-3">
            {connectedFunctions.map((fn, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{fn.icon}</div>
                <h3 className="p-card-title">{fn.title}</h3>
                <p className="p-card-desc">{fn.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Unified Operations */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">CROSS-FUNCTIONAL HARMONY</span>
            <h2 className="p-heading">Unified Operations &amp; Information Flow</h2>
            <p className="p-subtext">
              Breaking down communication walls between departments to enable fluid, synchronized enterprise workflows.
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                Operational silos are rarely people problems; they are architectural problems. When customer service,
                procurement, and warehouse teams work in disconnected applications, every handoff requires manual emails,
                spreadsheets, and phone calls. Errors multiply, invoices get held up, and customer commitments slip.
              </p>
              <p>
                Modern ERP addresses this through unified data lineage and event-driven process orchestration:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Synchronized order-to-cash:</strong> When a customer order is placed, inventory reserves automatically, shipping labels generate, and billing ledgers update instantaneously.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Procure-to-pay transparency:</strong> Purchase orders, goods receipts, and vendor invoices match automatically with 3-way reconciliation, flagging only exceptions for human review.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Unified labor and operational costing:</strong> Project timesheets, payroll allocations, and direct operational expenditures map directly to cost centers in real time.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/end-to-end-solution-framework.jpg`}
                alt="Unified enterprise operations framework"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Real-Time Business Visibility */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">ENTERPRISE TELEMETRY</span>
            <h2 className="p-heading">Real-Time Business Visibility</h2>
            <p className="p-subtext">
              Consolidating operational metrics into transparent executive dashboards that reflect current business realities.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                Operating an enterprise without unified visibility is like flying in dense fog with delayed instruments.
                Modern ERP provides real-time telemetry across every business dimension:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Live executive dashboards:</strong> Instantaneous views of gross margins, operating cash flows, open liabilities, and order backlogs without waiting for period-end closing.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Self-service operational reporting:</strong> Departmental heads can build custom queries and drill down from enterprise-level summaries to individual transaction line items.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Centralized master information:</strong> Eliminating contradictory numbers by establishing single governed master data for customers, vendors, and product catalogs.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Proactive anomaly alerts:</strong> Automated alerts notify managers immediately when margins drop below threshold, inventory runs low, or supplier deliveries slip.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`}
                alt="Real-time ERP dashboard and reporting"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Modern ERP Capabilities */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">CORE PLATFORM ARCHITECTURE</span>
            <h2 className="p-heading">Modern ERP Capabilities</h2>
            <p className="p-subtext">
              The architectural attributes that separate contemporary ERP platforms from rigid legacy installations.
            </p>
          </div>

          <div className="p-card-grid-3">
            {modernCapabilities.map((cap, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{cap.icon}</div>
                <h3 className="p-card-title">{cap.title}</h3>
                <p className="p-card-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Business Benefits */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">QUALITATIVE IMPACT</span>
            <h2 className="p-heading">Business Benefits</h2>
            <p className="p-subtext">
              Connecting core business operations into a unified digital foundation yields measurable organizational resilience.
            </p>
          </div>

          <BusinessImpactGrid outcomes={erpBusinessBenefits} />
        </section>

        {/* Key Perspective */}
        <KeyPerspectiveBox
          eyebrow="ERP TRANSFORMATION PHILOSOPHY"
          title="Pragmatic Modernization Over Monolithic Overhaul"
          lead="Modern ERP transformation succeeds when organizations treat it as an evolutionary operating upgrade rather than an all-or-nothing IT disruption:"
          points={erpStrategyPoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading="Modernize Your Enterprise Operations"
          description="Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."
          buttonText="Talk to Our Experts"
          serviceContext="Modern ERP & Business Operations"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="modern-erp" />
      </div>
    </div>
  )
}
