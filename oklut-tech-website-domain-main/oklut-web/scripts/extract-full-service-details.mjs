import fs from 'fs'

// We will inspect each service page and build a clean dictionary of all text
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.servicesDetails = en.servicesDetails || {}

// Let's refine CustomDevelopmentPage
en.servicesDetails.customDevelopment = {
  eyebrow: "End-to-End Digital Engineering",
  titlePart1: "Inception To",
  titlePart2: "Deployment",
  description: "End-to-end development of new digital solutions from business requirements and solution architecture through development, integration, testing, deployment, and ongoing support.",
  bookConsultation: "Book a Consultation",
  exploreEngineering: "Explore Solution Engineering",
  coreCapabilitiesLabel: "Core Capabilities",
  coreCapabilities: [
    "Requirements Engineering",
    "Solution Architecture",
    "Application Development",
    "API Integration",
    "Quality Assurance",
    "DevOps",
    "Deployment",
    "Support & Maintenance"
  ],
  row1Eyebrow: "Full Lifecycle Delivery",
  row1Title: "End-to-End Development from Requirements to Scale",
  row1P1: "Every new digital initiative starts with unique requirements, operational workflows, and strategic objectives that cannot be met by one-size-fits-all software. We specialize in building custom, high-performance software systems completely from scratch.",
  row1P2: "From initial requirements discovery and technical architecture design to agile sprint development, API ecosystem integration, robust testing pipelines, and automated cloud deployments, our senior engineering teams take full ownership of your product lifecycle.",
  row2Eyebrow: "Solution Architecture & Engineering",
  row2Title: "Scalable Systems Built for Enterprise Growth",
  row2P1: "We design resilient software architectures tailored to withstand heavy production loads. From modular microservices and event-driven backends to high-throughput data streams and GraphQL/REST APIs, we build platforms that scale effortlessly.",
  row2P2: "By establishing clean, modular codebases paired with automated testing and continuous security compliance, we ensure your software foundation is maintainable, auditable, and ready for long-term evolution.",
  row3Eyebrow: "Quality Assurance & DevOps",
  row3Title: "Agile Delivery with Automated Pipelines",
  row3P1: "Our delivery model embeds automated unit, integration, and end-to-end regression testing alongside containerized CI/CD workflows (Docker, Kubernetes, AWS/Azure/GCP).",
  row3P2: "With transparent sprint demos, real-time observability, and milestone-driven velocity, we ensure rapid time-to-market without compromising security, stability, or user experience.",
  row4Eyebrow: "Deployment & Support",
  row4Title: "Reliable 24/7 Operations and Long-Term Evolution",
  row4P1: "Going live is just the beginning. We provide proactive monitoring, SLA-backed maintenance, cloud infrastructure optimization, performance tuning, and ongoing feature rollouts.",
  row4P2: "Our engineering team acts as a natural extension of your organization, ensuring zero downtime and continuous technological superiority in your market.",
  pillarsTitle: "Core Capabilities",
  pillarsSub: "Complete full-stack capabilities engineered to take your ideas from zero to production.",
  pillar1Title: "Requirements Engineering",
  pillar1Desc: "Deep-dive business analysis, functional specifications, and user journey mapping to define exact solution boundaries.",
  pillar2Title: "Solution Architecture",
  pillar2Desc: "Scalable cloud-native architectures, database modeling, microservices design, and zero-trust security foundations.",
  pillar3Title: "Application Development",
  pillar3Desc: "Modern full-stack web and mobile applications engineered with clean code, type-safety, and reactive UI standards.",
  pillar4Title: "API Integration",
  pillar4Desc: "High-throughput REST/GraphQL APIs, webhook orchestrations, payment gateways, and seamless third-party ERP/CRM sync.",
  pillar5Title: "Quality Assurance",
  pillar5Desc: "Rigorous test automation, load/stress testing, vulnerability scans, and regression test suites.",
  pillar6Title: "DevOps & Deployment",
  pillar6Desc: "Automated CI/CD pipelines, container orchestration (Docker/K8s), infrastructure as code, and zero-downtime releases.",
  pillar7Title: "Support & Maintenance",
  pillar7Desc: "24/7 proactive monitoring, health telemetry, performance audits, security patching, and ongoing SLA maintenance.",
  pillar8Title: "Continuous Innovation",
  pillar8Desc: "Regular feature velocity, data analytics integration, AI enhancement, and architectural modernizations.",
  ctaTitle: "Ready to Build Your Solution from Inception to Deployment?",
  ctaSub: "Partner with Oklut Technologies to architect, engineer, and deploy your custom digital platform from business requirements to production reality.",
  ctaButton: "Book a Solution Consultation"
}

// Write back to translation.json
fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')
console.log('Updated CustomDevelopment details in canonical en/translation.json')
