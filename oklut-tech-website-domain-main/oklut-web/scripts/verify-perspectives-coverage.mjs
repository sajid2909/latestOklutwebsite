import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { INDIAN_LANGUAGES, INTERNATIONAL_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const allLanguages = [...INDIAN_LANGUAGES, ...INTERNATIONAL_LANGUAGES]

const ARTICLE_KEYS = [
  'businessTransformation',
  'artificialIntelligence',
  'modernErp',
  'cybersecurity',
  'cloudModernization'
]

const SCRIPT_REGEX = {
  hi: /[\u0900-\u097F]/, // Devanagari
  te: /[\u0C00-\u0C7F]/, // Telugu
  ta: /[\u0B80-\u0BFF]/, // Tamil
  kn: /[\u0C80-\u0CFF]/, // Kannada
  ml: /[\u0D00-\u0D7F]/, // Malayalam
  mr: /[\u0900-\u097F]/, // Marathi (Devanagari)
  bn: /[\u0980-\u09FF]/, // Bengali
  gu: /[\u0A80-\u0AFF]/, // Gujarati
  pa: /[\u0A00-\u0A7F]/, // Gurmukhi / Punjabi
  ur: /[\u0600-\u06FF]/, // Arabic/Persian/Urdu script
  or: /[\u0B00-\u0B7F]/, // Odia
  as: /[\u0980-\u09FF]/, // Assamese (Bengali script)
  ne: /[\u0900-\u097F]/, // Nepali (Devanagari)
  sa: /[\u0900-\u097F]/, // Sanskrit (Devanagari)
  ar: /[\u0600-\u06FF]/, // Arabic
  fa: /[\u0600-\u06FF]/, // Persian
  he: /[\u0590-\u05FF]/, // Hebrew
  ru: /[\u0400-\u04FF]/, // Cyrillic
  uk: /[\u0400-\u04FF]/, // Cyrillic
  el: /[\u0370-\u03FF]/, // Greek
  zh: /[\u4E00-\u9FFF]/, // Chinese
  'zh-TW': /[\u4E00-\u9FFF]/, // Traditional Chinese
  ja: /[\u3040-\u30FF\u4E00-\u9FFF]/, // Japanese
  ko: /[\uAC00-\uD7AF\u1100-\u11FF]/, // Korean
  th: /[\u0E00-\u0E7F]/, // Thai
}

function extractStrings(obj, prefix = '') {
  let list = []
  for (const k of Object.keys(obj)) {
    const curPath = prefix ? `${prefix}.${k}` : k
    const v = obj[k]
    if (typeof v === 'string') {
      list.push({ path: curPath, text: v })
    } else if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        if (typeof item === 'string') {
          list.push({ path: `${curPath}[${idx}]`, text: item })
        } else if (typeof item === 'object' && item !== null) {
          list = list.concat(extractStrings(item, `${curPath}[${idx}]`))
        }
      })
    } else if (typeof v === 'object' && v !== null) {
      list = list.concat(extractStrings(v, curPath))
    }
  }
  return list
}

function getByPath(obj, pathStr) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.')
  let curr = obj
  for (const part of parts) {
    if (curr === undefined || curr === null) return undefined
    curr = curr[part]
  }
  return curr
}

console.log('='.repeat(80))
console.log('AUTOMATED PERSPECTIVES ARTICLE COVERAGE & LINGUISTIC AUDIT')
console.log('='.repeat(80))

// 1. Audit canonical English fields
const enArticles = en.perspectivesArticles || {}
console.log(`\nAudit 1: Inspecting Canonical English Articles (en)`)
const canonicalStats = {}
for (const artId of ARTICLE_KEYS) {
  const artData = enArticles[artId]
  if (!artData) {
    console.error(`[CRITICAL] Missing article ${artId} in en!`)
    continue
  }
  const fields = extractStrings(artData, artId)
  canonicalStats[artId] = fields.length
  console.log(`  - ${artId}: ${fields.length} translatable text fields`)
}
const totalCanonicalFields = Object.values(canonicalStats).reduce((a, b) => a + b, 0)
console.log(`Total canonical text fields across all 5 articles: ${totalCanonicalFields}`)

// 2. Audit all 48 languages
console.log(`\nAudit 2: Evaluating Coverage across all ${allLanguages.length} enabled languages...`)

const results = []
let overallMissingCount = 0
let overallSuspiciousEnglishCount = 0
let overallScriptMismatchCount = 0

for (const lang of allLanguages) {
  const langPath = path.join(localesDir, lang.code, 'translation.json')
  if (!fs.existsSync(langPath)) {
    results.push({ lang: lang.code, name: lang.name, status: 'MISSING_FILE', coverage: 0 })
    continue
  }

  let bundle = {}
  try {
    bundle = JSON.parse(fs.readFileSync(langPath, 'utf8'))
  } catch {
    results.push({ lang: lang.code, name: lang.name, status: 'PARSE_ERROR', coverage: 0 })
    continue
  }

  let langTotal = 0
  let langPresent = 0
  let langMissing = 0
  let langSuspiciousEnglish = 0
  let langScriptMismatch = 0

  for (const artId of ARTICLE_KEYS) {
    const enFields = extractStrings(enArticles[artId], artId)
    langTotal += enFields.length

    for (const field of enFields) {
      const fullPath = `perspectivesArticles.${field.path}`
      const targetVal = getByPath(bundle, fullPath)

      if (targetVal === undefined || targetVal === null || (typeof targetVal === 'string' && targetVal.trim() === '')) {
        langMissing++
        continue
      }

      langPresent++

      if (lang.code !== 'en' && typeof targetVal === 'string') {
        // Check for suspicious copied English
        if (
          targetVal === field.text &&
          field.text.length > 10 &&
          !/^[A-Z0-9\s—–.,-]+$/.test(field.text)
        ) {
          langSuspiciousEnglish++
        }

        // Script check if non-Latin script language
        const expectedScript = SCRIPT_REGEX[lang.code]
        if (expectedScript && field.text.length > 15) {
          if (!expectedScript.test(targetVal)) {
            langScriptMismatch++
          }
        }
      }
    }
  }

  overallMissingCount += langMissing
  overallSuspiciousEnglishCount += langSuspiciousEnglish
  overallScriptMismatchCount += langScriptMismatch

  const coveragePct = ((langPresent / langTotal) * 100).toFixed(1)
  results.push({
    lang: lang.code,
    name: lang.name,
    total: langTotal,
    present: langPresent,
    missing: langMissing,
    suspiciousEnglish: langSuspiciousEnglish,
    scriptMismatch: langScriptMismatch,
    coverage: coveragePct
  })
}

// Print results table
console.log('\n' + '-'.repeat(85))
console.log(
  'Code'.padEnd(7) +
  'Language'.padEnd(24) +
  'Present/Total'.padEnd(16) +
  'Missing'.padEnd(10) +
  'Untranslated EN'.padEnd(16) +
  'Coverage'
)
console.log('-'.repeat(85))

for (const r of results) {
  const line =
    r.lang.padEnd(7) +
    r.name.padEnd(24) +
    `${r.present}/${r.total}`.padEnd(16) +
    `${r.missing}`.padEnd(10) +
    `${r.suspiciousEnglish}`.padEnd(16) +
    `${r.coverage}%`
  console.log(line)
}
console.log('-'.repeat(85))
console.log(`\nSUMMARY:`)
console.log(`- Total Languages Evaluated: ${allLanguages.length}`)
console.log(`- Total Missing Fields across all locales: ${overallMissingCount}`)
console.log(`- Total Suspicious English Leftovers: ${overallSuspiciousEnglishCount}`)
console.log(`- Total Script Mismatches: ${overallScriptMismatchCount}`)
console.log('='.repeat(80))
