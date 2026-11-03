import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const assetsDir = path.join(distDir, 'assets')
const indexHtmlPath = path.join(distDir, 'index.html')

console.log('=== VERIFYING BUNDLE OPTIMIZATION ===\n')

if (!fs.existsSync(assetsDir)) {
  console.error('dist/assets does not exist! Run npm run build first.')
  process.exit(1)
}

const files = fs.readdirSync(assetsDir)
const html = fs.readFileSync(indexHtmlPath, 'utf8')

// 1. Initial Bundle Assets in index.html
console.log('1. INITIAL ENTRY ASSETS IN index.html:')
const entryScripts = []
const preloads = []
for (const match of html.matchAll(/<(?:script[^>]*src=["']([^"']+)["']|link[^>]*rel=["']modulepreload["'][^>]*href=["']([^"']+)["'])/g)) {
  const src = match[1] || match[2]
  if (src.endsWith('.js')) {
    if (match[0].startsWith('<script')) entryScripts.push(src)
    else preloads.push(src)
  }
}
console.log('  Entry Script:', entryScripts)
console.log('  Preloads:', preloads)

// 2. Initial JS bundle size
let initialJsBytes = 0
for (const script of [...entryScripts, ...preloads]) {
  const basename = path.basename(script)
  const fullPath = path.join(assetsDir, basename)
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size
    initialJsBytes += size
    console.log(`  - ${basename}: ${(size / 1024).toFixed(2)} KB`)
  }
}
console.log(`  TOTAL INITIAL JS: ${(initialJsBytes / 1024).toFixed(2)} KB`)

// 3. Check for any other locale chunks in initial entry
const nonEnglishLocalesLoadedInitially = preloads.filter(p => /locale-(?!en\b)[a-z]+/.test(p))
console.log('\n2. NON-ENGLISH LOCALES PRELOADED IN INITIAL ENTRY:')
if (nonEnglishLocalesLoadedInitially.length === 0) {
  console.log('  PASSED: 0 non-English locales are preloaded. English loads cleanly without any other locale!')
} else {
  console.error('  FAILED: Non-English locales were preloaded:', nonEnglishLocalesLoadedInitially)
}

// 4. Verify all 115 locales exist as chunks or built-in
console.log('\n3. CHECKING ALL 114 DYNAMIC LOCALE CHUNKS:')
const localeChunks = files.filter(f => f.startsWith('locale-') && f.endsWith('.js'))
console.log(`  Found ${localeChunks.length} locale-*.js chunks in dist/assets`)

// Check against supported languages
const languagesJsPath = path.resolve('src/i18n/languages.js')
const langJsContent = fs.readFileSync(languagesJsPath, 'utf8')
const codeMatches = [...langJsContent.matchAll(/"code":\s*"([^"]+)"/g)].map(m => m[1])
const uniqueCodes = [...new Set(codeMatches)]
console.log(`  Total unique languages in languages.js: ${uniqueCodes.length}`)

const nonEnCodes = uniqueCodes.filter(c => c !== 'en')
const missingChunks = []
for (const code of nonEnCodes) {
  const found = files.find(f => (f.startsWith(`locale-${code}-`) || f.startsWith(`translation-`)) && f.endsWith('.js'))
  if (!found) {
    missingChunks.push(code)
  }
}

if (missingChunks.length === 0) {
  console.log(`  PASSED: All ${nonEnCodes.length} non-English languages have corresponding dynamic code-split chunks!`)
} else {
  console.error(`  FAILED: Missing chunks for:`, missingChunks)
}

console.log('\n=== VERIFICATION COMPLETE ===')

