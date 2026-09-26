/* Fetch themed, CC-licensed landscape images for the 12 new Perspectives.
 * Downloads from Openverse (commercial-use licensed), crops each to 960x540
 * and saves as WebP in public/img/opt/np-<slug>.webp.
 * Writes scripts/np-image-credits.md with source attribution info.
 */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PERSPECTIVES = [
  { slug: 'future-of-work', queries: ['modern office team technology laptops', 'coworking office collaboration'] },
  { slug: 'customer-experience', queries: ['customer service technology', 'smartphone shopping digital'] },
  { slug: 'innovation-culture', queries: ['team brainstorming whiteboard sticky notes', 'workshop ideas team'] },
  { slug: 'human-technology', queries: ['people laptop technology working', 'hands tablet digital'] },
  { slug: 'business-resilience', queries: ['business people city walking', 'business meeting strategy'] },
  { slug: 'digital-leadership', queries: ['business executives meeting', 'conference speaker business'] },
  { slug: 'trust-responsibility', queries: ['cybersecurity padlock security', 'server room data security'] },
  { slug: 'sustainable-growth', queries: ['green building sustainability', 'solar panels modern'] },
  { slug: 'data-decisions', queries: ['data analytics dashboard screen', 'charts graphs monitor'] },
  { slug: 'industry-outlook', queries: ['factory automation industry', 'city infrastructure aerial'] },
  { slug: 'people-purpose', queries: ['diverse team collaboration office', 'team hands together'] },
  { slug: 'next-five-years', queries: ['futuristic skyline night', 'modern architecture glass building'] },
]

const UA = 'oklut-site-build/1.0'
const OUT_DIR = path.join(__dirname, '..', 'public', 'img', 'opt')
const TMP_DIR = path.join(__dirname, 'np-tmp')
const CREDITS_PATH = path.join(__dirname, 'np-image-credits.md')
const PREF_LICENSES = ['cc0', 'pdm'] // attribution-free first; others are commercial-use allowed

function log(msg) { process.stdout.write(msg + '\n') }

async function search(query) {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page_size=20&aspect_ratio=wide&license_type=commercial&size=large&mature=false`
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20_000) })
  if (!res.ok) throw new Error(`search ${res.status}`)
  const json = await res.json()
  return json.results || []
}

function isCandidate(r) {
  if (!r.url) return false
  const ar = r.width && r.height ? r.width / r.height : 0
  return r.width >= 1024 && ar >= 1.3 && ar <= 2.6
}

async function download(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30_000) })
  if (!res.ok) throw new Error(`download ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 30_000) throw new Error('too small, likely broken')
  return buf
}

async function cropToWebp(buf, outFile) {
  const meta = await sharp(buf).metadata()
  if (!meta.width || meta.width < 800) throw new Error(`source too small (${meta.width}px)`)
  await sharp(buf)
    .resize(960, 540, { fit: 'cover', position: 'attention' })
    .webp({ quality: 78 })
    .toFile(outFile)
}

const usedIds = new Set()
const credits = ['# New perspective image sources (Openverse)', '']

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  fs.mkdirSync(TMP_DIR, { recursive: true })
  for (const p of PERSPECTIVES) {
    const outFile = path.join(OUT_DIR, `np-${p.slug}.webp`)
    let done = false
    for (const q of p.queries) {
      if (done) break
      let results = []
      try { results = await search(q) } catch (e) { log(`  ! search failed (${e.message})`); continue }
      const filtered = results.filter(isCandidate)
      // prefer attribution-free licenses
      filtered.sort((a, b) => Number(PREF_LICENSES.includes(b.license)) - Number(PREF_LICENSES.includes(a.license)))
      for (const r of filtered) {
        if (usedIds.has(r.id)) continue
        try {
          const buf = await download(r.url)
          await cropToWebp(buf, outFile)
          usedIds.add(r.id)
          credits.push(`- ${p.slug}: "${r.title || 'untitled'}" by ${r.creator || 'unknown'} — ${r.license.toUpperCase()} — ${r.foreign_landing_url}`)
          log(`✓ ${p.slug} ← ${r.license} ${r.width}x${r.height} "${(r.title || '').slice(0, 50)}"`)
          done = true
          break
        } catch (e) {
          log(`  · skip candidate: ${e.message}`)
        }
      }
    }
    if (!done) log(`✗ ${p.slug}: NO IMAGE FOUND — needs manual pick`)
  }
  fs.writeFileSync(CREDITS_PATH, credits.join('\n') + '\n')
  log('\ncredits written to scripts/np-image-credits.md')
}

main().catch((e) => { console.error(e); process.exit(1) })
