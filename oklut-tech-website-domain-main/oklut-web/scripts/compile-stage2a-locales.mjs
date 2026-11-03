import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Extract all leaf strings with paths
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

// Deep set a value at a path
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

// Translate a batch of texts using Google free web endpoint with retry
async function translateBatch(texts, targetLang, retries = 3) {
  const delimiter = ' ||| '
  const combined = texts.join(delimiter)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(combined)}`

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const translatedFull = data[0].map((chunk) => chunk[0]).join('')
      const split = translatedFull.split('|||').map((s) => s.trim())
      if (split.length === texts.length) {
        return split
      }
      // If delimiter splitting had minor mismatch, fallback to individual translation
      throw new Error(`Length mismatch: got ${split.length}, expected ${texts.length}`)
    } catch (err) {
      if (attempt === retries) {
        // Fallback: translate individually
        const individualResults = []
        for (const t of texts) {
          try {
            const singleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(t)}`
            const singleRes = await fetch(singleUrl)
            const singleData = await singleRes.json()
            individualResults.push(singleData[0].map((c) => c[0]).join('').trim())
            await sleep(50)
          } catch {
            individualResults.push(t)
          }
        }
        return individualResults
      }
      await sleep(300 * attempt)
    }
  }
}

export async function compileLanguage(langCode, langName) {
  console.log(`\nStarting compilation for: ${langName} (${langCode})...`)
  const leaves = extractLeaves(en)
  console.log(`Extracted ${leaves.length} translatable strings from en/translation.json.`)

  const cloned = JSON.parse(JSON.stringify(en))
  const batchSize = 35
  const totalBatches = Math.ceil(leaves.length / batchSize)

  for (let b = 0; b < totalBatches; b++) {
    const chunk = leaves.slice(b * batchSize, (b + 1) * batchSize)
    const texts = chunk.map((item) => item.text)
    process.stdout.write(`  [${langCode}] Batch ${b + 1}/${totalBatches} (${chunk.length} items)... `)

    const translated = await translateBatch(texts, langCode)
    for (let i = 0; i < chunk.length; i++) {
      let val = translated[i] || chunk[i].text
      // Preserve {{year}} template variable
      if (chunk[i].text.includes('{{year}}')) {
        val = val.replace(/\{\{\s*year\s*\}\}/gi, '{{year}}')
      }
      setByPath(cloned, chunk[i].path, val)
    }
    console.log(`Done.`)
    await sleep(120) // respectful throttle
  }

  // Ensure specific known critical overrides
  if (!cloned.nav.language) cloned.nav.language = 'Language'
  if (!cloned.nav.chooseLanguage) cloned.nav.chooseLanguage = cloned.nav.chooseLanguage || 'Choose Language'

  const outDir = path.join(localesDir, langCode)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'translation.json'), JSON.stringify(cloned, null, 2), 'utf8')
  console.log(`✓ Completed & saved ${langName} (${langCode}) to ${path.join(outDir, 'translation.json')}`)
}
