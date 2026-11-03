import fs from 'fs'

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.perspectivesArticles = en.perspectivesArticles || {}

// 1. Business Transformation
en.perspectivesArticles.businessTransformation = {
  category: 'BUSINESS TRANSFORMATION',
  title: 'Modernizing Business Applications for a Data-Driven Enterprise',
  subtitle: 'A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations.',
  date: 'September 2026',
  readTime: '7 min read',
  imageCaption: 'Enterprise Technology Perspective — Application Architecture & Connected Data',
  legacyLandscapeFlow: [
    { title: 'Business Applications', desc: 'Disparate legacy CRM, ERP, and departmental tools running in silos.' },
    { title: 'Multiple Data Sources', desc: 'Fragmented operational tables, CSV extracts, and ad-hoc schemas.' },
    { title: 'Disconnected Databases', desc: 'Isolated on-premise and uncoordinated cloud data repositories.' },
    { title: 'Reports & Business Users', desc: 'Manual reconciliations, conflicting spreadsheets, and delayed reporting.' }
  ],
  modernArchitectureFlow: [
    { title: 'Business Applications', desc: 'Core operational platforms and modern responsive interfaces.' },
    { title: 'API / Integration Layer', desc: 'Secure, event-driven API gateway connecting enterprise workflows.' },
    { title: 'Data Services', desc: 'Unified master data models, pipelines, and optimized storage engines.' },
    { title: 'Analytics & Reporting', desc: 'Real-time telemetry, semantic models, and automated reporting.' },
    { title: 'Business Decision Makers', desc: 'Live operational dashboards providing unified executive visibility.' }
  ],
  techFoundationRows: [
    { area: 'Enterprise Applications', purpose: 'Business process management' },
    { area: 'APIs', purpose: 'System integration' },
    { area: 'Databases', purpose: 'Structured business data' },
    { area: 'Data Integration', purpose: 'Connecting multiple sources' },
    { area: 'Analytics', purpose: 'Business insights' },
    { area: 'Cloud Infrastructure', purpose: 'Scalability and flexibility' },
    { area: 'Monitoring', purpose: 'Reliability and performance' }
  ],
  businessImpactOutcomes: [
    'Improved operational visibility across cross-functional units',
    'Better data consistency and single source of enterprise truth',
    'Reduced manual reporting effort and automated data compilation',
    'Improved application performance and reduced transaction latency',
    'Easier system integration through standardized, secure APIs',
    'Greater scalability to support organic growth and acquisition',
    'Better foundation for future innovation and intelligence adoption'
  ],
  keyPerspectivePoints: [
    'Understanding business processes and real operational workflows',
    'Connecting systems through dependable integration standards',
    'Improving data quality, governance, and master data models',
    'Modernizing applications without destabilizing day-to-day operations',
    'Creating scalable architecture suited for elastic growth',
    'Enabling better business visibility for proactive decision-making'
  ],
  sec1Eyebrow: 'THE BUSINESS CHALLENGE',
  sec1Heading: 'Navigating Complexity in a Growing Enterprise',
  sec1Subtext: 'As businesses scale, technology ecosystems inevitably expand. What begins as focused solutions for individual departments can evolve into a tangled web of disparate systems.',
  sec2Eyebrow: 'SYSTEM EVOLUTION',
  sec2Heading: 'A Complex Technology Landscape',
  sec2Subtext: 'Legacy application footprints introduce fragmentation across data stores, user experiences, and operational visibility.',
  sec3Eyebrow: 'THE CONNECTED MODEL',
  sec3Heading: 'Modern Application Architecture',
  sec3Subtext: 'Transitioning from monolithic silos to decoupled services interconnected by secure APIs and event-driven data streaming.',
  sec4Eyebrow: 'INTELLIGENCE & VISIBILITY',
  sec4Heading: 'Connected Data & Analytics',
  sec4Subtext: 'Unlocking data silos to power automated reporting, unified dashboards, and proactive business decisions.',
  sec5Eyebrow: 'ARCHITECTURE BLUEPRINT',
  sec5Heading: 'Technology Foundation',
  sec5Subtext: 'A structured view of key architectural layers enabling enterprise-wide connectivity and scalability.',
  sec6Eyebrow: 'QUALITATIVE VALUE',
  sec6Heading: 'Business Impact',
  sec6Subtext: 'Measurable operational gains delivered through application modernization and connected data foundations.',
  ctaHeading: 'Ready to Modernize Your Enterprise Application Landscape?',
  ctaDescription: 'Explore how Oklut Technologies can partner with your leadership to architect, build, and deploy unified application platforms and modern data pipelines.',
  ctaButton: 'Talk to an Enterprise Architect'
}

// 2. Artificial Intelligence
en.perspectivesArticles.artificialIntelligence = {
  category: 'ARTIFICIAL INTELLIGENCE',
  title: 'How AI Is Reshaping Enterprise Applications',
  subtitle: 'Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day.',
  date: 'September 2026',
  readTime: '6 min read',
  imageCaption: 'Enterprise Technology Perspective — Native Intelligence & Automated Workflows',
  aiUseCases: [
    { title: 'Supply Chain Forecasting', desc: 'Predicting demand spikes and logistics delays from historical supplier telemetry.' },
    { title: 'Automated Invoice Auditing', desc: 'Extracting line items and matching against purchase orders with zero human entry.' },
    { title: 'Intelligent Service Desks', desc: 'Triage and automated resolution of Tier-1 employee IT and HR requests.' },
    { title: 'Customer Churn Prevention', desc: 'Behavioral clustering identifying early friction signals for proactive outreach.' }
  ],
  aiBusinessBenefits: [
    'Faster operational decisions driven by real-time predictive models',
    'Reduction in repetitive data processing and manual reconciliations',
    'Higher employee throughput with contextual copilot assistance',
    'Improved customer satisfaction through hyper-personalized experiences',
    'Continuous process self-optimization based on real telemetry',
    'De-risked compliance tracking via automated audit-log inspection'
  ],
  governancePoints: [
    'Strict role-based access ensuring AI models never leak sensitive data',
    'Transparent reasoning traces allowing human review on high-value actions',
    'Continuous model evaluation to guard against hallucination and bias',
    'Strict data provenance standards aligning with GDPR, SOC 2, and HIPAA',
    'Human-in-the-loop escalation paths for uncertain edge conditions'
  ],
  sec1Eyebrow: 'THE SHIFT TO NATIVE INTELLIGENCE',
  sec1Heading: 'AI in Enterprise Applications',
  sec1Subtext: 'Artificial intelligence is moving beyond standalone experimentation into the core fabric of daily enterprise systems.',
  sec2Eyebrow: 'AUTOMATION AT SCALE',
  sec2Heading: 'Intelligent Automation',
  sec2Subtext: 'Replacing fragile rule-based routines with cognitive workflows that interpret documents, route exceptions, and adapt.',
  sec3Eyebrow: 'EMBEDDED ASSISTANCE',
  sec3Heading: 'Enterprise AI Copilots',
  sec3Subtext: 'Context-aware assistants embedded inside business applications to assist knowledge workers across data analysis, documentation, and operational queries.',
  sec4Eyebrow: 'FORWARD-LOOKING REASONING',
  sec4Heading: 'Predictive Intelligence',
  sec4Subtext: 'Shifting from backward-looking retrospective reports to proactive decision engines that anticipate operational disruptions.',
  sec5Eyebrow: 'REAL-WORLD APPLICATIONS',
  sec5Heading: 'Enterprise AI Use Cases',
  sec5Subtext: 'Demonstrated applications delivering measurable efficiency gains across operational enterprise domains.',
  sec6Eyebrow: 'STRATEGIC VALUE',
  sec6Heading: 'Business Benefits',
  sec6Subtext: 'Tangible productivity gains and operational agility realized through enterprise AI adoption.',
  ctaHeading: 'Ready to Integrate Native AI into Your Business Applications?',
  ctaDescription: 'Connect with Oklut Technologies AI practice to architect, evaluate, and deploy enterprise AI copilots and intelligent automation engines.',
  ctaButton: 'Consult an AI Specialist'
}

// 3. Modern ERP
en.perspectivesArticles.modernErp = {
  category: 'MODERN ERP',
  title: 'Accelerating Business Transformation with Modern ERP',
  subtitle: 'Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation.',
  date: 'September 2026',
  readTime: '7 min read',
  imageCaption: 'Enterprise Technology Perspective — Connected ERP & Operational Agility',
  connectedFunctions: [
    { title: 'Financial Management', desc: 'Real-time ledger updates, automated revenue recognition, and instant multi-currency reconciliation.' },
    { title: 'Supply Chain & Logistics', desc: 'End-to-end inventory visibility, warehouse optimization, and supplier performance telemetry.' },
    { title: 'Human Capital & Workforce', desc: 'Self-service employee portals, automated payroll runs, and integrated talent lifecycle planning.' },
    { title: 'Procurement & Sourcing', desc: 'Automated purchase approvals, vendor contract compliance, and dynamic spend analytics.' }
  ],
  modernCapabilities: [
    { title: 'Cloud-Native Architecture', desc: 'Elastic compute scaling without on-premise infrastructure overhead or disruptive version lock-in.' },
    { title: 'Open API Ecosystem', desc: 'Pre-built connectors enabling seamless two-way data sync with custom microservices and CRM suites.' },
    { title: 'Embedded Analytics', desc: 'Direct dashboard drill-downs from high-level balance sheets into individual transaction logs.' },
    { title: 'Automated Workflow Triggers', desc: 'Event-driven event triggers executing standard cross-departmental operations autonomously.' }
  ],
  erpBusinessBenefits: [
    'Single source of truth eliminating conflicting departmental reports',
    'Drastic reduction in month-end and quarter-end close cycles',
    'Real-time inventory and logistics visibility minimizing stockouts',
    'Reduced IT maintenance overhead through modular cloud-native updates',
    'Unified compliance tracking across multi-regional tax jurisdictions',
    'Faster onboarding of acquired entities into shared operational backbones'
  ],
  erpStrategyPoints: [
    'Aligning ERP architecture with core operational workflows before configuration',
    'Selecting modular deployment models to realize rapid milestone wins',
    'Prioritizing high-quality master data migration and reconciliation',
    'Embedding automated change management and role-tailored training programs',
    'Designing API gateways for frictionless future integration expansion'
  ],
  sec1Eyebrow: 'THE OPERATIONAL BACKBONE',
  sec1Heading: 'Why Modern ERP Matters',
  sec1Subtext: 'Enterprise efficiency hinges on seamlessly synchronizing data across finance, procurement, operations, and human capital.',
  sec2Eyebrow: 'INTEGRATED ECOSYSTEM',
  sec2Heading: 'Connected Business Functions',
  sec2Subtext: 'Breaking down traditional departmental siloes to allow transactional data to flow instantaneously across business units.',
  sec3Eyebrow: 'CROSS-FUNCTIONAL HARMONY',
  sec3Heading: 'Unified Operations & Information Flow',
  sec3Subtext: 'A connected digital spine ensuring that sales contracts immediately update supply chain orders and financial ledgers.',
  sec4Eyebrow: 'ENTERPRISE TELEMETRY',
  sec4Heading: 'Real-Time Business Visibility',
  sec4Subtext: 'Live operational intelligence replacing delayed retrospective spreadsheets with immediate performance indicators.',
  sec5Eyebrow: 'CORE PLATFORM ARCHITECTURE',
  sec5Heading: 'Modern ERP Capabilities',
  sec5Subtext: 'The architectural foundations that differentiate agile cloud platforms from legacy monolithic systems.',
  sec6Eyebrow: 'QUALITATIVE IMPACT',
  sec6Heading: 'Business Benefits',
  sec6Subtext: 'Tangible organizational speed, transparency, and cost efficiencies unlocked by modern ERP platforms.',
  ctaHeading: 'Ready to Modernize Your Enterprise ERP Spine?',
  ctaDescription: 'Discover how Oklut Technologies can help you scope, configure, and integrate modular ERP platforms tailored to your business operations.',
  ctaButton: 'Talk to an ERP Architect'
}

// 4. Cybersecurity
en.perspectivesArticles.cybersecurity = {
  category: 'CYBERSECURITY',
  title: 'Building Cyber Resilience in a Connected Enterprise',
  subtitle: 'Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments.',
  date: 'September 2026',
  readTime: '8 min read',
  imageCaption: 'Enterprise Technology Perspective — Threat Defense & Zero-Trust Architecture',
  incidentReadinessPhases: [
    { title: 'Telemetry & Detection', desc: 'Real-time log ingestion and SIEM anomaly correlation across all cloud endpoints and workloads.' },
    { title: 'Containment & Isolation', desc: 'Automated network quarantine rules isolating compromised containers or credentials instantly.' },
    { title: 'Remediation & Root-Cause', desc: 'Rapid patch rollout and digital forensics identifying the exact breach vector.' },
    { title: 'Resilience & Hardening', desc: 'Continuous feedback into immutable backups, policy guardrails, and automated red-team simulations.' }
  ],
  cyberBusinessBenefits: [
    'Substantial reduction in vulnerability attack surfaces across cloud assets',
    'Guaranteed operational continuity and disaster recovery with minimal RTO/RPO',
    'Total compliance confidence across ISO 27001, SOC 2, HIPAA, and GDPR audits',
    'Protection of core enterprise intellectual property and confidential customer records',
    'Streamlined vendor and third-party risk governance through unified access controls',
    'Enhanced client and investor trust backed by verified zero-trust security postures'
  ],
  zeroTrustPrinciples: [
    'Never Trust, Always Verify: Explicit authentication required for every transaction',
    'Least-Privilege Access: Granular role boundaries limiting lateral threat movement',
    'Assume Breach: Continuous threat monitoring, encryption in transit and at rest',
    'Micro-Segmentation: Network firewalls isolating individual application workloads',
    'Continuous Telemetry: Automated behavioral analysis flagging anomalous session requests'
  ],
  sec1Eyebrow: 'THE EXPANDING PERIMETER',
  sec1Heading: 'The Connected Enterprise Security Landscape',
  sec1Subtext: 'As enterprises adopt cloud services, distributed remote teams, and IoT devices, traditional security borders dissolve.',
  sec2Eyebrow: 'COMPREHENSIVE DEFENSE',
  sec2Heading: 'Multi-Layered Threat Protection',
  sec2Subtext: 'Coordinating threat intelligence, vulnerability scanning, and automated incident response across the full technology stack.',
  sec3Eyebrow: 'THE NEW SECURITY BORDER',
  sec3Heading: 'Identity & Access Management (IAM)',
  sec3Subtext: 'Identity is the primary control plane. Granular access, MFA, and SSO ensure only authorized principals access business systems.',
  sec4Eyebrow: 'ARCHITECTURAL PARADIGM',
  sec4Heading: 'Demystifying Zero Trust Architecture',
  sec4Subtext: 'A foundational security mindset predicated on continuous verification, explicit authorization, and assumed compromise.',
  sec5Eyebrow: 'INFRASTRUCTURE GOVERNANCE',
  sec5Heading: 'Cloud Security Considerations',
  sec5Subtext: 'Addressing shared responsibility models, Infrastructure as Code guardrails, and Kubernetes runtime protection.',
  sec6Eyebrow: 'OPERATIONAL RESILIENCE',
  sec6Heading: 'Incident Readiness: Beyond Prevention',
  sec6Subtext: 'Preparing structured runbooks, automated containment drills, and immutable disaster recovery backups for total operational resilience.',
  sec7Eyebrow: 'STRATEGIC VALUE',
  sec7Heading: 'Business Benefits',
  sec7Subtext: 'Enterprise resilience, compliance verification, and brand reputation safeguard delivered by modern cyber defense.',
  ctaHeading: 'Ready to Solidify Your Enterprise Cyber Resilience?',
  ctaDescription: 'Collaborate with Oklut Technologies security practice to audit architectures, implement Zero Trust frameworks, and safeguard mission-critical systems.',
  ctaButton: 'Consult a Cyber Architect'
}

// 5. Cloud Modernization
en.perspectivesArticles.cloudModernization = {
  category: 'CLOUD & MODERNIZATION',
  title: 'Modernizing Legacy Applications for the Cloud',
  subtitle: 'Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures.',
  date: 'September 2026',
  readTime: '6 min read',
  imageCaption: 'Enterprise Technology Perspective — Cloud-Native Re-platforming & Containerization',
  modernizationApproaches: [
    { title: 'Rehost (Lift & Shift)', desc: 'Transition workloads to cloud virtual machines rapidly with minimal code modifications.' },
    { title: 'Replatform (Lift & Reshape)', desc: 'Upgrade runtime frameworks, adopt managed cloud databases, and streamline operations.' },
    { title: 'Refactor (Cloud-Native Rebuild)', desc: 'Deconstruct monoliths into containerized microservices and event-driven serverless APIs.' },
    { title: 'Replace (SaaS Modernization)', desc: 'Retire redundant legacy systems in favor of purpose-built enterprise cloud software.' }
  ],
  cloudArchitectureFlow: [
    { title: 'Legacy Assessment', desc: 'Automated dependency mapping, technical debt cataloging, and cloud-readiness scoring.' },
    { title: 'Target Architecture', desc: 'Modular microservice blueprints, container topologies, and automated IaC templates.' },
    { title: 'Phased Migration', desc: 'Canary releases, dual-write data synchronization, and zero-downtime cutover waves.' },
    { title: 'Cloud Optimization', desc: 'Continuous cost governance, autoscaling telemetry, and FinOps operational reviews.' }
  ],
  cloudModernizationBenefits: [
    'Exponentially lower infrastructure maintenance and hardware refresh expenses',
    'Near-infinite compute elasticity handling peak enterprise traffic with zero latency',
    'Accelerated release velocity with fully automated CI/CD deployment pipelines',
    'Elimination of legacy single points of failure with multi-AZ high availability',
    'Modern API architectures enabling rapid cross-platform partner integrations',
    'Advanced real-time observability into application performance and cloud spending'
  ],
  landscapeAssessmentPoints: [
    'Mapping complex inter-application dependencies and data synchronization cadences',
    'Identifying hardcoded environmental configurations and proprietary database schemas',
    'Assessing regulatory compliance and data sovereignty constraints per jurisdiction',
    'Calculating realistic Total Cost of Ownership (TCO) across refactor versus rehost paths',
    'Establishing clear rollout waves to protect active daily business operations'
  ],
  sec1Eyebrow: 'THE REALITY OF LEGACY SYSTEMS',
  sec1Heading: 'The Legacy Challenge',
  sec1Subtext: 'Aging monoliths constrain innovation velocity, increase operational vulnerabilities, and escalate infrastructure maintenance costs.',
  sec2Eyebrow: 'ASSESSMENT & DISCOVERY',
  sec2Heading: 'Understanding the Application Landscape',
  sec2Subtext: 'Rigorous architectural discovery to map data dependencies, software versions, and modernization ROI prior to migration.',
  sec3Eyebrow: 'THE 4 MODERNIZATION PATHS',
  sec3Heading: 'Modernization Approaches',
  sec3Subtext: 'Choosing the right migration pattern for each workload: rehosting, replatforming, refactoring, or replacing.',
  sec4Eyebrow: 'TARGET TRANSFORMATION MODEL',
  sec4Heading: 'Modern Cloud Architecture',
  sec4Subtext: 'Designing resilient microservices, managed databases, and automated deployment pipelines suited for high scalability.',
  sec5Eyebrow: 'TRANSFORMATION OUTCOMES',
  sec5Heading: 'Key Modernization Benefits',
  sec5Subtext: 'Significant agility, cost reduction, and reliability dividends unlocked by cloud-native transformation.',
  ctaHeading: 'Ready to Modernize Your Legacy Applications for the Cloud?',
  ctaDescription: 'Partner with Oklut Technologies cloud architects to evaluate dependencies, build migration roadmaps, and transition your systems safely.',
  ctaButton: 'Talk to a Cloud Specialist'
}

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')
console.log('Successfully written all 5 Perspectives articles to en/translation.json!')
