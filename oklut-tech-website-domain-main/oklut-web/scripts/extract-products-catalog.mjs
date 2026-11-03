import fs from 'fs'

const content = fs.readFileSync('src/pages/ProductsPage.jsx', 'utf8')

// Extract CATEGORIES array
const match = content.match(/const CATEGORIES = (\[[\s\S]*?\r?\n\])\r?\n\r?\nexport default/)
if (!match) {
  console.error('Could not find CATEGORIES in ProductsPage.jsx')
  process.exit(1)
}

// Evaluate CATEGORIES safely in sandbox
const fn = new Function(`return ${match[1]}`)
const categories = fn()

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))
en.products = en.products || {}
en.products.catalog = en.products.catalog || {}

for (const cat of categories) {
  en.products.catalog[cat.id] = {
    title: cat.title,
    heading: cat.heading || cat.title,
    sub: cat.sub,
    promoTitle: cat.promoTitle,
    promoText: cat.promoText,
    items: cat.items.map(item => ({
      title: item.title,
      description: item.description
    }))
  }
}

fs.writeFileSync('src/i18n/locales/en/translation.json', JSON.stringify(en, null, 2), 'utf8')
console.log('Successfully populated products.catalog with', categories.length, 'categories!')
