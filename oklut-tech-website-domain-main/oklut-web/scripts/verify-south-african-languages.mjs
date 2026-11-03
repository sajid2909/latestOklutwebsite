import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import i18n from 'i18next'
import { SUPPORTED_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

const SOUTH_AFRICAN_CODES = ['af', 'xh', 'nr', 'nso', 'st', 'tn', 'ss', 've', 'ts']
const CANONICAL_EN_PATH = path.join(localesDir, 'en/translation.json')
const enData = JSON.parse(fs.readFileSync(CANONICAL_EN_PATH, 'utf8'))

function flatten(obj, prefix = '') {
  const result = {}
  for (const [key, val] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${key}` : key
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flatten(val, p))
    } else {
      result[p] = val
    }
  }
  return result
}

const enFlat = flatten(enData)
const enKeys = Object.keys(enFlat)
const varKeys = enKeys.filter((k) => typeof enFlat[k] === 'string' && /\{\{[^}]+\}\}/.test(enFlat[k]))

console.log('======================================================================')
console.log('       SOUTH AFRICAN 9 LANGUAGES DEEP VERIFICATION SUITE')
console.log('======================================================================')
console.log(`Canonical Reference (en): ${enKeys.length} keys`)
console.log(`Variable Interpolation Keys: ${varKeys.length}\n`)

// Load all resources for i18next
const resources = { en: { translation: enData } }
let allPassed = true

for (const code of ['zu', ...SOUTH_AFRICAN_CODES]) {
  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === code)
  if (!langConfig) {
    console.error(`✗ [FAIL] Language code "${code}" is NOT registered in SUPPORTED_LANGUAGES!`)
    allPassed = false
    continue
  }

  const langFile = path.join(localesDir, code, 'translation.json')
  if (!fs.existsSync(langFile)) {
    console.error(`✗ [FAIL] ${code} (${langConfig.name}): Missing translation.json`)
    allPassed = false
    continue
  }

  const raw = fs.readFileSync(langFile, 'utf8')
  let data
  try {
    data = JSON.parse(raw)
  } catch (err) {
    console.error(`✗ [FAIL] ${code} (${langConfig.name}): JSON parse error: ${err.message}`)
    allPassed = false
    continue
  }

  resources[code] = { translation: data }
  const flat = flatten(data)
  const dKeys = Object.keys(flat)

  const missing = enKeys.filter((k) => flat[k] === undefined)
  const extra = dKeys.filter((k) => enFlat[k] === undefined)

  // Verify variables
  const varErrors = []
  for (const vk of varKeys) {
    const origVars = enFlat[vk].match(/\{\{[^}]+\}\}/g)
    const targetVal = flat[vk]
    if (typeof targetVal !== 'string') {
      varErrors.push(`${vk}: expected string, got ${typeof targetVal}`)
      continue
    }
    for (const v of origVars) {
      if (!targetVal.includes(v)) {
        varErrors.push(`${vk}: missing ${v}`)
      }
    }
  }

  // Untranslated English check (excluding proper names and short acronyms)
  const untranslatedKeys = []
  if (code !== 'en') {
    for (const k of enKeys) {
      const orig = enFlat[k]
      const trans = flat[k]
      if (
        typeof orig === 'string' &&
        typeof trans === 'string' &&
        orig.trim() === trans.trim() &&
        orig.length > 20 &&
        !/Oklut|AWS|Azure|GCP|Docker|Kubernetes|Hyderabad|Vijayawada|Newcastle|info@oklut|1800/.test(orig)
      ) {
        untranslatedKeys.push(k)
      }
    }
  }

  if (missing.length === 0 && extra.length === 0 && varErrors.length === 0) {
    console.log(
      `✓ [PASS] ${code.padEnd(5)} | ${langConfig.name.padEnd(14)} | ${langConfig.nativeName.padEnd(16)} | keys: ${
        dKeys.length
      } | missing: 0 | extra: 0 | vars: 100% valid | untranslated: ${untranslatedKeys.length}`
    )
  } else {
    console.error(
      `✗ [FAIL] ${code.padEnd(5)} | missing: ${missing.length}, extra: ${extra.length}, varErrors: ${varErrors.length}`
    )
    if (missing.length) console.error(`   Missing keys: ${missing.slice(0, 5).join(', ')}`)
    if (extra.length) console.error(`   Extra keys: ${extra.slice(0, 5).join(', ')}`)
    if (varErrors.length) console.error(`   Var errors: ${varErrors.join('; ')}`)
    allPassed = false
  }
}

// Initialize i18next and test live translation lookup
await i18n.init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

console.log('\n----------------------------------------------------------------------')
console.log('       LIVE i18next TRANSLATION SAMPLE FOR ALL 9 LANGUAGES')
console.log('----------------------------------------------------------------------')

for (const code of SOUTH_AFRICAN_CODES) {
  await i18n.changeLanguage(code)
  const navAbout = i18n.t('nav.about')
  const navCareers = i18n.t('nav.careers')
  const footerCompany = i18n.t('footer.company')
  const readyDiscuss = i18n.t('servicePage.readyToDiscuss', { title: 'Enterprise AI' })
  const copyright = i18n.t('footer.copyright', { year: '2026' })
  console.log(`[${code}] nav.about: "${navAbout}" | nav.careers: "${navCareers}" | footer.company: "${footerCompany}"`)
  console.log(`     readyToDiscuss: "${readyDiscuss}"`)
  console.log(`     copyright: "${copyright}"\n`)
}

// Test English and isiZulu preservation
await i18n.changeLanguage('en')
console.log(`[EN] nav.about: "${i18n.t('nav.about')}" | footer: "${i18n.t('footer.copyright', { year: '2026' })}"`)

await i18n.changeLanguage('zu')
console.log(`[ZU] nav.about: "${i18n.t('nav.about')}" | nav.careers: "${i18n.t('nav.careers')}" | footer: "${i18n.t('footer.copyright', { year: '2026' })}"`)

console.log('======================================================================')
if (allPassed) {
  console.log('✓ ALL 9 SOUTH AFRICAN LANGUAGES PASSED 100% OF DEEP VERIFICATION!')
} else {
  console.error('✗ SOME CHECKS FAILED. See details above.')
  process.exit(1)
}
