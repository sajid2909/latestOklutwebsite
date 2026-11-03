import fs from 'fs'

const files = [
  'BusinessTransformationPerspective.jsx',
  'ArtificialIntelligencePerspective.jsx',
  'ModernERPPerspective.jsx',
  'CybersecurityPerspective.jsx',
  'CloudModernizationPerspective.jsx'
]

for (const file of files) {
  const content = fs.readFileSync('src/pages/perspectives/' + file, 'utf8')
  console.log(`\n=================== ${file} ===================`)
  const pTags = Array.from(content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  pTags.forEach((p, idx) => console.log(`P${idx+1}: ${p.replace(/\s+/g, ' ')}`))
  
  const liItems = Array.from(content.matchAll(/<li className="p-feature-item">([\s\S]*?)<\/li>/g)).map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  if (liItems.length) {
    console.log(`-- LI ITEMS (${liItems.length}) --`)
    liItems.forEach((li, idx) => console.log(`LI${idx+1}: ${li}`))
  }

  const cards = Array.from(content.matchAll(/<div className="p-feature-card[^>]*">([\s\S]*?)<\/div>/g)).map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  if (cards.length) {
    console.log(`-- CARDS (${cards.length}) --`)
    cards.forEach((c, idx) => console.log(`CARD${idx+1}: ${c}`))
  }
}
