import { compileLanguage } from './compile-stage2a-locales.mjs'

const STAGE_2A_LANGUAGES = [
  { code: 'or', name: 'Odia' },
  { code: 'as', name: 'Assamese' },
  { code: 'ne', name: 'Nepali' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'ko', name: 'Korean' },
  { code: 'nl', name: 'Dutch' },
  { code: 'tr', name: 'Turkish' },
  { code: 'pl', name: 'Polish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'th', name: 'Thai' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'el', name: 'Greek' },
  { code: 'cs', name: 'Czech' },
  { code: 'sv', name: 'Swedish' },
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
  console.log(`Starting compilation for ${STAGE_2A_LANGUAGES.length} Stage 2A languages...`)
  const startTime = Date.now()

  for (let i = 0; i < STAGE_2A_LANGUAGES.length; i++) {
    const lang = STAGE_2A_LANGUAGES[i]
    console.log(`\n======================================================`)
    console.log(`[${i + 1}/${STAGE_2A_LANGUAGES.length}] Compiling ${lang.name} (${lang.code})`)
    console.log(`======================================================`)
    try {
      await compileLanguage(lang.code, lang.name)
    } catch (err) {
      console.error(`Error compiling ${lang.name} (${lang.code}):`, err)
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log(`\n✓ All ${STAGE_2A_LANGUAGES.length} languages processed in ${duration}s.`)
}

main()
