import { syncLocale } from './sync-single-locale.mjs'

const CONTAMINATED = [
  'de', // German
  'it', // Italian
  'pt', // Portuguese
  'ja', // Japanese
  'ta', // Tamil
  'kn', // Kannada
  'ml', // Malayalam
  'mr', // Marathi
  'bn', // Bengali
  'gu', // Gujarati
  'pa', // Punjabi
  'ur', // Urdu
]

async function cleanAll() {
  console.log(`Starting cleanup for ${CONTAMINATED.length} contaminated languages...`)
  for (let i = 0; i < CONTAMINATED.length; i++) {
    const code = CONTAMINATED[i]
    console.log(`\n======================================================`)
    console.log(`[${i + 1}/${CONTAMINATED.length}] Purging & Syncing: ${code}`)
    console.log(`======================================================`)
    const t0 = Date.now()
    try {
      await syncLocale(code)
      console.log(`✓ Completed ${code} in ${((Date.now() - t0) / 1000).toFixed(1)}s`)
    } catch (err) {
      console.error(`✗ Error on ${code}:`, err.message)
    }
    // Brief breather between languages
    await new Promise((r) => setTimeout(r, 600))
  }
  console.log('\nAll contaminated languages cleaned successfully!')
}

cleanAll().catch(console.error)
