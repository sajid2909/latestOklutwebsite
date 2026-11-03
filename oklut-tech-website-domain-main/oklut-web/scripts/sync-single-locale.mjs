import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

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

async function translateBatch(texts, targetLang, retries = 3) {
  if (texts.length === 0) return []
  const indexed = texts.map((t, i) => `<<< ${i} >>> ${t}`).join('\n')
  const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    targetLang
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
        if (parsed.length === texts.length && !parsed.some((x) => x === undefined)) {
          return parsed
        }
      }
    } catch (err) {
      if (attempt === retries) {
        console.warn(`Failed batch of ${texts.length} for ${targetLang}:`, err.message)
      }
      await new Promise((r) => setTimeout(r, 400 * attempt))
    }
  }

  // Fallback item by item
  const results = []
  for (const t of texts) {
    try {
      const u = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
        targetLang
      )}&dt=t&q=${encodeURIComponent(t)}`
      const r = await fetch(u, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      })
      const d = await r.json()
      results.push(d[0]?.map((s) => s[0]).join('') || t)
      await new Promise((res) => setTimeout(res, 30))
    } catch {
      results.push(t)
    }
  }
  return results
}

export async function syncLocale(langCode, forceAll = false) {
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

  const enLeaves = extractLeaves(en)
  const result = JSON.parse(JSON.stringify(existing))

  const toTranslate = []
  for (const leaf of enLeaves) {
    // If it's a careers page key, force exact English per specification
    if (leaf.path.startsWith('careers.')) {
      setByPath(result, leaf.path, leaf.text)
      continue
    }

    const currentVal = getByPath(result, leaf.path)
    const hasTeluguContamination =
      langCode !== 'te' &&
      typeof currentVal === 'string' &&
      /[\u0C00-\u0C7F]/.test(currentVal)

    if (
      forceAll ||
      hasTeluguContamination ||
      currentVal === undefined ||
      currentVal === null ||
      (typeof currentVal === 'string' && currentVal.trim() === '') ||
      (typeof currentVal === 'string' && currentVal === leaf.text && leaf.text.length > 8 && !/^[A-Z0-9\s—–.,-]+$/.test(leaf.text))
    ) {
      toTranslate.push(leaf)
    }
  }

  console.log(`[${langCode}] Total canonical: ${enLeaves.length}, needing translation: ${toTranslate.length}`)

  // Translate in chunks of 20
  const chunkSize = 20
  for (let i = 0; i < toTranslate.length; i += chunkSize) {
    const chunk = toTranslate.slice(i, i + chunkSize)
    const texts = chunk.map((c) => c.text)
    const translated = await translateBatch(texts, langCode)
    chunk.forEach((item, idx) => {
      setByPath(result, item.path, translated[idx] || item.text)
    })
    process.stdout.write(`  Processed ${Math.min(i + chunkSize, toTranslate.length)}/${toTranslate.length}\r`)
    await new Promise((r) => setTimeout(r, 100))
  }

  fs.writeFileSync(langPath, JSON.stringify(result, null, 2) + '\n', 'utf8')
  console.log(`\n[${langCode}] Done! Saved ${langPath}`)
}

const isDirectCall = process.argv[1] && process.argv[1].endsWith('sync-single-locale.mjs')
if (isDirectCall && process.argv[2]) {
  syncLocale(process.argv[2], process.argv[3] === '--force')
}
