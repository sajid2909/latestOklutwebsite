import { syncPerspectivesForLocale } from './sync-perspectives-locales.mjs'

const langsToRefine = ['as', 'or', 'da', 'sv', 'no', 'fi', 'de', 'el', 'cs', 'ms', 'id', 'hu', 'ta', 'mr']

for (const code of langsToRefine) {
  console.log(`\n=== Refining ${code} ===`)
  try {
    await syncPerspectivesForLocale(code)
  } catch (e) {
    console.error(`Error on ${code}:`, e.message)
  }
}
console.log('Refinement pass complete!')
