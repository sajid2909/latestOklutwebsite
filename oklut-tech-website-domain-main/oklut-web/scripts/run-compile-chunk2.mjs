import { compileLanguage } from './compile-stage2a-locales.mjs'

const CHUNK2 = [
  { code: 'vi', name: 'Vietnamese' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'th', name: 'Thai' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'el', name: 'Greek' },
  { code: 'cs', name: 'Czech' },
  { code: 'sv', name: 'Swedish' },
]

async function main() {
  console.log(`[Worker 2] Starting compilation for ${CHUNK2.length} languages...`)
  for (const lang of CHUNK2) {
    console.log(`\n[Worker 2] Compiling ${lang.name} (${lang.code})...`)
    try {
      await compileLanguage(lang.code, lang.name)
    } catch (e) {
      console.error(`[Worker 2] Error compiling ${lang.name}:`, e)
    }
  }
  console.log(`\n✓ [Worker 2] All languages completed.`)
}

main()
