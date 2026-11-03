import fs from 'fs'

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.servicesDetails = en.servicesDetails || {}

en.servicesDetails.processAutomation = {
  eyebrow: "Intelligent Process Operations",
  titlePart1: "Business Process",
  titlePart2: "Automation",
  description: "End-to-end automation of enterprise workflows, combining robotic process automation (RPA), intelligent document processing, business rules engines, and system integration.",
  bookDiscovery: "Book Automation Discovery",
  exploreFramework: "Explore Solution Framework",
  coreCapabilities: [
    "Workflow Automation",
    "Robotic Process Automation",
    "Document Processing",
    "Integration Engineering",
    "Business Rules Engines",
    "Process Analytics",
    "Continuous Optimization",
    "Legacy Integration"
  ],
  row1Eyebrow: "Robotic Process Automation",
  row1Title: "Intelligent Bots for High-Volume Operations",
  row1P1: "Eliminate repetitive manual data entry, cross-system reconciliations, and document routing. We deploy enterprise RPA bots that execute structured tasks 24/7 with zero error rate.",
  row1P2: "By connecting legacy desktop interfaces, SAP/ERP backends, and cloud databases, software bots free your team to focus on strategic business initiatives.",
  row2Eyebrow: "Intelligent Document Processing",
  row2Title: "OCR, Machine Learning & Document AI",
  row2P1: "Automatically ingest, classify, and extract data from invoices, contracts, identity documents, and claims. Our AI-driven pipelines validate fields against internal databases and trigger automated approval workflows.",
  row2P2: "Achieve straight-through processing rates exceeding 95% while drastically reducing turnaround times from days to seconds.",
  row3Eyebrow: "Process Orchestration",
  row3Title: "End-to-End Cross-Platform Synchronization",
  row3P1: "Connect CRM, ERP, HRMS, and banking APIs into unified real-time data flows. We implement event-driven triggers, message queues, and automated fallback handlers.",
  row3P2: "Information flows seamlessly across departments without human intervention, eliminating operational silos and communication delays.",
  row4Eyebrow: "Continuous Telemetry",
  row4Title: "Real-Time Process Analytics & Kaizen Insights",
  row4P1: "Track process execution times, bottleneck heatmaps, error frequencies, and financial ROI in real-time executive dashboards.",
  row4P2: "Continuous machine learning diagnostics discover new automation opportunities, keeping your enterprise operating at maximum efficiency.",
  pillarsTitle: "Automation Pillars",
  pillarsSub: "Proven building blocks for intelligent enterprise operations.",
  pillar1Title: "Workflow Automation",
  pillar1Desc: "Multi-step human-in-the-loop and digital workflows orchestrated with automated routing and escalations.",
  pillar2Title: "Robotic Process Automation",
  pillar2Desc: "Rule-based software bots executing routine data entry, reconciliation, and cross-application tasks.",
  pillar3Title: "Intelligent AI Automation",
  pillar3Desc: "Cognitive AI agents that interpret context, summarize unstructured text, and make automated decisions.",
  pillar4Title: "Process Optimization",
  pillar4Desc: "Process mining, bottleneck detection, and Kaizen workflows that continuously reduce operational costs.",
  ctaTitle: "Ready to Automate Your Business Workflows?",
  ctaSub: "Connect with our automation architects to identify high-ROI opportunities and deploy intelligent digital workflows.",
  ctaButton: "Book an Automation Consultation"
}

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')

let content = fs.readFileSync('src/pages/ProcessAutomationPage.jsx', 'utf8')

// 1. Core capabilities array
content = content.replace(
  `  const coreCapabilities = [
    'Workflow Automation',
    'Robotic Process Automation',
    'Document Processing',
    'Integration Engineering',
    'Business Rules Engines',
    'Process Analytics',
    'Continuous Optimization',
    'Legacy Integration',
  ]`,
  `  const coreCapabilities = t('servicesDetails.processAutomation.coreCapabilities', {
    returnObjects: true,
    defaultValue: [
      'Workflow Automation',
      'Robotic Process Automation',
      'Document Processing',
      'Integration Engineering',
      'Business Rules Engines',
      'Process Analytics',
      'Continuous Optimization',
      'Legacy Integration',
    ]
  })`
)

// 2. Core Capabilities label
content = content.replace(
  `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Core Capabilities
          </span>`,
  `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {t('services.coreCapabilities', { defaultValue: 'Core Capabilities' })}
          </span>`
)

// 3. Row 1
content = content.replace(
  `<div className="dt-eyebrow">Robotic Process Automation</div>
              <h2>Intelligent Bots for High-Volume Operations</h2>
              <p>
                Eliminate repetitive manual data entry, cross-system reconciliations, and document routing. We deploy enterprise RPA bots that execute structured tasks 24/7 with zero error rate.
              </p>
              <p>
                By connecting legacy desktop interfaces, SAP/ERP backends, and cloud databases, software bots free your team to focus on strategic business initiatives.
              </p>`,
  `<div className="dt-eyebrow">{t('servicesDetails.processAutomation.row1Eyebrow', { defaultValue: 'Robotic Process Automation' })}</div>
              <h2>{t('servicesDetails.processAutomation.row1Title', { defaultValue: 'Intelligent Bots for High-Volume Operations' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row1P1', { defaultValue: 'Eliminate repetitive manual data entry, cross-system reconciliations, and document routing. We deploy enterprise RPA bots that execute structured tasks 24/7 with zero error rate.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row1P2', { defaultValue: 'By connecting legacy desktop interfaces, SAP/ERP backends, and cloud databases, software bots free your team to focus on strategic business initiatives.' })}
              </p>`
)

// 4. Row 2
content = content.replace(
  `<div className="dt-eyebrow">Intelligent Document Processing</div>
              <h2>OCR, Machine Learning &amp; Document AI</h2>
              <p>
                Automatically ingest, classify, and extract data from invoices, contracts, identity documents, and claims. Our AI-driven pipelines validate fields against internal databases and trigger automated approval workflows.
              </p>
              <p>
                Achieve straight-through processing rates exceeding 95% while drastically reducing turnaround times from days to seconds.
              </p>`,
  `<div className="dt-eyebrow">{t('servicesDetails.processAutomation.row2Eyebrow', { defaultValue: 'Intelligent Document Processing' })}</div>
              <h2>{t('servicesDetails.processAutomation.row2Title', { defaultValue: 'OCR, Machine Learning & Document AI' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row2P1', { defaultValue: 'Automatically ingest, classify, and extract data from invoices, contracts, identity documents, and claims. Our AI-driven pipelines validate fields against internal databases and trigger automated approval workflows.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row2P2', { defaultValue: 'Achieve straight-through processing rates exceeding 95% while drastically reducing turnaround times from days to seconds.' })}
              </p>`
)

// 5. Row 3
content = content.replace(
  `<div className="dt-eyebrow">Process Orchestration</div>
              <h2>End-to-End Cross-Platform Synchronization</h2>
              <p>
                Connect CRM, ERP, HRMS, and banking APIs into unified real-time data flows. We implement event-driven triggers, message queues, and automated fallback handlers.
              </p>
              <p>
                Information flows seamlessly across departments without human intervention, eliminating operational silos and communication delays.
              </p>`,
  `<div className="dt-eyebrow">{t('servicesDetails.processAutomation.row3Eyebrow', { defaultValue: 'Process Orchestration' })}</div>
              <h2>{t('servicesDetails.processAutomation.row3Title', { defaultValue: 'End-to-End Cross-Platform Synchronization' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row3P1', { defaultValue: 'Connect CRM, ERP, HRMS, and banking APIs into unified real-time data flows. We implement event-driven triggers, message queues, and automated fallback handlers.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row3P2', { defaultValue: 'Information flows seamlessly across departments without human intervention, eliminating operational silos and communication delays.' })}
              </p>`
)

// 6. Row 4
content = content.replace(
  `<div className="dt-eyebrow">Continuous Telemetry</div>
              <h2>Real-Time Process Analytics &amp; Kaizen Insights</h2>
              <p>
                Track process execution times, bottleneck heatmaps, error frequencies, and financial ROI in real-time executive dashboards.
              </p>
              <p>
                Continuous machine learning diagnostics discover new automation opportunities, keeping your enterprise operating at maximum efficiency.
              </p>`,
  `<div className="dt-eyebrow">{t('servicesDetails.processAutomation.row4Eyebrow', { defaultValue: 'Continuous Telemetry' })}</div>
              <h2>{t('servicesDetails.processAutomation.row4Title', { defaultValue: 'Real-Time Process Analytics & Kaizen Insights' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row4P1', { defaultValue: 'Track process execution times, bottleneck heatmaps, error frequencies, and financial ROI in real-time executive dashboards.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row4P2', { defaultValue: 'Continuous machine learning diagnostics discover new automation opportunities, keeping your enterprise operating at maximum efficiency.' })}
              </p>`
)

// 7. Pillars header
content = content.replace(
  `<div className="dt-section-header reveal">
            <h2>Automation Pillars</h2>
            <p>Proven building blocks for intelligent enterprise operations.</p>
          </div>`,
  `<div className="dt-section-header reveal">
            <h2>{t('servicesDetails.processAutomation.pillarsTitle', { defaultValue: 'Automation Pillars' })}</h2>
            <p>{t('servicesDetails.processAutomation.pillarsSub', { defaultValue: 'Proven building blocks for intelligent enterprise operations.' })}</p>
          </div>`
)

// 8. Pillars 1-4
content = content.replace(
  `<h3>Workflow Automation</h3>
              <p>Multi-step human-in-the-loop and digital workflows orchestrated with automated routing and escalations.</p>`,
  `<h3>{t('servicesDetails.processAutomation.pillar1Title', { defaultValue: 'Workflow Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar1Desc', { defaultValue: 'Multi-step human-in-the-loop and digital workflows orchestrated with automated routing and escalations.' })}</p>`
)
content = content.replace(
  `<h3>Robotic Process Automation</h3>
              <p>Rule-based software bots executing routine data entry, reconciliation, and cross-application tasks.</p>`,
  `<h3>{t('servicesDetails.processAutomation.pillar2Title', { defaultValue: 'Robotic Process Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar2Desc', { defaultValue: 'Rule-based software bots executing routine data entry, reconciliation, and cross-application tasks.' })}</p>`
)
content = content.replace(
  `<h3>Intelligent AI Automation</h3>
              <p>Cognitive AI agents that interpret context, summarize unstructured text, and make automated decisions.</p>`,
  `<h3>{t('servicesDetails.processAutomation.pillar3Title', { defaultValue: 'Intelligent AI Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar3Desc', { defaultValue: 'Cognitive AI agents that interpret context, summarize unstructured text, and make automated decisions.' })}</p>`
)
content = content.replace(
  `<h3>Process Optimization</h3>
              <p>Process mining, bottleneck detection, and Kaizen workflows that continuously reduce operational costs.</p>`,
  `<h3>{t('servicesDetails.processAutomation.pillar4Title', { defaultValue: 'Process Optimization' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar4Desc', { defaultValue: 'Process mining, bottleneck detection, and Kaizen workflows that continuously reduce operational costs.' })}</p>`
)

// 9. CTA
content = content.replace(
  `<h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#ffffff', margin: '0 0 16px' }}>Ready to Automate Your Business Workflows?</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto 32px' }}>
              Connect with our automation architects to identify high-ROI opportunities and deploy intelligent digital workflows.
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book an Automation Consultation`,
  `<h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#ffffff', margin: '0 0 16px' }}>{t('servicesDetails.processAutomation.ctaTitle', { defaultValue: 'Ready to Automate Your Business Workflows?' })}</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto 32px' }}>
              {t('servicesDetails.processAutomation.ctaSub', { defaultValue: 'Connect with our automation architects to identify high-ROI opportunities and deploy intelligent digital workflows.' })}
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              {t('servicesDetails.processAutomation.ctaButton', { defaultValue: 'Book an Automation Consultation' })}`
)

fs.writeFileSync('src/pages/ProcessAutomationPage.jsx', content, 'utf8')
console.log('ProcessAutomationPage.jsx successfully updated with t() hooks!')
