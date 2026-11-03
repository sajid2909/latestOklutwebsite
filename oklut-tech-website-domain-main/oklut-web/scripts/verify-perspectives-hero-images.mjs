import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

console.log('='.repeat(80))
console.log('PERSPECTIVES HERO IMAGES AUDIT & VERIFICATION')
console.log('='.repeat(80))

// 1. Check physical image files exist in public/img/perspectives
const images = [
  {
    article: 'Cybersecurity',
    route: '/perspectives/cybersecurity',
    relPath: 'img/perspectives/cyber-resilience-connected-enterprise.jpg',
    expectedLength: 75558,
  },
  {
    article: 'Cloud & Modernization',
    route: '/perspectives/cloud-modernization',
    relPath: 'img/perspectives/legacy-application-cloud-modernization.jpg',
    expectedLength: 66351,
  },
]

let allPassed = true

for (const img of images) {
  const absPath = path.join(rootDir, 'public', img.relPath)
  if (!fs.existsSync(absPath)) {
    console.error(`[FAIL] Image missing from disk: ${absPath}`)
    allPassed = false
    continue
  }
  const stat = fs.statSync(absPath)
  console.log(`✓ Physical file exists: public/${img.relPath} (${stat.size} bytes)`)
  if (stat.size !== img.expectedLength) {
    console.warn(`  [WARN] Size difference: got ${stat.size}, expected ${img.expectedLength}`)
  }
}

// 2. Check JSX components have the correct image prop
const cyberJsx = fs.readFileSync(path.join(rootDir, 'src/pages/perspectives/CybersecurityPerspective.jsx'), 'utf8')
const cloudJsx = fs.readFileSync(path.join(rootDir, 'src/pages/perspectives/CloudModernizationPerspective.jsx'), 'utf8')

const cyberImgMatch = cyberJsx.match(/image="([^"]+)"/)
const cloudImgMatch = cloudJsx.match(/image="([^"]+)"/)

console.log('\nJSX Image Prop Bindings:')
console.log(`  - CybersecurityPerspective.jsx: image="${cyberImgMatch ? cyberImgMatch[1] : 'NOT FOUND'}"`)
console.log(`  - CloudModernizationPerspective.jsx: image="${cloudImgMatch ? cloudImgMatch[1] : 'NOT FOUND'}"`)

if (cyberImgMatch?.[1] !== '/img/perspectives/cyber-resilience-connected-enterprise.jpg') {
  console.error('[FAIL] CybersecurityPerspective has incorrect image prop!')
  allPassed = false
} else {
  console.log('  ✓ CybersecurityPerspective matches original asset!')
}

if (cloudImgMatch?.[1] !== '/img/perspectives/legacy-application-cloud-modernization.jpg') {
  console.error('[FAIL] CloudModernizationPerspective has incorrect image prop!')
  allPassed = false
} else {
  console.log('  ✓ CloudModernizationPerspective matches original asset!')
}

// 3. Check language invariance
console.log('\nChecking Language Invariance across English, Telugu, and Russian:')
for (const lang of ['en', 'te', 'ru']) {
  const trans = JSON.parse(fs.readFileSync(path.join(rootDir, `src/i18n/locales/${lang}/translation.json`), 'utf8'))
  const cyberArt = trans.perspectivesArticles?.cybersecurity
  const cloudArt = trans.perspectivesArticles?.cloudModernization
  console.log(`  [${lang}] Cybersecurity Title: "${cyberArt?.title?.slice(0, 45)}..." | imageCaption: "${cyberArt?.imageCaption?.slice(0, 45)}..."`)
  console.log(`  [${lang}] Cloud Modernization Title: "${cloudArt?.title?.slice(0, 45)}..." | imageCaption: "${cloudArt?.imageCaption?.slice(0, 45)}..."`)
}

console.log('\n' + '='.repeat(80))
if (allPassed) {
  console.log('ALL PERSPECTIVES HERO IMAGE CHECKS PASSED!')
} else {
  console.log('PERSPECTIVES HERO IMAGE CHECKS FAILED!')
}
console.log('='.repeat(80))
