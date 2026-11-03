import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { TECHNOLOGIES_DATA } from '../src/data/technologiesData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

console.log('Extracting canonical keys for Technologies, Services, and Perspectives...')

// 1. Technologies Data
if (!en.technologiesDetails) en.technologiesDetails = {}
for (const tech of TECHNOLOGIES_DATA) {
  en.technologiesDetails[tech.id] = {
    title: tech.title,
    tagline: tech.tagline,
    heroBadge: tech.heroBadge,
    overview: tech.overview,
    transformation: tech.transformation,
    capabilities: tech.capabilities,
    lifecycleSteps: tech.lifecycleSteps,
    benefits: tech.benefits,
    security: tech.security,
    ctaHeadline: tech.ctaHeadline || 'Ready to transform your technology environment?',
    ctaSub: tech.ctaSub || 'Contact our team to discuss your requirements and build the right solution for your organization.',
  }
}

// 2. Technologies Common Details Strings
en.technologiesCommon = {
  overviewEyebrow: 'Enterprise Overview',
  overviewTitle: 'Intelligent Technology for Measurable Outcomes',
  transformationEyebrow: 'Operational Transformation',
  transformationTitle: 'Transforming Business Through Intelligent Workflows',
  deliveryEyebrow: 'Structured Delivery Approach',
  deliveryTitle: 'End-to-End Execution & Continuous Optimization',
  deliveryIntro: 'Our proven implementation approach follows a rigorous delivery lifecycle:',
  deliveryOutro: 'This structured sequence ensures tight alignment with business goals, robust security posture, and measurable ROI benchmarks at every phase.',
  securityEyebrow: 'Security & Governance',
  securityTitle: 'Enterprise-Grade Reliability & Compliance Safeguards',
  securityOutro: 'We embed strict role-based access control, automated vulnerability scanning, model governance, and multi-tier encryption to ensure your production environment remains resilient and fully compliant.',
  capabilitiesTitle: 'Core Technology Capabilities',
  capabilitiesSub: 'Comprehensive technical competencies engineered to scale your digital operations.',
  bookDiscovery: 'Book Technology Discovery',
  exploreAll: 'Explore All Technologies',
  bookConsultation: 'Book a Consultation',
  coreCapabilities: 'Core Capabilities',
}

console.log('Technologies canonical keys extracted: 8 technologies + common strings.')
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n', 'utf8')
console.log('Saved updated en/translation.json')
