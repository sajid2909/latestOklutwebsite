import fs from 'fs'

// Finish CentreOfExcellencePage.jsx
let coe = fs.readFileSync('src/pages/CentreOfExcellencePage.jsx', 'utf8')

// Add frameworks array to translation.json
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.servicesDetails.centreOfExcellence.frameworks = [
  {
    title: 'Governance & Frameworks',
    description: 'Establish enterprise-wide architectural governance, policy guardrails, and compliance standards.',
    tag: 'Governance'
  },
  {
    title: 'Technology Standards & Architecture',
    description: 'Define modern reference architectures, vetted technology stacks, and microservices patterns.',
    tag: 'Architecture'
  },
  {
    title: 'Reusable Assets & Libraries',
    description: 'Accelerate development velocity with shared components, templates, starter kits, and design systems.',
    tag: 'Reusability'
  },
  {
    title: 'Competency Development',
    description: 'Structured training, tech mentorship, and skill enablement to elevate team engineering prowess.',
    tag: 'Competency'
  },
  {
    title: 'Innovation & Emerging Tech',
    description: 'R&D on AI agents, automation pipelines, and next-generation frameworks to maintain market edge.',
    tag: 'Innovation'
  },
  {
    title: 'Continuous Improvement',
    description: 'Data-driven engineering metrics (DORA), SLA benchmarking, and ongoing quality optimization.',
    tag: 'Quality'
  }
]
en.servicesDetails.centreOfExcellence.pillarsSub = 'Designed to empower enterprise clients with scalable, secure, and modern digital platforms.'
en.servicesDetails.centreOfExcellence.ctaSub = 'Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.'
en.servicesDetails.centreOfExcellence.ctaButton = 'Schedule Executive Consultation'

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')

coe = coe.replace(
  `<div className="coe-header-center">
          <div className="coe-eyebrow">Comprehensive Capabilities</div>
          <h2>Our Core Excellence Frameworks</h2>
          <p>
            Designed to empower enterprise clients with scalable, secure, and modern digital platforms.
          </p>
        </div>`,
  `<div className="coe-header-center">
          <div className="coe-eyebrow">{t('services.coreCapabilities', { defaultValue: 'Comprehensive Capabilities' })}</div>
          <h2>{t('servicesDetails.centreOfExcellence.pillarsTitle', { defaultValue: 'Our Core Excellence Frameworks' })}</h2>
          <p>
            {t('servicesDetails.centreOfExcellence.pillarsSub', { defaultValue: 'Designed to empower enterprise clients with scalable, secure, and modern digital platforms.' })}
          </p>
        </div>`
)

coe = coe.replace(
  `              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="coe-card-tag">{pillar.tag}</div>`,
  `              <h3>{t(\`servicesDetails.centreOfExcellence.frameworks.\${idx}.title\`, { defaultValue: pillar.title })}</h3>
              <p>{t(\`servicesDetails.centreOfExcellence.frameworks.\${idx}.description\`, { defaultValue: pillar.description })}</p>
              <div className="coe-card-tag">{t(\`servicesDetails.centreOfExcellence.frameworks.\${idx}.tag\`, { defaultValue: pillar.tag })}</div>`
)

coe = coe.replace(
  `<h2>Elevate Your Engineering Standard</h2>
          <p>
            Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.
          </p>
          <Link to="/book-consultation" className="coe-btn-primary">
            Schedule Executive Consultation`,
  `<h2>{t('servicesDetails.centreOfExcellence.ctaTitle', { defaultValue: 'Elevate Your Engineering Standard' })}</h2>
          <p>
            {t('servicesDetails.centreOfExcellence.ctaSub', { defaultValue: 'Partner with Oklut Tech’s Centre of Excellence to build resilient cloud architectures, automate workflows, and accelerate digital product delivery.' })}
          </p>
          <Link to="/book-consultation" className="coe-btn-primary">
            {t('servicesDetails.centreOfExcellence.ctaButton', { defaultValue: 'Schedule Executive Consultation' })}`
)

fs.writeFileSync('src/pages/CentreOfExcellencePage.jsx', coe, 'utf8')
console.log('CentreOfExcellencePage.jsx finished!')

// Finish SolutionEngineeringPage.jsx
let se = fs.readFileSync('src/pages/SolutionEngineeringPage.jsx', 'utf8')

se = se.replace(
  `          <span className="se-eyebrow">ENTERPRISE SYSTEM INTEGRATION</span>
          <h2>Platform Configuration &amp; API Development</h2>
          <p>
            Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.
          </p>
          <p>
            We configure commercial and open-source platforms to your exact operational requirements while preserving upgradeability and data security.
          </p>`,
  `          <span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row2Eyebrow', { defaultValue: 'ENTERPRISE SYSTEM INTEGRATION' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row2Title', { defaultValue: 'Platform Configuration & API Development' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row2P1', { defaultValue: 'Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row2P2', { defaultValue: 'We configure commercial and open-source platforms to your exact operational requirements while preserving upgradeability and data security.' })}
          </p>`
)

se = se.replace(
  `          <span className="se-eyebrow">UI/UX &amp; PERFORMANCE</span>
          <h2>UI/UX Enhancements &amp; Performance Optimization</h2>
          <p>
            Upgrade sluggish legacy user interfaces to modern, reactive, accessible web and mobile experiences. We audit and optimize database queries, caching layers, and frontend rendering for blazing-fast speed.
          </p>
          <p>
            Our improvements reduce friction for internal users and end customers alike, driving immediate gains in productivity and satisfaction.
          </p>`,
  `          <span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row3Eyebrow', { defaultValue: 'UI/UX & PERFORMANCE' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row3Title', { defaultValue: 'UI/UX Enhancements & Performance Optimization' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row3P1', { defaultValue: 'Upgrade sluggish legacy user interfaces to modern, reactive, accessible web and mobile experiences. We audit and optimize database queries, caching layers, and frontend rendering for blazing-fast speed.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row3P2', { defaultValue: 'Our improvements reduce friction for internal users and end customers alike, driving immediate gains in productivity and satisfaction.' })}
          </p>`
)

se = se.replace(
  `<div className="se-principles-head reveal">
            <span className="se-eyebrow">CORE CAPABILITIES</span>
            <h2>Engineered to Your Exact Specifications</h2>
            <p>Enterprise-grade customization methodologies built to scale seamlessly.</p>
          </div>`,
  `<div className="se-principles-head reveal">
            <span className="se-eyebrow">{t('services.coreCapabilities', { defaultValue: 'CORE CAPABILITIES' })}</span>
            <h2>{t('servicesDetails.solutionEngineering.pillarsTitle', { defaultValue: 'Engineered to Your Exact Specifications' })}</h2>
            <p>{t('servicesDetails.solutionEngineering.pillarsSub', { defaultValue: 'Enterprise-grade customization methodologies built to scale seamlessly.' })}</p>
          </div>`
)

se = se.replace(
  `<h3>Custom Workflows &amp; Extensions</h3>
              <p>Tailored application logic and automated state machines configured specifically around your internal operational rules.</p>`,
  `<h3>{t('servicesDetails.solutionEngineering.pillar1Title', { defaultValue: 'Custom Workflows & Extensions' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar1Desc', { defaultValue: 'Tailored application logic and automated state machines configured specifically around your internal operational rules.' })}</p>`
)

se = se.replace(
  `<h3>API &amp; System Integration</h3>
              <p>Secure, authenticated data bridges connecting proprietary backends, ERP suites, payment gateways, and cloud services.</p>`,
  `<h3>{t('servicesDetails.solutionEngineering.pillar2Title', { defaultValue: 'API & System Integration' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar2Desc', { defaultValue: 'Secure, authenticated data bridges connecting proprietary backends, ERP suites, payment gateways, and cloud services.' })}</p>`
)

se = se.replace(
  `<h3>Platform Configuration</h3>
              <p>Deep architectural adaptations that modify enterprise software without breaking upgrade paths or vendor support agreements.</p>`,
  `<h3>{t('servicesDetails.solutionEngineering.pillar3Title', { defaultValue: 'Platform Configuration' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar3Desc', { defaultValue: 'Deep architectural adaptations that modify enterprise software without breaking upgrade paths or vendor support agreements.' })}</p>`
)

se = se.replace(
  `<h3>Performance Optimization</h3>
              <p>Aggressive query profiling, memory leak elimination, and edge CDN distribution for sub-second page loads.</p>`,
  `<h3>{t('servicesDetails.solutionEngineering.pillar4Title', { defaultValue: 'Performance Optimization' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar4Desc', { defaultValue: 'Aggressive query profiling, memory leak elimination, and edge CDN distribution for sub-second page loads.' })}</p>`
)

se = se.replace(
  `<h2>Ready to Customize Your Enterprise Platform?</h2>
            <p>
              Connect with our solutions architects to design and deploy custom modules, workflows, and integrations tailored to your business needs.
            </p>
            <Link to="/book-consultation" className="btn btn-primary">
              Book a Customization Call`,
  `<h2>{t('servicesDetails.solutionEngineering.ctaTitle', { defaultValue: 'Ready to Customize Your Enterprise Platform?' })}</h2>
            <p>
              {t('servicesDetails.solutionEngineering.ctaSub', { defaultValue: 'Connect with our solutions architects to design and deploy custom modules, workflows, and integrations tailored to your business needs.' })}
            </p>
            <Link to="/book-consultation" className="btn btn-primary">
              {t('servicesDetails.solutionEngineering.ctaButton', { defaultValue: 'Book a Customization Call' })}`
)

fs.writeFileSync('src/pages/SolutionEngineeringPage.jsx', se, 'utf8')
console.log('SolutionEngineeringPage.jsx finished!')
