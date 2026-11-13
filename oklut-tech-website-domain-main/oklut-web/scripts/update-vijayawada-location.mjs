import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

const allDirs = fs
  .readdirSync(localesDir)
  .filter((f) => f !== 'en' && fs.statSync(path.join(localesDir, f)).isDirectory())

console.log(`Updating footer.vijayawadaLocation for ${allDirs.length} non-English languages...`)

async function translateVijayawada(code) {
  if (code === 'es') return 'Vijayawada, India'
  const u = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    code
  )}&dt=t&q=${encodeURIComponent('Vijayawada, India')}`
  try {
    const res = await fetch(u, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })
    if (!res.ok) return 'Vijayawada, India'
    const d = await res.json()
    let text = d[0].map((x) => x[0]).join('').trim()
    if (text.includes('Bandera') || text.toLowerCase().includes('andhra') || text.toLowerCase().includes('pradesh')) {
      return 'Vijayawada, India'
    }
    return text || 'Vijayawada, India'
  } catch (err) {
    return 'Vijayawada, India'
  }
}

async function processLocales(concurrency = 8) {
  let idx = 0
  let count = 0

  async function worker() {
    while (idx < allDirs.length) {
      const code = allDirs[idx++]
      const filePath = path.join(localesDir, code, 'translation.json')
      if (!fs.existsSync(filePath)) continue

      const translated = await translateVijayawada(code)
      try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        if (!data.footer) data.footer = {}
        data.footer.vijayawadaLocation = translated

        // Also fix hyderabad in Spanish if needed
        if (code === 'es' && data.footer.hyderabadLocation?.includes('Bandera')) {
          data.footer.hyderabadLocation = 'Hyderabad, India'
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
        count++
        process.stdout.write(`✓ [${code}] `)
      } catch (err) {
        console.error(`Failed ${code}:`, err.message)
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker())
  await Promise.all(workers)
  console.log(`\n\nDone! Successfully updated ${count} locale files.`)
}

processLocales().catch(console.error)
