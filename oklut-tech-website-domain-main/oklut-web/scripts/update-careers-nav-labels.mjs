import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SUPPORTED_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

export const CAREERS_TRANSLATIONS = {
  // User-specified examples
  en: 'Careers',
  ur: 'کیریئر',
  te: 'కెరీర్లు',
  hi: 'करियर',
  tr: 'Kariyer',
  ru: 'Карьера',
  ar: 'الوظائف',
  es: 'Carreras',
  fr: 'Carrières',

  // Indian Languages
  ta: 'வேலைவாய்ப்புகள்',
  kn: 'ವೃತ್ತಿಜೀವನ',
  ml: 'കരിയർ',
  mr: 'कारकीर्द',
  bn: 'ক্যারিয়ার',
  gu: 'કારકિર્દી',
  pa: 'ਕਰੀਅਰ',
  or: 'କ୍ୟାରିଅର୍',
  as: 'কেৰিয়াৰ',
  ne: 'करियर',
  sa: 'वृत्तिः',

  // International Languages
  de: 'Karriere',
  pt: 'Carreiras',
  zh: '职业机会',
  'zh-TW': '工作機會',
  ja: '採用情報',
  it: 'Carriere',
  ko: '채용',
  nl: 'Carrières',
  pl: 'Kariera',
  vi: 'Tuyển dụng',
  id: 'Karier',
  ms: 'Kerjaya',
  th: 'ร่วมงานกับเรา',
  uk: "Кар'єра",
  el: 'Καριέρα',
  cs: 'Kariéra',
  sv: 'Karriär',
  ro: 'Cariere',
  hu: 'Karrier',
  da: 'Karriere',
  fi: 'Ura',
  no: 'Karriere',
  he: 'קריירה',
  fa: 'فرصت‌های شغلی',
  az: 'Karyera',
  sq: 'Karriera',
  ga: 'Gairmeacha',
  zu: 'Amathuba Omsebenzi',
}

console.log('======================================================================')
console.log('UPDATING NAV.CAREERS IN ALL 48 LOCALE FILES')
console.log('======================================================================\n')

let updatedCount = 0
for (const lang of SUPPORTED_LANGUAGES) {
  const code = lang.code
  const label = CAREERS_TRANSLATIONS[code]
  if (!label) {
    console.error(`Missing translation for ${code} (${lang.name})!`)
    continue
  }

  const filePath = path.join(localesDir, code, 'translation.json')
  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`)
    continue
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    if (!data.nav) data.nav = {}
    data.nav.careers = label
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
    console.log(`  ✓ [${code}] ${lang.name.padEnd(24)} -> nav.careers = "${label}"`)
    updatedCount++
  } catch (err) {
    console.error(`Error updating ${code}:`, err.message)
  }
}

console.log(`\nSuccessfully updated nav.careers across ${updatedCount}/${SUPPORTED_LANGUAGES.length} languages!`)
