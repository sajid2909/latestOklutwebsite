import fs from 'fs'
import path from 'path'
import { syncLocale } from './sync-single-locale.mjs'

const BATCH_1_INDIAN = ['ta', 'kn', 'ml', 'mr', 'bn', 'gu', 'pa', 'ur', 'or', 'as', 'ne', 'sa']

const BATCH_2_MAJOR = [
  'pt',
  'zh',
  'zh-TW',
  'ja',
  'ru',
  'it',
  'ko',
  'nl',
  'tr',
  'pl',
  'vi',
  'id',
  'ms',
  'th',
  'uk',
  'cs',
  'sv',
  'ro',
  'da',
  'fi',
  'no',
  'he',
  'fa',
]

const BATCH_3_REQUESTED = ['el', 'hu', 'az', 'sq', 'ga', 'zu']

async function run() {
  const arg = process.argv[2]
  let langs = []
  if (arg === 'indian') langs = BATCH_1_INDIAN
  else if (arg === 'major') langs = BATCH_2_MAJOR
  else if (arg === 'requested') langs = BATCH_3_REQUESTED
  else if (arg === 'all') langs = [...BATCH_1_INDIAN, ...BATCH_2_MAJOR, ...BATCH_3_REQUESTED]
  else if (arg) langs = [arg]
  else {
    console.log('Usage: node scripts/run-batch-sync.mjs [indian|major|requested|all|<langCode>]')
    return
  }

  console.log(`\n======================================================`)
  console.log(`Starting Batch Sync for ${langs.length} languages: ${langs.join(', ')}`)
  console.log(`======================================================\n`)

  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i]
    console.log(`[${i + 1}/${langs.length}] Syncing ${lang}...`)
    const t0 = Date.now()
    try {
      await syncLocale(lang)
      console.log(`✓ Completed ${lang} in ${((Date.now() - t0) / 1000).toFixed(1)}s\n`)
    } catch (err) {
      console.error(`✗ Error on ${lang}:`, err.message)
    }
    // Pause briefly between languages to avoid rate limiting
    await new Promise((r) => setTimeout(r, 600))
  }

  console.log('\nAll languages in batch completed!')
}

run().catch(console.error)
