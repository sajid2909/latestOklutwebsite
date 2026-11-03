import fs from 'fs'

const files = [
  { id: 'businessTransformation', file: 'BusinessTransformationPerspective.jsx' },
  { id: 'artificialIntelligence', file: 'ArtificialIntelligencePerspective.jsx' },
  { id: 'modernErp', file: 'ModernERPPerspective.jsx' },
  { id: 'cybersecurity', file: 'CybersecurityPerspective.jsx' },
  { id: 'cloudModernization', file: 'CloudModernizationPerspective.jsx' },
]

for (const { id, file } of files) {
  const content = fs.readFileSync('src/pages/perspectives/' + file, 'utf8')
  console.log(`\n=================== ${id} (${file}) ===================`)
  
  // Find all <p> tags
  const pTags = Array.from(content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  console.log(`--- P TAGS (${pTags.length}) ---`)
  pTags.forEach((p, idx) => console.log(`[P${idx + 1}] ${p.slice(0, 100)}...`))

  // Find all <li className="p-feature-item">
  const liItems = Array.from(content.matchAll(/<li className="p-feature-item">([\s\S]*?)<\/li>/g)).map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  console.log(`--- LI ITEMS (${liItems.length}) ---`)
  liItems.forEach((li, idx) => console.log(`[LI${idx + 1}] ${li.slice(0, 100)}...`))

  // Find all cards
  const cards = Array.from(content.matchAll(/<div className="p-feature-card[^"]*">([\s\S]*?)<\/div>/g))
  console.log(`--- CARDS (${cards.length}) ---`)
  cards.forEach((c, idx) => {
    const text = c[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    console.log(`[CARD${idx + 1}] ${text.slice(0, 100)}...`)
  })

  // Find KeyPerspectiveBox
  const kpMatch = content.match(/<KeyPerspectiveBox([\s\S]*?)\/>/)
  if (kpMatch) {
    console.log(`--- KEY PERSPECTIVE BOX ---`)
    console.log(kpMatch[1].trim())
  }
}
