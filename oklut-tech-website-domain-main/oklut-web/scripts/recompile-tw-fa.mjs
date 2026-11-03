import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const enPath = path.join(localesDir, 'en/translation.json')
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
  const delimiter = ' ||| '
  const combined = texts.join(delimiter)
  const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(combined)}`

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const fullTranslated = data[0].map((item) => item[0]).join('')
        const parts = fullTranslated.split(/\s*\|\|\|\s*/)
        if (parts.length === texts.length) {
          return parts.map((p) => p.trim())
        }
      }
    } catch (e) {
      if (attempt === retries) {
        console.warn(`[${targetLang}] Batch failed (${e.message}), translating individually...`)
        const individualResults = []
        for (const singleText of texts) {
          try {
            await sleep(50)
            const singleUrl = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(singleText)}`
            const sRes = await fetch(singleUrl, {
              headers: { 'User-Agent': 'Mozilla/5.0' }
            })
            if (sRes.ok) {
              const sData = await sRes.json()
              const trans = sData[0]?.map((x) => x[0]).join('') || singleText
              individualResults.push(trans)
            } else {
              individualResults.push(singleText)
            }
          } catch {
            individualResults.push(singleText)
          }
        }
        return individualResults
      }
      await sleep(300 * attempt)
    }
  }
  return texts
}

async function recompileLanguage(langCode) {
  console.log(`\nRe-compiling ${langCode} with dict-chrome-ex...`)
  const leaves = extractLeaves(en)
  const targetObj = JSON.parse(JSON.stringify(en))
  const batchSize = 30

  for (let i = 0; i < leaves.length; i += batchSize) {
    const chunk = leaves.slice(i, i + batchSize)
    const texts = chunk.map((l) => l.text)
    const translated = await translateBatch(texts, langCode)
    chunk.forEach((item, idx) => {
      setByPath(targetObj, item.path, translated[idx] || item.text)
    })
    process.stdout.write(`  [${langCode}] ${i + chunk.length}/${leaves.length} strings done...\r`)
    await sleep(80)
  }

  targetObj.nav = targetObj.nav || {}
  targetObj.nav.language = 'Language'

  const outDir = path.join(localesDir, langCode)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'translation.json'), JSON.stringify(targetObj, null, 2), 'utf8')
  console.log(`\n✓ Successfully recompiled ${langCode}!`)
}

async function run() {
  await recompileLanguage('zh-TW')
  await recompileLanguage('fa')
}

run()
