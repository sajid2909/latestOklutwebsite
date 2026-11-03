import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { INDIAN_LANGUAGES, INTERNATIONAL_LANGUAGES } from '../src/i18n/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const allLanguages = [...INDIAN_LANGUAGES, ...INTERNATIONAL_LANGUAGES].filter(
  (l) => l.code !== 'en'
)

// Helper: extract leaves under perspectivesArticles
function extractLeaves(obj, currentPath = '') {
  let leaves = []
  for (const key of Object.keys(obj)) {
    const fullPath = currentPath ? `${currentPath}.${key}` : key
    const val = obj[key]
    if (typeof val === 'string') {
      leaves.push({ path: fullPath, text: val })
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        const itemPath = `${fullPath}[${idx}]`
        if (typeof item === 'string') {
          leaves.push({ path: itemPath, text: item })
        } else if (typeof item === 'object' && item !== null) {
          leaves = leaves.concat(extractLeaves(item, itemPath))
        }
      })
    } else if (typeof val === 'object' && val !== null) {
      leaves = leaves.concat(extractLeaves(val, fullPath))
    }
  }
  return leaves
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

function setByPath(obj, pathStr, value) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.')
  let curr = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    if (!curr[part]) {
      curr[part] = /^\d+$/.test(parts[i + 1]) ? [] : {}
    }
    curr = curr[part]
  }
  curr[parts[parts.length - 1]] = value
}

// Map language codes if Google Translate uses a slightly different code
function mapLangCode(code) {
  if (code === 'zh-TW') return 'zh-TW'
  if (code === 'zh') return 'zh-CN'
  if (code === 'he') return 'iw'
  return code
}

async function translateSingle(text, targetLang) {
  const tl = mapLangCode(targetLang)
  const u = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    tl
  )}&dt=t&q=${encodeURIComponent(text)}`
  const r = await fetch(u, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  const d = await r.json()
  return d[0]?.map((s) => s[0]).join('') || text
}

async function translateBatch(texts, targetLang, retries = 3) {
  if (texts.length === 0) return []
  const tl = mapLangCode(targetLang)
  const indexed = texts.map((t, i) => `<<< ${i} >>> ${t}`).join('\n')
  const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    tl
  )}&dt=t&q=${encodeURIComponent(indexed)}`

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const translatedCombined = data[0].map((s) => s[0]).join('')
        const regex = /<<<\s*(\d+)\s*>>>\s*([\s\S]*?)(?=(?:<<<\s*\d+\s*>>>|$))/g
        let m
        const parsed = []
        while ((m = regex.exec(translatedCombined)) !== null) {
          const idx = parseInt(m[1], 10)
          parsed[idx] = m[2].trim()
        }
        if (parsed.length === texts.length && !parsed.some((x) => x === undefined || x === '')) {
          return parsed
        }
      }
    } catch (err) {
      if (attempt === retries) {
        // Fall back to item-by-item
      }
      await new Promise((r) => setTimeout(r, 400 * attempt))
    }
  }

  // Fallback item by item
  const results = []
  for (const t of texts) {
    try {
      const res = await translateSingle(t, targetLang)
      results.push(res)
      await new Promise((r) => setTimeout(r, 50))
    } catch {
      results.push(t)
    }
  }
  return results
}

export async function syncPerspectivesForLocale(langCode, force = false) {
  const langDir = path.join(localesDir, langCode)
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true })
  }
  const langPath = path.join(langDir, 'translation.json')
  let existing = {}
  if (fs.existsSync(langPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(langPath, 'utf8'))
    } catch {
      existing = {}
    }
  }

  const enPerspectives = en.perspectivesArticles || {}
  const leaves = extractLeaves(enPerspectives, 'perspectivesArticles')
  const result = JSON.parse(JSON.stringify(existing))

  const toTranslate = []
  for (const leaf of leaves) {
    const currentVal = getByPath(result, leaf.path)
    
    // Check if missing, empty, or exactly identical to English text (for sentences > 10 chars)
    const isMissing = currentVal === undefined || currentVal === null
    const isEmpty = typeof currentVal === 'string' && currentVal.trim() === ''
    const isUntranslatedEnglish =
      typeof currentVal === 'string' &&
      currentVal === leaf.text &&
      leaf.text.length > 8 &&
      !/^[A-Z0-9\s—–.,-]+$/.test(leaf.text)

    if (force || isMissing || isEmpty || isUntranslatedEnglish) {
      toTranslate.push(leaf)
    }
  }

  if (toTranslate.length === 0) {
    console.log(`[${langCode}] All ${leaves.length} perspectives fields are already translated!`)
    return
  }

  console.log(`[${langCode}] Translating ${toTranslate.length}/${leaves.length} perspectives fields...`)

  // Batch translate in chunks of 15
  const chunkSize = 15
  for (let i = 0; i < toTranslate.length; i += chunkSize) {
    const chunk = toTranslate.slice(i, i + chunkSize)
    const texts = chunk.map((c) => c.text)
    const translated = await translateBatch(texts, langCode)
    chunk.forEach((item, idx) => {
      setByPath(result, item.path, translated[idx] || item.text)
    })
    process.stdout.write(`  [${langCode}] Completed ${Math.min(i + chunkSize, toTranslate.length)}/${toTranslate.length}\r`)
    await new Promise((r) => setTimeout(r, 120))
  }

  fs.writeFileSync(langPath, JSON.stringify(result, null, 2) + '\n', 'utf8')
  console.log(`\n[${langCode}] Successfully updated translation.json!`)
}

async function run() {
  const specificLang = process.argv[2]
  if (specificLang) {
    console.log(`Running sync for single language: ${specificLang}`)
    await syncPerspectivesForLocale(specificLang, process.argv[3] === '--force')
    return
  }

  console.log(`Starting sync for all ${allLanguages.length} non-English languages...`)
  for (let i = 0; i < allLanguages.length; i++) {
    const lang = allLanguages[i]
    console.log(`\n(${i + 1}/${allLanguages.length}) === Processing ${lang.name} (${lang.code}) ===`)
    try {
      await syncPerspectivesForLocale(lang.code)
    } catch (err) {
      console.error(`Error syncing ${lang.code}:`, err.message)
    }
    await new Promise((r) => setTimeout(r, 150))
  }
  console.log('\nAll languages perspectives sync finished!')
}

run()
