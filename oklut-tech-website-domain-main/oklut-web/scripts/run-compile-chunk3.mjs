import { compileLanguage } from './compile-stage2a-locales.mjs'

const CHUNK3 = [
  { code: 'ro', name: 'Romanian' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'da', name: 'Danish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'he', name: 'Hebrew' },
  { code: 'fa', name: 'Persian' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
]

async function main() {
  console.log(`[Worker 3] Starting compilation for ${CHUNK3.length} languages...`)
  for (const lang of CHUNK3) {
    console.log(`\n[Worker 3] Compiling ${lang.name} (${lang.code})...`)
    try {
      await compileLanguage(lang.code, lang.name)
    } catch (e) {
      console.error(`[Worker 3] Error compiling ${lang.name}:`, e)
    }
  }
  console.log(`\n✓ [Worker 3] All languages completed.`)
}

main()
