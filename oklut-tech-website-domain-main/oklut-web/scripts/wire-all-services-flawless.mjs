import fs from 'fs';

// Helper to normalize CRLF to LF, do replacements, and save back with CRLF if needed
function updateFile(filePath, transforms) {
  let content = fs.readFileSync(filePath, 'utf8');
  const hadCrlf = content.includes('\r\n');
  let norm = content.replace(/\r\n/g, '\n');

  let count = 0;
  for (const { target, replacement } of transforms) {
    const normTarget = target.replace(/\r\n/g, '\n');
    const normRepl = replacement.replace(/\r\n/g, '\n');
    if (!norm.includes(normTarget)) {
      console.warn(`[WARN] In ${filePath}, snippet not found: "${normTarget.slice(0, 60)}..."`);
    } else {
      norm = norm.replace(normTarget, normRepl);
      count++;
    }
  }

  if (hadCrlf) {
    norm = norm.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(filePath, norm, 'utf8');
  console.log(`[SUCCESS] Updated ${filePath} with ${count}/${transforms.length} replacements.`);
}

// -------------------------------------------------------------
// 1. UPDATE en/translation.json with all missing canonical keys
// -------------------------------------------------------------
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'));
en.services = en.services || {};
en.services.coreCapabilities = en.services.coreCapabilities || 'Core Capabilities';
en.servicesDetails = en.servicesDetails || {};

// Digital Transformation missing hero keys
en.servicesDetails.digitalTransformation = en.servicesDetails.digitalTransformation || {};
en.servicesDetails.digitalTransformation.bookWorkshop = en.servicesDetails.digitalTransformation.bookWorkshop || 'Book Transformation Workshop';
en.servicesDetails.digitalTransformation.exploreFramework = en.servicesDetails.digitalTransformation.exploreFramework || 'Explore Solution Framework';
en.servicesDetails.digitalTransformation.coreCapabilitiesTitle = en.servicesDetails.digitalTransformation.coreCapabilitiesTitle || 'Core Capabilities';

// Solution Engineering extra keys
en.servicesDetails.solutionEngineering = en.servicesDetails.solutionEngineering || {};
en.servicesDetails.solutionEngineering.badge = en.servicesDetails.solutionEngineering.badge || 'Tailored Digital Engineering';
en.servicesDetails.solutionEngineering.viewAllServices = en.servicesDetails.solutionEngineering.viewAllServices || 'View All Services';

// Centre of Excellence extra keys
en.servicesDetails.centreOfExcellence = en.servicesDetails.centreOfExcellence || {};
en.servicesDetails.centreOfExcellence.badge = en.servicesDetails.centreOfExcellence.badge || 'OKLUT TECHNOLOGIES COE';
en.servicesDetails.centreOfExcellence.scroll = en.servicesDetails.centreOfExcellence.scroll || 'Scroll';
en.servicesDetails.centreOfExcellence.p1Title = en.servicesDetails.centreOfExcellence.p1Title || 'Governance & Frameworks';
en.servicesDetails.centreOfExcellence.p1Desc = en.servicesDetails.centreOfExcellence.p1Desc || 'Establish enterprise-wide architectural governance, policy guardrails, and compliance standards.';
en.servicesDetails.centreOfExcellence.p1Tag = en.servicesDetails.centreOfExcellence.p1Tag || 'Governance';
en.servicesDetails.centreOfExcellence.p2Title = en.servicesDetails.centreOfExcellence.p2Title || 'Technology Standards & Architecture';
en.servicesDetails.centreOfExcellence.p2Desc = en.servicesDetails.centreOfExcellence.p2Desc || 'Define modern reference architectures, vetted technology stacks, and microservices patterns.';
en.servicesDetails.centreOfExcellence.p2Tag = en.servicesDetails.centreOfExcellence.p2Tag || 'Architecture';
en.servicesDetails.centreOfExcellence.p3Title = en.servicesDetails.centreOfExcellence.p3Title || 'Reusable Assets & Libraries';
en.servicesDetails.centreOfExcellence.p3Desc = en.servicesDetails.centreOfExcellence.p3Desc || 'Accelerate development velocity with shared components, templates, starter kits, and design systems.';
en.servicesDetails.centreOfExcellence.p3Tag = en.servicesDetails.centreOfExcellence.p3Tag || 'Reusability';
en.servicesDetails.centreOfExcellence.p4Title = en.servicesDetails.centreOfExcellence.p4Title || 'Competency Development';
en.servicesDetails.centreOfExcellence.p4Desc = en.servicesDetails.centreOfExcellence.p4Desc || 'Structured training, tech mentorship, and skill enablement to elevate team engineering prowess.';
en.servicesDetails.centreOfExcellence.p4Tag = en.servicesDetails.centreOfExcellence.p4Tag || 'Competency';
en.servicesDetails.centreOfExcellence.p5Title = en.servicesDetails.centreOfExcellence.p5Title || 'Innovation & Emerging Tech';
en.servicesDetails.centreOfExcellence.p5Desc = en.servicesDetails.centreOfExcellence.p5Desc || 'R&D on AI agents, automation pipelines, and next-generation frameworks to maintain market edge.';
en.servicesDetails.centreOfExcellence.p5Tag = en.servicesDetails.centreOfExcellence.p5Tag || 'Innovation';
en.servicesDetails.centreOfExcellence.p6Title = en.servicesDetails.centreOfExcellence.p6Title || 'Continuous Improvement';
en.servicesDetails.centreOfExcellence.p6Desc = en.servicesDetails.centreOfExcellence.p6Desc || 'Data-driven engineering metrics (DORA), SLA benchmarking, and ongoing quality optimization.';
en.servicesDetails.centreOfExcellence.p6Tag = en.servicesDetails.centreOfExcellence.p6Tag || 'Quality';
en.servicesDetails.centreOfExcellence.ctaSub = 'Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.';
en.servicesDetails.centreOfExcellence.ctaButton = 'Schedule Executive Consultation';

// Custom Development 8 Pillars keys
en.servicesDetails.customDevelopment = en.servicesDetails.customDevelopment || {};
en.servicesDetails.customDevelopment.pillar1Title = 'Requirements Engineering';
en.servicesDetails.customDevelopment.pillar1Desc = 'Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.';
en.servicesDetails.customDevelopment.pillar2Title = 'Solution Architecture';
en.servicesDetails.customDevelopment.pillar2Desc = 'Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.';
en.servicesDetails.customDevelopment.pillar3Title = 'Application Development';
en.servicesDetails.customDevelopment.pillar3Desc = 'Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.';
en.servicesDetails.customDevelopment.pillar4Title = 'API Integration';
en.servicesDetails.customDevelopment.pillar4Desc = 'High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.';
en.servicesDetails.customDevelopment.pillar5Title = 'Quality Assurance';
en.servicesDetails.customDevelopment.pillar5Desc = 'Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.';
en.servicesDetails.customDevelopment.pillar6Title = 'DevOps & Deployment';
en.servicesDetails.customDevelopment.pillar6Desc = 'Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.';
en.servicesDetails.customDevelopment.pillar7Title = 'Support & Maintenance';
en.servicesDetails.customDevelopment.pillar7Desc = '24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.';
en.servicesDetails.customDevelopment.pillar8Title = 'Continuous Innovation';
en.servicesDetails.customDevelopment.pillar8Desc = 'Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.';
en.servicesDetails.customDevelopment.ctaTitle = 'Ready to Build Your Solution from Inception to Deployment?';
en.servicesDetails.customDevelopment.ctaSub = 'Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.';
en.servicesDetails.customDevelopment.ctaButton = 'Book a Solution Consultation';

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8');
console.log('[SUCCESS] en/translation.json synchronized with all canonical service keys.');

// -------------------------------------------------------------
// 2. WIRE CustomDevelopmentPage.jsx
// -------------------------------------------------------------
updateFile('src/pages/CustomDevelopmentPage.jsx', [
  {
    target: `  const coreCapabilities = [
    'Requirements Engineering',
    'Solution Architecture',
    'Application Development',
    'API Integration',
    'Quality Assurance',
    'DevOps',
    'Deployment',
    'Support & Maintenance',
  ]`,
    replacement: `  const coreCapabilitiesDefault = [
    'Requirements Engineering',
    'Solution Architecture',
    'Application Development',
    'API Integration',
    'Quality Assurance',
    'DevOps',
    'Deployment',
    'Support & Maintenance',
  ]
  const rawCaps = t('servicesDetails.customDevelopment.coreCapabilities', { returnObjects: true })
  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : coreCapabilitiesDefault`
  },
  {
    target: `<div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#2dd4bf', fontWeight: '700' }}>
              Core Capabilities
            </div>`,
    replacement: `<div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#2dd4bf', fontWeight: '700' }}>
              {t('services.coreCapabilities', { defaultValue: 'Core Capabilities' })}
            </div>`
  },
  {
    target: `<div className="cd-row reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">Full Lifecycle Delivery</div>
              <h2>End-to-End Development from Requirements to Scale</h2>
              <p>
                Every new digital initiative starts with unique requirements, operational workflows, and strategic objectives that cannot be met by one-size-fits-all software. We specialize in building custom, high-performance software systems completely from scratch.
              </p>
              <p>
                From initial requirements discovery and technical architecture design to agile sprint development, API ecosystem integration, robust testing pipelines, and automated cloud deployments, our senior engineering teams take full ownership of your product lifecycle.
              </p>
            </div>`,
    replacement: `<div className="cd-row reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row1Eyebrow', { defaultValue: 'Full Lifecycle Delivery' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row1Title', { defaultValue: 'End-to-End Development from Requirements to Scale' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row1P1', { defaultValue: 'Every new digital initiative starts with unique requirements, operational workflows, and strategic objectives that cannot be met by one-size-fits-all software. We specialize in building custom, high-performance software systems completely from scratch.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row1P2', { defaultValue: 'From initial requirements discovery and technical architecture design to agile sprint development, API ecosystem integration, robust testing pipelines, and automated cloud deployments, our senior engineering teams take full ownership of your product lifecycle.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="cd-row reverse reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">Solution Architecture &amp; Engineering</div>
              <h2>Scalable Systems Built for Enterprise Growth</h2>
              <p>
                We design resilient software architectures tailored to withstand heavy production loads. From modular microservices and event-driven backends to high-throughput data streams and GraphQL/REST APIs, we build platforms that scale effortlessly.
              </p>
              <p>
                By establishing clean, modular codebases paired with automated testing and continuous security compliance, we ensure your software foundation is maintainable, auditable, and ready for long-term evolution.
              </p>
            </div>`,
    replacement: `<div className="cd-row reverse reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row2Eyebrow', { defaultValue: 'Solution Architecture & Engineering' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row2Title', { defaultValue: 'Scalable Systems Built for Enterprise Growth' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row2P1', { defaultValue: 'We design resilient software architectures tailored to withstand heavy production loads. From modular microservices and event-driven backends to high-throughput data streams and GraphQL/REST APIs, we build platforms that scale effortlessly.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row2P2', { defaultValue: 'By establishing clean, modular codebases paired with automated testing and continuous security compliance, we ensure your software foundation is maintainable, auditable, and ready for long-term evolution.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="cd-row reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">Quality Assurance &amp; DevOps</div>
              <h2>Agile Delivery with Automated Pipelines</h2>
              <p>
                Our delivery model embeds automated unit, integration, and end-to-end regression testing alongside containerized CI/CD workflows (Docker, Kubernetes, AWS/Azure/GCP).
              </p>
              <p>
                With transparent sprint demos, real-time observability, and milestone-driven velocity, we ensure rapid time-to-market without compromising security, stability, or user experience.
              </p>
            </div>`,
    replacement: `<div className="cd-row reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row3Eyebrow', { defaultValue: 'Quality Assurance & DevOps' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row3Title', { defaultValue: 'Agile Delivery with Automated Pipelines' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row3P1', { defaultValue: 'Our delivery model embeds automated unit, integration, and end-to-end regression testing alongside containerized CI/CD workflows (Docker, Kubernetes, AWS/Azure/GCP).' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row3P2', { defaultValue: 'With transparent sprint demos, real-time observability, and milestone-driven velocity, we ensure rapid time-to-market without compromising security, stability, or user experience.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="cd-row reverse reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">Deployment &amp; Support</div>
              <h2>Reliable 24/7 Operations and Long-Term Evolution</h2>
              <p>
                Going live is just the beginning. We provide proactive monitoring, SLA-backed maintenance, cloud infrastructure optimization, performance tuning, and ongoing feature rollouts.
              </p>
              <p>
                Our engineering team acts as a natural extension of your organization, ensuring zero downtime and continuous technological superiority in your market.
              </p>
            </div>`,
    replacement: `<div className="cd-row reverse reveal">
            <div className="cd-text-col">
              <div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row4Eyebrow', { defaultValue: 'Deployment & Support' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row4Title', { defaultValue: 'Reliable 24/7 Operations and Long-Term Evolution' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row4P1', { defaultValue: 'Going live is just the beginning. We provide proactive monitoring, SLA-backed maintenance, cloud infrastructure optimization, performance tuning, and ongoing feature rollouts.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row4P2', { defaultValue: 'Our engineering team acts as a natural extension of your organization, ensuring zero downtime and continuous technological superiority in your market.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="cd-section-header reveal">
            <h2>Core Capabilities</h2>
            <p>Complete full-stack capabilities engineered to take your ideas from zero to production.</p>
          </div>`,
    replacement: `<div className="cd-section-header reveal">
            <h2>{t('servicesDetails.customDevelopment.pillarsTitle', { defaultValue: 'Core Capabilities' })}</h2>
            <p>{t('servicesDetails.customDevelopment.pillarsSub', { defaultValue: 'Complete full-stack capabilities engineered to take your ideas from zero to production.' })}</p>
          </div>`
  },
  {
    target: `<h3>Requirements Engineering</h3>
              <p>Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar1Title', { defaultValue: 'Requirements Engineering' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar1Desc', { defaultValue: 'Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.' })}</p>`
  },
  {
    target: `<h3>Solution Architecture</h3>
              <p>Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar2Title', { defaultValue: 'Solution Architecture' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar2Desc', { defaultValue: 'Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.' })}</p>`
  },
  {
    target: `<h3>Application Development</h3>
              <p>Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar3Title', { defaultValue: 'Application Development' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar3Desc', { defaultValue: 'Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.' })}</p>`
  },
  {
    target: `<h3>API Integration</h3>
              <p>High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar4Title', { defaultValue: 'API Integration' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar4Desc', { defaultValue: 'High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.' })}</p>`
  },
  {
    target: `<h3>Quality Assurance</h3>
              <p>Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar5Title', { defaultValue: 'Quality Assurance' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar5Desc', { defaultValue: 'Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.' })}</p>`
  },
  {
    target: `<h3>DevOps &amp; Deployment</h3>
              <p>Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar6Title', { defaultValue: 'DevOps & Deployment' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar6Desc', { defaultValue: 'Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.' })}</p>`
  },
  {
    target: `<h3>Support &amp; Maintenance</h3>
              <p>24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar7Title', { defaultValue: 'Support & Maintenance' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar7Desc', { defaultValue: '24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.' })}</p>`
  },
  {
    target: `<h3>Continuous Innovation</h3>
              <p>Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.</p>`,
    replacement: `<h3>{t('servicesDetails.customDevelopment.pillar8Title', { defaultValue: 'Continuous Innovation' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar8Desc', { defaultValue: 'Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.' })}</p>`
  },
  {
    target: `<h2>Ready to Build Your Solution from Inception to Deployment?</h2>
            <p>
              Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.
            </p>
            <button type="button" className="cd-btn-primary" onClick={handleBookConsultation}>
              Book a Solution Consultation`,
    replacement: `<h2>{t('servicesDetails.customDevelopment.ctaTitle', { defaultValue: 'Ready to Build Your Solution from Inception to Deployment?' })}</h2>
            <p>
              {t('servicesDetails.customDevelopment.ctaSub', { defaultValue: 'Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.' })}
            </p>
            <button type="button" className="cd-btn-primary" onClick={handleBookConsultation}>
              {t('servicesDetails.customDevelopment.ctaButton', { defaultValue: 'Book a Solution Consultation' })}`
  }
]);

// -------------------------------------------------------------
// 3. WIRE ProcessAutomationPage.jsx
// -------------------------------------------------------------
updateFile('src/pages/ProcessAutomationPage.jsx', [
  {
    target: `  const coreCapabilities = [
    'Workflow Automation',
    'Robotic Process Automation',
    'Document Processing',
    'Integration Engineering',
    'Business Rules Engines',
    'Process Analytics',
    'Continuous Optimization',
    'Legacy Integration',
  ]`,
    replacement: `  const coreCapabilitiesDefault = [
    'Workflow Automation',
    'Robotic Process Automation',
    'Document Processing',
    'Integration Engineering',
    'Business Rules Engines',
    'Process Analytics',
    'Continuous Optimization',
    'Legacy Integration',
  ]
  const rawCaps = t('servicesDetails.processAutomation.coreCapabilities', { returnObjects: true })
  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : coreCapabilitiesDefault`
  },
  {
    target: `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Core Capabilities
          </span>`,
    replacement: `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {t('services.coreCapabilities', { defaultValue: 'Core Capabilities' })}
          </span>`
  },
  {
    target: `<div className="dt-text-col">
              <div className="dt-eyebrow">Robotic Process Automation</div>
              <h2>Intelligent Bots for High-Volume Operations</h2>
              <p>
                Eliminate repetitive manual data entry, cross-system reconciliations, and document routing. We deploy enterprise RPA bots that execute structured tasks 24/7 with zero error rate.
              </p>
              <p>
                By connecting legacy desktop interfaces, SAP/ERP backends, and cloud databases, software bots free your team to focus on strategic business initiatives.
              </p>
            </div>`,
    replacement: `<div className="dt-text-col">
              <div className="dt-eyebrow">{t('servicesDetails.processAutomation.row1Eyebrow', { defaultValue: 'Robotic Process Automation' })}</div>
              <h2>{t('servicesDetails.processAutomation.row1Title', { defaultValue: 'Intelligent Bots for High-Volume Operations' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row1P1', { defaultValue: 'Eliminate repetitive manual data entry, cross-system reconciliations, and document routing. We deploy enterprise RPA bots that execute structured tasks 24/7 with zero error rate.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row1P2', { defaultValue: 'By connecting legacy desktop interfaces, SAP/ERP backends, and cloud databases, software bots free your team to focus on strategic business initiatives.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="dt-text-col">
              <div className="dt-eyebrow">Intelligent Document Processing</div>
              <h2>OCR, Machine Learning &amp; Document AI</h2>
              <p>
                Automatically ingest, classify, and extract data from invoices, contracts, identity documents, and claims. Our AI-driven pipelines validate fields against internal databases and trigger automated approval workflows.
              </p>
              <p>
                Achieve straight-through processing rates exceeding 95% while drastically reducing turnaround times from days to seconds.
              </p>
            </div>`,
    replacement: `<div className="dt-text-col">
              <div className="dt-eyebrow">{t('servicesDetails.processAutomation.row2Eyebrow', { defaultValue: 'Intelligent Document Processing' })}</div>
              <h2>{t('servicesDetails.processAutomation.row2Title', { defaultValue: 'OCR, Machine Learning & Document AI' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row2P1', { defaultValue: 'Automatically ingest, classify, and extract data from invoices, contracts, identity documents, and claims. Our AI-driven pipelines validate fields against internal databases and trigger automated approval workflows.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row2P2', { defaultValue: 'Achieve straight-through processing rates exceeding 95% while drastically reducing turnaround times from days to seconds.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="dt-text-col">
              <div className="dt-eyebrow">Process Orchestration</div>
              <h2>End-to-End Cross-Platform Synchronization</h2>
              <p>
                Connect CRM, ERP, HRMS, and banking APIs into unified real-time data flows. We implement event-driven triggers, message queues, and automated fallback handlers.
              </p>
              <p>
                Information flows seamlessly across departments without human intervention, eliminating operational silos and communication delays.
              </p>
            </div>`,
    replacement: `<div className="dt-text-col">
              <div className="dt-eyebrow">{t('servicesDetails.processAutomation.row3Eyebrow', { defaultValue: 'Process Orchestration' })}</div>
              <h2>{t('servicesDetails.processAutomation.row3Title', { defaultValue: 'End-to-End Cross-Platform Synchronization' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row3P1', { defaultValue: 'Connect CRM, ERP, HRMS, and banking APIs into unified real-time data flows. We implement event-driven triggers, message queues, and automated fallback handlers.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row3P2', { defaultValue: 'Information flows seamlessly across departments without human intervention, eliminating operational silos and communication delays.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="dt-text-col">
              <div className="dt-eyebrow">Continuous Telemetry</div>
              <h2>Real-Time Process Analytics &amp; Kaizen Insights</h2>
              <p>
                Track process execution times, bottleneck heatmaps, error frequencies, and financial ROI in real-time executive dashboards.
              </p>
              <p>
                Continuous machine learning diagnostics discover new automation opportunities, keeping your enterprise operating at maximum efficiency.
              </p>
            </div>`,
    replacement: `<div className="dt-text-col">
              <div className="dt-eyebrow">{t('servicesDetails.processAutomation.row4Eyebrow', { defaultValue: 'Continuous Telemetry' })}</div>
              <h2>{t('servicesDetails.processAutomation.row4Title', { defaultValue: 'Real-Time Process Analytics & Kaizen Insights' })}</h2>
              <p>
                {t('servicesDetails.processAutomation.row4P1', { defaultValue: 'Track process execution times, bottleneck heatmaps, error frequencies, and financial ROI in real-time executive dashboards.' })}
              </p>
              <p>
                {t('servicesDetails.processAutomation.row4P2', { defaultValue: 'Continuous machine learning diagnostics discover new automation opportunities, keeping your enterprise operating at maximum efficiency.' })}
              </p>
            </div>`
  },
  {
    target: `<div className="dt-section-header reveal">
            <h2>Automation Pillars</h2>
            <p>Proven building blocks for intelligent enterprise operations.</p>
          </div>`,
    replacement: `<div className="dt-section-header reveal">
            <h2>{t('servicesDetails.processAutomation.pillarsTitle', { defaultValue: 'Automation Pillars' })}</h2>
            <p>{t('servicesDetails.processAutomation.pillarsSub', { defaultValue: 'Proven building blocks for intelligent enterprise operations.' })}</p>
          </div>`
  },
  {
    target: `<h3>Workflow Automation</h3>
              <p>Multi-step human-in-the-loop and digital workflows orchestrated with automated routing and escalations.</p>`,
    replacement: `<h3>{t('servicesDetails.processAutomation.pillar1Title', { defaultValue: 'Workflow Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar1Desc', { defaultValue: 'Multi-step human-in-the-loop and digital workflows orchestrated with automated routing and escalations.' })}</p>`
  },
  {
    target: `<h3>Robotic Process Automation</h3>
              <p>Rule-based software bots executing routine data entry, reconciliation, and cross-application tasks.</p>`,
    replacement: `<h3>{t('servicesDetails.processAutomation.pillar2Title', { defaultValue: 'Robotic Process Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar2Desc', { defaultValue: 'Rule-based software bots executing routine data entry, reconciliation, and cross-application tasks.' })}</p>`
  },
  {
    target: `<h3>Intelligent AI Automation</h3>
              <p>Cognitive AI agents that interpret context, summarize unstructured text, and make automated decisions.</p>`,
    replacement: `<h3>{t('servicesDetails.processAutomation.pillar3Title', { defaultValue: 'Intelligent AI Automation' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar3Desc', { defaultValue: 'Cognitive AI agents that interpret context, summarize unstructured text, and make automated decisions.' })}</p>`
  },
  {
    target: `<h3>Process Optimization</h3>
              <p>Process mining, bottleneck detection, and Kaizen workflows that continuously reduce operational costs.</p>`,
    replacement: `<h3>{t('servicesDetails.processAutomation.pillar4Title', { defaultValue: 'Process Optimization' })}</h3>
              <p>{t('servicesDetails.processAutomation.pillar4Desc', { defaultValue: 'Process mining, bottleneck detection, and Kaizen workflows that continuously reduce operational costs.' })}</p>`
  },
  {
    target: `<div className="dt-cta-box reveal">
            <h2>Ready to Automate Your Business Workflows?</h2>
            <p>
              Connect with our automation architects to identify high-ROI opportunities and deploy intelligent digital workflows.
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              Book an Automation Consultation`,
    replacement: `<div className="dt-cta-box reveal">
            <h2>{t('servicesDetails.processAutomation.ctaTitle', { defaultValue: 'Ready to Automate Your Business Workflows?' })}</h2>
            <p>
              {t('servicesDetails.processAutomation.ctaSub', { defaultValue: 'Connect with our automation architects to identify high-ROI opportunities and deploy intelligent digital workflows.' })}
            </p>
            <button type="button" className="dt-btn-primary" onClick={handleBook}>
              {t('servicesDetails.processAutomation.ctaButton', { defaultValue: 'Book an Automation Consultation' })}`
  }
]);

// -------------------------------------------------------------
// 4. WIRE SolutionEngineeringPage.jsx
// -------------------------------------------------------------
updateFile('src/pages/SolutionEngineeringPage.jsx', [
  {
    target: `  const coreCapabilities = [
    'Custom Development',
    'Platform Configuration',
    'Extensions',
    'Custom Workflows',
    'API Development',
    'System Integration',
    'UI/UX Enhancement',
    'Performance Optimization',
  ]`,
    replacement: `  const coreCapabilitiesDefault = [
    'Custom Development',
    'Platform Configuration',
    'Extensions',
    'Custom Workflows',
    'API Development',
    'System Integration',
    'UI/UX Enhancement',
    'Performance Optimization',
  ]
  const rawCaps = t('servicesDetails.solutionEngineering.coreCapabilities', { returnObjects: true })
  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : coreCapabilitiesDefault`
  },
  {
    target: `<section className="se-section reverse reveal">
        <div className="text">
          <span className="se-eyebrow">ENTERPRISE SYSTEM INTEGRATION</span>
          <h2>Platform Configuration &amp; API Development</h2>
          <p>
            Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.
          </p>
          <p>
            We configure commercial and open-source platforms to your exact operational requirements while preserving upgradeability and data security.
          </p>
        </div>`,
    replacement: `<section className="se-section reverse reveal">
        <div className="text">
          <span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row2Eyebrow', { defaultValue: 'ENTERPRISE SYSTEM INTEGRATION' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row2Title', { defaultValue: 'Platform Configuration & API Development' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row2P1', { defaultValue: 'Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row2P2', { defaultValue: 'Whether integrating third-party SaaS tools or extending proprietary on-premise platforms, our integration architectures prioritize data integrity, throughput, and zero downtime.' })}
          </p>
        </div>`
  },
  {
    target: `<section className="se-section reveal">
        <div className="text">
          <span className="se-eyebrow">UI/UX &amp; PERFORMANCE</span>
          <h2>UI/UX Enhancements &amp; Performance Optimization</h2>
          <p>
            Upgrade sluggish legacy user interfaces to modern, reactive, accessible web and mobile experiences. We audit and optimize database queries, caching layers, and frontend rendering for blazing-fast speed.
          </p>
          <p>
            Our improvements reduce friction for internal users and end customers alike, driving immediate gains in productivity and satisfaction.
          </p>
        </div>`,
    replacement: `<section className="se-section reveal">
        <div className="text">
          <span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row3Eyebrow', { defaultValue: 'UI/UX & PERFORMANCE' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row3Title', { defaultValue: 'UI/UX Enhancements & Performance Optimization' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row3P1', { defaultValue: 'Elevate legacy interfaces with modern, responsive user experiences designed for speed and clarity. We re-engineer frontends with intuitive design patterns, accessibility compliance, and streamlined interaction models.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row3P2', { defaultValue: 'In parallel, our performance engineers optimize database queries, caching strategies, and frontend bundle sizes to deliver instantaneous response times across all devices.' })}
          </p>
        </div>`
  },
  {
    target: `<div className="se-principles-head reveal">
            <span className="se-eyebrow">CORE CAPABILITIES</span>
            <h2 className="section-title">Engineered to Your Exact Specifications</h2>
          </div>`,
    replacement: `<div className="se-principles-head reveal">
            <span className="se-eyebrow">{t('services.coreCapabilities', { defaultValue: 'CORE CAPABILITIES' })}</span>
            <h2 className="section-title">{t('servicesDetails.solutionEngineering.pillarsTitle', { defaultValue: 'Engineered to Your Exact Specifications' })}</h2>
          </div>`
  },
  {
    target: `<h3>Custom Workflows &amp; Extensions</h3>
              <p>
                Bespoke automation rules, custom forms, approval chains, and domain-specific logic designed around your team.
              </p>`,
    replacement: `<h3>{t('servicesDetails.solutionEngineering.pillar1Title', { defaultValue: 'Custom Workflows & Extensions' })}</h3>
              <p>
                {t('servicesDetails.solutionEngineering.pillar1Desc', { defaultValue: 'Tailored application logic and automated state machines configured specifically around your internal operational rules.' })}
              </p>`
  },
  {
    target: `<h3>API &amp; System Integration</h3>
              <p>
                High-performance API gateways and data bridges connecting your ERP, CRM, payment, and analytics platforms.
              </p>`,
    replacement: `<h3>{t('servicesDetails.solutionEngineering.pillar2Title', { defaultValue: 'API & System Integration' })}</h3>
              <p>
                {t('servicesDetails.solutionEngineering.pillar2Desc', { defaultValue: 'Secure, authenticated data bridges connecting proprietary backends, ERP suites, payment gateways, and cloud services.' })}
              </p>`
  },
  {
    target: `<h3>Platform Configuration</h3>
              <p>
                Expert tuning of enterprise software platforms to fit organizational hierarchy, security roles, and audit compliance.
              </p>`,
    replacement: `<h3>{t('servicesDetails.solutionEngineering.pillar3Title', { defaultValue: 'Platform Configuration' })}</h3>
              <p>
                {t('servicesDetails.solutionEngineering.pillar3Desc', { defaultValue: 'Deep architectural adaptations that modify enterprise software without breaking upgrade paths or vendor support agreements.' })}
              </p>`
  },
  {
    target: `<h3>Performance Optimization</h3>
              <p>
                Database indexing, query profiling, CDN edge caching, and memory tuning to handle peak user volumes effortlessly.
              </p>`,
    replacement: `<h3>{t('servicesDetails.solutionEngineering.pillar4Title', { defaultValue: 'Performance Optimization' })}</h3>
              <p>
                {t('servicesDetails.solutionEngineering.pillar4Desc', { defaultValue: 'Aggressive query profiling, memory leak elimination, and edge CDN distribution for sub-second page loads.' })}
              </p>`
  },
  {
    target: `<h2>Ready to Customize Your Enterprise Platform?</h2>
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
          </div>`,
    replacement: `<h2>{t('servicesDetails.solutionEngineering.ctaTitle', { defaultValue: 'Ready to Customize Your Enterprise Platform?' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.ctaSub', { defaultValue: 'Connect with our solutions architects to design and deploy custom modules, workflows, and integrations tailored to your business needs.' })}
          </p>
          <div className="se-hero-actions">
            <Link to="/book-consultation" className="btn btn-primary">
              {t('servicesDetails.solutionEngineering.ctaButton', { defaultValue: 'Book a Customization Call' })}
            </Link>
            <Link to="/" className="btn btn-secondary">
              {t('servicesDetails.solutionEngineering.viewAllServices', { defaultValue: 'View All Services' })}
            </Link>
          </div>`
  }
]);

// -------------------------------------------------------------
// 5. WIRE CentreOfExcellencePage.jsx
// -------------------------------------------------------------
updateFile('src/pages/CentreOfExcellencePage.jsx', [
  {
    target: `  const coreCapabilities = [
    'Governance',
    'Technology Standards',
    'Best Practices',
    'Architecture',
    'Competency Development',
    'Knowledge Management',
    'Innovation',
    'Continuous Improvement',
  ]`,
    replacement: `  const coreCapabilitiesDefault = [
    'Governance',
    'Technology Standards',
    'Best Practices',
    'Architecture',
    'Competency Development',
    'Knowledge Management',
    'Innovation',
    'Continuous Improvement',
  ]
  const rawCaps = t('servicesDetails.centreOfExcellence.coreCapabilities', { returnObjects: true })
  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : coreCapabilitiesDefault`
  },
  {
    target: `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Core Capabilities
          </span>`,
    replacement: `<span style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {t('services.coreCapabilities', { defaultValue: 'Core Capabilities' })}
          </span>`
  },
  {
    target: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Automated CI/CD release pipelines with DORA metrics analytics
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Strict architectural review boards & microservices governance
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Continuous security linting and automated vulnerability patching
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Learn Engineering Standards
            </Link>`,
    replacement: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row1F1', { defaultValue: 'Automated CI/CD release pipelines with DORA metrics analytics' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row1F2', { defaultValue: 'Strict architectural review boards & microservices governance' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row1F3', { defaultValue: 'Continuous security linting and automated vulnerability patching' })}
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              {t('servicesDetails.centreOfExcellence.row1Btn', { defaultValue: 'Learn Engineering Standards' })}
            </Link>`
  },
  {
    target: `<span>DevOps & Quality Engineering</span>`,
    replacement: `<span>{t('servicesDetails.centreOfExcellence.row1Tag', { defaultValue: 'DevOps & Quality Engineering' })}</span>`
  },
  {
    target: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Enterprise Generative AI & RAG knowledge integration
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Autonomous AI agent workflows for business process automation
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Custom machine learning model optimization & fine-tuning
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Explore AI Lab
            </Link>`,
    replacement: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row2F1', { defaultValue: 'Enterprise Generative AI & RAG knowledge integration' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row2F2', { defaultValue: 'Autonomous AI agent workflows for business process automation' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row2F3', { defaultValue: 'Custom machine learning model optimization & fine-tuning' })}
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              {t('servicesDetails.centreOfExcellence.row2Btn', { defaultValue: 'Explore AI Lab' })}
            </Link>`
  },
  {
    target: `<span>Artificial Intelligence & Neural R&D</span>`,
    replacement: `<span>{t('servicesDetails.centreOfExcellence.row2Tag', { defaultValue: 'Artificial Intelligence & Neural R&D' })}</span>`
  },
  {
    target: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                AWS, Azure, & GCP multi-cloud infrastructure orchestration
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Zero-Trust network security & ISO 27001 / SOC2 compliance
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                Infra-as-Code (Terraform) with automated disaster recovery
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              Consult Cloud Architect
            </Link>`,
    replacement: `<ul className="coe-feature-list">
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row3F1', { defaultValue: 'AWS, Azure, & GCP multi-cloud infrastructure orchestration' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row3F2', { defaultValue: 'Zero-trust network access (ZTNA) & role-based IAM policies' })}
              </li>
              <li className="coe-feature-item">
                <span className="coe-check-icon">✓</span>
                {t('servicesDetails.centreOfExcellence.row3F3', { defaultValue: 'Automated container security scanning & secret management' })}
              </li>
            </ul>
            <Link to="/book-consultation" className="coe-btn-primary">
              {t('servicesDetails.centreOfExcellence.row3Btn', { defaultValue: 'Consult Cloud Architect' })}
            </Link>`
  },
  {
    target: `<span>Cloud & Zero-Trust Security</span>`,
    replacement: `<span>{t('servicesDetails.centreOfExcellence.row3Tag', { defaultValue: 'Cloud Architecture & Zero-Trust' })}</span>`
  },
  {
    target: `<div className="coe-header-center">
          <div className="coe-eyebrow">Comprehensive Capabilities</div>
          <h2>Our Core Excellence Frameworks</h2>
          <p>
            Designed to empower enterprise clients with scalable, secure, and modern digital platforms.
          </p>
        </div>`,
    replacement: `<div className="coe-header-center">
          <div className="coe-eyebrow">{t('services.coreCapabilities', { defaultValue: 'Comprehensive Capabilities' })}</div>
          <h2>{t('servicesDetails.centreOfExcellence.pillarsTitle', { defaultValue: 'Our Core Excellence Frameworks' })}</h2>
          <p>
            {t('servicesDetails.centreOfExcellence.pillarsSub', { defaultValue: 'Systematized development playbooks powering mission-critical platforms.' })}
          </p>
        </div>`
  },
  {
    target: `        <div className="coe-cards-grid">
          {FRAMEWORK_PILLARS.map((pillar, idx) => (
            <div key={idx} className="coe-card">
              <div className="coe-card-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="coe-card-tag">{pillar.tag}</div>
            </div>
          ))}
        </div>`,
    replacement: `        <div className="coe-cards-grid">
          {FRAMEWORK_PILLARS.map((pillar, idx) => {
            const num = idx + 1;
            const title = t(\`servicesDetails.centreOfExcellence.p\${num}Title\`, { defaultValue: pillar.title });
            const description = t(\`servicesDetails.centreOfExcellence.p\${num}Desc\`, { defaultValue: pillar.description });
            const tag = t(\`servicesDetails.centreOfExcellence.p\${num}Tag\`, { defaultValue: pillar.tag });
            return (
              <div key={idx} className="coe-card">
                <div className="coe-card-icon">{pillar.icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="coe-card-tag">{tag}</div>
              </div>
            );
          })}
        </div>`
  },
  {
    target: `<div className="coe-cta-box">
          <h2>Elevate Your Engineering Standard</h2>
          <p>
            Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.
          </p>
          <Link to="/book-consultation" className="coe-btn-primary">
            Schedule Executive Consultation
          </Link>
        </div>`,
    replacement: `<div className="coe-cta-box">
          <h2>{t('servicesDetails.centreOfExcellence.ctaTitle', { defaultValue: 'Elevate Your Engineering Standard' })}</h2>
          <p>
            {t('servicesDetails.centreOfExcellence.ctaSub', { defaultValue: 'Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.' })}
          </p>
          <Link to="/book-consultation" className="coe-btn-primary">
            {t('servicesDetails.centreOfExcellence.ctaButton', { defaultValue: 'Schedule Executive Consultation' })}
          </Link>
        </div>`
  }
]);

// -------------------------------------------------------------
// 6. WIRE SharedServicesPage.jsx (Fix key prefix to servicesDetails.sharedServices)
// -------------------------------------------------------------
{
  let content = fs.readFileSync('src/pages/SharedServicesPage.jsx', 'utf8');
  content = content.replace(/t\('services\.sharedServices\./g, "t('servicesDetails.sharedServices.");
  content = content.replace(
    `  const coreCapabilities = [
    'Managed Cloud & Infrastructure',
    '24/7 Monitoring & Support',
    'Continuous Integration & Delivery',
    'Incident & Problem Management',
    'Security Operations & Compliance',
    'Capacity Planning & Optimization',
    'Vendor & SLA Management',
    'Operational Analytics & Reporting',
  ]`,
    `  const coreCapabilitiesDefault = [
    'Managed Cloud & Infrastructure',
    '24/7 Monitoring & Support',
    'Continuous Integration & Delivery',
    'Incident & Problem Management',
    'Security Operations & Compliance',
    'Capacity Planning & Optimization',
    'Vendor & SLA Management',
    'Operational Analytics & Reporting',
  ]
  const rawCaps = t('servicesDetails.sharedServices.coreCapabilities', { returnObjects: true })
  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : coreCapabilitiesDefault`
  );
  fs.writeFileSync('src/pages/SharedServicesPage.jsx', content, 'utf8');
  console.log('[SUCCESS] SharedServicesPage.jsx prefix updated to servicesDetails.sharedServices.');
}

// -------------------------------------------------------------
// 7. WIRE EndToEndSolutionsPage.jsx, MigrationServicesPage.jsx, PilotPrototypingPage.jsx Core Capabilities Ribbons
// -------------------------------------------------------------
for (const [file, svc] of [
  ['src/pages/EndToEndSolutionsPage.jsx', 'endToEndSolutions'],
  ['src/pages/MigrationServicesPage.jsx', 'migrationServices'],
  ['src/pages/PilotPrototypingPage.jsx', 'pilotPrototyping']
]) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(`const coreCapabilities = [`)) {
    content = content.replace(
      `const coreCapabilities = [`,
      `const rawCaps = t('servicesDetails.${svc}.coreCapabilities', { returnObjects: true })\n  const coreCapabilities = Array.isArray(rawCaps) && rawCaps.length ? rawCaps : [`
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[SUCCESS] Dynamic coreCapabilities hooked up in ${file}.`);
  }
}

console.log('--- ALL 9 SERVICES PAGES HAVE BEEN FULLY WIRED ---');
