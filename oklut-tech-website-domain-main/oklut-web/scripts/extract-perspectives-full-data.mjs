import fs from 'fs'

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.perspectivesArticles = en.perspectivesArticles || {}

// 1. Business Transformation
en.perspectivesArticles.businessTransformation = {
  metaTitle: 'Modernizing Business Applications for a Data-Driven Enterprise | Perspectives | Oklut',
  metaDescription: 'How modern application architecture and connected data improve operational efficiency, scalability, and business visibility across the enterprise.',
  category: 'BUSINESS TRANSFORMATION',
  title: 'Modernizing Business Applications for a Data-Driven Enterprise',
  subtitle: 'A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations.',
  date: 'September 2026',
  readTime: '7 min read',
  imageCaption: 'Enterprise Technology Perspective — Application Architecture & Connected Data',
  legacyFlow: [
    { title: 'Business Applications', desc: 'Disparate legacy CRM, ERP, and departmental tools running in silos.' },
    { title: 'Multiple Data Sources', desc: 'Fragmented operational tables, CSV extracts, and ad-hoc schemas.' },
    { title: 'Disconnected Databases', desc: 'Isolated on-premise and uncoordinated cloud data repositories.' },
    { title: 'Reports & Business Users', desc: 'Manual reconciliations, conflicting spreadsheets, and delayed reporting.' }
  ],
  modernFlow: [
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

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')
console.log('Populated Business Transformation perspective article in canonical translation.json')
