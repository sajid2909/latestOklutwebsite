import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SUPPORTED_LANGUAGES } from '../src/i18n/languages.js'
import { syncLocale } from './sync-single-locale.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')
const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en/translation.json'), 'utf8'))

function countLeafKeys(obj) {
  let count = 0
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      count += countLeafKeys(obj[k])
    } else {
      count++
    }
  }
  return count
}

const canonicalCount = countLeafKeys(en)

async function main() {
  console.log(`======================================================================`)
  console.log(`OKLUT ALL-48-LANGUAGES CONCURRENT SYNC ENGINE`)
  console.log(`Canonical keys in en/translation.json: ${canonicalCount}`)
  console.log(`======================================================================\n`)

  // Determine which languages need syncing (< 95% of canonical count)
  const queue = []
  for (const lang of SUPPORTED_LANGUAGES) {
    if (lang.code === 'en') continue
    const langFile = path.join(localesDir, lang.code, 'translation.json')
    if (!fs.existsSync(langFile)) {
      queue.push({ code: lang.code, name: lang.name, count: 0, reason: 'Missing file' })
      continue
    }
    try {
      const data = JSON.parse(fs.readFileSync(langFile, 'utf8'))
      const cnt = countLeafKeys(data)
      const pct = Math.round((cnt / canonicalCount) * 100)
      if (pct < 95) {
        queue.push({ code: lang.code, name: lang.name, count: cnt, pct, reason: `Only ${pct}% complete (${cnt}/${canonicalCount})` })
      } else {
        console.log(`  ✓ [${lang.code}] ${lang.name} already complete (${cnt} keys, ${pct}%)`)
      }
    } catch (err) {
      queue.push({ code: lang.code, name: lang.name, count: 0, reason: 'Parse error' })
    }
  }

  console.log(`\nLanguages queued for synchronization: ${queue.length}`)
  console.log(queue.map(q => `${q.code} (${q.name})`).join(', '))
  console.log(`----------------------------------------------------------------------\n`)

  if (queue.length === 0) {
    console.log('🎉 ALL 48 LANGUAGES ARE ALREADY 100% COMPLETE!')
    return
  }

  // Run with concurrency = 3
  const CONCURRENCY = 3
  let activeIndex = 0
  let completed = 0
  const total = queue.length
  const startTime = Date.now()

  async function worker(workerId) {
    while (activeIndex < queue.length) {
      const idx = activeIndex++
      const item = queue[idx]
      const t0 = Date.now()
      console.log(`[Worker ${workerId}] [${idx + 1}/${total}] START: ${item.code} (${item.name})...`)
      try {
        await syncLocale(item.code)
        completed++
        const elapsed = ((Date.now() - t0) / 1000).toFixed(1)
        console.log(`[Worker ${workerId}] ✓ DONE: ${item.code} (${item.name}) in ${elapsed}s [${completed}/${total} completed]`)
      } catch (err) {
        console.error(`[Worker ${workerId}] ✗ FAIL: ${item.code}:`, err.message)
      }
    }
  }

  const workers = []
  for (let w = 1; w <= CONCURRENCY; w++) {
    workers.push(worker(w))
  }

  await Promise.all(workers)

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1)
  console.log(`\n======================================================================`)
  console.log(`🎉 ALL ${completed}/${total} QUEUED LANGUAGES HAVE BEEN SYNCHRONIZED IN ${totalTime} MINUTES!`)
  console.log(`======================================================================\n`)
}

main().catch(console.error)
