import { syncLocale } from './sync-single-locale.mjs'

const PRIORITY_LANGS = [
  'ru', // Russian
  'es', // Spanish
  'hi', // Hindi
  'el', // Greek
  'ar', // Arabic
  'fr', // French
  'de'  // German
]

async function run() {
  console.log(`\n======================================================`)
  console.log(`Starting Priority Batch Sync for: ${PRIORITY_LANGS.join(', ')}`)
  console.log(`======================================================\n`)

  for (let i = 0; i < PRIORITY_LANGS.length; i++) {
    const lang = PRIORITY_LANGS[i]
    console.log(`\n[${i + 1}/${PRIORITY_LANGS.length}] Syncing ${lang}...`)
    const t0 = Date.now()
    try {
      await syncLocale(lang)
      console.log(`✓ Completed ${lang} in ${((Date.now() - t0) / 1000).toFixed(1)}s`)
    } catch (err) {
      console.error(`✗ Error on ${lang}:`, err.message)
    }
  }
  console.log('\nAll priority languages successfully synchronized!')
}

run()
