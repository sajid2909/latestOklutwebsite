import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// 1. Update src/lib/chatMenus.js
const chatMenusPath = path.join(rootDir, 'src', 'lib', 'chatMenus.js')
let cm = fs.readFileSync(chatMenusPath, 'utf8')

// Update normalize to preserve Unicode letters
cm = cm.replace(
  /\.replace\(\/\[\^a-z0-9\\s\+\.\/@-\]\/g,\s*' '\)/,
  '.replace(/[^\\p{L}\\p{N}\\s+./@-]/gu, \' \')'
)

// Update matchMenuIntent
const oldMatchIndex = cm.indexOf('function matchMenuIntent(q) {')
const oldMatchEnd = cm.indexOf('export function resolveMenuReply', oldMatchIndex)
if (oldMatchIndex !== -1 && oldMatchEnd !== -1) {
  const newMatch = `function matchMenuIntent(q) {
  const tokens = q.split(' ').filter(Boolean)
  if (tokens.length === 0) return null
  const hasService = tokens.some((t) => SERVICE_STEM.test(t) || MULTILINGUAL_SERVICE_WORDS.has(t.toLowerCase()))
  const hasTech = tokens.some((t) => TECH_STEM.test(t) || MULTILINGUAL_TECH_WORDS.has(t.toLowerCase()))
  const hasProduct = tokens.some((t) => PRODUCT_STEM.test(t) || MULTILINGUAL_PRODUCT_WORDS.has(t.toLowerCase()))
  if (!hasService && !hasTech && !hasProduct) return null

  const content = tokens.filter(
    (t) =>
      !MENU_FILLER.has(t) &&
      !SERVICE_STEM.test(t) &&
      !TECH_STEM.test(t) &&
      !PRODUCT_STEM.test(t) &&
      !MULTILINGUAL_SERVICE_WORDS.has(t.toLowerCase()) &&
      !MULTILINGUAL_TECH_WORDS.has(t.toLowerCase()) &&
      !MULTILINGUAL_PRODUCT_WORDS.has(t.toLowerCase()),
  )
  if (content.length > 0) return null
  if (hasProduct) return 'products'
  if (hasService) return 'services'
  return 'technologies'
}

`
  cm = cm.substring(0, oldMatchIndex) + newMatch + cm.substring(oldMatchEnd)
}

fs.writeFileSync(chatMenusPath, cm, 'utf8')
console.log('Updated chatMenus.js')

// 2. Update src/lib/chatKnowledge.js
const chatKnowledgePath = path.join(rootDir, 'src', 'lib', 'chatKnowledge.js')
let ck = fs.readFileSync(chatKnowledgePath, 'utf8')

// Update menuReply in computeReply
const oldMenuIndex = ck.indexOf('const menuReply = resolveMenuReply(text, history, currentMenuCategory)')
const oldMenuEnd = ck.indexOf('const unknownOffer = unknownOfferReply(text)', oldMenuIndex)

if (oldMenuIndex !== -1 && oldMenuEnd !== -1) {
  const newMenuReply = `const menuReply = resolveMenuReply(text, history, currentMenuCategory)
    if (menuReply) {
      let nextCategory = currentMenuCategory
      if (/^Our Services:/m.test(menuReply)) nextCategory = 'services'
      else if (/^Our Technologies:/m.test(menuReply)) nextCategory = 'technologies'
      else if (/^Here are our products:/m.test(menuReply)) nextCategory = 'products'
      return { reply: menuReply, currentMenuCategory: nextCategory }
    }

    // If the user enters a number without first selecting a category, ask whether they mean Services, Technologies, or Products.
    const bareIndex = parseOptionIndex(text)
    if (bareIndex !== null) {
      return {
        reply: \`Did you mean Services, Technologies, or Products? Please specify a category or type "services", "technologies", or "products" to see the list.\`,
        currentMenuCategory: null,
      }
    }

    `
  ck = ck.substring(0, oldMenuIndex) + newMenuReply + ck.substring(oldMenuEnd)
}

// Update end of getChatResponse
const oldEndIndex = ck.lastIndexOf('const reply = await computeReply()')
if (oldEndIndex !== -1) {
  const newEnd = `const result = await computeReply()
  const rawReply = typeof result === 'object' && result !== null && 'reply' in result ? result.reply : result
  const category = typeof result === 'object' && result !== null && 'currentMenuCategory' in result ? result.currentMenuCategory : null

  const translated = lang && lang !== 'en' ? await translateText(rawReply, lang) : rawReply

  const output = {
    response: translated,
    currentMenuCategory: category,
    toString() {
      return this.response
    },
  }
  return output
}
`
  ck = ck.substring(0, oldEndIndex) + newEnd
}

fs.writeFileSync(chatKnowledgePath, ck, 'utf8')
console.log('Updated chatKnowledge.js')

