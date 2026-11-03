import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

// Helper to deep clone
const clone = (obj) => JSON.parse(JSON.stringify(obj))

// Function to generate and write a locale file
export function writeLocale(lang, modifierFn) {
  const dir = path.join(localesDir, lang)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  const base = clone(en)
  const modified = modifierFn(base)
  fs.writeFileSync(path.join(dir, 'translation.json'), JSON.stringify(modified, null, 2), 'utf8')
  console.log(`Generated locale: ${lang}`)
}

console.log('Locale generator helper ready.')
