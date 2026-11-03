import fs from 'fs'
import path from 'path'
import { getChatResponse } from '../src/lib/chatKnowledge.js'

const TARGET_LANGS = ['en', 'hi', 'te', 'es', 'fr', 'ar']
const localesDir = path.resolve('src/i18n/locales')

console.log('====================================================')
console.log('   OKLUT MULTILINGUAL COMPREHENSIVE VERIFICATION')
console.log('====================================================\n')

let passCount = 0
let failCount = 0

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`)
    passCount++
  } else {
    console.error(`[FAIL] ${message}`)
    failCount++
  }
}

// 1. JSON Validity & Structural Completeness
console.log('--- 1. Testing Locale Bundles Integrity ---')
const bundles = {}
for (const lang of TARGET_LANGS) {
  const filePath = path.join(localesDir, lang, 'translation.json')
  assert(fs.existsSync(filePath), `${lang}/translation.json exists`)
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    bundles[lang] = data
    assert(true, `${lang}/translation.json is valid JSON`)
  } catch (err) {
    assert(false, `${lang}/translation.json JSON parse error: ${err.message}`)
  }
}

// 2. Critical Section Checks across all target languages
console.log('\n--- 2. Checking Key Navigation, Footer, Contact, Perspectives, Chatbot Keys ---')
const requiredKeyPaths = [
  'nav.services',
  'nav.technologies',
  'nav.about',
  'nav.contact',
  'nav.products',
  'nav.perspectives',
  'nav.careers',
  'footer.headline',
  'footer.subheadline',
  'footer.credoIdeas',
  'footer.credoSolutions',
  'footer.credoPeople',
  'footer.credoBrighterTomorrow',
  'footer.allRightsReserved',
  'footer.privacyPolicy',
  'footer.termsOfUse',
  'footer.accessibility',
  'contact.eyebrow',
  'contact.title',
  'contact.sub',
  'contact.fullName',
  'contact.emailLabel',
  'contact.messageLabel',
  'contact.sendBtn',
  'contact.placeholders.fullName',
  'contact.placeholders.email',
  'contact.placeholders.company',
  'contact.placeholders.subject',
  'contact.placeholders.message',
  'contact.validation.fullNameRequired',
  'contact.validation.emailRequired',
  'contact.validation.emailInvalid',
  'contact.validation.messageRequired',
  'perspectives.topic',
  'perspectives.published',
  'perspectives.readingTime',
  'perspectives.author',
  'perspectives.authorName',
  'perspectives.techArea',
  'perspectives.purpose',
  'chatbot.chatTitle',
  'chatbot.online',
  'chatbot.typing',
  'chatbot.menuOptions',
  'chatbot.greetingMorning',
  'chatbot.greetingAfternoon',
  'chatbot.greetingEvening',
  'chatbot.welcomeText',
  'chatbot.askPlaceholder',
  'chatbot.newChat',
]

function getNested(obj, dotPath) {
  return dotPath.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj)
}

for (const lang of TARGET_LANGS) {
  const bundle = bundles[lang]
  let missing = 0
  for (const kp of requiredKeyPaths) {
    const val = getNested(bundle, kp)
    if (!val || typeof val !== 'string' || val.trim().length === 0) {
      console.warn(`[WARN] Missing ${kp} in ${lang}`)
      missing++
    }
  }
  assert(missing === 0, `${lang} has all ${requiredKeyPaths.length} required critical keys`)
}

// 3. Dropdown Services & Technologies Integrity
console.log('\n--- 3. Verifying Dropdowns Translation Quality ---')
const expectedServices = [
  'buildFromScratch',
  'businessProcessAutomation',
  'centerOfExcellence',
  'customDevelopmentCustomization',
  'digitalTransformation',
  'endToEndSolutionFramework',
  'migrationModernization',
  'pocPilotImplementation',
  'sharedServicesManagedOperations',
]
const expectedTechnologies = [
  'aiRobotics',
  'businessAutomation',
  'cloudMigrations',
  'dataCenters',
  'cognitiveAnalytics',
  'informationReporting',
  'managedServices',
  'oneStopSolutions',
]

for (const lang of TARGET_LANGS) {
  const b = bundles[lang]
  const allServicesPresent = expectedServices.every(
    (k) => b.services?.items?.[k]?.label && typeof b.services.items[k].label === 'string'
  )
  assert(allServicesPresent, `${lang} has all 9 service dropdown translations`)

  const allTechPresent = expectedTechnologies.every(
    (k) => b.technologies?.options?.[k] && typeof b.technologies.options[k] === 'string'
  )
  assert(allTechPresent, `${lang} has all 8 technology dropdown translations`)
}

// 4. Non-English Verification (Ensure no raw English fallback placeholders)
console.log('\n--- 4. Verifying True Translations (No Placeholder Leaks) ---')
const enBundle = bundles['en']
for (const lang of ['hi', 'te', 'es', 'fr', 'ar']) {
  const curBundle = bundles[lang]
  // Samples to test
  const sampleKeys = [
    'footer.credoBrighterTomorrow',
    'contact.validation.fullNameRequired',
    'perspectives.authorName',
    'chatbot.greetingMorning',
  ]
  for (const sk of sampleKeys) {
    const enVal = getNested(enBundle, sk)
    const targetVal = getNested(curBundle, sk)
    assert(
      targetVal && targetVal !== enVal,
      `${lang} translated "${sk}": "${targetVal}" (differs from EN: "${enVal}")`
    )
  }
}

// 5. Arabic RTL & Telugu Leak Check
console.log('\n--- 5. Arabic RTL & Script Sanitation ---')
const arContent = JSON.stringify(bundles['ar'])
const teluguLeaked = /[\u0C00-\u0C7F]/.test(arContent)
assert(!teluguLeaked, 'Arabic translation bundle is completely clean of Telugu script leaks')
const arabicCharCount = (arContent.match(/[\u0600-\u06FF]/g) || []).length
assert(arabicCharCount > 500, `Arabic translation bundle contains genuine Arabic content (${arabicCharCount} Arabic characters)`)

// 6. Chatbot Language Response Verification
console.log('\n--- 6. Chatbot Multilingual AI Response Verification ---')
async function testChatbotLanguageResponses() {
  const samplePrompts = [
    { query: 'Where is your office located?', name: 'Office location' },
    { query: 'Tell me about your services', name: 'Services list' },
  ]

  for (const lang of TARGET_LANGS) {
    console.log(`\nTesting Chatbot responses in ${lang}...`)
    for (const item of samplePrompts) {
      try {
        const reply = await getChatResponse(item.query, [], lang)
        const hasContent = typeof reply === 'string' && reply.length > 20
        assert(hasContent, `${lang} reply for "${item.name}" received (${reply.slice(0, 50)}...)`)
        if (lang === 'hi') {
          assert(/[\u0900-\u097F]/.test(reply), 'Hindi reply contains Devanagari script')
        } else if (lang === 'te') {
          assert(/[\u0C00-\u0C7F]/.test(reply), 'Telugu reply contains Telugu script')
        } else if (lang === 'ar') {
          assert(/[\u0600-\u06FF]/.test(reply), 'Arabic reply contains Arabic script')
        }
      } catch (err) {
        assert(false, `Chatbot response failed for ${lang}: ${err.message}`)
      }
    }
  }
}

await testChatbotLanguageResponses()

console.log(`\n====================================================`)
console.log(`Suite complete: ${passCount} passed, ${failCount} failed`)
console.log(`====================================================`)
process.exit(failCount === 0 ? 0 : 1)
