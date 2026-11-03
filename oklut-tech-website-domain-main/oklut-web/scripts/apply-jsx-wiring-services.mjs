import fs from 'fs'

// Helper to replace text safely
function replaceExact(file, search, replace) {
  let content = fs.readFileSync(file, 'utf8')
  const crlf = content.includes('\r\n')
  const normContent = content.replace(/\r\n/g, '\n')
  const normSearch = search.replace(/\r\n/g, '\n')
  const normReplace = replace.replace(/\r\n/g, '\n')
  if (!normContent.includes(normSearch)) {
    console.warn(`WARNING in ${file}: search string not found:\n"${normSearch.slice(0, 60)}..."`)
    return false
  }
  let newContent = normContent.replace(normSearch, normReplace)
  if (crlf) {
    newContent = newContent.replace(/\n/g, '\r\n')
  }
  fs.writeFileSync(file, newContent, 'utf8')
  return true
}

console.log('--- Wiring DigitalTransformationPage.jsx ---')
{
  const f = 'src/pages/DigitalTransformationPage.jsx'
  replaceExact(f,
    `<div className="dt-text-col"><div className="dt-eyebrow">Strategy &amp; Roadmap</div><h2>From Vision to Executable Roadmap</h2><p>We partner with enterprise leaders to define digital strategy, business cases, and phased roadmaps with quick wins and de-risked execution.</p><p>Prioritized initiatives, TCO models, and KPIs ensure every technology modernization effort ties directly to revenue, efficiency, and customer satisfaction outcomes.</p></div>`,
    `<div className="dt-text-col"><div className="dt-eyebrow">{t('servicesDetails.digitalTransformation.row1Eyebrow', { defaultValue: 'Strategy & Roadmap' })}</div><h2>{t('servicesDetails.digitalTransformation.row1Title', { defaultValue: 'From Vision to Executable Roadmap' })}</h2><p>{t('servicesDetails.digitalTransformation.row1P1', { defaultValue: 'We partner with enterprise leaders to define digital strategy, business cases, and phased roadmaps with quick wins and de-risked execution.' })}</p><p>{t('servicesDetails.digitalTransformation.row1P2', { defaultValue: 'Prioritized initiatives, TCO models, and KPIs ensure every technology modernization effort ties directly to revenue, efficiency, and customer satisfaction outcomes.' })}</p></div>`
  )
  replaceExact(f,
    `<div className="dt-text-col"><div className="dt-eyebrow">Legacy Modernization</div><h2>Modernize Without Breaking the Business</h2><p>Re-platform monoliths to microservices, APIs, and cloud-native patterns with zero-downtime cutovers and automated regression validation.</p><p>We modernize applications, databases, and integration layers while preserving compliance and security posture.</p></div>`,
    `<div className="dt-text-col"><div className="dt-eyebrow">{t('servicesDetails.digitalTransformation.row2Eyebrow', { defaultValue: 'Legacy Modernization' })}</div><h2>{t('servicesDetails.digitalTransformation.row2Title', { defaultValue: 'Modernize Without Breaking the Business' })}</h2><p>{t('servicesDetails.digitalTransformation.row2P1', { defaultValue: 'Re-platform monoliths to microservices, APIs, and cloud-native patterns with zero-downtime cutovers and automated regression validation.' })}</p><p>{t('servicesDetails.digitalTransformation.row2P2', { defaultValue: 'We modernize applications, databases, and integration layers while preserving compliance and security posture.' })}</p></div>`
  )
  replaceExact(f,
    `<div className="dt-text-col"><div className="dt-eyebrow">Cloud, AI &amp; Data</div><h2>Cloud Adoption &amp; Data-Driven Intelligence</h2><p>Adopt AWS, Azure, and GCP, build modern data pipelines, and embed machine learning agents to drive autonomous decisions.</p><p>From real-time event streaming to unified dashboards, transformation becomes measurable and sustainable.</p></div>`,
    `<div className="dt-text-col"><div className="dt-eyebrow">{t('servicesDetails.digitalTransformation.row3Eyebrow', { defaultValue: 'Cloud, AI & Data' })}</div><h2>{t('servicesDetails.digitalTransformation.row3Title', { defaultValue: 'Cloud Adoption & Data-Driven Intelligence' })}</h2><p>{t('servicesDetails.digitalTransformation.row3P1', { defaultValue: 'Adopt AWS, Azure, and GCP, build modern data pipelines, and embed machine learning agents to drive autonomous decisions.' })}</p><p>{t('servicesDetails.digitalTransformation.row3P2', { defaultValue: 'From real-time event streaming to unified dashboards, transformation becomes measurable and sustainable.' })}</p></div>`
  )
  replaceExact(f,
    `<div className="dt-text-col"><div className="dt-eyebrow">Customer Experience</div><h2>Modern Omnichannel Experiences</h2><p>Redesign customer journeys across responsive web, iOS, Android, and self-service portals with personalized interfaces.</p><p>Platform engineering, telemetry, and automated feedback loops make digital innovation continuous.</p></div>`,
    `<div className="dt-text-col"><div className="dt-eyebrow">{t('servicesDetails.digitalTransformation.row4Eyebrow', { defaultValue: 'Customer Experience' })}</div><h2>{t('servicesDetails.digitalTransformation.row4Title', { defaultValue: 'Modern Omnichannel Experiences' })}</h2><p>{t('servicesDetails.digitalTransformation.row4P1', { defaultValue: 'Redesign customer journeys across responsive web, iOS, Android, and self-service portals with personalized interfaces.' })}</p><p>{t('servicesDetails.digitalTransformation.row4P2', { defaultValue: 'Platform engineering, telemetry, and automated feedback loops make digital innovation continuous.' })}</p></div>`
  )
  replaceExact(f,
    `<div className="dt-section-header reveal"><h2>Transformation Pillars</h2><p>Outcome-focused levers that ensure sustainable digital leadership.</p></div>`,
    `<div className="dt-section-header reveal"><h2>{t('servicesDetails.digitalTransformation.pillarsTitle', { defaultValue: 'Transformation Pillars' })}</h2><p>{t('servicesDetails.digitalTransformation.pillarsSub', { defaultValue: 'Outcome-focused levers that ensure sustainable digital leadership.' })}</p></div>`
  )
  replaceExact(f,
    `<h3>Digital Strategy &amp; Governance</h3><p>Phased transformation blueprints with business case modeling, architecture governance, and milestone risk tracking.</p>`,
    `<h3>{t('servicesDetails.digitalTransformation.pillar1Title', { defaultValue: 'Digital Strategy & Governance' })}</h3><p>{t('servicesDetails.digitalTransformation.pillar1Desc', { defaultValue: 'Phased transformation blueprints with business case modeling, architecture governance, and milestone risk tracking.' })}</p>`
  )
  replaceExact(f,
    `<h3>Cloud &amp; Data Platform</h3><p>AWS/Azure/GCP multi-cloud foundations, automated pipelines, and enterprise data analytics enablement.</p>`,
    `<h3>{t('servicesDetails.digitalTransformation.pillar2Title', { defaultValue: 'Cloud & Data Platform' })}</h3><p>{t('servicesDetails.digitalTransformation.pillar2Desc', { defaultValue: 'AWS/Azure/GCP multi-cloud foundations, automated pipelines, and enterprise data analytics enablement.' })}</p>`
  )
  replaceExact(f,
    `<h3>AI &amp; Automation</h3><p>Intelligent process automation, cognitive AI agents, and predictive telemetry to optimize daily operations.</p>`,
    `<h3>{t('servicesDetails.digitalTransformation.pillar3Title', { defaultValue: 'AI & Automation' })}</h3><p>{t('servicesDetails.digitalTransformation.pillar3Desc', { defaultValue: 'Intelligent process automation, cognitive AI agents, and predictive telemetry to optimize daily operations.' })}</p>`
  )
  replaceExact(f,
    `<h3>Customer Experience</h3><p>High-converting omnichannel digital portals and personalized interfaces built for maximum user retention.</p>`,
    `<h3>{t('servicesDetails.digitalTransformation.pillar4Title', { defaultValue: 'Customer Experience' })}</h3><p>{t('servicesDetails.digitalTransformation.pillar4Desc', { defaultValue: 'High-converting omnichannel digital portals and personalized interfaces built for maximum user retention.' })}</p>`
  )
  replaceExact(f,
    `<div className="dt-cta-box reveal"><h2>Ready to Transform Your Enterprise?</h2><p>Partner with Oklut Technologies for phased, de-risked digital transformation tied to measurable business outcomes.</p><button type="button" className="dt-btn-primary" onClick={handleBook}>Book a Digital Transformation Call <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`,
    `<div className="dt-cta-box reveal"><h2>{t('servicesDetails.digitalTransformation.ctaTitle', { defaultValue: 'Ready to Transform Your Enterprise?' })}</h2><p>{t('servicesDetails.digitalTransformation.ctaSub', { defaultValue: 'Partner with Oklut Technologies for phased, de-risked digital transformation tied to measurable business outcomes.' })}</p><button type="button" className="dt-btn-primary" onClick={handleBook}>{t('servicesDetails.digitalTransformation.ctaButton', { defaultValue: 'Book a Digital Transformation Call' })} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`
  )
}

console.log('--- Wiring EndToEndSolutionsPage.jsx ---')
{
  const f = 'src/pages/EndToEndSolutionsPage.jsx'
  replaceExact(f,
    `<div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Strategy &amp; Architecture</div><h2>Requirements Engineering &amp; Solution Design</h2><p>Collaborative workshops, business domain mapping, and cloud architecture specifications designed to eliminate risk before a line of code is written.</p><p>We define data models, security frameworks, and scalability milestones that set up long-term success.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/one-stop-overview.jpg\`} alt="Solution Framework Design" /></div></div></div>`,
    `<div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">{t('servicesDetails.endToEndSolutions.row1Eyebrow', { defaultValue: 'Strategy & Architecture' })}</div><h2>{t('servicesDetails.endToEndSolutions.row1Title', { defaultValue: 'Requirements Engineering & Solution Design' })}</h2><p>{t('servicesDetails.endToEndSolutions.row1P1', { defaultValue: 'Collaborative workshops, business domain mapping, and cloud architecture specifications designed to eliminate risk before a line of code is written.' })}</p><p>{t('servicesDetails.endToEndSolutions.row1P2', { defaultValue: 'We define data models, security frameworks, and scalability milestones that set up long-term success.' })}</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/one-stop-overview.jpg\`} alt="Solution Framework Design" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Engineering &amp; Quality</div><h2>Full-Stack Development &amp; Automated Testing</h2><p>Modular microservices, type-safe APIs, and responsive frontends combined with automated unit, integration, and security scans.</p><p>Continuous integration pipelines with GitHub Actions, Terraform, and automated security guardrails.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg\`} alt="Build" /></div></div></div>`,
    `<div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">{t('servicesDetails.endToEndSolutions.row2Eyebrow', { defaultValue: 'Engineering & Quality' })}</div><h2>{t('servicesDetails.endToEndSolutions.row2Title', { defaultValue: 'Full-Stack Development & Automated Testing' })}</h2><p>{t('servicesDetails.endToEndSolutions.row2P1', { defaultValue: 'Modular microservices, type-safe APIs, and responsive frontends combined with automated unit, integration, and security scans.' })}</p><p>{t('servicesDetails.endToEndSolutions.row2P2', { defaultValue: 'Continuous integration pipelines with GitHub Actions, Terraform, and automated security guardrails.' })}</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/custom-dev-sec3.jpg\`} alt="Build" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Deployment &amp; Operations</div><h2>Cloud Deployment &amp; 24/7 Managed Monitoring</h2><p>Multi-cloud orchestration on AWS/Azure/GCP with automated rollback, zero-downtime cutovers, and real-time observability.</p><p>We provide SLA-backed maintenance and continuous telemetry monitoring to evolve your product seamlessly.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/one-stop-solutions-hero.png\`} alt="Operate" /></div></div></div>`,
    `<div className="e2e-row reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">{t('servicesDetails.endToEndSolutions.row3Eyebrow', { defaultValue: 'Deployment & Operations' })}</div><h2>{t('servicesDetails.endToEndSolutions.row3Title', { defaultValue: 'Cloud Deployment & 24/7 Managed Monitoring' })}</h2><p>{t('servicesDetails.endToEndSolutions.row3P1', { defaultValue: 'Multi-cloud orchestration on AWS/Azure/GCP with automated rollback, zero-downtime cutovers, and real-time observability.' })}</p><p>{t('servicesDetails.endToEndSolutions.row3P2', { defaultValue: 'We provide SLA-backed maintenance and continuous telemetry monitoring to evolve your product seamlessly.' })}</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/one-stop-solutions-hero.png\`} alt="Operate" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">Enterprise Governance</div><h2>Unified Governance &amp; Ongoing Support</h2><p>Single-point accountability across your entire digital stack — transparent sprint velocity, predictable budgeting, and continuous innovation.</p><p>Regular feature rollouts and modernization cycles keep your enterprise ahead of the competition.</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg\`} alt="Why" /></div></div></div>`,
    `<div className="e2e-row reverse reveal"><div className="e2e-text-col"><div className="e2e-eyebrow">{t('servicesDetails.endToEndSolutions.row4Eyebrow', { defaultValue: 'Enterprise Governance' })}</div><h2>{t('servicesDetails.endToEndSolutions.row4Title', { defaultValue: 'Unified Governance & Ongoing Support' })}</h2><p>{t('servicesDetails.endToEndSolutions.row4P1', { defaultValue: 'Single-point accountability across your entire digital stack — transparent sprint velocity, predictable budgeting, and continuous innovation.' })}</p><p>{t('servicesDetails.endToEndSolutions.row4P2', { defaultValue: 'Regular feature rollouts and modernization cycles keep your enterprise ahead of the competition.' })}</p></div><div className="e2e-img-col"><div className="e2e-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/proto-pilot-sec.jpg\`} alt="Why" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="e2e-section-header reveal"><h2>Lifecycle Framework Pillars</h2><p>Every phase engineered with enterprise rigor.</p></div>`,
    `<div className="e2e-section-header reveal"><h2>{t('servicesDetails.endToEndSolutions.pillarsTitle', { defaultValue: 'Lifecycle Framework Pillars' })}</h2><p>{t('servicesDetails.endToEndSolutions.pillarsSub', { defaultValue: 'Every phase engineered with enterprise rigor.' })}</p></div>`
  )
  replaceExact(f,
    `<h3>Strategy &amp; Requirements</h3><p>Domain discovery, architectural roadmaps, and stakeholder alignment to eliminate execution risks.</p>`,
    `<h3>{t('servicesDetails.endToEndSolutions.pillar1Title', { defaultValue: 'Strategy & Requirements' })}</h3><p>{t('servicesDetails.endToEndSolutions.pillar1Desc', { defaultValue: 'Domain discovery, architectural roadmaps, and stakeholder alignment to eliminate execution risks.' })}</p>`
  )
  replaceExact(f,
    `<h3>Architecture &amp; Build</h3><p>Resilient cloud-native microservices, API integrations, and continuous QA testing.</p>`,
    `<h3>{t('servicesDetails.endToEndSolutions.pillar2Title', { defaultValue: 'Architecture & Build' })}</h3><p>{t('servicesDetails.endToEndSolutions.pillar2Desc', { defaultValue: 'Resilient cloud-native microservices, API integrations, and continuous QA testing.' })}</p>`
  )
  replaceExact(f,
    `<h3>Security &amp; Deployment</h3><p>Zero-trust security compliance, containerized releases, and automated cloud deployments.</p>`,
    `<h3>{t('servicesDetails.endToEndSolutions.pillar3Title', { defaultValue: 'Security & Deployment' })}</h3><p>{t('servicesDetails.endToEndSolutions.pillar3Desc', { defaultValue: 'Zero-trust security compliance, containerized releases, and automated cloud deployments.' })}</p>`
  )
  replaceExact(f,
    `<h3>Governance &amp; Support</h3><p>24/7 SLA monitoring, health telemetry, and ongoing evolutionary engineering.</p>`,
    `<h3>{t('servicesDetails.endToEndSolutions.pillar4Title', { defaultValue: 'Governance & Support' })}</h3><p>{t('servicesDetails.endToEndSolutions.pillar4Desc', { defaultValue: '24/7 SLA monitoring, health telemetry, and ongoing evolutionary engineering.' })}</p>`
  )
  replaceExact(f,
    `<div className="e2e-cta-box reveal"><h2>Need a Complete Lifecycle Partner?</h2><p>We own the full technology lifecycle so your team can focus on core business outcomes.</p><button type="button" className="e2e-btn-primary" onClick={handleBook}>Partner for the Full Lifecycle <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`,
    `<div className="e2e-cta-box reveal"><h2>{t('servicesDetails.endToEndSolutions.ctaTitle', { defaultValue: 'Need a Complete Lifecycle Partner?' })}</h2><p>{t('servicesDetails.endToEndSolutions.ctaSub', { defaultValue: 'We own the full technology lifecycle so your team can focus on core business outcomes.' })}</p><button type="button" className="e2e-btn-primary" onClick={handleBook}>{t('servicesDetails.endToEndSolutions.ctaButton', { defaultValue: 'Partner for the Full Lifecycle' })} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`
  )
}

console.log('--- Wiring MigrationServicesPage.jsx ---')
{
  const f = 'src/pages/MigrationServicesPage.jsx'
  replaceExact(f,
    `<div className="ms-row reveal"><div className="ms-text-col"><div className="ms-eyebrow">Cloud Migration</div><h2>Multi-Cloud Strategy &amp; Lift-and-Optimize</h2><p>Seamless workload migration across AWS, Azure, and Google Cloud with automated discovery, wave planning, and zero business interruption.</p><p>We balance rehosting, replatforming, and refactoring to optimize total cost of ownership (TCO) and agility.</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/carousel-1.jpg\`} alt="Cloud migration" /></div></div></div>`,
    `<div className="ms-row reveal"><div className="ms-text-col"><div className="ms-eyebrow">{t('servicesDetails.migrationServices.row1Eyebrow', { defaultValue: 'Cloud Migration' })}</div><h2>{t('servicesDetails.migrationServices.row1Title', { defaultValue: 'Multi-Cloud Strategy & Lift-and-Optimize' })}</h2><p>{t('servicesDetails.migrationServices.row1P1', { defaultValue: 'Seamless workload migration across AWS, Azure, and Google Cloud with automated discovery, wave planning, and zero business interruption.' })}</p><p>{t('servicesDetails.migrationServices.row1P2', { defaultValue: 'We balance rehosting, replatforming, and refactoring to optimize total cost of ownership (TCO) and agility.' })}</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/carousel-1.jpg\`} alt="Cloud migration" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="ms-row reverse reveal"><div className="ms-text-col"><div className="ms-eyebrow">Data &amp; Database Migration</div><h2>Secure ETL &amp; Automated Data Validation</h2><p>Automated database replication, schema translation, and high-throughput ETL pipelines with 100% data integrity verification.</p><p>Zero-downtime cutover rehearsal ensures complete data consistency and business continuity.</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/carousel-2.jpg\`} alt="Database" /></div></div></div>`,
    `<div className="ms-row reverse reveal"><div className="ms-text-col"><div className="ms-eyebrow">{t('servicesDetails.migrationServices.row2Eyebrow', { defaultValue: 'Data & Database Migration' })}</div><h2>{t('servicesDetails.migrationServices.row2Title', { defaultValue: 'Secure ETL & Automated Data Validation' })}</h2><p>{t('servicesDetails.migrationServices.row2P1', { defaultValue: 'Automated database replication, schema translation, and high-throughput ETL pipelines with 100% data integrity verification.' })}</p><p>{t('servicesDetails.migrationServices.row2P2', { defaultValue: 'Zero-downtime cutover rehearsal ensures complete data consistency and business continuity.' })}</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/carousel-2.jpg\`} alt="Database" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="ms-row reveal"><div className="ms-text-col"><div className="ms-eyebrow">Platform Modernization</div><h2>Containerization &amp; Kubernetes Orchestration</h2><p>Modernize legacy monoliths into scalable microservices orchestrated via Kubernetes (EKS, AKS, GKE) with automated IaC blueprints.</p><p>Post-migration performance profiling and cost optimization ensure immediate ROI.</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/feature.jpg\`} alt="Kubernetes" /></div></div></div>`,
    `<div className="ms-row reveal"><div className="ms-text-col"><div className="ms-eyebrow">{t('servicesDetails.migrationServices.row3Eyebrow', { defaultValue: 'Platform Modernization' })}</div><h2>{t('servicesDetails.migrationServices.row3Title', { defaultValue: 'Containerization & Kubernetes Orchestration' })}</h2><p>{t('servicesDetails.migrationServices.row3P1', { defaultValue: 'Modernize legacy monoliths into scalable microservices orchestrated via Kubernetes (EKS, AKS, GKE) with automated IaC blueprints.' })}</p><p>{t('servicesDetails.migrationServices.row3P2', { defaultValue: 'Post-migration performance profiling and cost optimization ensure immediate ROI.' })}</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/feature.jpg\`} alt="Kubernetes" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="ms-row reverse reveal"><div className="ms-text-col"><div className="ms-eyebrow">Cutover Planning</div><h2>Automated Testing &amp; Rollback Safety Nets</h2><p>Battle-tested cutover runbooks, automated regression suites, and instant rollback mechanisms for complete peace of mind.</p><p>Post-migration health telemetry and 24/7 hypercare guarantee flawless production stability.</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/hero-poster.jpg\`} alt="Validation" /></div></div></div>`,
    `<div className="ms-row reverse reveal"><div className="ms-text-col"><div className="ms-eyebrow">{t('servicesDetails.migrationServices.row4Eyebrow', { defaultValue: 'Cutover Planning' })}</div><h2>{t('servicesDetails.migrationServices.row4Title', { defaultValue: 'Automated Testing & Rollback Safety Nets' })}</h2><p>{t('servicesDetails.migrationServices.row4P1', { defaultValue: 'Battle-tested cutover runbooks, automated regression suites, and instant rollback mechanisms for complete peace of mind.' })}</p><p>{t('servicesDetails.migrationServices.row4P2', { defaultValue: 'Post-migration health telemetry and 24/7 hypercare guarantee flawless production stability.' })}</p></div><div className="ms-img-col"><div className="ms-img-frame"><img src={\`\${import.meta.env.BASE_URL}img/hero-poster.jpg\`} alt="Validation" /></div></div></div>`
  )
  replaceExact(f,
    `<div className="ms-section-header reveal"><h2>Migration Assurances</h2><p>De-risked moves backed by enterprise SLAs.</p></div>`,
    `<div className="ms-section-header reveal"><h2>{t('servicesDetails.migrationServices.pillarsTitle', { defaultValue: 'Migration Assurances' })}</h2><p>{t('servicesDetails.migrationServices.pillarsSub', { defaultValue: 'De-risked moves backed by enterprise SLAs.' })}</p></div>`
  )
  replaceExact(f,
    `<h3>Zero-Downtime Cutover</h3><p>Canary releases and database dual-write sync to ensure uninterrupted user access.</p>`,
    `<h3>{t('servicesDetails.migrationServices.pillar1Title', { defaultValue: 'Zero-Downtime Cutover' })}</h3><p>{t('servicesDetails.migrationServices.pillar1Desc', { defaultValue: 'Canary releases and database dual-write sync to ensure uninterrupted user access.' })}</p>`
  )
  replaceExact(f,
    `<h3>Automated Data Validation</h3><p>Checksum comparisons, schema integrity audits, and automated ETL reconciliation.</p>`,
    `<h3>{t('servicesDetails.migrationServices.pillar2Title', { defaultValue: 'Automated Data Validation' })}</h3><p>{t('servicesDetails.migrationServices.pillar2Desc', { defaultValue: 'Checksum comparisons, schema integrity audits, and automated ETL reconciliation.' })}</p>`
  )
  replaceExact(f,
    `<h3>Rollback Safety Nets</h3><p>Strict disaster recovery protocols and rehearsal drills to contain risk at every phase.</p>`,
    `<h3>{t('servicesDetails.migrationServices.pillar3Title', { defaultValue: 'Rollback Safety Nets' })}</h3><p>{t('servicesDetails.migrationServices.pillar3Desc', { defaultValue: 'Strict disaster recovery protocols and rehearsal drills to contain risk at every phase.' })}</p>`
  )
  replaceExact(f,
    `<h3>Performance &amp; Cost Optimization</h3><p>Cloud rightsizing, autoscaling policies, and cost governance dashboards included.</p>`,
    `<h3>{t('servicesDetails.migrationServices.pillar4Title', { defaultValue: 'Performance & Cost Optimization' })}</h3><p>{t('servicesDetails.migrationServices.pillar4Desc', { defaultValue: 'Cloud rightsizing, autoscaling policies, and cost governance dashboards included.' })}</p>`
  )
  replaceExact(f,
    `<div className="ms-cta-box reveal"><h2>Ready to Migrate with Complete Confidence?</h2><p>Partner with Oklut Technologies for structured, risk-free cloud and data modernization.</p><button type="button" className="ms-btn-primary" onClick={handleBook}>Plan Your Migration Workshop <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`,
    `<div className="ms-cta-box reveal"><h2>{t('servicesDetails.migrationServices.ctaTitle', { defaultValue: 'Ready to Migrate with Complete Confidence?' })}</h2><p>{t('servicesDetails.migrationServices.ctaSub', { defaultValue: 'Partner with Oklut Technologies for structured, risk-free cloud and data modernization.' })}</p><button type="button" className="ms-btn-primary" onClick={handleBook}>{t('servicesDetails.migrationServices.ctaButton', { defaultValue: 'Plan Your Migration Workshop' })} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></div>`
  )
}

console.log('--- Wiring PilotPrototypingPage.jsx ---')
{
  const f = 'src/pages/PilotPrototypingPage.jsx'
  replaceExact(f,
    `<div className="pp-tag">Rapid Validation</div>
              <h2>From Concept to Validated Feasibility</h2>
              <p>
                Turning an idea into an enterprise-scale solution requires rigorous upfront validation. Our PoC &amp;
                Pilot service evaluates technology viability, stress-tests critical integration hooks, and validates business ROI before major capital commitments.
              </p>
              <p>
                We construct high-fidelity MVPs and focused sandbox pilots that prove technical feasibility, measure system latency, and gather direct stakeholder validation early.
              </p>`,
    `<div className="pp-tag">{t('servicesDetails.pilotPrototyping.row1Eyebrow', { defaultValue: 'Rapid Validation' })}</div>
              <h2>{t('servicesDetails.pilotPrototyping.row1Title', { defaultValue: 'From Concept to Validated Feasibility' })}</h2>
              <p>
                {t('servicesDetails.pilotPrototyping.row1P1', { defaultValue: 'Turning an idea into an enterprise-scale solution requires rigorous upfront validation. Our PoC & Pilot service evaluates technology viability, stress-tests critical integration hooks, and validates business ROI before major capital commitments.' })}
              </p>
              <p>
                {t('servicesDetails.pilotPrototyping.row1P2', { defaultValue: 'We construct high-fidelity MVPs and focused sandbox pilots that prove technical feasibility, measure system latency, and gather direct stakeholder validation early.' })}
              </p>`
  )
  replaceExact(f,
    `<div className="pp-tag">Agile Prototyping</div>
              <h2>Interactive MVPs &amp; UX Validation</h2>
              <p>
                We build interactive wireframes, clickable user flows, and functional proof-of-concepts in days, not months. Test real user interactions, refine UI/UX patterns, and gather actionable feedback from stakeholders.
              </p>
              <p>
                By shortening feedback loops during early development, your team minimizes rework and establishes clear technical specifications before capital-intensive build phases begin.
              </p>`,
    `<div className="pp-tag">{t('servicesDetails.pilotPrototyping.row2Eyebrow', { defaultValue: 'Agile Prototyping' })}</div>
              <h2>{t('servicesDetails.pilotPrototyping.row2Title', { defaultValue: 'Interactive MVPs & UX Validation' })}</h2>
              <p>
                {t('servicesDetails.pilotPrototyping.row2P1', { defaultValue: 'We build interactive wireframes, clickable user flows, and functional proof-of-concepts in days, not months. Test real user interactions, refine UI/UX patterns, and gather actionable feedback from stakeholders.' })}
              </p>
              <p>
                {t('servicesDetails.pilotPrototyping.row2P2', { defaultValue: 'By shortening feedback loops during early development, your team minimizes rework and establishes clear technical specifications before capital-intensive build phases begin.' })}
              </p>`
  )
  replaceExact(f,
    `<div className="pp-tag">Integration &amp; Scalability Testing</div>
              <h2>De-Risk Complex System Integrations</h2>
              <p>
                Uncover technical bottlenecks, API limitations, and performance constraints before full capital commitment. Our pilot engineering team stress-tests integrations, data pipelines, and third-party APIs in isolated sandbox environments.
              </p>
              <p>
                This proactive risk mitigation ensures high system availability, security compliance, and predictable development timelines when transitioning your PoC into enterprise production.
              </p>`,
    `<div className="pp-tag">{t('servicesDetails.pilotPrototyping.row3Eyebrow', { defaultValue: 'Integration & Scalability Testing' })}</div>
              <h2>{t('servicesDetails.pilotPrototyping.row3Title', { defaultValue: 'De-Risk Complex System Integrations' })}</h2>
              <p>
                {t('servicesDetails.pilotPrototyping.row3P1', { defaultValue: 'Uncover technical bottlenecks, API limitations, and performance constraints before full capital commitment. Our pilot engineering team stress-tests integrations, data pipelines, and third-party APIs in isolated sandbox environments.' })}
              </p>
              <p>
                {t('servicesDetails.pilotPrototyping.row3P2', { defaultValue: 'This proactive risk mitigation ensures high system availability, security compliance, and predictable development timelines when transitioning your PoC into enterprise production.' })}
              </p>`
  )
  replaceExact(f,
    `<div className="pp-tag">Controlled Production Pilot</div>
              <h2>Targeted Pilot Launch &amp; Business Case Validation</h2>
              <p>
                Deploy targeted pilot releases to a select user segment or test market. Track performance metrics, user adoption analytics, and operational feedback to quantify business value and establish a data-backed business case.
              </p>
              <p>
                With real-world pilot insights, executive sponsors gain clear ROI metrics to justify broader deployment and strategic digital transformation investments.
              </p>`,
    `<div className="pp-tag">{t('servicesDetails.pilotPrototyping.row4Eyebrow', { defaultValue: 'Controlled Production Pilot' })}</div>
              <h2>{t('servicesDetails.pilotPrototyping.row4Title', { defaultValue: 'Targeted Pilot Launch & Business Case Validation' })}</h2>
              <p>
                {t('servicesDetails.pilotPrototyping.row4P1', { defaultValue: 'Deploy targeted pilot releases to a select user segment or test market. Track performance metrics, user adoption analytics, and operational feedback to quantify business value and establish a data-backed business case.' })}
              </p>
              <p>
                {t('servicesDetails.pilotPrototyping.row4P2', { defaultValue: 'With real-world pilot insights, executive sponsors gain clear ROI metrics to justify broader deployment and strategic digital transformation investments.' })}
              </p>`
  )
  replaceExact(f,
    `<div className="pp-section-header reveal">
            <h2>Our Pilot Engineering Principles</h2>
            <p>Guiding principles that turn technical uncertainty into predictable business success.</p>
          </div>`,
    `<div className="pp-section-header reveal">
            <h2>{t('servicesDetails.pilotPrototyping.pillarsTitle', { defaultValue: 'Our Pilot Engineering Principles' })}</h2>
            <p>{t('servicesDetails.pilotPrototyping.pillarsSub', { defaultValue: 'Guiding principles that turn technical uncertainty into predictable business success.' })}</p>
          </div>`
  )
  replaceExact(f,
    `<h3>PoC &amp; MVP Prototyping</h3>
              <p>Deliver functional prototypes rapidly to validate value propositions early in the lifecycle.</p>`,
    `<h3>{t('servicesDetails.pilotPrototyping.pillar1Title', { defaultValue: 'PoC & MVP Prototyping' })}</h3>
              <p>{t('servicesDetails.pilotPrototyping.pillar1Desc', { defaultValue: 'Deliver functional prototypes rapidly to validate value propositions early in the lifecycle.' })}</p>`
  )
  replaceExact(f,
    `<h3>Feasibility &amp; Validation</h3>
              <p>Verify API compatibility, throughput thresholds, and compliance constraints in sandbox environments.</p>`,
    `<h3>{t('servicesDetails.pilotPrototyping.pillar2Title', { defaultValue: 'Feasibility & Validation' })}</h3>
              <p>{t('servicesDetails.pilotPrototyping.pillar2Desc', { defaultValue: 'Verify API compatibility, throughput thresholds, and compliance constraints in sandbox environments.' })}</p>`
  )
  replaceExact(f,
    `<h3>Scalability Assessment</h3>
              <p>Simulate production load to establish capacity limits and determine cloud architecture sizing.</p>`,
    `<h3>{t('servicesDetails.pilotPrototyping.pillar3Title', { defaultValue: 'Scalability Assessment' })}</h3>
              <p>{t('servicesDetails.pilotPrototyping.pillar3Desc', { defaultValue: 'Simulate production load to establish capacity limits and determine cloud architecture sizing.' })}</p>`
  )
  replaceExact(f,
    `<h3>Business Case Validation</h3>
              <p>Quantify tangible ROI and productivity metrics to support enterprise-wide rollout decisions.</p>`,
    `<h3>{t('servicesDetails.pilotPrototyping.pillar4Title', { defaultValue: 'Business Case Validation' })}</h3>
              <p>{t('servicesDetails.pilotPrototyping.pillar4Desc', { defaultValue: 'Quantify tangible ROI and productivity metrics to support enterprise-wide rollout decisions.' })}</p>`
  )
  replaceExact(f,
    `<div className="pp-cta-box reveal">
            <h2>Ready to validate your next digital solution?</h2>
            <p>
              Connect with our solution engineering team to explore your project requirements, build a prototype, and test feasibility with zero risk.
            </p>
            <button type="button" className="pp-btn-primary" onClick={handleBookConsultation}>
              Book a PoC Consultation`,
    `<div className="pp-cta-box reveal">
            <h2>{t('servicesDetails.pilotPrototyping.ctaTitle', { defaultValue: 'Ready to validate your next digital solution?' })}</h2>
            <p>
              {t('servicesDetails.pilotPrototyping.ctaSub', { defaultValue: 'Connect with our solution engineering team to explore your project requirements, build a prototype, and test feasibility with zero risk.' })}
            </p>
            <button type="button" className="pp-btn-primary" onClick={handleBookConsultation}>
              {t('servicesDetails.pilotPrototyping.ctaButton', { defaultValue: 'Book a PoC Consultation' })}`
  )
}

console.log('--- Wiring SolutionEngineeringPage.jsx ---')
{
  const f = 'src/pages/SolutionEngineeringPage.jsx'
  replaceExact(f,
    `<span className="se-eyebrow">TAILORED FUNCTIONALITY</span>
          <h2>Bespoke Features Built for Your Workflow</h2>
          <p>
            Standard enterprise software often falls short of meeting specialized business needs. Our custom engineering team develops bespoke application modules, custom business rules, and specialized extensions tailored to your operations.
          </p>
          <p>
            From custom CRM and ERP enhancements to specialized operational portals, we build features that seamlessly align with your team's exact workflow patterns.
          </p>`,
    `<span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row1Eyebrow', { defaultValue: 'TAILORED FUNCTIONALITY' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row1Title', { defaultValue: 'Bespoke Features Built for Your Workflow' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row1P1', { defaultValue: 'Standard enterprise software often falls short of meeting specialized business needs. Our custom engineering team develops bespoke application modules, custom business rules, and specialized extensions tailored to your operations.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row1P2', { defaultValue: "From custom CRM and ERP enhancements to specialized operational portals, we build features that seamlessly align with your team's exact workflow patterns." })}
          </p>`
  )
  replaceExact(f,
    `<span className="se-eyebrow">ENTERPRISE SYSTEM INTEGRATION</span>
          <h2>Platform Configuration &amp; API Development</h2>
          <p>
            Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.
          </p>
          <p>
            Whether integrating third-party SaaS tools or extending proprietary on-premise platforms, our integration architectures prioritize data integrity, throughput, and zero downtime.
          </p>`,
    `<span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row2Eyebrow', { defaultValue: 'ENTERPRISE SYSTEM INTEGRATION' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row2Title', { defaultValue: 'Platform Configuration & API Development' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row2P1', { defaultValue: 'Connect disparate software systems into a unified digital ecosystem. We engineer custom REST and GraphQL APIs, webhook handlers, and enterprise message queues to ensure real-time data sync across all your platforms.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row2P2', { defaultValue: 'Whether integrating third-party SaaS tools or extending proprietary on-premise platforms, our integration architectures prioritize data integrity, throughput, and zero downtime.' })}
          </p>`
  )
  replaceExact(f,
    `<span className="se-eyebrow">UI/UX &amp; PERFORMANCE</span>
          <h2>UI/UX Enhancements &amp; Performance Optimization</h2>
          <p>
            Elevate legacy interfaces with modern, responsive user experiences designed for speed and clarity. We re-engineer frontends with intuitive design patterns, accessibility compliance, and streamlined interaction models.
          </p>
          <p>
            In parallel, our performance engineers optimize database queries, caching strategies, and frontend bundle sizes to deliver instantaneous response times across all devices.
          </p>`,
    `<span className="se-eyebrow">{t('servicesDetails.solutionEngineering.row3Eyebrow', { defaultValue: 'UI/UX & PERFORMANCE' })}</span>
          <h2>{t('servicesDetails.solutionEngineering.row3Title', { defaultValue: 'UI/UX Enhancements & Performance Optimization' })}</h2>
          <p>
            {t('servicesDetails.solutionEngineering.row3P1', { defaultValue: 'Elevate legacy interfaces with modern, responsive user experiences designed for speed and clarity. We re-engineer frontends with intuitive design patterns, accessibility compliance, and streamlined interaction models.' })}
          </p>
          <p>
            {t('servicesDetails.solutionEngineering.row3P2', { defaultValue: 'In parallel, our performance engineers optimize database queries, caching strategies, and frontend bundle sizes to deliver instantaneous response times across all devices.' })}
          </p>`
  )
  replaceExact(f,
    `<div className="se-section-header">
            <span className="se-eyebrow">CORE CAPABILITIES</span>
            <h2>Engineered to Your Exact Specifications</h2>
            <p>Enterprise-grade customization methodologies built to scale seamlessly.</p>
          </div>`,
    `<div className="se-section-header">
            <span className="se-eyebrow">{t('services.coreCapabilities', { defaultValue: 'CORE CAPABILITIES' })}</span>
            <h2>{t('servicesDetails.solutionEngineering.pillarsTitle', { defaultValue: 'Engineered to Your Exact Specifications' })}</h2>
            <p>{t('servicesDetails.solutionEngineering.pillarsSub', { defaultValue: 'Enterprise-grade customization methodologies built to scale seamlessly.' })}</p>
          </div>`
  )
  replaceExact(f,
    `<h3>Custom Workflows &amp; Extensions</h3>
              <p>Tailored application logic and automated state machines configured specifically around your internal operational rules.</p>`,
    `<h3>{t('servicesDetails.solutionEngineering.pillar1Title', { defaultValue: 'Custom Workflows & Extensions' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar1Desc', { defaultValue: 'Tailored application logic and automated state machines configured specifically around your internal operational rules.' })}</p>`
  )
  replaceExact(f,
    `<h3>API &amp; System Integration</h3>
              <p>Secure, authenticated data bridges connecting proprietary backends, ERP suites, payment gateways, and cloud services.</p>`,
    `<h3>{t('servicesDetails.solutionEngineering.pillar2Title', { defaultValue: 'API & System Integration' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar2Desc', { defaultValue: 'Secure, authenticated data bridges connecting proprietary backends, ERP suites, payment gateways, and cloud services.' })}</p>`
  )
  replaceExact(f,
    `<h3>Platform Configuration</h3>
              <p>Deep architectural adaptations that modify enterprise software without breaking upgrade paths or vendor support agreements.</p>`,
    `<h3>{t('servicesDetails.solutionEngineering.pillar3Title', { defaultValue: 'Platform Configuration' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar3Desc', { defaultValue: 'Deep architectural adaptations that modify enterprise software without breaking upgrade paths or vendor support agreements.' })}</p>`
  )
  replaceExact(f,
    `<h3>Performance Optimization</h3>
              <p>Aggressive query profiling, memory leak elimination, and edge CDN distribution for sub-second page loads.</p>`,
    `<h3>{t('servicesDetails.solutionEngineering.pillar4Title', { defaultValue: 'Performance Optimization' })}</h3>
              <p>{t('servicesDetails.solutionEngineering.pillar4Desc', { defaultValue: 'Aggressive query profiling, memory leak elimination, and edge CDN distribution for sub-second page loads.' })}</p>`
  )
  replaceExact(f,
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
}

console.log('--- Wiring CentreOfExcellencePage.jsx ---')
{
  const f = 'src/pages/CentreOfExcellencePage.jsx'
  replaceExact(f,
    `<div className="coe-stat-label">Enterprise Uptime</div>`,
    `<div className="coe-stat-label">{t('servicesDetails.centreOfExcellence.uptimeLabel', { defaultValue: 'Enterprise Uptime' })}</div>`
  )
  replaceExact(f,
    `<div className="coe-stat-label">Engineers & Architects</div>`,
    `<div className="coe-stat-label">{t('servicesDetails.centreOfExcellence.engineersLabel', { defaultValue: 'Engineers & Architects' })}</div>`
  )
  replaceExact(f,
    `<div className="coe-stat-label">AI & Cloud Deployments</div>`,
    `<div className="coe-stat-label">{t('servicesDetails.centreOfExcellence.deploymentsLabel', { defaultValue: 'AI & Cloud Deployments' })}</div>`
  )
  replaceExact(f,
    `<div className="coe-stat-label">Client Satisfaction</div>`,
    `<div className="coe-stat-label">{t('servicesDetails.centreOfExcellence.satisfactionLabel', { defaultValue: 'Client Satisfaction' })}</div>`
  )
  replaceExact(f,
    `<div className="coe-copy">
            <div className="coe-eyebrow">Pillar 01 — Engineering Standard</div>
            <h2>High-Performance Software Engineering</h2>
            <p>
              Our Centre of Excellence establishes standardized design patterns, rigorous automated testing, and zero-defect code review practices that accelerate time-to-market while keeping technical debt to zero.
            </p>`,
    `<div className="coe-copy">
            <div className="coe-eyebrow">{t('servicesDetails.centreOfExcellence.row1Eyebrow', { defaultValue: 'Pillar 01 — Engineering Standard' })}</div>
            <h2>{t('servicesDetails.centreOfExcellence.row1Title', { defaultValue: 'High-Performance Software Engineering' })}</h2>
            <p>
              {t('servicesDetails.centreOfExcellence.row1P1', { defaultValue: 'Our Centre of Excellence establishes standardized design patterns, rigorous automated testing, and zero-defect code review practices that accelerate time-to-market while keeping technical debt to zero.' })}
            </p>`
  )
  replaceExact(f,
    `<div className="coe-copy">
            <div className="coe-eyebrow">Pillar 02 — R&D Innovation</div>
            <h2>AI Innovation Lab & Emerging Technology</h2>
            <p>
              We experiment with state-of-the-art machine learning models, custom AI agents, and intelligent workflow automation to build next-generation enterprise products.
            </p>`,
    `<div className="coe-copy">
            <div className="coe-eyebrow">{t('servicesDetails.centreOfExcellence.row2Eyebrow', { defaultValue: 'Pillar 02 — R&D Innovation' })}</div>
            <h2>{t('servicesDetails.centreOfExcellence.row2Title', { defaultValue: 'AI Innovation Lab & Emerging Technology' })}</h2>
            <p>
              {t('servicesDetails.centreOfExcellence.row2P1', { defaultValue: 'We experiment with state-of-the-art machine learning models, custom AI agents, and intelligent workflow automation to build next-generation enterprise products.' })}
            </p>`
  )
  replaceExact(f,
    `<div className="coe-copy">
            <div className="coe-eyebrow">Pillar 03 — Infrastructure</div>
            <h2>Enterprise Cloud Architecture & Zero-Trust Security</h2>
            <p>
              We design and manage resilient multi-cloud environments built on zero-trust security frameworks, ensuring your data remains protected against evolving global cyber threats.
            </p>`,
    `<div className="coe-copy">
            <div className="coe-eyebrow">{t('servicesDetails.centreOfExcellence.row3Eyebrow', { defaultValue: 'Pillar 03 — Infrastructure' })}</div>
            <h2>{t('servicesDetails.centreOfExcellence.row3Title', { defaultValue: 'Enterprise Cloud Architecture & Zero-Trust Security' })}</h2>
            <p>
              {t('servicesDetails.centreOfExcellence.row3P1', { defaultValue: 'We design and manage resilient multi-cloud environments built on zero-trust security frameworks, ensuring your data remains protected against evolving global cyber threats.' })}
            </p>`
  )
  replaceExact(f,
    `<div className="coe-section-header">
            <div className="coe-eyebrow">Comprehensive Capabilities</div>
            <h2>Our Core Excellence Frameworks</h2>
            <p>Systematized development playbooks powering mission-critical platforms.</p>
          </div>`,
    `<div className="coe-section-header">
            <div className="coe-eyebrow">{t('services.coreCapabilities', { defaultValue: 'Comprehensive Capabilities' })}</div>
            <h2>{t('servicesDetails.centreOfExcellence.pillarsTitle', { defaultValue: 'Our Core Excellence Frameworks' })}</h2>
            <p>{t('servicesDetails.centreOfExcellence.pillarsSub', { defaultValue: 'Systematized development playbooks powering mission-critical platforms.' })}</p>
          </div>`
  )
  replaceExact(f,
    `<h2>Elevate Your Engineering Standard</h2>
            <p>
              Partner with our Centre of Excellence to build scalable, resilient, and future-proof digital platforms.
            </p>
            <Link to="/book-consultation" className="coe-btn-primary">
              Initiate CoE Assessment`,
    `<h2>{t('servicesDetails.centreOfExcellence.ctaTitle', { defaultValue: 'Elevate Your Engineering Standard' })}</h2>
            <p>
              {t('servicesDetails.centreOfExcellence.ctaSub', { defaultValue: 'Partner with our Centre of Excellence to build scalable, resilient, and future-proof digital platforms.' })}
            </p>
            <Link to="/book-consultation" className="coe-btn-primary">
              {t('servicesDetails.centreOfExcellence.ctaButton', { defaultValue: 'Initiate CoE Assessment' })}`
  )
}

console.log('All remaining service pages have been successfully wired to t()!')
