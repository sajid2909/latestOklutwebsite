import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en/translation.json'), 'utf8'))

const STAGE_2A_LANGS = [
  'or', 'as', 'ne', 'sa',
  'ko', 'vi', 'th', 'id', 'ms', 'zh-TW',
  'nl', 'tr', 'pl', 'uk', 'el', 'cs',
  'sv', 'ro', 'hu', 'da', 'fi', 'no',
  'he', 'fa'
]

// Native labels for nav.about where "About" might be translated literally
const ABOUT_LABELS = {
  or: 'ଆମ ବିଷୟରେ',
  as: 'আমাৰ বিষয়ে',
  ne: 'हाम्रो बारेमा',
  sa: 'अस्माकं विषये',
  ko: '회사 소개',
  vi: 'Về chúng tôi',
  th: 'เกี่ยวกับเรา',
  id: 'Tentang Kami',
  ms: 'Tentang Kami',
  'zh-TW': '關於我們',
  nl: 'Over Ons',
  tr: 'Hakkımızda',
  pl: 'O nas',
  uk: 'Про нас',
  el: 'Σχετικά με εμάς',
  cs: 'O nás',
  sv: 'Om oss',
  ro: 'Despre Noi',
  hu: 'Rólunk',
  da: 'Om os',
  fi: 'Tietoa meistä',
  no: 'Om oss',
  he: 'אודותינו',
  fa: 'درباره ما'
}

function countKeys(obj) {
  let count = 0
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      count += countKeys(obj[k])
    } else {
      count++
    }
  }
  return count
}

const enCount = countKeys(en)

export function refineAndVerify() {
  console.log(`\n======================================================`)
  console.log(`Verifying and Refining 24 Stage 2A Locales against canonical en (${enCount} keys)...`)
  console.log(`======================================================`)

  let allValid = true
  let totalKeysVerified = 0

  for (const code of STAGE_2A_LANGS) {
    const filePath = path.join(localesDir, code, 'translation.json')
    if (!fs.existsSync(filePath)) {
      console.error(`✗ [${code}] File NOT found!`)
      allValid = false
      continue
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Refinements
    if (ABOUT_LABELS[code] && (!data.nav.about || data.nav.about.toLowerCase() === 'about')) {
      data.nav.about = ABOUT_LABELS[code]
    }
    data.nav.language = 'Language' // requirement: trigger label always displays Language

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')

    const cnt = countKeys(data)
    totalKeysVerified += cnt
    if (cnt < enCount) {
      console.error(`✗ [${code}] Incomplete key count: ${cnt} < ${enCount}`)
      allValid = false
    } else {
      console.log(`✓ [${code}] Verified: ${cnt} keys (100% complete)`)
    }
  }

  console.log(`\nVerification Summary:`)
  console.log(`- Languages checked: ${STAGE_2A_LANGS.length}`)
  console.log(`- Total translation keys: ${totalKeysVerified}`)
  console.log(`- Status: ${allValid ? 'ALL PASSED' : 'HAS ISSUES'}`)
  return allValid
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  refineAndVerify()
}
