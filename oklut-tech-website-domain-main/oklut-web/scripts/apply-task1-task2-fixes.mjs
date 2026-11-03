import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// ─── 1. Update src/lib/chatMenus.js ──────────────────────────────────────────
const chatMenusPath = path.join(rootDir, 'src', 'lib', 'chatMenus.js')
let chatMenus = fs.readFileSync(chatMenusPath, 'utf8')

// Fix detectActiveMenu to immediately return null if explicitCategory === null
const detectActiveMenuOld = `export function detectActiveMenu(history, explicitCategory) {
  // If explicitly tracked in session context, use that category directly
  if (explicitCategory) {`

const detectActiveMenuNew = `export function detectActiveMenu(history, explicitCategory) {
  // If explicitly cleared (null), no menu is active. Do not resurrect an old menu from history.
  if (explicitCategory === null) {
    return null
  }

  // If explicitly tracked in session context, use that category directly
  if (explicitCategory) {`

if (chatMenus.includes(detectActiveMenuOld)) {
  chatMenus = chatMenus.replace(detectActiveMenuOld, detectActiveMenuNew)
} else {
  console.log('detectActiveMenuOld not found or already modified')
}

// Add multilingual keywords support to matchMenuIntent
const multiWordsCode = `const MULTILINGUAL_SERVICE_WORDS = new Set([
  'service', 'services', 'servicios', 'servicio', 'servizi', 'servizio',
  'amasevisi', 'sevisi', 'isevisi', 'diensten', 'dienst', 'dienstleistungen',
  'tjenester', 'uslugi', 'usluga', 'सेवाएं', 'सेवा', 'సేవలు', 'சேவைகள்',
  'خدمات', 'خدمة', '服务', 'サービス'
])

const MULTILINGUAL_TECH_WORDS = new Set([
  'tech', 'techs', 'technology', 'technologies', 'tecnologia', 'tecnologias',
  'technologie', 'technologies', 'ubuchwepheshe', 'teknologi', 'teknolojiler',
  'teknoloji', 'taknik', 'तकनीक', 'సాంకేతికత', 'தொழில்நுட்பம்', 'تكنولوجيا',
  '技术', '技術', 'テクノロジー'
])

const MULTILINGUAL_PRODUCT_WORDS = new Set([
  'product', 'products', 'producto', 'productos', 'produit', 'produits',
  'imikhiqizo', 'umkhiqizo', 'prodotto', 'prodotti', 'produkte', 'produkt',
  'producten', 'produkter', 'utpaad', 'उत्पाद', 'ఉత్పత్తులు', 'தயாரிப்புகள்',
  'منتجات', 'منتج', '产品', '製品', 'プロダクト'
])`

if (!chatMenus.includes('MULTILINGUAL_SERVICE_WORDS')) {
  chatMenus = chatMenus.replace(
    'const SERVICE_STEM = /^services?$/',
    `${multiWordsCode}\n\nconst SERVICE_STEM = /^services?$/`
  )
}

const matchMenuIntentOld = `function matchMenuIntent(q) {
  const tokens = q.split(' ').filter(Boolean)
  if (tokens.length === 0) return null
  const hasService = tokens.some((t) => SERVICE_STEM.test(t))
  const hasTech = tokens.some((t) => TECH_STEM.test(t))
  const hasProduct = tokens.some((t) => PRODUCT_STEM.test(t))
  if (!hasService && !hasTech && !hasProduct) return null

  const content = tokens.filter(
    (t) =>
      !MENU_FILLER.has(t) &&
      !SERVICE_STEM.test(t) &&
      !TECH_STEM.test(t) &&
      !PRODUCT_STEM.test(t),
  )
  if (content.length > 0) return null
  if (hasProduct) return 'products'
  if (hasService) return 'services'
  return 'technologies'
}`

const matchMenuIntentNew = `function matchMenuIntent(q) {
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
}`

if (chatMenus.includes(matchMenuIntentOld)) {
  chatMenus = chatMenus.replace(matchMenuIntentOld, matchMenuIntentNew)
}

fs.writeFileSync(chatMenusPath, chatMenus, 'utf8')
console.log('Updated src/lib/chatMenus.js')


// ─── 2. Update src/components/Chatbot/Chatbot.tsx ───────────────────────────
const chatbotPath = path.join(rootDir, 'src', 'components', 'Chatbot', 'Chatbot.tsx')
let chatbot = fs.readFileSync(chatbotPath, 'utf8')

// Fix findActiveMenu to return null when currentCategory === null
const findActiveMenuOld = `function findActiveMenu(messages: Message[], currentCategory?: 'services' | 'technologies' | 'products' | null) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role !== 'assistant') continue
    const parsed = parseMenuOptions(messages[i].content)
    if (parsed) return { index: i, type: currentCategory || parsed.type, options: parsed.options }
  }
  return null
}`

const findActiveMenuNew = `function findActiveMenu(messages: Message[], currentCategory?: 'services' | 'technologies' | 'products' | null) {
  if (currentCategory === null) {
    return null
  }
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role !== 'assistant') continue
    const parsed = parseMenuOptions(messages[i].content)
    if (parsed) {
      if (currentCategory && parsed.type !== currentCategory) {
        continue
      }
      return { index: i, type: currentCategory || parsed.type, options: parsed.options }
    }
  }
  return null
}`

if (chatbot.includes(findActiveMenuOld)) {
  chatbot = chatbot.replace(findActiveMenuOld, findActiveMenuNew)
} else {
  console.log('findActiveMenuOld not found or already modified')
}

// Fix getLocalizedWelcomeMessage spacing
const welcomeOld = `function getLocalizedWelcomeMessage(t: (key: string, options?: any) => string, date = new Date()) {
  const h = date.getHours()
  let greeting = t('chatbot.greetingMorning', { defaultValue: 'Good morning' })
  if (h >= 12 && h < 16) {
    greeting = t('chatbot.greetingAfternoon', { defaultValue: 'Good afternoon' })
  } else if (h >= 16) {
    greeting = t('chatbot.greetingEvening', { defaultValue: 'Good evening' })
  }
  const welcome = t('chatbot.welcomeText', {
    defaultValue: "! 👋 Welcome to Oklut Technologies.\\nI'm the Oklut AI Assistant. I can help you explore our services, technologies, careers, and contact information.",
  })
  return \`\${greeting}\${welcome}\`
}`

const welcomeNew = `function getLocalizedWelcomeMessage(t: (key: string, options?: any) => string, date = new Date()) {
  const h = date.getHours()
  let greeting = t('chatbot.greetingMorning', { defaultValue: 'Good morning' })
  if (h >= 12 && h < 16) {
    greeting = t('chatbot.greetingAfternoon', { defaultValue: 'Good afternoon' })
  } else if (h >= 16) {
    greeting = t('chatbot.greetingEvening', { defaultValue: 'Good evening' })
  }
  const welcome = t('chatbot.welcomeText', {
    defaultValue: "! 👋 Welcome to Oklut Technologies.\\nI'm the Oklut AI Assistant. I can help you explore our services, technologies, careers, and contact information.",
  })
  if (!welcome) return greeting
  const trimmedGreeting = greeting.trim()
  const trimmedWelcome = welcome.trim()
  if (/^[!！,.?;:]/.test(trimmedWelcome)) {
    return \`\${trimmedGreeting}\${trimmedWelcome}\`
  }
  return \`\${trimmedGreeting} \${trimmedWelcome}\`
}`

if (chatbot.includes(welcomeOld)) {
  chatbot = chatbot.replace(welcomeOld, welcomeNew)
}

// Fix quick action buttons onClick to remove premature updateMenuCategory
const quickActionBtnOld = `                          <button
                            key={action.value}
                            type="button"
                            className="chatbot-quick-btn"
                            onClick={() => {
                              if (action.value.toLowerCase().includes('service')) updateMenuCategory('services')
                              else if (action.value.toLowerCase().includes('technolog')) updateMenuCategory('technologies')
                              sendMessage(action.value, label)
                            }}
                          >`

const quickActionBtnNew = `                          <button
                            key={action.value}
                            type="button"
                            className="chatbot-quick-btn"
                            onClick={() => sendMessage(action.value, label)}
                          >`

if (chatbot.includes(quickActionBtnOld)) {
  chatbot = chatbot.replace(quickActionBtnOld, quickActionBtnNew)
}

// In sendMessage, ensure non-menu responses clear category when absent
const menuResponseHandlingOld = `        if ('currentMenuCategory' in data) {
          updateMenuCategory(data.currentMenuCategory || null)
        } else {
          const parsed = parseMenuOptions(data.response)
          if (parsed) {
            updateMenuCategory(parsed.type)
          }
        }`

const menuResponseHandlingNew = `        if ('currentMenuCategory' in data) {
          updateMenuCategory(data.currentMenuCategory || null)
        } else {
          const parsed = parseMenuOptions(data.response)
          if (parsed) {
            updateMenuCategory(parsed.type)
          } else {
            updateMenuCategory(null)
          }
        }`

if (chatbot.includes(menuResponseHandlingOld)) {
  chatbot = chatbot.replace(menuResponseHandlingOld, menuResponseHandlingNew)
}

fs.writeFileSync(chatbotPath, chatbot, 'utf8')
console.log('Updated src/components/Chatbot/Chatbot.tsx')


// ─── 3. Update src/lib/chatKnowledge.js ───────────────────────────────────────
const chatKnowledgePath = path.join(rootDir, 'src', 'lib', 'chatKnowledge.js')
let chatKnowledge = fs.readFileSync(chatKnowledgePath, 'utf8')

// Update computeReply in chatKnowledge to track currentMenuCategory
const knowledgeMenuReplyOld = `    const menuReply = resolveMenuReply(text, history, currentMenuCategory)
    if (menuReply) return menuReply

    // If the user enters a number without first selecting a category, ask whether they mean Services, Technologies, or Products.
    const bareIndex = parseOptionIndex(text)
    if (bareIndex !== null) {
      return \`Did you mean Services, Technologies, or Products? Please specify a category or type "services", "technologies", or "products" to see the list.\`
    }`

const knowledgeMenuReplyNew = `    const menuReply = resolveMenuReply(text, history, currentMenuCategory)
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
    }`

if (chatKnowledge.includes(knowledgeMenuReplyOld)) {
  chatKnowledge = chatKnowledge.replace(knowledgeMenuReplyOld, knowledgeMenuReplyNew)
}

// Update the return statement of getChatResponse to return an object with toString()
const knowledgeReturnOld = `  const reply = await computeReply()
  if (lang && lang !== 'en') {
    return await translateText(reply, lang)
  }
  return reply`

const knowledgeReturnNew = `  const result = await computeReply()
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
  return output`

if (chatKnowledge.includes(knowledgeReturnOld)) {
  chatKnowledge = chatKnowledge.replace(knowledgeReturnOld, knowledgeReturnNew)
}

fs.writeFileSync(chatKnowledgePath, chatKnowledge, 'utf8')
console.log('Updated src/lib/chatKnowledge.js')


// ─── 4. Update server/chat-api.js and api/chat.js ────────────────────────────
for (const relPath of ['server/chat-api.js', 'api/chat.js']) {
  const filePath = path.join(rootDir, relPath)
  let code = fs.readFileSync(filePath, 'utf8')

  // dateTimeReply -> currentMenuCategory: null
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(dateTimeReply,\s*sanitizedLang\)\s*\}\)/g,
    'return res.json({ response: await translateText(dateTimeReply, sanitizedLang), currentMenuCategory: null })'
  )

  // contactReply -> currentMenuCategory: null
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(contactReply,\s*sanitizedLang\)\s*\}\)/g,
    'return res.json({ response: await translateText(contactReply, sanitizedLang), currentMenuCategory: null })'
  )

  // perspectivesReply -> currentMenuCategory: null
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(perspectivesReply,\s*sanitizedLang\)\s*\}\)/g,
    'return res.json({ response: await translateText(perspectivesReply, sanitizedLang), currentMenuCategory: null })'
  )

  // mathReply -> currentMenuCategory: null
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(mathReply,\s*sanitizedLang\)\s*\}\)/g,
    'return res.json({ response: await translateText(mathReply, sanitizedLang), currentMenuCategory: null })'
  )

  // generalKnowledge -> currentMenuCategory: null
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(generalKnowledge,\s*sanitizedLang\)\s*\}\)/g,
    'return res.json({ response: await translateText(generalKnowledge, sanitizedLang), currentMenuCategory: null })'
  )

  // AI model success in server/chat-api.js
  code = code.replace(
    /return res\.json\(\{\s*response:\s*aiResponse,\s*model:\s*model,\s*provider:\s*provider\s*\}\)/g,
    'return res.json({ response: aiResponse, model: model, provider: provider, currentMenuCategory: null })'
  )

  // AI model success in api/chat.js
  code = code.replace(
    /return res\.json\(\{\s*response:\s*aiResponse\s*\}\)/g,
    'return res.json({ response: aiResponse, currentMenuCategory: null })'
  )

  // Fallback in api/chat.js
  code = code.replace(
    /return res\.json\(\{\s*response:\s*await translateText\(\s*'Thank you for contacting Oklut Technologies\. Please feel free to book a consultation or email us at info@oklut\.com\.',\s*sanitizedLang,\s*\),\s*\}\)/g,
    `return res.json({
      response: await translateText(
        'Thank you for contacting Oklut Technologies. Please feel free to book a consultation or email us at info@oklut.com.',
        sanitizedLang,
      ),
      currentMenuCategory: null,
    })`
  )

  fs.writeFileSync(filePath, code, 'utf8')
  console.log(`Updated ${relPath}`)
}

console.log('All Task 1 & Task 2 fixes applied successfully!')

