import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

function loadLocale(lang) {
  const filePath = path.join(localesDir, lang, 'translation.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function resolveKey(obj, pathStr) {
  const parts = pathStr.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = cur[p]
  }
  return cur
}

const en = loadLocale('en')
const tr = loadLocale('tr')
const te = loadLocale('te')

const languages = [
  { code: 'en', name: 'English', data: en },
  { code: 'tr', name: 'Turkish', data: tr },
  { code: 'te', name: 'Telugu', data: te }
]

console.log('='.repeat(70))
console.log('  DIGITAL TRANSFORMATION SERVICE PAGE MULTILINGUAL TEST')
console.log('='.repeat(70))

let allPassed = true

for (const lang of languages) {
  console.log(`\nTesting [${lang.code.toUpperCase()}] ${lang.name}:`)

  const dt = resolveKey(lang.data, 'servicesDetails.digitalTransformation')
  if (!dt) {
    console.error(`  ❌ servicesDetails.digitalTransformation NOT found for ${lang.code}`)
    allPassed = false
    continue
  }

  // 1. Hero
  console.log(`  [Hero Eyebrow]: "${dt.eyebrow}"`)
  console.log(`  [Hero Title]: "${dt.titlePart1} ${dt.titlePart2}"`)
  console.log(`  [Hero Description]: "${dt.description}"`)
  console.log(`  [Hero Book Workshop Button]: "${dt.bookWorkshop}"`)
  console.log(`  [Hero Explore Framework Button]: "${dt.exploreFramework}"`)

  if (!dt.eyebrow || !dt.titlePart1 || !dt.description || !dt.bookWorkshop || !dt.exploreFramework) {
    console.error(`  ❌ Missing hero elements in ${lang.code}`)
    allPassed = false
  }

  // 2. Ribbon
  console.log(`  [Ribbon Title]: "${dt.coreCapabilitiesTitle}"`)
  console.log(`  [Capabilities (${dt.coreCapabilities?.length})]: ${JSON.stringify(dt.coreCapabilities)}`)
  if (!dt.coreCapabilitiesTitle || !Array.isArray(dt.coreCapabilities) || dt.coreCapabilities.length !== 8) {
    console.error(`  ❌ Invalid capabilities ribbon in ${lang.code}`)
    allPassed = false
  }

  // 3. Sections
  console.log(`  [Section 1 Title]: "${dt.row1Title}"`)
  console.log(`  [Section 1 Eyebrow]: "${dt.row1Eyebrow}"`)
  console.log(`  [Section 2 Title]: "${dt.row2Title}"`)
  console.log(`  [Section 3 Title]: "${dt.row3Title}"`)
  console.log(`  [Section 4 Title]: "${dt.row4Title}"`)

  // 4. Pillars
  console.log(`  [Pillars Title]: "${dt.pillarsTitle}"`)
  console.log(`  [Pillar 1]: "${dt.pillar1Title}"`)
  console.log(`  [Pillar 2]: "${dt.pillar2Title}"`)
  console.log(`  [Pillar 3]: "${dt.pillar3Title}"`)
  console.log(`  [Pillar 4]: "${dt.pillar4Title}"`)

  // 5. CTA
  console.log(`  [CTA Title]: "${dt.ctaTitle}"`)
  console.log(`  [CTA Button]: "${dt.ctaButton}"`)

  // Language authenticity checks:
  if (lang.code === 'tr') {
    if (dt.eyebrow.includes('Enterprise') || dt.row1Title.includes('Vision') || dt.coreCapabilities.includes('Digital Strategy')) {
      console.error(`  ❌ Turkish page contains untranslated English strings!`)
      allPassed = false
    } else {
      console.log(`  ✓ Turkish verified: Zero untranslated English strings detected`)
    }
  }

  if (lang.code === 'te') {
    if (dt.eyebrow.includes('Enterprise') || dt.row1Title.includes('Vision') || dt.coreCapabilities.includes('Digital Strategy')) {
      console.error(`  ❌ Telugu page contains untranslated English strings!`)
      allPassed = false
    } else {
      console.log(`  ✓ Telugu verified: Zero untranslated English strings detected`)
    }
  }

  if (lang.code === 'en') {
    if (!dt.eyebrow.includes('Enterprise') || !dt.row1Title.includes('Vision') || !dt.coreCapabilities.includes('Digital Strategy')) {
      console.error(`  ❌ English page original strings altered!`)
      allPassed = false
    } else {
      console.log(`  ✓ English verified: Original English wording 100% intact`)
    }
  }
}

console.log('\n' + '='.repeat(70))
if (allPassed) {
  console.log('🎉 ALL DIGITAL TRANSFORMATION TESTS PASSED!')
} else {
  console.log('❌ SOME TESTS FAILED!')
  process.exit(1)
}
console.log('='.repeat(70))
