import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { INDIAN_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const nonLatinCodes = ['ne', 'sa', 'ta', 'kn', 'or', 'as', 'pa', 'ur', 'hi', 'te', 'ml', 'mr', 'bn', 'gu']

async function translateSingle(text, targetLang) {
  const u = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    targetLang
  )}&dt=t&q=${encodeURIComponent(text)}`
  const r = await fetch(u, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  })
  if (!r.ok) return text
  const d = await r.json()
  return d[0]?.map((s) => s[0]).join('') || text
}

for (const code of nonLatinCodes) {
  const filePath = path.join(localesDir, code, 'translation.json')
  if (!fs.existsSync(filePath)) continue
  const bundle = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let modified = false

  for (const artId of ['businessTransformation', 'artificialIntelligence', 'modernErp', 'cybersecurity', 'cloudModernization']) {
    const enArt = en.perspectivesArticles[artId]
    const curArt = bundle.perspectivesArticles?.[artId]
    if (!enArt || !curArt) continue

    for (const [key, val] of Object.entries(enArt)) {
      if (typeof val === 'string' && val.length > 5 && curArt[key] === val) {
        // Skip dates like 'September 2026' if acceptable or translate them
        process.stdout.write(`Translating ${code} [${artId}.${key}]... `)
        const trans = await translateSingle(val, code)
        curArt[key] = trans
        console.log(`-> ${trans}`)
        modified = true
        await new Promise((r) => setTimeout(r, 60))
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(bundle, null, 2) + '\n', 'utf8')
    console.log(`[${code}] Updated!`)
  }
}
console.log('Done translating remaining uppercase / English keys!')
