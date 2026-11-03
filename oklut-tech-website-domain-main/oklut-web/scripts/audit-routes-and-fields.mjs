import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SUPPORTED_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const localesDir = path.join(rootDir, 'src/i18n/locales')

// 1. Audit Routes
const routes = [
  { path: '/', name: 'Homepage', file: 'src/App.jsx' },
  { path: '/about', name: 'About Us', file: 'src/App.jsx' },
  { path: '/products', name: 'Products Catalog', file: 'src/pages/ProductsPage.jsx' },
  { path: '/perspectives', name: 'Perspectives Hub', file: 'src/App.jsx' },
  { path: '/perspectives/business-transformation', name: 'Perspective: Business Transformation', file: 'src/pages/perspectives/BusinessTransformationPerspective.jsx' },
  { path: '/perspectives/artificial-intelligence', name: 'Perspective: Artificial Intelligence', file: 'src/pages/perspectives/ArtificialIntelligencePerspective.jsx' },
  { path: '/perspectives/modern-erp', name: 'Perspective: Modern ERP', file: 'src/pages/perspectives/ModernERPPerspective.jsx' },
  { path: '/perspectives/cybersecurity', name: 'Perspective: Cybersecurity', file: 'src/pages/perspectives/CybersecurityPerspective.jsx' },
  { path: '/perspectives/cloud-modernization', name: 'Perspective: Cloud Modernization', file: 'src/pages/perspectives/CloudModernizationPerspective.jsx' },
  { path: '/technologies/:id', name: 'Technologies Detail (8 technologies)', file: 'src/pages/technologies/TechnologyDetailPage.jsx' },
  { path: '/services/digital-transformation', name: 'Service: Digital Transformation', file: 'src/pages/DigitalTransformationPage.jsx' },
  { path: '/services/inception-to-deployment', name: 'Service: Inception to Deployment', file: 'src/pages/CustomDevelopmentPage.jsx' },
  { path: '/services/business-process-automation', name: 'Service: Business Process Automation', file: 'src/pages/ProcessAutomationPage.jsx' },
  { path: '/services/center-of-excellence', name: 'Service: Center of Excellence', file: 'src/pages/CentreOfExcellencePage.jsx' },
  { path: '/services/custom-development-customization', name: 'Service: Custom Development', file: 'src/pages/SolutionEngineeringPage.jsx' },
  { path: '/services/end-to-end-solution-framework', name: 'Service: End to End Solutions', file: 'src/pages/EndToEndSolutionsPage.jsx' },
  { path: '/services/migration-modernization', name: 'Service: Migration & Modernization', file: 'src/pages/MigrationServicesPage.jsx' },
  { path: '/services/poc-pilot-implementation', name: 'Service: PoC & Pilot', file: 'src/pages/PilotPrototypingPage.jsx' },
  { path: '/services/shared-services-managed-operations', name: 'Service: Shared Services', file: 'src/pages/SharedServicesPage.jsx' },
  { path: '/contact', name: 'Contact Us', file: 'src/App.jsx' },
  { path: '/careers', name: 'Careers (EXEMPT - English Only)', file: 'src/pages/CareersPage.jsx' }
]

console.log('='.repeat(80))
console.log('                  OKLUT WEBSITE MULTILINGUAL AUDIT REPORT')
console.log('='.repeat(80))

const routeAudit = []
for (const r of routes) {
  const filePath = path.join(rootDir, r.file)
  if (!fs.existsSync(filePath)) {
    routeAudit.push({ route: r.path, name: r.name, exists: false })
    continue
  }
  const content = fs.readFileSync(filePath, 'utf8')
  const usesTranslation = content.includes('useTranslation')
  const tCalls = (content.match(/t\(/g) || []).length
  routeAudit.push({
    route: r.path,
    name: r.name,
    file: r.file,
    usesTranslation,
    tCalls
  })
}

console.log('\n--- ROUTE CODE AUDIT ---')
console.table(routeAudit)

// 2. Audit Locales
const enPath = path.join(localesDir, 'en/translation.json')
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'))

function countLeafKeys(obj) {
  let count = 0
  for (const k of Object.keys(obj)) {
    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      count += countLeafKeys(obj[k])
    } else {
      count++
    }
  }
  return count
}

const enTotalKeys = countLeafKeys(enData)
console.log(`\nCanonical English (en) Total Keys: ${enTotalKeys}`)

const langAudit = []
let completeCount = 0
let partialCount = 0

for (const lang of SUPPORTED_LANGUAGES) {
  const p = path.join(localesDir, lang.code, 'translation.json')
  if (!fs.existsSync(p)) {
    langAudit.push({ code: lang.code, name: lang.name, status: 'MISSING', totalKeys: 0, pct: '0%' })
    continue
  }
  const d = JSON.parse(fs.readFileSync(p, 'utf8'))
  const total = countLeafKeys(d)
  const pct = Math.round((total / enTotalKeys) * 100)
  const hasServicesDetails = !!d.servicesDetails
  const hasTechDetails = !!d.technologiesDetails
  const hasPerspectivesArticles = !!d.perspectivesArticles
  const isComplete = total >= 1300 && hasServicesDetails && hasTechDetails && hasPerspectivesArticles

  if (isComplete) completeCount++
  else partialCount++

  langAudit.push({
    code: lang.code,
    name: lang.name,
    totalKeys: total,
    pct: pct + '%',
    hasServicesDetails,
    hasTechDetails,
    hasPerspectivesArticles,
    status: isComplete ? 'COMPLETE' : 'PARTIAL (NEEDS SYNC)'
  })
}

console.log(`\nTotal Registered Languages: ${SUPPORTED_LANGUAGES.length}`)
console.log(`Languages Complete (>= 1300 keys): ${completeCount}`)
console.log(`Languages Partial (< 1300 keys): ${partialCount}`)

console.log('\n--- DETAILED LOCALE AUDIT ---')
console.table(langAudit)
