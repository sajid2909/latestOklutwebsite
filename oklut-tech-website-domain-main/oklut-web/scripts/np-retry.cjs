/* Retry the missing/rejected new-perspective images with 429 backoff. */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const RETRY = [
  { slug: 'future-of-work', queries: ['open plan office people computers', 'startup office workspace team', 'business people working office'] },
  { slug: 'customer-experience', queries: ['customer support headset woman', 'mobile payment smartphone cafe', 'woman shopping phone store'] },
  { slug: 'innovation-culture', queries: ['sticky notes brainstorm wall', 'whiteboard meeting ideas team', 'design thinking workshop'] },
  { slug: 'trust-responsibility', queries: ['padlock security computer', 'data center servers', 'security lock technology'] },
]

const UA = 'oklut-site-build/1.0'
const OUT_DIR = path.join(__dirname, '..', 'public', 'img', 'opt')
const CREDITS_PATH = path.join(__dirname, 'np-image-credits.md')
const PREF_LICENSES = ['cc0', 'pdm']
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function log(msg) { process.stdout.write(msg + '\n') }

async function search(query) {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page_size=20&aspect_ratio=wide&license_type=commercial&size=large&mature=false`
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20_000) })
  if (!res.ok) throw new Error(`search ${res.status}`)
  return (await res.json()).results || []
}

function isCandidate(r) {
  if (!r.url) return false
  const ar = r.width && r.height ? r.width / r.height : 0
  return r.width >= 1024 && ar >= 1.3 && ar <= 2.6
}

async function download(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30_000) })
  if (res.status === 429) throw Object.assign(new Error('429'), { rateLimited: true })
  if (!res.ok) throw new Error(`download ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 30_000) throw new Error('too small')
  return buf
}

async function cropToWebp(buf, outFile) {
  const meta = await sharp(buf).metadata()
  if (!meta.width || meta.width < 800) throw new Error(`source too small (${meta.width}px)`)
  await sharp(buf).resize(960, 540, { fit: 'cover', position: 'attention' }).webp({ quality: 78 }).toFile(outFile)
}

const usedUrls = new Set()
if (fs.existsSync(CREDITS_PATH)) {
  for (const line of fs.readFileSync(CREDITS_PATH, 'utf8').split('\n')) {
    const m = line.match(/https?:\/\/\S+$/)
    if (m) usedUrls.add(m[0])
  }
}

async function main() {
  const credits = fs.existsSync(CREDITS_PATH) ? fs.readFileSync(CREDITS_PATH, 'utf8').trimEnd().split('\n') : ['# New perspective image sources (Openverse)', '']
  for (const p of RETRY) {
    const outFile = path.join(OUT_DIR, `np-${p.slug}.webp`)
    let done = false
    for (const q of p.queries) {
      if (done) break
      let results = []
      try { results = await search(q) } catch (e) { log(`  ! search failed (${e.message})`); continue }
      const filtered = results.filter(isCandidate)
      filtered.sort((a, b) => Number(PREF_LICENSES.includes(b.license)) - Number(PREF_LICENSES.includes(a.license)))
      for (const r of filtered) {
        if (usedUrls.has(r.url)) continue
        try {
          const buf = await download(r.url)
          await cropToWebp(buf, outFile)
          usedUrls.add(r.url)
          credits.push(`- ${p.slug}: "${r.title || 'untitled'}" by ${r.creator || 'unknown'} — ${r.license.toUpperCase()} — ${r.foreign_landing_url}`)
          log(`✓ ${p.slug} ← ${r.license} ${r.width}x${r.height} "${(r.title || '').slice(0, 50)}"`)
          done = true
          break
        } catch (e) {
          if (e.rateLimited) {
            log(`  · 429 rate-limited, waiting 15s…`)
            await sleep(15_000)
          } else {
            log(`  · skip candidate: ${e.message}`)
            await sleep(800)
          }
        }
      }
    }
    if (!done) log(`✗ ${p.slug}: still missing`)
  }
  fs.writeFileSync(CREDITS_PATH, credits.join('\n') + '\n')
  log('\ncredits updated')
}

main().catch((e) => { console.error(e); process.exit(1) })
