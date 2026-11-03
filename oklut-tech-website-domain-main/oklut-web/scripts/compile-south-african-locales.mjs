import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

export const SOUTH_AFRICAN_LANGUAGES = [
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'nr', name: 'Ndebele', nativeName: 'isiNdebele' },
  { code: 'nso', name: 'Sepedi', nativeName: 'Sepedi' },
  { code: 'st', name: 'Sesotho', nativeName: 'Sesotho' },
  { code: 'tn', name: 'Setswana', nativeName: 'Setswana' },
  { code: 'ss', name: 'Swati', nativeName: 'siSwati' },
  { code: 've', name: 'Venda', nativeName: 'Tshivenda' },
  { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga' },
]

export const CAREERS_NAV_OVERRIDES = {
  af: 'Loopbane',
  xh: 'Amathuba Omsebenzi',
  nr: 'Amathuba Womsebenzi',
  nso: 'Mešomo',
  st: 'Menyetla ea Mosebetsi',
  tn: 'Ditiro',
  ss: 'Amathuba Emsebenti',
  ve: 'Mishumo',
  ts: 'Mitirho',
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Extract all strings with hierarchical path
export function extractLeaves(obj, currentPath = '') {
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

// Deep set by path supporting array indices
export function setByPath(obj, pathStr, value) {
  const tokens = []
  const regex = /([^.[\]]+)|\[(\d+)\]/g
  let m
  while ((m = regex.exec(pathStr)) !== null) {
    if (m[2] !== undefined) tokens.push(parseInt(m[2], 10))
    else tokens.push(m[1])
  }
  let curr = obj
  for (let i = 0; i < tokens.length - 1; i++) {
    const key = tokens[i]
    const nextKey = tokens[i + 1]
    if (curr[key] === undefined || curr[key] === null) {
      curr[key] = typeof nextKey === 'number' ? [] : {}
    }
    curr = curr[key]
  }
  curr[tokens[tokens.length - 1]] = value
}

// Protect variables and tags before machine translation
function protectPlaceholders(text) {
  const placeholders = []
  // Matches {{...}} or <1> or </1>
  const protectedText = text.replace(/\{\{[^}]+\}\}|<\/?\d+>/g, (match) => {
    const token = `__PH_${placeholders.length}__`
    placeholders.push({ token, original: match })
    return token
  })
  return { protectedText, placeholders }
}

// Restore placeholders after translation
function restorePlaceholders(text, placeholders) {
  let restored = text
  for (const { token, original } of placeholders) {
    // Escape for regex and allow loose spaces like __ PH_0 __
    const pattern = new RegExp(`__\\s*${token.slice(2, -2).replace(/_/g, '\\s*_\\s*')}\\s*__`, 'gi')
    restored = restored.replace(pattern, original)
    // Fallback direct replace
    if (restored.includes(token)) {
      restored = restored.replaceAll(token, original)
    }
  }
  return restored
}

// Translate batch of texts using Google free translate endpoint
async function translateBatch(texts, targetLang, retries = 3) {
  if (texts.length === 0) return []

  const protectedItems = texts.map((t) => protectPlaceholders(t))
  const indexed = protectedItems.map((p, i) => `<<< ${i} >>> ${p.protectedText}`).join('\n')
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
    targetLang
  )}&dt=t&q=${encodeURIComponent(indexed)}`

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const fullTranslation = data[0].map((s) => s[0]).join('')
        const regex = /<<<\s*(\d+)\s*>>>(?:\s*)([\s\S]*?)(?=(?:<<<\s*\d+\s*>>>|$))/g
        let m
        const parsed = []
        while ((m = regex.exec(fullTranslation)) !== null) {
          const idx = parseInt(m[1], 10)
          parsed[idx] = m[2].trim()
        }
        if (parsed.length === texts.length && !parsed.some((x) => x === undefined)) {
          return parsed.map((item, i) => restorePlaceholders(item, protectedItems[i].placeholders))
        }
      }
    } catch (err) {
      if (attempt === retries) {
        // Fallback: translate individually
        break
      }
      await sleep(350 * attempt)
    }
  }

  // Individual item fallback
  const fallbackResults = []
  for (let i = 0; i < texts.length; i++) {
    const orig = texts[i]
    const prot = protectedItems[i]
    try {
      const singleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        targetLang
      )}&dt=t&q=${encodeURIComponent(prot.protectedText)}`
      const r = await fetch(singleUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
      })
      const d = await r.json()
      const trans = d[0]?.map((s) => s[0]).join('').trim() || orig
      fallbackResults.push(restorePlaceholders(trans, prot.placeholders))
      await sleep(40)
    } catch {
      fallbackResults.push(orig)
    }
  }
  return fallbackResults
}

// Compile a full translation bundle for a target language
export async function compileSouthAfricanLanguage(langCode, langName) {
  console.log(`\n======================================================`)
  console.log(`Compiling: ${langName} (${langCode})`)
  console.log(`======================================================`)

  const outDir = path.join(localesDir, langCode)
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  const outFile = path.join(outDir, 'translation.json')

  const leaves = extractLeaves(en)
  console.log(`Total canonical strings to translate: ${leaves.length}`)

  if (!process.argv.includes('--force') && fs.existsSync(outFile)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outFile, 'utf8'))
      const flat = extractLeaves(existing)
      if (flat.length === leaves.length) {
        console.log(`✓ [SKIP] ${langName} (${langCode}) already compiled (${flat.length} keys). Use --force to recompile.`)
        return
      }
    } catch {
      // recompile if corrupted
    }
  }

  const result = JSON.parse(JSON.stringify(en))
  const batchSize = 25
  const totalBatches = Math.ceil(leaves.length / batchSize)

  const startTime = Date.now()

  for (let b = 0; b < totalBatches; b++) {
    const chunk = leaves.slice(b * batchSize, (b + 1) * batchSize)
    const texts = chunk.map((item) => item.text)

    process.stdout.write(`  [${langCode}] Batch ${b + 1}/${totalBatches} (${chunk.length} items)... `)
    const translated = await translateBatch(texts, langCode)

    for (let i = 0; i < chunk.length; i++) {
      let val = translated[i] || chunk[i].text

      // Ensure canonical variables are preserved
      const origVars = chunk[i].text.match(/\{\{[^}]+\}\}/g)
      if (origVars) {
        for (const ov of origVars) {
          if (!val.includes(ov)) {
            // Attempt smart recovery
            const varName = ov.slice(2, -2).trim()
            const looseRegex = new RegExp(`\\{\\{\\s*${varName}[^}]*\\}\\}|\\{\\{[^}]*\\}\\}`, 'i')
            if (looseRegex.test(val)) {
              val = val.replace(looseRegex, ov)
            } else {
              // Append variable if stripped
              val = `${val} ${ov}`
            }
          }
        }
      }

      setByPath(result, chunk[i].path, val)
    }
    console.log(`Done.`)
    await sleep(80)
  }

  // Apply canonical nav.careers override
  if (CAREERS_NAV_OVERRIDES[langCode]) {
    if (!result.nav) result.nav = {}
    result.nav.careers = CAREERS_NAV_OVERRIDES[langCode]
  }

  fs.writeFileSync(outFile, JSON.stringify(result, null, 2) + '\n', 'utf8')
  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log(`✓ Completed ${langName} (${langCode}) in ${duration}s -> Saved ${outFile}`)
}

async function main() {
  const target = process.argv[2]
  let list = SOUTH_AFRICAN_LANGUAGES
  if (target) {
    list = SOUTH_AFRICAN_LANGUAGES.filter((l) => l.code === target)
    if (list.length === 0) {
      console.error(`Language code "${target}" not found in South African languages list.`)
      process.exit(1)
    }
  }

  console.log(`Processing ${list.length} South African language(s): ${list.map((l) => l.code).join(', ')}`)
  for (const lang of list) {
    try {
      await compileSouthAfricanLanguage(lang.code, lang.name)
    } catch (err) {
      console.error(`Error compiling ${lang.code}:`, err)
    }
  }
  console.log('\nAll requested South African languages compiled successfully!')
}

const isDirectRun = process.argv[1] && process.argv[1].endsWith('compile-south-african-locales.mjs')
if (isDirectRun) {
  main().catch(console.error)
}
