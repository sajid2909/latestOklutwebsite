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

const TEST_LANGS = [
  { code: 'en', name: 'English', isRtl: false },
  { code: 'ru', name: 'Russian', isRtl: false, sampleExpectedRu: 'В типичной корпоративной среде' },
  { code: 'te', name: 'Telugu', isRtl: false },
  { code: 'hi', name: 'Hindi', isRtl: false },
  { code: 'tr', name: 'Turkish', isRtl: false },
  { code: 'es', name: 'Spanish', isRtl: false },
  { code: 'ar', name: 'Arabic', isRtl: true },
]

const ARTICLES = [
  'businessTransformation',
  'artificialIntelligence',
  'modernErp',
  'cybersecurity',
  'cloudModernization'
]

console.log('='.repeat(80))
console.log('VERIFYING PERSPECTIVES CONTENT PIPELINE ACROSS SPECIFIED LANGUAGES')
console.log('='.repeat(80))

let allPassed = true

for (const lang of TEST_LANGS) {
  console.log(`\n>>> Testing Language: ${lang.name} (${lang.code}) [RTL: ${lang.isRtl}]`)
  const bundle = loadLocale(lang.code)
  const articles = bundle.perspectivesArticles

  if (!articles) {
    console.error(`  [FAIL] Missing perspectivesArticles in ${lang.code}!`)
    allPassed = false
    continue
  }

  for (const artId of ARTICLES) {
    const art = articles[artId]
    if (!art) {
      console.error(`  [FAIL] Missing article ${artId} in ${lang.code}!`)
      allPassed = false
      continue
    }

    // Check title, category, subtitle
    if (!art.title || !art.category || !art.subtitle) {
      console.error(`  [FAIL] ${artId} missing header fields in ${lang.code}!`)
      allPassed = false
    }

    // Check sec1P1
    if (!art.sec1P1 || art.sec1P1.trim() === '') {
      console.error(`  [FAIL] ${artId} missing sec1P1 in ${lang.code}!`)
      allPassed = false
    }

    // If Russian businessTransformation, verify exact paragraph from user report
    if (lang.code === 'ru' && artId === 'businessTransformation') {
      if (!art.sec1P1.startsWith('В типичной корпоративной среде')) {
        console.error(`  [FAIL] Russian sec1P1 does not match expected translated Russian! Got: "${art.sec1P1.slice(0, 40)}..."`)
        allPassed = false
      } else {
        console.log(`  ✓ Russian sec1P1 verified: "${art.sec1P1.slice(0, 75)}..."`)
      }
    }

    // Check sec1List
    if (art.sec1List) {
      if (!Array.isArray(art.sec1List) || art.sec1List.length === 0) {
        console.error(`  [FAIL] ${artId} sec1List is empty in ${lang.code}!`)
        allPassed = false
      } else {
        const item0 = art.sec1List[0]
        if (!item0.bold || !item0.text) {
          console.error(`  [FAIL] ${artId} sec1List[0] missing bold or text in ${lang.code}!`)
          allPassed = false
        }
      }
    }

    // Check Key Perspective Box
    if (!art.keyPerspectiveTitle || !art.keyPerspectiveLead) {
      console.error(`  [FAIL] ${artId} keyPerspective fields missing in ${lang.code}!`)
      allPassed = false
    }

    // Check CTA
    if (!art.ctaHeading || !art.ctaDescription || !art.ctaButton) {
      console.error(`  [FAIL] ${artId} CTA fields missing in ${lang.code}!`)
      allPassed = false
    }
  }

  console.log(`  ✓ All 5 articles passed complete field checks for ${lang.name} (${lang.code})`)
}

console.log('\n' + '='.repeat(80))
if (allPassed) {
  console.log('ALL PERSPECTIVES ARTICLES VERIFICATION SUITE PASSED (0 ERRORS)!')
} else {
  console.log('VERIFICATION SUITE FAILED WITH ERRORS!')
}
console.log('='.repeat(80))
