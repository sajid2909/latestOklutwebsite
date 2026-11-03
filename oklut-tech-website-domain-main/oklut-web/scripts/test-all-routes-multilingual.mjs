import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SUPPORTED_LANGUAGES, RTL_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

function loadLocale(code) {
  const filePath = path.join(localesDir, code, 'translation.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function resolveKey(obj, pathStr) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.')
  let curr = obj
  for (const p of parts) {
    if (curr === undefined || curr === null) return undefined
    curr = curr[p]
  }
  return curr
}

// Complete set of all 62 declared routes from App.jsx
const ROUTE_DEFINITIONS = [
  // Primary Core Routes (10)
  { path: '/', key: 'hero.title', desc: 'Homepage' },
  { path: '/about', key: 'about.title', desc: 'About Page' },
  { path: '/services', key: 'services.title', desc: 'Services Index' },
  { path: '/technologies', key: 'technologies.title', desc: 'Technologies Index' },
  { path: '/contact', key: 'contact.title', desc: 'Contact' },
  { path: '/perspectives', key: 'insights.title', desc: 'Perspectives Index' },
  { path: '/careers', key: 'careers.title', desc: 'Careers' },
  { path: '/book-consultation', key: 'consultation.title', desc: 'Book Consultation' },
  { path: '/privacy', key: 'privacy.title', desc: 'Privacy Policy' },
  { path: '/products', key: 'products.featured', desc: 'Products Page' },

  // Perspectives Canonical Articles (5)
  { path: '/perspectives/business-transformation', key: 'perspectivesArticles.businessTransformation.title', desc: 'Perspective: Business Transformation' },
  { path: '/perspectives/artificial-intelligence', key: 'perspectivesArticles.artificialIntelligence.title', desc: 'Perspective: Artificial Intelligence' },
  { path: '/perspectives/modern-erp', key: 'perspectivesArticles.modernErp.title', desc: 'Perspective: Modern ERP' },
  { path: '/perspectives/cybersecurity', key: 'perspectivesArticles.cybersecurity.title', desc: 'Perspective: Cybersecurity' },
  { path: '/perspectives/cloud-modernization', key: 'perspectivesArticles.cloudModernization.title', desc: 'Perspective: Cloud Modernization' },

  // Perspectives Legacy Aliases (5)
  { path: '/perspectives/retail-business-data-analytics', key: 'perspectivesArticles.businessTransformation.title', desc: 'Perspective Alias: Retail Analytics' },
  { path: '/perspectives/ai-reshaping-enterprise-applications', key: 'perspectivesArticles.artificialIntelligence.title', desc: 'Perspective Alias: AI Reshaping Enterprise' },
  { path: '/perspectives/accelerating-business-transformation-modern-erp', key: 'perspectivesArticles.modernErp.title', desc: 'Perspective Alias: Modern ERP Acceleration' },
  { path: '/perspectives/cyber-resilience-connected-enterprise', key: 'perspectivesArticles.cybersecurity.title', desc: 'Perspective Alias: Cyber Resilience' },
  { path: '/perspectives/legacy-application-cloud-modernization', key: 'perspectivesArticles.cloudModernization.title', desc: 'Perspective Alias: Legacy App Cloud Modernization' },

  // Primary Canonical Services (9)
  { path: '/services/inception-to-deployment', key: 'servicesDetails.customDevelopment.row1Title', desc: 'Service: Inception To Deployment' },
  { path: '/services/business-process-automation', key: 'servicesDetails.processAutomation.row1Title', desc: 'Service: Business Process Automation' },
  { path: '/services/centre-of-excellence', key: 'servicesDetails.centreOfExcellence.row1Title', desc: 'Service: Centre of Excellence' },
  { path: '/services/custom-development-customization', key: 'servicesDetails.solutionEngineering.row1Title', desc: 'Service: Custom Development & Customization' },
  { path: '/services/digital-transformation', key: 'servicesDetails.digitalTransformation.row1Title', desc: 'Service: Digital Transformation' },
  { path: '/services/end-to-end-solution-framework', key: 'servicesDetails.endToEndSolutions.row1Title', desc: 'Service: End-to-End Solution Framework' },
  { path: '/services/migration-modernization', key: 'servicesDetails.migrationServices.row1Title', desc: 'Service: Migration & Modernization' },
  { path: '/services/poc-pilot-implementation', key: 'servicesDetails.pilotPrototyping.row1Title', desc: 'Service: PoC & Pilot Implementation' },
  { path: '/services/shared-services-managed-operations', key: 'servicesDetails.sharedServices.row1Title', desc: 'Service: Shared Services & Managed Operations' },

  // Technology Detail Canonical Routes (8)
  { path: '/technologies/ai-robotics-solutions', key: 'technologiesDetails.ai-robotics-solutions.title', desc: 'Tech: AI & Robotics Solutions' },
  { path: '/technologies/business-automation-solutions', key: 'technologiesDetails.business-automation-solutions.title', desc: 'Tech: Business Automation Solutions' },
  { path: '/technologies/cloud-migration-solutions', key: 'technologiesDetails.cloud-migration-solutions.title', desc: 'Tech: Cloud Migration Solutions' },
  { path: '/technologies/data-center-solutions', key: 'technologiesDetails.data-center-solutions.title', desc: 'Tech: Data Center Solutions' },
  { path: '/technologies/cognitive-analytics-ai', key: 'technologiesDetails.cognitive-analytics-ai.title', desc: 'Tech: Cognitive Analytics & AI' },
  { path: '/technologies/information-reporting-systems', key: 'technologiesDetails.information-reporting-systems.title', desc: 'Tech: Information & Reporting Systems' },
  { path: '/technologies/managed-services', key: 'technologiesDetails.managed-services.title', desc: 'Tech: Managed Services' },
  { path: '/technologies/one-stop-technology-solutions', key: 'technologiesDetails.one-stop-technology-solutions.title', desc: 'Tech: One-Stop Technology Solutions' },

  // Service Aliases mapped to Technologies / Legacy (17)
  { path: '/services/ai-robotics', key: 'technologiesDetails.ai-robotics-solutions.title', desc: 'Service Alias: AI & Robotics' },
  { path: '/services/business-automation', key: 'technologiesDetails.business-automation-solutions.title', desc: 'Service Alias: Business Automation' },
  { path: '/services/cloud-migrations', key: 'technologiesDetails.cloud-migration-solutions.title', desc: 'Service Alias: Cloud Migrations' },
  { path: '/services/data-centers', key: 'technologiesDetails.data-center-solutions.title', desc: 'Service Alias: Data Centers' },
  { path: '/services/cognitive-analytics', key: 'technologiesDetails.cognitive-analytics-ai.title', desc: 'Service Alias: Cognitive Analytics' },
  { path: '/services/information-reporting', key: 'technologiesDetails.information-reporting-systems.title', desc: 'Service Alias: Information Reporting' },
  { path: '/services/information-reporting-systems', key: 'technologiesDetails.information-reporting-systems.title', desc: 'Service Alias: Information Reporting Systems' },
  { path: '/services/one-stop-solutions', key: 'technologiesDetails.one-stop-technology-solutions.title', desc: 'Service Alias: One-Stop Solutions' },
  { path: '/services/managed-services', key: 'technologiesDetails.managed-services.title', desc: 'Service Alias: Managed Services' },
  { path: '/services/build-from-scratch', key: 'servicesDetails.customDevelopment.row1Title', desc: 'Service Alias: Build From Scratch' },
  { path: '/services/center-of-excellence', key: 'servicesDetails.centreOfExcellence.row1Title', desc: 'Service Alias: Center of Excellence' },
  { path: '/services/custom-development', key: 'servicesDetails.customDevelopment.row1Title', desc: 'Service Alias: Custom Development' },
  { path: '/services/process-automation', key: 'servicesDetails.processAutomation.row1Title', desc: 'Service Alias: Process Automation' },
  { path: '/services/solution-engineering', key: 'servicesDetails.solutionEngineering.row1Title', desc: 'Service Alias: Solution Engineering' },
  { path: '/services/end-to-end-solutions', key: 'servicesDetails.endToEndSolutions.row1Title', desc: 'Service Alias: End-to-End Solutions' },
  { path: '/services/migration-services', key: 'servicesDetails.migrationServices.row1Title', desc: 'Service Alias: Migration Services' },
  { path: '/services/pilot-prototyping', key: 'servicesDetails.pilotPrototyping.row1Title', desc: 'Service Alias: Pilot Prototyping' },
  { path: '/services/shared-services', key: 'servicesDetails.sharedServices.row1Title', desc: 'Service Alias: Shared Services' },

  // Service Legacy Aliases (6)
  { path: '/services/pilot-prototyping-legacy', key: 'servicesDetails.pilotPrototyping.row1Title', desc: 'Service Legacy: Pilot Prototyping' },
  { path: '/services/solution-engineering-legacy', key: 'servicesDetails.solutionEngineering.row1Title', desc: 'Service Legacy: Solution Engineering' },
  { path: '/services/center-of-excellence-legacy', key: 'servicesDetails.centreOfExcellence.row1Title', desc: 'Service Legacy: Center of Excellence' },
  { path: '/services/digital-transformation-legacy', key: 'servicesDetails.digitalTransformation.row1Title', desc: 'Service Legacy: Digital Transformation' },
  { path: '/services/migration-services-legacy', key: 'servicesDetails.migrationServices.row1Title', desc: 'Service Legacy: Migration Services' },
  { path: '/services/end-to-end-legacy', key: 'servicesDetails.endToEndSolutions.row1Title', desc: 'Service Legacy: End-to-End' },

  // Parametric Tech Route (1)
  { path: '/technologies/:techId', key: 'technologies.headline', desc: 'Parametric Technology Template' }
]

const TEST_LANGUAGES = SUPPORTED_LANGUAGES

console.log('======================================================================')
console.log(`    OKLUT ALL-ROUTES COMPLETE MULTILINGUAL VALIDATION SUITE`)
console.log(`    Testing ${ROUTE_DEFINITIONS.length} routes across ${TEST_LANGUAGES.length} languages`)
console.log('======================================================================\n')

let allPassed = true
let totalRouteChecks = 0

for (const lang of TEST_LANGUAGES) {
  const bundle = loadLocale(lang.code)

  // 1. Direction check
  const isRtl = RTL_LANGUAGES.has(lang.code)
  if (lang.isRtl && !isRtl) {
    console.error(`  [FAIL] ${lang.code} should be RTL in RTL_LANGUAGES!`)
    allPassed = false
  }

  // 2. Validate all 62 Routes
  let routeFails = 0
  for (const route of ROUTE_DEFINITIONS) {
    const val = resolveKey(bundle, route.key)
    totalRouteChecks++
    if (!val || typeof val !== 'string' || val.trim().length === 0) {
      console.error(`  [FAIL] ${lang.code}: Route ${route.path} (${route.desc}) missing key "${route.key}"!`)
      routeFails++
      allPassed = false
    }
  }

  // 3. Navbar & Auth verification
  const navCareers = resolveKey(bundle, 'nav.careers')
  const authSignIn = resolveKey(bundle, 'auth.loginTab') || resolveKey(bundle, 'auth.signIn')
  const footerRights = resolveKey(bundle, 'footer.rights') || resolveKey(bundle, 'footer.copyright')
  if (!navCareers || !authSignIn || !footerRights) {
    console.error(`  [FAIL] ${lang.code}: Missing nav, auth or footer essential keys!`)
    allPassed = false
  }

  if (routeFails === 0) {
    console.log(`✓ [${lang.code}] ${lang.name.padEnd(20)}: All ${ROUTE_DEFINITIONS.length} routes verified (Direction: ${isRtl ? 'RTL' : 'LTR'})`)
  } else {
    console.error(`✗ [${lang.code}] ${lang.name}: ${routeFails} route failures!`)
  }
}

console.log('\n======================================================================')
console.log(`Total Route-Language checks performed: ${totalRouteChecks}`)
if (allPassed) {
  console.log(`🎉 ALL ${ROUTE_DEFINITIONS.length} APPLICATION ROUTES PASSED ACROSS ALL ${TEST_LANGUAGES.length} LANGUAGES!`)
} else {
  console.log('❌ SOME ROUTE TESTS FAILED. See error output above.')
  process.exit(1)
}
console.log('======================================================================\n')
