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

export default function ArtificialIntelligencePerspective() {
  useDocumentMeta({
    title: 'How AI Is Reshaping Enterprise Applications | Perspectives | Oklut',
    description:
      'Explore how intelligent automation, AI copilots, and predictive intelligence are becoming part of the core enterprise applications businesses rely on every day.',
  })

  usePerspectiveScrollReveal()

  // 6 Enterprise AI Use Cases
  const aiUseCases = [
    {
      title: 'Customer Service & Engagement',
      desc: 'Context-aware AI agents that triage incoming requests, resolve complex tier-1 inquiries, and draft personalized responses with complete transaction history.',
      icon: '💬',
    },
    {
      title: 'Intelligent Document Processing',
      desc: 'Automated extraction, classification, and validation of complex invoices, contracts, and compliance forms directly into enterprise systems of record.',
      icon: '📄',
    },
    {
      title: 'Business Analytics & Telemetry',
      desc: 'Natural language queries against enterprise data warehouses, automatically generating visualizations, anomaly alerts, and variance summaries.',
      icon: '📊',
    },
    {
      title: 'Employee Productivity & Copilots',
      desc: 'Embedded conversational copilots within ERP, CRM, and collaboration tools that synthesize company knowledge, draft communications, and navigate workflows.',
      icon: '⚡',
    },
    {
      title: 'Intelligent Process Automation',
      desc: 'Self-healing workflows that dynamically route approvals, adapt to process exceptions, and eliminate multi-step manual data reconciliations.',
      icon: '⚙️',
    },
    {
      title: 'Predictive Insights & Forecasting',
      desc: 'Machine learning models embedded directly at the point of decision, providing demand projections, cash flow forecasting, and churn risk indicators.',
      icon: '🎯',
    },
  ]

  // Qualitative Business Benefits
  const aiBusinessBenefits = [
    'Faster business processes with automated task handoffs and reduced cycle times',
    'Better decision support grounded in live operational data and enterprise context',
    'Improved employee productivity by offloading repetitive administration and search',
    'Reduced repetitive manual data entry, validation, and spreadsheet reconciliation',
    'Better customer experiences through responsive, consistent, and proactive service',
  ]

  const governancePoints = [
    'Grounding models strictly in validated enterprise data and internal permissions',
    'Establishing human-in-the-loop oversight for critical, high-impact business decisions',
    'Enforcing role-based access control (RBAC) to ensure sensitive data remains isolated',
    'Continuous telemetry, auditing, and explainability for compliance verification',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category="ARTIFICIAL INTELLIGENCE"
          title="How AI Is Reshaping Enterprise Applications"
          subtitle="Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day."
          date="September 2026"
          readTime="6 min read"
          image="/img/perspectives/ai-reshaping-enterprise-applications.jpg"
          imageAlt="AI Reshaping Enterprise Applications"
          imageCaption="Enterprise Technology Perspective — Artificial Intelligence & Enterprise Systems"
        />

        {/* Section: AI in Enterprise Applications */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE SHIFT TO NATIVE INTELLIGENCE</span>
            <h2 className="p-heading">AI in Enterprise Applications</h2>
            <p className="p-subtext">
              Artificial intelligence is transitioning from experimental side-projects into the core operational
              applications that enterprises rely on every day.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                For years, enterprise artificial intelligence was treated as an external capability: a model trained in
                isolation, a sandbox demonstration, or an isolated chatbot accessible through a separate portal. Today,
                the paradigm has fundamentally shifted. High-impact enterprise AI is embedded directly inside the systems
                of record—the ERPs, CRMs, human capital platforms, and supply chain engines where real business occurs.
              </p>
              <p>
                When intelligence operates inside the system of record, it inherits the organization’s established security
                boundaries, data models, and business logic. It does not simply generate generic responses; it acts on live
                orders, interprets open support tickets, reconciles supplier invoices, and assists employees within the exact
                interfaces they navigate every day.
              </p>
              <p>
                This transformation moves enterprise software from passive databases that wait for human keystrokes into
                proactive platforms that anticipate needs, automate steps, and surface timely recommendations.
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/bpa-workflow-orchestration.jpg`}
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
            <span className="p-eyebrow">AUTOMATION AT SCALE</span>
            <h2 className="p-heading">Intelligent Automation</h2>
            <p className="p-subtext">
              Moving beyond traditional rule-based scripts toward cognitive workflows that understand unstructured content,
              adapt to variations, and optimize processes dynamically.
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                Traditional Robotic Process Automation (RPA) excelled at deterministic, repetitive screen scraping. However,
                rigid rule sets break whenever a form changes, an unexpected document layout arrives, or an exception occurs.
                Intelligent automation bridges this divide by combining cognitive reasoning with transactional execution:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Workflow automation:</strong> Orchestrating complex cross-departmental operations, routing tasks based on urgency and historical resolution paths.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Intelligent document processing:</strong> Ingesting unstructured PDFs, emails, shipping manifests, and contracts, converting them into structured database transactions.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Intelligent task automation:</strong> Automating multi-step operational validations—such as matching purchase orders against receipts and bank statements.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Process optimization:</strong> Continuously analyzing process logs to identify cycle-time bottlenecks and recommending targeted workflow refinements.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/poc-pilot-implementation.jpg`}
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
            <span className="p-eyebrow">EMBEDDED ASSISTANCE</span>
            <h2 className="p-heading">Enterprise AI Copilots</h2>
            <p className="p-subtext">
              Grounded in organizational knowledge and enterprise security, AI assistants act as specialized partners
              across daily business workflows.
            </p>
          </div>

          <div className="p-card-grid-3">
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🔍</div>
              <h3 className="p-card-title">Information Search</h3>
              <p className="p-card-desc">
                Semantic retrieval across distributed knowledge bases, intranet policies, product specifications,
                and historical ticket resolutions without keyword guessing.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">📝</div>
              <h3 className="p-card-title">Document Summarization</h3>
              <p className="p-card-desc">
                Instant distillation of lengthy RFPs, vendor agreements, technical specifications, and legal amendments
                into actionable executive briefs and risk checklists.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">✨</div>
              <h3 className="p-card-title">Content Generation</h3>
              <p className="p-card-desc">
                Assisted drafting of client proposals, operational documentation, standard operating procedures (SOPs),
                and standardized customer updates aligned with brand standards.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">📈</div>
              <h3 className="p-card-title">Data Analysis</h3>
              <p className="p-card-desc">
                Translating conversational inquiries into complex analytical queries, generating on-the-fly chart summaries
                and highlighting critical outliers for leadership.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🔄</div>
              <h3 className="p-card-title">Business Workflows</h3>
              <p className="p-card-desc">
                Initiating transactions directly from chat prompts—such as scheduling resources, creating tickets,
                updating records, or submitting purchase requisitions.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🛡️</div>
              <h3 className="p-card-title">Role-Grounded Access</h3>
              <p className="p-card-desc">
                Ensuring copilot responses strictly respect user permission levels, keeping confidential financials,
                HR files, and intellectual property protected.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Predictive Intelligence */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">FORWARD-LOOKING REASONING</span>
            <h2 className="p-heading">Predictive Intelligence</h2>
            <p className="p-subtext">
              Transforming historical enterprise logs and real-time operational feeds into actionable foresight.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                While generative models excel at understanding and synthesizing language, predictive intelligence
                focuses on mathematical patterns hidden within structured enterprise datasets. Embedded predictive models
                empower organizations to anticipate operational hurdles before they disrupt operations:
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Operational forecasting:</strong> Predicting revenue trends, inventory velocity, and resource demands by synthesizing seasonal indicators with real-time pipeline velocity.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Predictive analytics:</strong> Pinpointing customer churn risks, maintenance degradation cycles, and supply chain delays while there is still time to intervene.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Risk identification:</strong> Flagging anomalies in financial transactions, compliance logs, and vendor procurement patterns before they escalate.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Demand prediction:</strong> Harmonizing sales forecasts with manufacturing capacity and warehouse stock levels to protect working capital.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg`}
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
            <span className="p-eyebrow">REAL-WORLD APPLICATIONS</span>
            <h2 className="p-heading">Enterprise AI Use Cases</h2>
            <p className="p-subtext">
              Practical ways leading organizations are applying artificial intelligence across core business functions.
            </p>
          </div>

          <div className="p-card-grid-3">
            {aiUseCases.map((uc, idx) => (
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
            <span className="p-eyebrow">STRATEGIC VALUE</span>
            <h2 className="p-heading">Business Benefits</h2>
            <p className="p-subtext">
              When implemented thoughtfully with governed enterprise data, AI unlocks substantial qualitative advantages.
            </p>
          </div>

          <BusinessImpactGrid outcomes={aiBusinessBenefits} />
        </section>

        {/* Key Perspective / Governance */}
        <KeyPerspectiveBox
          eyebrow="ENTERPRISE GOVERNANCE"
          title="Trust, Oversight & Guardrails"
          lead="AI is only as dependable as the data foundation beneath it and the governance surrounding it. Sustainable enterprise adoption requires deliberate architectural discipline:"
          points={governancePoints}
        />

        {/* CTA */}
        <PerspectiveCTA
          heading="Explore AI Opportunities for Your Business"
          description="Discover how intelligent automation, enterprise copilots and predictive models can unlock operational efficiency across your core systems."
          buttonText="Talk to Our Experts"
          serviceContext="Enterprise AI & Automation Solutions"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="artificial-intelligence" />
      </div>
    </div>
  )
}
