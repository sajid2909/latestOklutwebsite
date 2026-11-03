import fs from 'fs'

// ==========================================
// 1. BusinessTransformationPerspective.jsx
// ==========================================
const file1 = `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
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
  const { t } = useTranslation()
  const art = t('perspectivesArticles.businessTransformation', { returnObjects: true }) || {}

  useDocumentMeta({
    title: art.title ? \`\${art.title} | Perspectives | Oklut\` : 'Modernizing Business Applications for a Data-Driven Enterprise | Perspectives | Oklut',
    description:
      art.subtitle || 'How modern application architecture and connected data improve operational efficiency, scalability, and business visibility across the enterprise.',
    keywords:
      'business transformation, application modernization, enterprise architecture, connected data, APIs, system integration',
  })

  usePerspectiveScrollReveal()

  // Architecture Flow 1: Fragmented Legacy Landscape
  const legacyLandscapeFlow = [
    {
      title: 'Business Applications',
      desc: 'Disparate legacy CRM, ERP, and departmental tools running in silos.',
    },
    {
      title: 'Multiple Data Sources',
      desc: 'Fragmented operational tables, CSV extracts, and ad-hoc schemas.',
    },
    {
      title: 'Disconnected Databases',
      desc: 'Isolated on-premise and uncoordinated cloud data repositories.',
    },
    {
      title: 'Reports & Business Users',
      desc: 'Manual reconciliations, conflicting spreadsheets, and delayed reporting.',
    },
  ]

  // Architecture Flow 2: Target Connected Enterprise Architecture
  const modernArchitectureFlow = [
    {
      title: 'Business Applications',
      desc: 'Core operational platforms and modern responsive interfaces.',
    },
    {
      title: 'API / Integration Layer',
      desc: 'Secure, event-driven API gateway connecting enterprise workflows.',
    },
    {
      title: 'Data Services',
      desc: 'Unified master data models, pipelines, and optimized storage engines.',
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Real-time telemetry, semantic models, and automated reporting.',
    },
    {
      title: 'Business Decision Makers',
      desc: 'Live operational dashboards providing unified executive visibility.',
    },
  ]

  // Technology Foundation Table
  const techFoundationRows = [
    { area: 'Enterprise Applications', purpose: 'Business process management' },
    { area: 'APIs', purpose: 'System integration' },
    { area: 'Databases', purpose: 'Structured business data' },
    { area: 'Data Integration', purpose: 'Connecting multiple sources' },
    { area: 'Analytics', purpose: 'Business insights' },
    { area: 'Cloud Infrastructure', purpose: 'Scalability and flexibility' },
    { area: 'Monitoring', purpose: 'Reliability and performance' },
  ]

  // Business Impact / Qualitative Value
  const businessImpactOutcomes = [
    'Improved operational visibility across cross-functional units',
    'Better data consistency and single source of enterprise truth',
    'Reduced manual reporting effort and automated data compilation',
    'Improved application performance and reduced transaction latency',
    'Easier system integration through standardized, secure APIs',
    'Greater scalability to support organic growth and acquisition',
    'Better foundation for future innovation and intelligence adoption',
  ]

  // Core perspective philosophical points
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
          category={art.category || "BUSINESS TRANSFORMATION"}
          title={art.title || "Modernizing Business Applications for a Data-Driven Enterprise"}
          subtitle={art.subtitle || "A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations."}
          date="September 2026"
          readTime="7 min read"
          image="/img/perspectives/modernizing-business-applications.jpg"
          imageAlt="Modern enterprise applications and connected data architecture"
          imageCaption={art.imageCaption || "Enterprise Technology Perspective — Application Architecture & Connected Data"}
        />

        {/* Section: The Business Challenge */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec1Eyebrow || "THE BUSINESS CHALLENGE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "Navigating Complexity in a Growing Enterprise"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "As businesses scale, technology ecosystems inevitably expand. What begins as focused solutions for individual departments can evolve into a tangled web of disparate systems."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec1P1 || "In a typical enterprise environment, growth often introduces multiple generations of software. Finance, supply chain, customer service, and field operations often operate on separate software stacks acquired or built at different times. Over years of operational evolution, these systems develop their own data formats, update cadences, and integration quirks."}
              </p>
              <p>
                {art.sec1P2 || "The friction manifests across the enterprise through common operational bottlenecks:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec1List || [
                  { bold: 'Multiple disconnected business applications', text: ' that require duplicate data entry and manual cross-referencing.' },
                  { bold: 'Disconnected databases', text: ' operating without centralized governance or unified master records.' },
                  { bold: 'Manual reporting overhead', text: ', where analytical teams spend days stitching together exports rather than uncovering insights.' },
                  { bold: 'Data inconsistencies', text: ' across departments, creating conflicting answers to fundamental operational questions.' },
                  { bold: 'Application maintenance overhead and scalability limits', text: ', as brittle legacy point-to-point connections struggle to support growing transaction volumes.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p>
                {art.sec1P3 || "Addressing these challenges requires viewing the technology landscape not as a collection of isolated software purchases, but as an interconnected business platform designed to support strategic agility."}
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/custom-dev-sec1.jpg\`}
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
            <span className="p-eyebrow">{art.sec2Eyebrow || "SYSTEM EVOLUTION"}</span>
            <h2 className="p-heading">{art.sec2Heading || "A Complex Technology Landscape"}</h2>
            <p className="p-subtext">
              {art.sec2Subtext || "When business applications, databases, and operational systems evolve independently, information flows become fragmented. Understanding this fragmentation is the critical first step."}
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge={art.legacyLandscapeBadge || "Legacy Baseline"}
            title={art.legacyLandscapeTitle || "Fragmented Information Flow"}
            steps={art.legacyLandscapeFlow || legacyLandscapeFlow}
          />

          <div className="p-card-grid-3">
            {(art.sec2Cards || [
              { num: '01', title: 'Data Silos', desc: 'Crucial customer, financial, and inventory data remains trapped in departmental platforms, preventing a single unified view of business operations.' },
              { num: '02', title: 'Integration Gaps', desc: 'Point-to-point connections and nightly batch extracts create latency, high failure rates, and costly maintenance overhead across operational teams.' },
              { num: '03', title: 'Delayed Information', desc: 'When executives must wait days for month-end reconciliation to understand performance, decision-making is reactive rather than predictive.' }
            ]).map((c, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <span className="p-card-number">{c.num || \`0\${idx + 1}\`}</span>
                <h3 className="p-card-title">{c.title}</h3>
                <p className="p-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Modern Application Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec3Eyebrow || "THE CONNECTED MODEL"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Modern Application Architecture"}</h2>
            <p className="p-subtext">
              {art.sec3Subtext || "Enterprises move toward an event-driven, API-first architecture where data flows reliably across core platforms and reaches decision-makers in real time."}
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge={art.modernArchitectureBadge || "Target Architecture"}
            title={art.modernArchitectureTitle || "Connected Enterprise Application Model"}
            steps={art.modernArchitectureFlow || modernArchitectureFlow}
          />

          <div className="p-editorial-grid p-reverse" style={{ marginTop: '2.5rem' }}>
            <div className="p-editorial-text reveal">
              <p>
                {art.sec3P1 || "A modern application architecture replaces brittle point-to-point connections with an agile, decoupled foundation. By establishing a robust API and integration layer, systems interact through governed, secure endpoints while preserving the autonomy of individual business units."}
              </p>
              <p>
                {art.sec3P2 || "Key technical capabilities of this architectural shift include:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec3List || [
                  { bold: 'Application modernization:', text: ' Decoupling core business logic into scalable modular services.' },
                  { bold: 'API integration:', text: ' Establishing standardized, documented interfaces for internal and partner interoperability.' },
                  { bold: 'Data integration & database optimization:', text: ' Unifying operational data pipelines with high-throughput query optimization.' },
                  { bold: 'Observability & security:', text: ' Implementing centralized telemetry, audit trails, and role-based access controls across all services.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/solution-arch-design.jpg\`}
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
            <span className="p-eyebrow">{art.sec4Eyebrow || "INTELLIGENCE & VISIBILITY"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Connected Data & Analytics"}</h2>
            <p className="p-subtext">
              {art.sec4Subtext || "When business applications communicate seamlessly, data ceases to be a reporting byproduct and becomes a primary driver of operational agility."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec4P1 || "Integrated data foundations transform how leadership and operational teams interact with information. Rather than relying on retrospective reports that show what occurred weeks ago, organizations gain live operational telemetry across business units."}
              </p>
              <p>
                {art.sec4P2 || "Connected data and analytics support sustainable business outcomes through:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec4List || [
                  { bold: 'Operational visibility:', text: ' Continuous transparency across sales, inventory, fulfillment, and financial performance.' },
                  { bold: 'Faster reporting cadences:', text: ' On-demand data aggregation that eliminates repetitive manual spreadsheets.' },
                  { bold: 'Consistent information:', text: ' Single definitions for metrics like margin, customer lifetime value, and lead velocity.' },
                  { bold: 'Better business insights:', text: ' Predictive pattern detection that surfaces risks and opportunities ahead of time.' },
                  { bold: 'Improved decision-making:', text: ' Confident executive action supported by validated data lineage and transparency.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg\`}
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
            <span className="p-eyebrow">{art.sec5Eyebrow || "ARCHITECTURE BLUEPRINT"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Technology Foundation"}</h2>
            <p className="p-subtext">
              {art.sec5Subtext || "A comprehensive view of the core technology areas that compose a modern, scalable enterprise foundation."}
            </p>
          </div>

          <TechnologyGrid rows={art.techFoundationRows || techFoundationRows} />
        </section>

        {/* Section: Business Impact */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec6Eyebrow || "QUALITATIVE VALUE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Impact"}</h2>
            <p className="p-subtext">
              {art.sec6Subtext || "Modernizing application architecture and connecting fragmented data delivers tangible operational improvements across the organization."}
            </p>
          </div>

          <BusinessImpactGrid outcomes={art.businessImpactOutcomes || businessImpactOutcomes} />
        </section>

        {/* Section: Key Perspective */}
        <KeyPerspectiveBox
          eyebrow={art.keyPerspectiveEyebrow || "STRATEGIC PERSPECTIVE"}
          title={art.keyPerspectiveTitle || "Modernization Is More Than Software Replacement"}
          lead={art.keyPerspectiveLead || "Modernizing business applications is not simply replacing old software with new tools. It is an intentional alignment of technology with how the business operates, scales, and delivers value."}
          points={art.keyPerspectivePoints || keyPerspectivePoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Technology Environment?"}
          description={art.ctaDescription || "Explore how modern application architecture, connected data and scalable technology can help organizations improve efficiency and prepare for future growth."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Business Transformation & Application Modernization"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="business-transformation" />
      </div>
    </div>
  )
}
`

// ==========================================
// 2. ArtificialIntelligencePerspective.jsx
// ==========================================
const file2 = `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function ArtificialIntelligencePerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.artificialIntelligence', { returnObjects: true }) || {}

  useDocumentMeta({
    title: art.title ? \`\${art.title} | Perspectives | Oklut\` : 'How AI Is Reshaping Enterprise Applications | Perspectives | Oklut',
    description:
      art.subtitle || 'Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day.',
    keywords:
      'enterprise AI, artificial intelligence, intelligent automation, AI copilots, predictive intelligence, enterprise applications',
  })

  usePerspectiveScrollReveal()

  // 6 AI Copilot Capabilities
  const copilotCards = [
    {
      icon: '🔍',
      title: 'Information Search',
      desc: 'Semantic retrieval across distributed knowledge bases, intranet policies, product specifications, and historical ticket resolutions without keyword guessing.',
    },
    {
      icon: '📝',
      title: 'Document Summarization',
      desc: 'Instant distillation of lengthy RFPs, vendor agreements, technical specifications, and legal amendments into actionable executive briefs and risk checklists.',
    },
    {
      icon: '✨',
      title: 'Content Generation',
      desc: 'Assisted drafting of client proposals, operational documentation, standard operating procedures (SOPs), and standardized customer updates aligned with brand standards.',
    },
    {
      icon: '📈',
      title: 'Data Analysis',
      desc: 'Translating conversational inquiries into complex analytical queries, generating on-the-fly chart summaries and highlighting critical outliers for leadership.',
    },
    {
      icon: '🔄',
      title: 'Business Workflows',
      desc: 'Initiating transactions directly from chat prompts—such as scheduling resources, creating tickets, updating records, or submitting purchase requisitions.',
    },
    {
      icon: '🛡️',
      title: 'Role-Grounded Access',
      desc: 'Ensuring copilot responses strictly respect user permission levels, keeping confidential financials, HR files, and intellectual property protected.',
    },
  ]

  // Enterprise AI Use Cases
  const aiUseCases = [
    {
      icon: '⚙️',
      title: 'Supply Chain Optimization',
      desc: 'Dynamic inventory replenishment models that factor in supplier lead times, weather disruptions, and demand velocity.',
    },
    {
      icon: '👥',
      title: 'Customer Service Intelligence',
      desc: 'Context-aware virtual agents that resolve complex customer requests and route nuanced cases with full conversation summaries.',
    },
    {
      icon: '💳',
      title: 'Financial Process Automation',
      desc: 'Intelligent invoice matching, expense categorization, and early fraud anomaly detection across high-volume transaction feeds.',
    },
    {
      icon: '📊',
      title: 'Sales & Revenue Intelligence',
      desc: 'Opportunity scoring, deal velocity forecasting, and actionable next-best-step recommendations for enterprise account executives.',
    },
    {
      icon: '📋',
      title: 'Document Lifecycle Management',
      desc: 'Automated contract risk scoring, regulatory compliance cross-checks, and entity extraction across enterprise repositories.',
    },
    {
      icon: '🔬',
      title: 'IT & DevOps Automation',
      desc: 'Automated root cause analysis on application logs, self-healing cluster incident resolution, and continuous vulnerability triage.',
    },
  ]

  // Business Impact / Qualitative Benefits
  const aiBusinessBenefits = [
    'Faster operational decisions driven by real-time predictive models',
    'Reduction in repetitive data processing and manual reconciliations',
    'Higher employee throughput with contextual copilot assistance',
    'Improved customer satisfaction through hyper-personalized experiences',
    'Continuous process self-optimization based on real telemetry',
    'De-risked compliance tracking via automated audit-log inspection',
  ]

  // Governance points
  const governancePoints = [
    'Strict role-based access ensuring AI models never leak sensitive data',
    'Transparent reasoning traces allowing human review on high-value actions',
    'Continuous model evaluation to guard against hallucination and bias',
    'Strict data provenance standards aligning with GDPR, SOC 2, and HIPAA',
    'Human-in-the-loop escalation paths for uncertain edge conditions',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category={art.category || "ARTIFICIAL INTELLIGENCE"}
          title={art.title || "How AI Is Reshaping Enterprise Applications"}
          subtitle={art.subtitle || "Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day."}
          date="September 2026"
          readTime="6 min read"
          image="/img/perspectives/ai-reshaping-enterprise-applications.jpg"
          imageAlt="AI Reshaping Enterprise Applications"
          imageCaption={art.imageCaption || "Enterprise Technology Perspective — Artificial Intelligence & Enterprise Systems"}
        />

        {/* Section: AI in Enterprise Applications */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec1Eyebrow || "THE SHIFT TO NATIVE INTELLIGENCE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "AI in Enterprise Applications"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "Artificial intelligence is transitioning from experimental side-projects into the core operational applications that enterprises rely on every day."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec1P1 || "For years, enterprise artificial intelligence was treated as an external capability: a model trained in isolation, a sandbox demonstration, or an isolated chatbot accessible through a separate portal. Today, the paradigm has fundamentally shifted. High-impact enterprise AI is embedded directly inside the systems of record—the ERPs, CRMs, human capital platforms, and supply chain engines where real business occurs."}
              </p>
              <p>
                {art.sec1P2 || "When intelligence operates inside the system of record, it inherits the organization’s established security boundaries, data models, and business logic. It does not simply generate generic responses; it acts on live orders, interprets open support tickets, reconciles supplier invoices, and assists employees within the exact interfaces they navigate every day."}
              </p>
              <p>
                {art.sec1P3 || "This transformation moves enterprise software from passive databases that wait for human keystrokes into proactive platforms that anticipate needs, automate steps, and surface timely recommendations."}
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/bpa-workflow-orchestration.jpg\`}
                alt="AI orchestration inside enterprise applications"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Intelligent Automation */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec2Eyebrow || "AUTOMATION AT SCALE"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Intelligent Automation"}</h2>
            <p className="p-subtext">
              {art.sec2Subtext || "Moving beyond traditional rule-based scripts toward cognitive workflows that understand unstructured content, adapt to variations, and optimize processes dynamically."}
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec2P1 || "Traditional Robotic Process Automation (RPA) excelled at deterministic, repetitive screen scraping. However, rigid rule sets break whenever a form changes, an unexpected document layout arrives, or an exception occurs. Intelligent automation bridges this divide by combining cognitive reasoning with transactional execution:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec2List || [
                  { bold: 'Workflow automation:', text: ' Orchestrating complex cross-departmental operations, routing tasks based on urgency and historical resolution paths.' },
                  { bold: 'Intelligent document processing:', text: ' Ingesting unstructured PDFs, emails, shipping manifests, and contracts, converting them into structured database transactions.' },
                  { bold: 'Intelligent task automation:', text: ' Automating multi-step operational validations—such as matching purchase orders against receipts and bank statements.' },
                  { bold: 'Process optimization:', text: ' Continuously analyzing process logs to identify cycle-time bottlenecks and recommending targeted workflow refinements.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/poc-pilot-implementation.jpg\`}
                alt="Intelligent workflow orchestration"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: AI Copilots */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec3Eyebrow || "EMBEDDED ASSISTANCE"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Enterprise AI Copilots"}</h2>
            <p className="p-subtext">
              {art.sec3Subtext || "Grounded in organizational knowledge and enterprise security, AI assistants act as specialized partners across daily business workflows."}
            </p>
          </div>

          <div className="p-card-grid-3">
            {(art.copilotCards || copilotCards).map((card, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{card.icon}</div>
                <h3 className="p-card-title">{card.title}</h3>
                <p className="p-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Predictive Intelligence */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec4Eyebrow || "FORWARD-LOOKING REASONING"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Predictive Intelligence"}</h2>
            <p className="p-subtext">
              {art.sec4Subtext || "Transforming historical enterprise logs and real-time operational feeds into actionable foresight."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec4P1 || "While generative models excel at understanding and synthesizing language, predictive intelligence focuses on mathematical patterns hidden within structured enterprise datasets. Embedded predictive models empower organizations to anticipate operational hurdles before they disrupt operations:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec4List || [
                  { bold: 'Operational forecasting:', text: ' Predicting revenue trends, inventory velocity, and resource demands by synthesizing seasonal indicators with real-time pipeline velocity.' },
                  { bold: 'Predictive analytics:', text: ' Pinpointing customer churn risks, maintenance degradation cycles, and supply chain delays while there is still time to intervene.' },
                  { bold: 'Risk identification:', text: ' Flagging anomalies in financial transactions, compliance logs, and vendor procurement patterns before they escalate.' },
                  { bold: 'Demand prediction:', text: ' Harmonizing sales forecasts with manufacturing capacity and warehouse stock levels to protect working capital.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg\`}
                alt="Predictive intelligence in business software"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Enterprise AI Use Cases */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec5Eyebrow || "REAL-WORLD APPLICATIONS"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Enterprise AI Use Cases"}</h2>
            <p className="p-subtext">
              {art.sec5Subtext || "Practical ways leading organizations are applying artificial intelligence across core business functions."}
            </p>
          </div>

          <div className="p-card-grid-3">
            {(art.aiUseCases || aiUseCases).map((uc, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{uc.icon}</div>
                <h3 className="p-card-title">{uc.title}</h3>
                <p className="p-card-desc">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Business Benefits */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec6Eyebrow || "STRATEGIC VALUE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Benefits"}</h2>
            <p className="p-subtext">
              {art.sec6Subtext || "When implemented thoughtfully with governed enterprise data, AI unlocks substantial qualitative advantages."}
            </p>
          </div>

          <BusinessImpactGrid outcomes={art.aiBusinessBenefits || aiBusinessBenefits} />
        </section>

        {/* Key Perspective / Governance */}
        <KeyPerspectiveBox
          eyebrow={art.keyPerspectiveEyebrow || "ENTERPRISE GOVERNANCE"}
          title={art.keyPerspectiveTitle || "Trust, Oversight & Guardrails"}
          lead={art.keyPerspectiveLead || "AI is only as dependable as the data foundation beneath it and the governance surrounding it. Sustainable enterprise adoption requires deliberate architectural discipline:"}
          points={art.governancePoints || governancePoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading={art.ctaHeading || "Explore AI Opportunities for Your Business"}
          description={art.ctaDescription || "Discover how intelligent automation, enterprise copilots and predictive models can unlock operational efficiency across your core systems."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Enterprise AI & Automation Solutions"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="artificial-intelligence" />
      </div>
    </div>
  )
}
`

// ==========================================
// 3. ModernERPPerspective.jsx
// ==========================================
const file3 = `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
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
  const { t } = useTranslation()
  const art = t('perspectivesArticles.modernErp', { returnObjects: true }) || {}

  useDocumentMeta({
    title: art.title ? \`\${art.title} | Perspectives | Oklut\` : 'Accelerating Business Transformation with Modern ERP | Perspectives | Oklut',
    description:
      art.subtitle || 'Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation.',
    keywords:
      'modern ERP, enterprise resource planning, business operations, supply chain, cloud ERP, financial management',
  })

  usePerspectiveScrollReveal()

  // 6 Connected Business Functions
  const connectedFunctions = [
    {
      title: 'Finance & Accounting',
      desc: 'Real-time general ledger, automated reconciliation, and multi-currency consolidation across global subsidiaries.',
      icon: '📊',
    },
    {
      title: 'Procurement & Vendor Management',
      desc: 'Automated purchase orders, vendor evaluation scorecards, and contract compliance tracking with touchless approvals.',
      icon: '🤝',
    },
    {
      title: 'Supply Chain & Inventory',
      desc: 'End-to-end stock visibility, demand-driven replenishment, warehouse automation, and multi-node logistics optimization.',
      icon: '📦',
    },
    {
      title: 'Manufacturing & Operations',
      desc: 'Production scheduling, material requirement planning (MRP), shop-floor telemetry, and predictive asset maintenance.',
      icon: '🏭',
    },
    {
      title: 'Sales & Customer Order Management',
      desc: 'Omnichannel order capture, real-time credit checks, dynamic pricing rules, and synchronized fulfillment tracking.',
      icon: '🛍️',
    },
    {
      title: 'Human Capital & Workforce',
      desc: 'Unified employee records, automated payroll integration, time-and-expense tracking, and workforce planning analytics.',
      icon: '👥',
    },
  ]

  // 4 Modern ERP Architectural Capabilities
  const modernCapabilities = [
    {
      title: 'Cloud-Native Architecture',
      desc: 'Elastic scalability, automatic security patching, continuous quarterly feature releases, and zero on-premise hardware overhead.',
      icon: '☁️',
    },
    {
      title: 'API-First Integration',
      desc: 'Standards-based REST and event-driven webhooks connecting seamlessly with third-party logistics, CRMs, banks, and ecommerce.',
      icon: '🔌',
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
          category={art.category || "MODERN ERP"}
          title={art.title || "Accelerating Business Transformation with Modern ERP"}
          subtitle={art.subtitle || "Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."}
          date="August 2026"
          readTime="6 min read"
          image="/img/perspectives/accelerating-business-transformation-modern-erp.jpg"
          imageAlt="Modern ERP platform connecting enterprise business operations"
          imageCaption={art.imageCaption || "Enterprise Technology Perspective — ERP & Connected Business Operations"}
        />

        {/* Section: Why Modern ERP Matters */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec1Eyebrow || "THE OPERATIONAL BACKBONE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "Why Modern ERP Matters"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "ERP is no longer just back-office accounting. It is the operating model of the modern enterprise expressed in software."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec1P1 || "In fast-moving enterprise landscapes, traditional Enterprise Resource Planning systems often struggle. Built in an era of batch processing and isolated local servers, legacy ERPs were heavily customized, difficult to upgrade, and painfully opaque. Crucial business operations functioned in parallel siloes, relying on fragile overnight exports to synchronize ledgers with warehouses."}
              </p>
              <p>
                {art.sec1P2 || "Modern, cloud-native ERP fundamentally redefines this dynamic. It operates as the unified digital backbone of the enterprise—a living foundation where finance, procurement, supply chain, inventory, and human resources transact on a shared data model."}
              </p>
              <p>
                {art.sec1P3 || "By bringing core operations into a single harmonized environment, modern ERP eliminates the operational blind spots that slow down growth, enabling leaders to steer the business using real-time signals rather than stale historical summaries."}
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/business-process-automation.jpg\`}
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
            <span className="p-eyebrow">{art.sec2Eyebrow || "INTEGRATED ECOSYSTEM"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Connected Business Functions"}</h2>
            <p className="p-subtext">
              {art.sec2Subtext || "Real organizational value emerges when core business functions transact together on a shared digital foundation."}
            </p>
          </div>

          <div className="p-card-grid-3">
            {(art.connectedFunctions || connectedFunctions).map((fn, idx) => (
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
            <span className="p-eyebrow">{art.sec3Eyebrow || "CROSS-FUNCTIONAL HARMONY"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Unified Operations & Information Flow"}</h2>
            <p className="p-subtext">
              {art.sec3Subtext || "Breaking down communication walls between departments to enable fluid, synchronized enterprise workflows."}
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec3P1 || "Operational silos are rarely people problems; they are architectural problems. When customer service, procurement, and warehouse teams work in disconnected applications, every handoff requires manual emails, spreadsheets, and phone calls. Errors multiply, invoices get held up, and customer commitments slip."}
              </p>
              <p>
                {art.sec3P2 || "Modern ERP addresses this through unified data lineage and event-driven process orchestration:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec3List || [
                  { bold: 'Synchronized order-to-cash:', text: ' When a customer order is placed, inventory reserves automatically, shipping labels generate, and billing ledgers update instantaneously.' },
                  { bold: 'Procure-to-pay transparency:', text: ' Purchase orders, goods receipts, and vendor invoices match automatically with 3-way reconciliation, flagging only exceptions for human review.' },
                  { bold: 'Unified labor and operational costing:', text: ' Project timesheets, payroll allocations, and direct operational expenditures map directly to cost centers in real time.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/end-to-end-solution-framework.jpg\`}
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
            <span className="p-eyebrow">{art.sec4Eyebrow || "ENTERPRISE TELEMETRY"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Real-Time Business Visibility"}</h2>
            <p className="p-subtext">
              {art.sec4Subtext || "Consolidating operational metrics into transparent executive dashboards that reflect current business realities."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec4P1 || "Operating an enterprise without unified visibility is like flying in dense fog with delayed instruments. Modern ERP provides real-time telemetry across every business dimension:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec4List || [
                  { bold: 'Live executive dashboards:', text: ' Instantaneous views of gross margins, operating cash flows, open liabilities, and order backlogs without waiting for period-end closing.' },
                  { bold: 'Self-service operational reporting:', text: ' Departmental heads can build custom queries and drill down from enterprise-level summaries to individual transaction line items.' },
                  { bold: 'Centralized master information:', text: ' Eliminating contradictory numbers by establishing single governed master data for customers, vendors, and product catalogs.' },
                  { bold: 'Proactive anomaly alerts:', text: ' Automated alerts notify managers immediately when margins drop below threshold, inventory runs low, or supplier deliveries slip.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg\`}
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
            <span className="p-eyebrow">{art.sec5Eyebrow || "CORE PLATFORM ARCHITECTURE"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Modern ERP Capabilities"}</h2>
            <p className="p-subtext">
              {art.sec5Subtext || "The architectural attributes that separate contemporary ERP platforms from rigid legacy installations."}
            </p>
          </div>

          <div className="p-card-grid-3">
            {(art.modernCapabilities || modernCapabilities).map((cap, idx) => (
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
            <span className="p-eyebrow">{art.sec6Eyebrow || "QUALITATIVE IMPACT"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Benefits"}</h2>
            <p className="p-subtext">
              {art.sec6Subtext || "Connecting core business operations into a unified digital foundation yields measurable organizational resilience."}
            </p>
          </div>

          <BusinessImpactGrid outcomes={art.erpBusinessBenefits || erpBusinessBenefits} />
        </section>

        {/* Key Perspective */}
        <KeyPerspectiveBox
          eyebrow={art.keyPerspectiveEyebrow || "ERP TRANSFORMATION PHILOSOPHY"}
          title={art.keyPerspectiveTitle || "Pragmatic Modernization Over Monolithic Overhaul"}
          lead={art.keyPerspectiveLead || "Modern ERP transformation succeeds when organizations treat it as an evolutionary operating upgrade rather than an all-or-nothing IT disruption:"}
          points={art.erpStrategyPoints || erpStrategyPoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading={art.ctaHeading || "Modernize Your Enterprise Operations"}
          description={art.ctaDescription || "Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Modern ERP & Business Operations"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="modern-erp" />
      </div>
    </div>
  )
}
`

// ==========================================
// 4. CybersecurityPerspective.jsx
// ==========================================
const file4 = `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function CybersecurityPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cybersecurity', { returnObjects: true }) || {}

  useDocumentMeta({
    title: art.title ? \`\${art.title} | Perspectives | Oklut\` : 'Building Cyber Resilience in a Connected Enterprise | Perspectives | Oklut',
    description:
      art.subtitle || 'Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments.',
    keywords:
      'cybersecurity, cyber resilience, zero trust, identity and access management, cloud security, threat detection, incident response',
  })

  usePerspectiveScrollReveal()

  // 4 Threat Protection Dimensions
  const threatCards = [
    {
      icon: '🛡️',
      title: 'Threat Detection',
      desc: 'Machine learning-assisted threat intelligence that monitors anomalous network patterns, credential abuse, and zero-day vulnerabilities in real time.',
    },
    {
      icon: '📡',
      title: 'Security Monitoring',
      desc: 'Centralized Security Operations Center (SOC) telemetry correlating events across servers, container clusters, identity providers, and endpoints.',
    },
    {
      icon: '🔍',
      title: 'Vulnerability Management',
      desc: 'Continuous automated vulnerability scanning across infrastructure, source code repositories, and container registries to remediate weaknesses proactively.',
    },
    {
      icon: '🔒',
      title: 'Data Protection',
      desc: 'Robust encryption in transit (TLS 1.3) and at rest (AES-256), alongside granular data loss prevention (DLP) governance to prevent intellectual property leaks.',
    },
  ]

  // Cloud security considerations
  const cloudSecurityCards = [
    {
      title: 'Shared Responsibility',
      desc: "Clear governance distinguishing the cloud provider's physical infrastructure security from the enterprise's responsibility for data encryption, IAM policies, and application code.",
    },
    {
      title: 'Infrastructure as Code (IaC)',
      desc: 'Immutable, auditable cloud configurations managed through code. Automated policy-as-code scanners block misconfigurations and exposed buckets before deployment.',
    },
    {
      title: 'Container & Kubernetes Security',
      desc: 'Hardened container runtimes, signed image registries, network micro-segmentation, and automated secret management that keeps credentials out of source repositories.',
    },
  ]

  // 4 Incident Readiness Phases
  const incidentReadinessPhases = [
    {
      icon: '👁️',
      title: 'Telemetry & Anomaly Detection',
      desc: 'Early warning indicators that flag lateral movement, suspicious privilege escalations, and unusual outbound data transfers within minutes.',
    },
    {
      icon: '⚡',
      title: 'Automated Containment',
      desc: 'Pre-scripted quarantine playbooks that isolate compromised credentials, revoke session tokens, and sever network pathways without shutting down core operations.',
    },
    {
      icon: '🛠️',
      title: 'Forensic Investigation & Remediation',
      desc: 'Auditable timeline analysis determining patient-zero infection vectors, closing structural vulnerabilities, and verifying systemic hygiene.',
    },
    {
      icon: '🔄',
      title: 'Resilient Recovery & Business Continuity',
      desc: 'Rapid restoration of clean services from immutable, air-gapped backups alongside transparent communications with regulatory authorities.',
    },
  ]

  // Business Impact / Qualitative Benefits
  const cyberBusinessBenefits = [
    'Protected enterprise brand reputation and enduring customer trust',
    'Uninterrupted business continuity during targeted security incidents',
    'Strict compliance alignment with ISO 27001, SOC 2, HIPAA, and GDPR',
    'Guaranteed confidentiality for sensitive customer and IP records',
    'Lower cybersecurity insurance premiums through validated resilience controls',
    'Accelerated sales cycles by satisfying stringent enterprise vendor security reviews',
  ]

  const zeroTrustPrinciples = [
    'Explicit Verification: Always authenticate and authorize based on all available data points, including user identity, location, device health, and service context.',
    'Least Privilege Access: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies, adaptive risk-based challenges, and data protection rules.',
    'Assume Breach: Minimize blast radius and segment access. Verify end-to-end encryption and utilize analytics to gain visibility and improve threat defenses.',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category={art.category || "CYBERSECURITY"}
          title={art.title || "Building Cyber Resilience in a Connected Enterprise"}
          subtitle={art.subtitle || "Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."}
          date="September 2026"
          readTime="8 min read"
          image="/img/perspectives/cyber-resilience-connected-enterprise.jpg"
          imageAlt="Building cyber resilience across connected enterprise networks"
          imageCaption={art.imageCaption || "Enterprise Technology Perspective — Threat Defense & Zero-Trust Architecture"}
        />

        {/* Section: The Connected Security Landscape */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec1Eyebrow || "THE EXPANDING PERIMETER"}</span>
            <h2 className="p-heading">{art.sec1Heading || "The Connected Enterprise Security Landscape"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "As modern organizations connect more applications, cloud environments, remote employees, mobile devices, and third-party partners, the traditional security perimeter ceases to exist."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec1P1 || "In the legacy era of enterprise IT, security operated on a castle-and-moat doctrine: everything inside the corporate office network was presumed trusted, while everything outside was considered untrusted. A single corporate firewall protected internal servers, databases, and desktop computers."}
              </p>
              <p>
                {art.sec1P2 || "Today’s enterprise has outgrown physical walls. Workloads reside across multi-cloud environments (AWS, Azure, GCP), employees access business applications from diverse locations, and APIs continuously exchange sensitive operational data with external logistics providers, financial institutions, and SaaS vendors."}
              </p>
              <p>
                {art.sec1P3 || "While this hyper-connectivity drives tremendous business agility, it vastly expands the enterprise attack surface. Every API endpoint, identity token, connected mobile device, and SaaS integration represents a potential vector of exposure. True enterprise protection requires shifting from perimeter-based defense to proactive, end-to-end cyber resilience."}
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/cloud-integration-sec.jpg\`}
                alt="Connected enterprise cloud security network"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Threat Protection */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec2Eyebrow || "COMPREHENSIVE DEFENSE"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Multi-Layered Threat Protection"}</h2>
            <p className="p-subtext">
              {art.sec2Subtext || "Proactive defenses that safeguard critical infrastructure, sensitive corporate data, and operational systems."}
            </p>
          </div>

          <div className="p-card-grid-4">
            {(art.sec2Cards || threatCards).map((c, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{c.icon}</div>
                <h3 className="p-card-title">{c.title}</h3>
                <p className="p-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Identity & Access */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec3Eyebrow || "THE NEW SECURITY BORDER"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Identity & Access Management (IAM)"}</h2>
            <p className="p-subtext">
              {art.sec3Subtext || "Identity is the foundational control plane of modern security. Nearly all serious security breaches begin with compromised credentials rather than software exploits."}
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec3P1 || "Protecting enterprise assets requires ensuring that every identity—whether a human executive, an external contractor, or an autonomous software service account—has validated authorization for the exact resources it accesses."}
              </p>
              <ul className="p-feature-list">
                {(art.sec3List || [
                  { bold: 'Centralized identity management:', text: ' Single Sign-On (SSO) and federated identity standards that eliminate fragmented password stores across applications.' },
                  { bold: 'Adaptive multi-factor authentication (MFA):', text: ' Phishing-resistant FIDO2 hardware keys and risk-based contextual challenges for sensitive administrative functions.' },
                  { bold: 'Granular access control:', text: ' Fine-grained Role-Based (RBAC) and Attribute-Based (ABAC) access controls enforced at the API and database levels.' },
                  { bold: 'Least-privilege principles:', text: ' Granting temporary, just-in-time (JIT) access that expires automatically when administrative tasks conclude.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/devops-automation-sec.jpg\`}
                alt="Identity and access management controls"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Zero Trust Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec4Eyebrow || "ARCHITECTURAL PARADIGM"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Demystifying Zero Trust Architecture"}</h2>
            <p className="p-subtext">
              {art.sec4Subtext || "Zero Trust is not a single product or tool. It is an architectural strategy based on a straightforward principle: trust no entity inside or outside the network by default."}
            </p>
          </div>

          <KeyPerspectiveBox
            eyebrow={art.keyPerspectiveEyebrow || "ZERO TRUST CORE DOCTRINE"}
            title={art.keyPerspectiveTitle || "Continuous Verification Over Blind Trust"}
            lead={art.keyPerspectiveLead || "In a Zero Trust architecture, implicit trust based on network location is entirely dismantled. Every transaction, database query, and user login must continuously prove its legitimacy:"}
            points={art.zeroTrustPrinciples || zeroTrustPrinciples}
          />
        </section>

        {/* Section: Cloud Security */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec5Eyebrow || "INFRASTRUCTURE GOVERNANCE"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Cloud Security Considerations"}</h2>
            <p className="p-subtext">
              {art.sec5Subtext || "Safeguarding workloads across public cloud, hybrid architectures, and distributed container environments."}
            </p>
          </div>

          <div className="p-card-grid-3">
            {(art.cloudSecurityCards || cloudSecurityCards).map((c, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <h3 className="p-card-title">{c.title}</h3>
                <p className="p-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Incident Readiness */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec6Eyebrow || "OPERATIONAL RESILIENCE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Incident Readiness: Beyond Prevention"}</h2>
            <p className="p-subtext">
              {art.sec6Subtext || "True cyber resilience accepts that incidents may occur. Preparedness focuses on rapid containment, minimal business disruption, and verified recovery."}
            </p>
          </div>

          <div className="p-card-grid-4">
            {(art.incidentReadinessPhases || incidentReadinessPhases).map((phase, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{phase.icon}</div>
                <h3 className="p-card-title">{phase.title}</h3>
                <p className="p-card-desc">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Business Benefits */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec7Eyebrow || "STRATEGIC VALUE"}</span>
            <h2 className="p-heading">{art.sec7Heading || "Business Benefits"}</h2>
            <p className="p-subtext">
              {art.sec7Subtext || "Building a cyber-resilient enterprise protects organizational value, regulatory standing, and market reputation."}
            </p>
          </div>

          <BusinessImpactGrid outcomes={art.cyberBusinessBenefits || cyberBusinessBenefits} />
        </section>

        {/* CTA */}
        <PerspectiveCTA
          heading={art.ctaHeading || "Strengthen Your Enterprise Security"}
          description={art.ctaDescription || "Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Enterprise Cybersecurity & Cyber Resilience"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="cybersecurity" />
      </div>
    </div>
  )
}
`

// ==========================================
// 5. CloudModernizationPerspective.jsx
// ==========================================
const file5 = `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
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
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cloudModernization', { returnObjects: true }) || {}

  useDocumentMeta({
    title: art.title ? \`\${art.title} | Perspectives | Oklut\` : 'Modernizing Legacy Applications for the Cloud | Perspectives | Oklut',
    description:
      art.subtitle || 'Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures.',
    keywords:
      'cloud modernization, legacy applications, cloud migration, refactoring, rehosting, microservices, cloud architecture',
  })

  usePerspectiveScrollReveal()

  // 4 Modernization Approaches
  const modernizationApproaches = [
    {
      num: '01',
      title: 'Rehost (Lift & Shift)',
      desc: 'Migrating applications directly to cloud virtual machines without modifying underlying application code.',
      benefits: 'Fastest time-to-cloud with minimal migration disruption.',
    },
    {
      num: '02',
      title: 'Replatform (Lift & Reshape)',
      desc: 'Moving workloads to cloud-managed databases, container runtimes, or OS upgrades without rewriting core business logic.',
      benefits: 'Reduces operational overhead and improves scalability with low risk.',
    },
    {
      num: '03',
      title: 'Refactor (Cloud-Native Rebuild)',
      desc: 'Deconstructing monolithic codebases into modular microservices, serverless functions, and event-driven APIs.',
      benefits: 'Maximizes agility, autoscaling performance, and operational cost efficiency.',
    },
    {
      num: '04',
      title: 'Replace (SaaS Transition)',
      desc: 'Decommissioning customized legacy modules in favor of industry-standard commercial SaaS solutions.',
      benefits: 'Eliminates ongoing maintenance overhead and guarantees continuous feature updates.',
    },
  ]

  // Architecture Flow: Modernization Lifecycle
  const cloudArchitectureFlow = [
    {
      title: 'Phase 1: Estate Assessment',
      desc: 'Audit dependencies, technical debt, and calculate workload ROI.',
    },
    {
      title: 'Phase 2: Target Blueprint',
      desc: 'Design containerized topologies, managed databases, and IaC templates.',
    },
    {
      title: 'Phase 3: Migration Waves',
      desc: 'Execute canary deployments with dual-write data synchronization.',
    },
    {
      title: 'Phase 4: Cloud Optimization',
      desc: 'Continuous FinOps governance, auto-scaling, and telemetry monitoring.',
    },
  ]

  // Qualitative Business Benefits
  const cloudModernizationBenefits = [
    'Substantially reduced infrastructure maintenance and hardware refresh expenses',
    'Near-infinite compute elasticity handling seasonal enterprise demand without latency',
    'Accelerated release velocity with automated CI/CD continuous deployment pipelines',
    'Elimination of single points of failure through multi-region high availability',
    'Modern API architectures enabling rapid cross-platform partner integrations',
    'Deep real-time observability into application performance and cloud spending',
  ]

  const landscapeAssessmentPoints = [
    'Mapping complex inter-application dependencies and data synchronization cadences',
    'Identifying hardcoded environmental configurations and proprietary database schemas',
    'Assessing regulatory compliance and data sovereignty constraints per jurisdiction',
    'Calculating realistic Total Cost of Ownership (TCO) across refactor versus rehost paths',
    'Establishing clear rollout waves to protect active daily business operations',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category={art.category || "CLOUD & MODERNIZATION"}
          title={art.title || "Modernizing Legacy Applications for the Cloud"}
          subtitle={art.subtitle || "Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."}
          date="September 2026"
          readTime="6 min read"
          image="/img/perspectives/legacy-application-cloud-modernization.jpg"
          imageAlt="Cloud application modernization and container architecture"
          imageCaption={art.imageCaption || "Enterprise Technology Perspective — Cloud-Native Re-platforming & Containerization"}
        />

        {/* Section: The Legacy Challenge */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec1Eyebrow || "THE REALITY OF LEGACY SYSTEMS"}</span>
            <h2 className="p-heading">{art.sec1Heading || "The Legacy Challenge"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "Aging monoliths constrain innovation velocity, increase operational vulnerabilities, and escalate infrastructure maintenance costs."}
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec1P1 || "Mission-critical applications built a decade ago still drive billions in enterprise revenue, yet their architectural rigidities create growing operational risk."}
              </p>
              <p>
                {art.sec1P2 || "Every enterprise faces the tension between stability and modernization. Legacy systems were engineered for durability, and they have performed reliably for years. However, as business requirements accelerate, these aging architectures encounter structural limits:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec1List || [
                  { bold: 'Aging software stacks:', text: ' Monolithic codebases built on deprecated frameworks with diminishing talent pools available for maintenance.' },
                  { bold: 'Difficult maintenance cycles:', text: ' Tightly coupled components where changing a single feature risks breaking unrelated operational modules.' },
                  { bold: 'Limited scalability:', text: ' Vertical scaling limits that require purchasing expensive proprietary hardware to handle seasonal traffic spikes.' },
                  { bold: 'Integration challenges:', text: ' Inability to interface smoothly with modern mobile apps, customer portals, or partner APIs without fragile batch scripts.' },
                  { bold: 'Infrastructure constraints:', text: ' Physical server room lifecycles, backup vulnerabilities, and high power/cooling operational expenditures.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/migration-modernization.jpg\`}
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
            <span className="p-eyebrow">{art.sec2Eyebrow || "ASSESSMENT & DISCOVERY"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Understanding the Application Landscape"}</h2>
            <p className="p-subtext">
              {art.sec2Subtext || "Successful cloud modernization begins with rigorous assessment. Jumping directly into migration without auditing application dependencies is the primary cause of delayed cutovers."}
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                {art.sec2P1 || "A pragmatic modernization journey begins by establishing total clarity across the existing estate:"}
              </p>
              <ul className="p-feature-list">
                {(art.sec2List || [
                  { bold: 'Applications:', text: ' Cataloging all active workloads, custom modules, background scripts, and historical third-party packages.' },
                  { bold: 'Dependencies:', text: ' Mapping complex runtime coupling, shared database tables, direct file system calls, and external service contracts.' },
                  { bold: 'Data:', text: ' Evaluating data structures, transactional integrity requirements, backup cadence, and regulatory sovereignty rules.' },
                  { bold: 'Infrastructure:', text: ' Auditing CPU, memory, storage utilization, and network throughput to right-size target cloud specifications.' },
                  { bold: 'Business criticality:', text: ' Categorizing applications into tiers to design safe, staged migration waves with clear fallback procedures.' }
                ]).map((item, idx) => (
                  <li className="p-feature-item" key={idx}>
                    <span className="p-feature-bullet">✓</span>
                    <span><strong>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/custom-dev-sec2.jpg\`}
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
            <span className="p-eyebrow">{art.sec3Eyebrow || "THE 4 MODERNIZATION PATHS"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Modernization Approaches"}</h2>
            <p className="p-subtext">
              {art.sec3Subtext || "There is no one-size-fits-all migration strategy. Leading enterprises match the right modernization pattern to each specific workload based on business value, urgency, and technical debt."}
            </p>
          </div>

          <div className="p-card-grid-4">
            {(art.modernizationApproaches || modernizationApproaches).map((app, idx) => (
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
                  <strong>{art.modernizationApproachesAdvantageLabel || 'Advantage:'}</strong> {app.benefits}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Cloud Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">{art.sec4Eyebrow || "TARGET TRANSFORMATION MODEL"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Modern Cloud Architecture"}</h2>
            <p className="p-subtext">
              {art.sec4Subtext || "A structured roadmap that transforms legacy monoliths into elastic, secure, and maintainable cloud services."}
            </p>
          </div>

          <ArchitectureFlowDiagram
            badge={art.cloudArchitectureBadge || "Modernization Lifecycle"}
            title={art.cloudArchitectureTitle || "End-to-End Cloud Modernization Flow"}
            steps={art.cloudArchitectureFlow || cloudArchitectureFlow}
          />

          <div className="p-editorial-grid" style={{ marginTop: '2.5rem' }}>
            <div className="p-editorial-text reveal">
              <p>
                {art.sec4P1 || "The destination architecture decouples core applications into modular, containerized services hosted on elastic cloud platforms (such as Kubernetes or managed serverless runtimes)."}
              </p>
              <p>
                {art.sec4P2 || "By establishing automated CI/CD deployment pipelines, automated blue-green cutovers, and infrastructure as code, deployments transform from nerve-wracking weekend events into seamless daily routines."}
              </p>
              <p>
                {art.sec4P3 || "Elastic compute automatically scales up during demand surges and scales down during lulls, eliminating idle resource costs while guaranteeing sub-second response times for global users."}
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={\`\${import.meta.env.BASE_URL}img/build-scratch-architecture.jpg\`}
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
            <span className="p-eyebrow">{art.sec5Eyebrow || "TRANSFORMATION OUTCOMES"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Key Modernization Benefits"}</h2>
            <p className="p-subtext">
              {art.sec5Subtext || "Moving legacy systems onto modern cloud architectures delivers tangible operational agility and cost predictability."}
            </p>
          </div>

          <BusinessImpactGrid outcomes={art.cloudModernizationBenefits || cloudModernizationBenefits} />
        </section>

        {/* Key Perspective */}
        <KeyPerspectiveBox
          eyebrow={art.keyPerspectiveEyebrow || "MODERNIZATION BEST PRACTICES"}
          title={art.keyPerspectiveTitle || "Four Pillars of a Successful Migration"}
          lead={art.keyPerspectiveLead || "Experience shows that modernization projects succeed when founded on comprehensive preparation, clear wave sequencing, and rigorous testing:"}
          points={art.landscapeAssessmentPoints || landscapeAssessmentPoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading={art.ctaHeading || "Modernize Your Legacy Applications"}
          description={art.ctaDescription || "Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Legacy Modernization & Cloud Migration"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="cloud-modernization" />
      </div>
    </div>
  )
}
`

fs.writeFileSync('src/pages/perspectives/BusinessTransformationPerspective.jsx', file1, 'utf8')
fs.writeFileSync('src/pages/perspectives/ArtificialIntelligencePerspective.jsx', file2, 'utf8')
fs.writeFileSync('src/pages/perspectives/ModernERPPerspective.jsx', file3, 'utf8')
fs.writeFileSync('src/pages/perspectives/CybersecurityPerspective.jsx', file4, 'utf8')
fs.writeFileSync('src/pages/perspectives/CloudModernizationPerspective.jsx', file5, 'utf8')

console.log('Successfully wired all 5 Perspectives articles to dynamic translations!')
