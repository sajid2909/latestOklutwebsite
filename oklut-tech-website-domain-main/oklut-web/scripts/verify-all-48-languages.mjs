import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SUPPORTED_LANGUAGES, RTL_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en', 'translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

function flatten(obj, prefix = '') {
  let res = {}
  for (const k in obj) {
    const p = prefix ? `${prefix}.${k}` : k
    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      Object.assign(res, flatten(obj[k], p))
    } else {
      res[p] = obj[k]
    }
  }
  return res
}

const enFlat = flatten(en)
const enKeys = Object.keys(enFlat)

console.log('======================================================================')
console.log('       OKLUT MULTILINGUAL DEEP VALIDATION & INTEGRITY SUITE')
console.log('======================================================================')
console.log(`Canonical Reference (en): ${enKeys.length} keys`)
console.log(`Registered Languages: ${SUPPORTED_LANGUAGES.length}\n`)

let totalPass = 0
let totalFail = 0
const issues = []

// Script regexes
const TELUGU_SCRIPT = /[\u0C00-\u0C7F]/

for (const lang of SUPPORTED_LANGUAGES) {
  const filePath = path.join(localesDir, lang.code, 'translation.json')
  if (!fs.existsSync(filePath)) {
    issues.push(`[CRITICAL] ${lang.code} (${lang.name}): Missing translation.json`)
    totalFail++
    continue
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(raw)
    const flat = flatten(data)

    // 1. Missing keys
    const missing = enKeys.filter((k) => flat[k] === undefined)

    // 2. Cross-language contamination check (Telugu in non-Telugu)
    let teluguContaminationCount = 0
    if (lang.code !== 'te') {
      const teluguMatches = raw.match(new RegExp(TELUGU_SCRIPT, 'g'))
      if (teluguMatches) {
        teluguContaminationCount = teluguMatches.length
      }
    }

    // 3. Careers English preservation check
    const careersKeys = enKeys.filter((k) => k.startsWith('careers.') || k === 'nav.careers')
    const corruptedCareers = []
    for (const ck of careersKeys) {
      if (flat[ck] !== enFlat[ck]) {
        corruptedCareers.push(ck)
      }
    }

    // Evaluate results
    const langIssues = []
    if (missing.length > 0) {
      langIssues.push(`Missing ${missing.length} keys (${missing.slice(0, 3).join(', ')}...)`)
    }
    if (teluguContaminationCount > 0) {
      langIssues.push(`Contaminated with ${teluguContaminationCount} Telugu characters!`)
    }
    if (corruptedCareers.length > 0) {
      langIssues.push(`Careers not in English: ${corruptedCareers.length} keys altered`)
    }

    if (langIssues.length === 0) {
      const isRtl = RTL_LANGUAGES.has(lang.code)
      console.log(
        `✓ [PASS] ${lang.code.padEnd(6)} | ${lang.name.padEnd(22)} | ${lang.nativeName.padEnd(20)} | dir: ${lang.dir}${
          isRtl ? ' (RTL)' : '      '
        } | 100% clean (${Object.keys(flat).length} keys)`
      )
      totalPass++
    } else {
      console.error(
        `✗ [FAIL] ${lang.code.padEnd(6)} | ${lang.name.padEnd(22)} | Issues: ${langIssues.join('; ')}`
      )
      issues.push(`${lang.code}: ${langIssues.join('; ')}`)
      totalFail++
    }
  } catch (err) {
    console.error(`✗ [FAIL] ${lang.code}: Invalid JSON — ${err.message}`)
    issues.push(`${lang.code}: Invalid JSON`)
    totalFail++
  }
}

console.log('\n----------------------------------------------------------------------')
console.log(`SUMMARY: ${totalPass}/${SUPPORTED_LANGUAGES.length} Languages Passed All Deep Integrity Checks.`)
console.log('----------------------------------------------------------------------')

if (totalFail > 0) {
  console.log(`\nFailed Languages (${totalFail}):`)
  issues.forEach((iss) => console.log(` - ${iss}`))
}
