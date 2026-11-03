import fs from 'fs'

let content = fs.readFileSync('src/pages/CustomDevelopmentPage.jsx', 'utf8')

// 1. Core capabilities array
content = content.replace(
  `  const coreCapabilities = [
    'Requirements Engineering',
    'Solution Architecture',
    'Application Development',
    'API Integration',
    'Quality Assurance',
    'DevOps',
    'Deployment',
    'Support & Maintenance',
  ]`,
  `  const coreCapabilities = t('servicesDetails.customDevelopment.coreCapabilities', {
    returnObjects: true,
    defaultValue: [
      'Requirements Engineering',
      'Solution Architecture',
      'Application Development',
      'API Integration',
      'Quality Assurance',
      'DevOps',
      'Deployment',
      'Support & Maintenance',
    ]
  })`
)

// 2. Core Capabilities label
content = content.replace(
  `<div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#2dd4bf', fontWeight: '700' }}>
              Core Capabilities
            </div>`,
  `<div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#2dd4bf', fontWeight: '700' }}>
              {t('services.coreCapabilities', { defaultValue: 'Core Capabilities' })}
            </div>`
)

// 3. Row 1
content = content.replace(
  `<div className="cd-eyebrow">Full Lifecycle Delivery</div>
              <h2>End-to-End Development from Requirements to Scale</h2>
              <p>
                Every new digital initiative starts with unique requirements, operational workflows, and strategic objectives that cannot be met by one-size-fits-all software. We specialize in building custom, high-performance software systems completely from scratch.
              </p>
              <p>
                From initial requirements discovery and technical architecture design to agile sprint development, API ecosystem integration, robust testing pipelines, and automated cloud deployments, our senior engineering teams take full ownership of your product lifecycle.
              </p>`,
  `<div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row1Eyebrow', { defaultValue: 'Full Lifecycle Delivery' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row1Title', { defaultValue: 'End-to-End Development from Requirements to Scale' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row1P1', { defaultValue: 'Every new digital initiative starts with unique requirements, operational workflows, and strategic objectives that cannot be met by one-size-fits-all software. We specialize in building custom, high-performance software systems completely from scratch.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row1P2', { defaultValue: 'From initial requirements discovery and technical architecture design to agile sprint development, API ecosystem integration, robust testing pipelines, and automated cloud deployments, our senior engineering teams take full ownership of your product lifecycle.' })}
              </p>`
)

// 4. Row 2
content = content.replace(
  `<div className="cd-eyebrow">Solution Architecture &amp; Engineering</div>
              <h2>Scalable Systems Built for Enterprise Growth</h2>
              <p>
                We design resilient software architectures tailored to withstand heavy production loads. From modular microservices and event-driven backends to high-throughput data streams and GraphQL/REST APIs, we build platforms that scale effortlessly.
              </p>
              <p>
                By establishing clean, modular codebases paired with automated testing and continuous security compliance, we ensure your software foundation is maintainable, auditable, and ready for long-term evolution.
              </p>`,
  `<div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row2Eyebrow', { defaultValue: 'Solution Architecture & Engineering' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row2Title', { defaultValue: 'Scalable Systems Built for Enterprise Growth' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row2P1', { defaultValue: 'We design resilient software architectures tailored to withstand heavy production loads. From modular microservices and event-driven backends to high-throughput data streams and GraphQL/REST APIs, we build platforms that scale effortlessly.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row2P2', { defaultValue: 'By establishing clean, modular codebases paired with automated testing and continuous security compliance, we ensure your software foundation is maintainable, auditable, and ready for long-term evolution.' })}
              </p>`
)

// 5. Row 3
content = content.replace(
  `<div className="cd-eyebrow">Quality Assurance &amp; DevOps</div>
              <h2>Agile Delivery with Automated Pipelines</h2>
              <p>
                Our delivery model embeds automated unit, integration, and end-to-end regression testing alongside containerized CI/CD workflows (Docker, Kubernetes, AWS/Azure/GCP).
              </p>
              <p>
                With transparent sprint demos, real-time observability, and milestone-driven velocity, we ensure rapid time-to-market without compromising security, stability, or user experience.
              </p>`,
  `<div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row3Eyebrow', { defaultValue: 'Quality Assurance & DevOps' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row3Title', { defaultValue: 'Agile Delivery with Automated Pipelines' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row3P1', { defaultValue: 'Our delivery model embeds automated unit, integration, and end-to-end regression testing alongside containerized CI/CD workflows (Docker, Kubernetes, AWS/Azure/GCP).' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row3P2', { defaultValue: 'With transparent sprint demos, real-time observability, and milestone-driven velocity, we ensure rapid time-to-market without compromising security, stability, or user experience.' })}
              </p>`
)

// 6. Row 4
content = content.replace(
  `<div className="cd-eyebrow">Deployment &amp; Support</div>
              <h2>Reliable 24/7 Operations and Long-Term Evolution</h2>
              <p>
                Going live is just the beginning. We provide proactive monitoring, SLA-backed maintenance, cloud infrastructure optimization, performance tuning, and ongoing feature rollouts.
              </p>
              <p>
                Our engineering team acts as a natural extension of your organization, ensuring zero downtime and continuous technological superiority in your market.
              </p>`,
  `<div className="cd-eyebrow">{t('servicesDetails.customDevelopment.row4Eyebrow', { defaultValue: 'Deployment & Support' })}</div>
              <h2>{t('servicesDetails.customDevelopment.row4Title', { defaultValue: 'Reliable 24/7 Operations and Long-Term Evolution' })}</h2>
              <p>
                {t('servicesDetails.customDevelopment.row4P1', { defaultValue: 'Going live is just the beginning. We provide proactive monitoring, SLA-backed maintenance, cloud infrastructure optimization, performance tuning, and ongoing feature rollouts.' })}
              </p>
              <p>
                {t('servicesDetails.customDevelopment.row4P2', { defaultValue: 'Our engineering team acts as a natural extension of your organization, ensuring zero downtime and continuous technological superiority in your market.' })}
              </p>`
)

// 7. Pillars section header
content = content.replace(
  `<div className="cd-section-header reveal">
            <h2>Core Capabilities</h2>
            <p>Complete full-stack capabilities engineered to take your ideas from zero to production.</p>
          </div>`,
  `<div className="cd-section-header reveal">
            <h2>{t('servicesDetails.customDevelopment.pillarsTitle', { defaultValue: 'Core Capabilities' })}</h2>
            <p>{t('servicesDetails.customDevelopment.pillarsSub', { defaultValue: 'Complete full-stack capabilities engineered to take your ideas from zero to production.' })}</p>
          </div>`
)

// 8. Pillars cards 1-8
content = content.replace(
  `<h3>Requirements Engineering</h3>
              <p>Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar1Title', { defaultValue: 'Requirements Engineering' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar1Desc', { defaultValue: 'Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.' })}</p>`
)
content = content.replace(
  `<h3>Solution Architecture</h3>
              <p>Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar2Title', { defaultValue: 'Solution Architecture' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar2Desc', { defaultValue: 'Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.' })}</p>`
)
content = content.replace(
  `<h3>Application Development</h3>
              <p>Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar3Title', { defaultValue: 'Application Development' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar3Desc', { defaultValue: 'Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.' })}</p>`
)
content = content.replace(
  `<h3>API Integration</h3>
              <p>High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar4Title', { defaultValue: 'API Integration' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar4Desc', { defaultValue: 'High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.' })}</p>`
)
content = content.replace(
  `<h3>Quality Assurance</h3>
              <p>Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar5Title', { defaultValue: 'Quality Assurance' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar5Desc', { defaultValue: 'Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.' })}</p>`
)
content = content.replace(
  `<h3>DevOps &amp; Deployment</h3>
              <p>Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar6Title', { defaultValue: 'DevOps & Deployment' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar6Desc', { defaultValue: 'Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.' })}</p>`
)
content = content.replace(
  `<h3>Support &amp; Maintenance</h3>
              <p>24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar7Title', { defaultValue: 'Support & Maintenance' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar7Desc', { defaultValue: '24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.' })}</p>`
)
content = content.replace(
  `<h3>Continuous Innovation</h3>
              <p>Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.</p>`,
  `<h3>{t('servicesDetails.customDevelopment.pillar8Title', { defaultValue: 'Continuous Innovation' })}</h3>
              <p>{t('servicesDetails.customDevelopment.pillar8Desc', { defaultValue: 'Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.' })}</p>`
)

// 9. CTA
content = content.replace(
  `<h2>Ready to Build Your Solution from Inception to Deployment?</h2>
            <p>
              Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.
            </p>
            <button type="button" className="cd-btn-primary" onClick={handleBookConsultation}>
              Book a Solution Consultation`,
  `<h2>{t('servicesDetails.customDevelopment.ctaTitle', { defaultValue: 'Ready to Build Your Solution from Inception to Deployment?' })}</h2>
            <p>
              {t('servicesDetails.customDevelopment.ctaSub', { defaultValue: 'Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.' })}
            </p>
            <button type="button" className="cd-btn-primary" onClick={handleBookConsultation}>
              {t('servicesDetails.customDevelopment.ctaButton', { defaultValue: 'Book a Solution Consultation' })}`
)

fs.writeFileSync('src/pages/CustomDevelopmentPage.jsx', content, 'utf8')
console.log('CustomDevelopmentPage.jsx successfully updated with t() hooks!')
