import fs from 'fs'

const files = [
  { file: 'ArtificialIntelligencePerspective.jsx', key: 'artificialIntelligence' },
  { file: 'ModernERPPerspective.jsx', key: 'modernErp' },
  { file: 'CybersecurityPerspective.jsx', key: 'cybersecurity' },
  { file: 'CloudModernizationPerspective.jsx', key: 'cloudModernization' }
]

for (const { file, key } of files) {
  const content = fs.readFileSync('src/pages/perspectives/' + file, 'utf8')
  console.log(`\n=================== ${file} (${key}) ===================`)
  
  // Extract title and subtitle from PerspectiveHero
  const titleMatch = content.match(/title="([^"]+)"/)
  const subtitleMatch = content.match(/subtitle="([^"]+)"/)
  const categoryMatch = content.match(/category="([^"]+)"/)
  console.log('Category:', categoryMatch ? categoryMatch[1] : null)
  console.log('Title:', titleMatch ? titleMatch[1] : null)
  console.log('Subtitle:', subtitleMatch ? subtitleMatch[1] : null)
  
  // Extract arrays
  const arrays = Array.from(content.matchAll(/const\s+([a-zA-Z0-9_]+)\s*=\s*(\[[\s\S]*?\n\s*\])/g))
  console.log('Arrays found:', arrays.map(a => a[1]))

  // Extract eyebrows and headings
  const eyebrows = Array.from(content.matchAll(/p-eyebrow[^>]*>([\s\S]*?)<\//g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  const headings = Array.from(content.matchAll(/p-heading[^>]*>([\s\S]*?)<\//g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  console.log('Eyebrows:', eyebrows)
  console.log('Headings:', headings)
}
