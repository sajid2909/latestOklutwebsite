import i18n from '../src/i18n/i18n.js'
import {
  LOCALE_ALIASES,
  SUPPORTED_CODE_SET,
  getSavedTabLanguage,
  isLocaleLoaded,
  loadLocale,
  resolveCanonicalLocale,
  setCustomLocaleLoader,
} from '../src/i18n/localeLoader.js'
import { SUPPORTED_LANGUAGES } from '../src/i18n/languages.js'
import fs from 'fs'
import path from 'path'

// Configure Node file system loader for tests
setCustomLocaleLoader(async (code) => {
  const jsonPath = path.resolve('src/i18n/locales', code, 'translation.json')
  if (fs.existsSync(jsonPath)) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  }
  return null
})

console.log('=== RUNTIME VERIFICATION FOR DYNAMIC I18N SYSTEM ===\n')

let passed = 0
let failed = 0

function assert(condition, message) {
  if (condition) {
    console.log(`PASS: ${message}`)
    passed++
  } else {
    console.error(`FAIL: ${message}`)
    failed++
  }
}

// 1. Initial State: English statically bundled
assert(i18n.language === 'en', 'i18n defaults to English initially')
assert(isLocaleLoaded('en'), 'English is marked as loaded at startup')
assert(i18n.hasResourceBundle('en', 'translation'), 'English translation resource bundle is present at boot')
const enNav = i18n.t('nav.services')
assert(Boolean(enNav) && typeof enNav === 'string' && enNav.length > 0, `English translation resolves: "nav.services" = "${enNav}"`)

// 2. Initial state: Non-English locales are NOT loaded initially
assert(!isLocaleLoaded('hi'), 'Hindi is NOT loaded at startup')
assert(!i18n.hasResourceBundle('hi', 'translation'), 'Hindi bundle is NOT in i18n at startup')
assert(!isLocaleLoaded('fr'), 'French is NOT loaded at startup')

// 3. Dynamic Loading of a specific locale (e.g. Hindi 'hi')
console.log('\n--- Test Dynamic Loading: Hindi (hi) ---')
const hiLoaded = await loadLocale('hi')
assert(hiLoaded === true, 'loadLocale("hi") resolved successfully')
assert(isLocaleLoaded('hi'), 'isLocaleLoaded("hi") is now true')
assert(i18n.hasResourceBundle('hi', 'translation'), 'Hindi translation bundle registered in i18n via addResourceBundle')

await i18n.changeLanguage('hi')
const hiNav = i18n.t('nav.services')
assert(Boolean(hiNav) && hiNav !== enNav, `Hindi translation active: "nav.services" = "${hiNav}"`)

// 4. Memory Caching: Loading already loaded locale returns true without re-fetching
console.log('\n--- Test Memory Caching ---')
const hiCached = await loadLocale('hi')
assert(hiCached === true, 'loadLocale("hi") second call returned immediately from memory cache')

// 5. In-flight Promise deduplication: Concurrent requests for same locale
console.log('\n--- Test In-flight Request Deduplication ---')
const p1 = loadLocale('es')
const p2 = loadLocale('es')
assert(p1 === p2, 'Concurrent calls to loadLocale("es") reuse the exact same Promise instance (no duplicate fetch)')
const esResult = await Promise.all([p1, p2])
assert(esResult[0] === true && esResult[1] === true, 'Concurrent requests both resolved to true')
assert(i18n.hasResourceBundle('es', 'translation'), 'Spanish bundle successfully registered')

// 6. Compatibility Aliases (zh-CN -> zh, nb -> no, tl -> fil)
console.log('\n--- Test Compatibility Aliases ---')
assert(resolveCanonicalLocale('zh-CN') === 'zh', 'resolveCanonicalLocale("zh-CN") maps to "zh"')
assert(resolveCanonicalLocale('nb') === 'no', 'resolveCanonicalLocale("nb") maps to "no"')
assert(resolveCanonicalLocale('tl') === 'fil', 'resolveCanonicalLocale("tl") maps to "fil"')
assert(resolveCanonicalLocale('zh-TW') === 'zh-TW', 'resolveCanonicalLocale("zh-TW") preserves "zh-TW"')
assert(resolveCanonicalLocale('en-US') === 'en', 'resolveCanonicalLocale("en-US") maps to "en"')
assert(resolveCanonicalLocale('unknown-code') === 'en', 'resolveCanonicalLocale("unknown-code") falls back to "en"')

// 7. Dynamic loading via Alias
const zhLoaded = await loadLocale('zh-CN')
assert(zhLoaded === true, 'loadLocale("zh-CN") successfully loads canonical "zh"')
assert(i18n.hasResourceBundle('zh-CN', 'translation'), 'Alias "zh-CN" registered in i18n')
assert(i18n.hasResourceBundle('zh', 'translation'), 'Canonical "zh" registered in i18n')

// 8. Graceful failure on invalid locale
console.log('\n--- Test Graceful Failure ---')
const invalidLoaded = await loadLocale('nonexistent_lang_123')
assert(invalidLoaded === true, 'loadLocale with invalid code safely resolves to en fallback (no throw/crash)')

// 9. All 115 languages supported check
console.log('\n--- Test All 115 Languages ---')
assert(SUPPORTED_LANGUAGES.length === 115, `SUPPORTED_LANGUAGES has exactly 115 languages (found: ${SUPPORTED_LANGUAGES.length})`)
assert(SUPPORTED_CODE_SET.size === 115, `SUPPORTED_CODE_SET has exactly 115 unique codes (found: ${SUPPORTED_CODE_SET.size})`)

console.log(`\n==================================================`)
console.log(`TOTAL PASSED: ${passed} | TOTAL FAILED: ${failed}`)
if (failed > 0) process.exit(1)
