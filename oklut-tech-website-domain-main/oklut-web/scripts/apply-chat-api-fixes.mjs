import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// 1. Update server/chat-api.js
const serverChatPath = path.join(rootDir, 'server', 'chat-api.js')
let serverChat = fs.readFileSync(serverChatPath, 'utf8')

// Ensure LANGUAGE_NAME_MAP is imported
if (!serverChat.includes('LANGUAGE_NAME_MAP')) {
  serverChat = serverChat.replace(
    "import { translateText } from '../src/lib/translateHelper.js'",
    "import { translateText } from '../src/lib/translateHelper.js'\nimport { LANGUAGE_NAME_MAP } from '../src/i18n/languages.js'"
  )
}

// Replace the SUPPORTED_LANG_MAP block and initial validations in server/chat-api.js
const serverRegex = /app\.post\('\/api\/chat',\s*async\s*\(req,\s*res\)\s*=>\s*\{[\s\S]*?if\s*\(!message\)\s*\{\s*return res\.status\(400\)\.json\(\{\s*error:\s*'Message is required'\s*\}\)\s*\}/m

const serverReplacement = `app.post('/api/chat', async (req, res) => {
  try {
    const { message, quickQuestion, history, lang, currentMenuCategory } = req.body || {}

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required and must be a non-empty string' })
    }

    const trimmedMessage = message.trim()
    if (trimmedMessage.length > 2000) {
      return res.status(400).json({ error: 'Message must not exceed 2000 characters' })
    }

    const sanitizedLang =
      typeof lang === 'string' && /^[a-zA-Z]{2,3}(-[a-zA-Z0-9]+)?$/.test(lang.trim())
        ? lang.trim()
        : 'en'

    const targetLangName = LANGUAGE_NAME_MAP[sanitizedLang] || null
    const languageInstruction =
      targetLangName && sanitizedLang !== 'en'
        ? \`\\n- LANGUAGE INSTRUCTION: The user's active interface language is \${targetLangName}. You MUST formulate your entire reply fluently in natural \${targetLangName}. Retain exact company phone ('1800 410 3299'), email ('info@oklut.com'), location 'Madhapur, Hyderabad', and brand name 'Oklut Technologies' untranslated and accurate.\`
        : '\\n- LANGUAGE INSTRUCTION: Respond in English unless the user asks in another language.'`

if (serverRegex.test(serverChat)) {
  serverChat = serverChat.replace(serverRegex, serverReplacement)
} else {
  console.error('Could not match server start regex')
}

// Replace variables inside the handler (message -> trimmedMessage, lang -> sanitizedLang)
serverChat = serverChat.replace(/resolveDateTimeQuery\(message\)/g, 'resolveDateTimeQuery(trimmedMessage)')
serverChat = serverChat.replace(/resolveContactQuery\(message\)/g, 'resolveContactQuery(trimmedMessage)')
serverChat = serverChat.replace(/resolvePerspectivesQuery\(message\)/g, 'resolvePerspectivesQuery(trimmedMessage)')
serverChat = serverChat.replace(/tryMathCalculation\(message\)/g, 'tryMathCalculation(trimmedMessage)')
serverChat = serverChat.replace(/resolveMenuReply\(message,/g, 'resolveMenuReply(trimmedMessage,')
serverChat = serverChat.replace(/parseOptionIndex\(message\)/g, 'parseOptionIndex(trimmedMessage)')
serverChat = serverChat.replace(/answerGeneralKnowledge\(message\)/g, 'answerGeneralKnowledge(trimmedMessage)')
serverChat = serverChat.replace(/User message: \$\{message\}/g, 'User message: ${trimmedMessage}')
serverChat = serverChat.replace(/translateText\(([^,]+),\s*lang\)/g, 'translateText($1, sanitizedLang)')

// Add LLM system prompt instruction if not already present
const numInstruction = '- Whenever you display a numbered list in any language and the user replies with ANY number corresponding to an option in that list, always resolve that number to the matching item from your immediately preceding message and provide its full details in the user\'s active language. Never ask the user to clarify between Services, Technologies, or Products when they reply with a valid number to a numbered list.'

if (!serverChat.includes(numInstruction)) {
  serverChat = serverChat.replace(
    'Never invent information.${languageInstruction}',
    `Never invent information.\${languageInstruction}\n- ${numInstruction}`
  )
}

// Wrap end of app.post('/api/chat') with catch block
const serverEndRegex = /(console\.error\('\[Chat API\] All models failed\. Last error:',\s*lastError\)\s*return res\.status\(500\)\.json\(\{\s*error:\s*'AI service currently unavailable\. Please try again later\.'\s*\}\)\s*\}\))/

if (serverEndRegex.test(serverChat)) {
  serverChat = serverChat.replace(serverEndRegex, `$1\n  } catch (err) {\n    console.error('[Chat API] Top-level handler error:', err)\n    return res.status(500).json({ error: 'Internal server error. Please try again later.' })\n  }`)
}

fs.writeFileSync(serverChatPath, serverChat, 'utf8')
console.log('Successfully updated server/chat-api.js')

// 2. Update api/chat.js
const apiChatPath = path.join(rootDir, 'api', 'chat.js')
let apiChat = fs.readFileSync(apiChatPath, 'utf8')

// Ensure LANGUAGE_NAME_MAP is imported
if (!apiChat.includes('LANGUAGE_NAME_MAP')) {
  apiChat = apiChat.replace(
    "import { translateText } from '../src/lib/translateHelper.js'",
    "import { translateText } from '../src/lib/translateHelper.js'\nimport { LANGUAGE_NAME_MAP } from '../src/i18n/languages.js'"
  )
}

// Replace the SUPPORTED_LANG_MAP block and initial validations in api/chat.js
const apiRegex = /const\s*\{\s*message,\s*quickQuestion,\s*history,\s*lang,\s*currentMenuCategory\s*\}\s*=\s*req\.body\s*\|\|\s*\{\}[\s\S]*?if\s*\(!message\)\s*\{\s*return res\.status\(400\)\.json\(\{\s*error:\s*'Message is required'\s*\}\)\s*\}/m

const apiReplacement = `const { message, quickQuestion, history, lang, currentMenuCategory } = req.body || {}

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required and must be a non-empty string' })
  }

  const trimmedMessage = message.trim()
  if (trimmedMessage.length > 2000) {
    return res.status(400).json({ error: 'Message must not exceed 2000 characters' })
  }

  const sanitizedLang =
    typeof lang === 'string' && /^[a-zA-Z]{2,3}(-[a-zA-Z0-9]+)?$/.test(lang.trim())
      ? lang.trim()
      : 'en'

  const targetLangName = LANGUAGE_NAME_MAP[sanitizedLang] || null
  const languageInstruction =
    targetLangName && sanitizedLang !== 'en'
      ? \`\\n- LANGUAGE INSTRUCTION: The user's active interface language is \${targetLangName}. You MUST formulate your entire reply fluently in natural \${targetLangName}. Retain exact company phone ('1800 410 3299'), email ('info@oklut.com'), location 'Madhapur, Hyderabad', and brand name 'Oklut Technologies' untranslated and accurate.\`
      : '\\n- LANGUAGE INSTRUCTION: Respond in English unless the user asks in another language.'`

if (apiRegex.test(apiChat)) {
  apiChat = apiChat.replace(apiRegex, apiReplacement)
} else {
  console.error('Could not match api start regex')
}

// Replace variables inside the handler
apiChat = apiChat.replace(/resolveDateTimeQuery\(message\)/g, 'resolveDateTimeQuery(trimmedMessage)')
apiChat = apiChat.replace(/resolveContactQuery\(message\)/g, 'resolveContactQuery(trimmedMessage)')
apiChat = apiChat.replace(/resolvePerspectivesQuery\(message\)/g, 'resolvePerspectivesQuery(trimmedMessage)')
apiChat = apiChat.replace(/tryMathCalculation\(message\)/g, 'tryMathCalculation(trimmedMessage)')
apiChat = apiChat.replace(/resolveMenuReply\(message,/g, 'resolveMenuReply(trimmedMessage,')
apiChat = apiChat.replace(/parseOptionIndex\(message\)/g, 'parseOptionIndex(trimmedMessage)')
apiChat = apiChat.replace(/answerGeneralKnowledge\(message\)/g, 'answerGeneralKnowledge(trimmedMessage)')
apiChat = apiChat.replace(/User message: \$\{message\}/g, 'User message: ${trimmedMessage}')
apiChat = apiChat.replace(/translateText\(([^,]+),\s*lang\)/g, 'translateText($1, sanitizedLang)')

// Update slice(-20) to slice(-40) for 40 turn history
apiChat = apiChat.replace(/\.slice\(-20\)/g, '.slice(-40)')

// Wrap top-level handler in try/catch if not already
if (!apiChat.includes('Top-level handler error')) {
  // Put try right after method check
  apiChat = apiChat.replace(
    /if \(req\.method !== 'POST'\) \{\s*return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\)\s*\}/,
    `if (req.method !== 'POST') {\n    return res.status(405).json({ error: 'Method not allowed' })\n  }\n\n  try {`
  )
  // Close try block at end of file before final closing brace
  apiChat = apiChat.replace(
    /\}\s*$/,
    `  } catch (err) {\n    console.error('[Chat API] Top-level handler error:', err)\n    return res.status(500).json({ error: 'Internal server error. Please try again later.' })\n  }\n}`
  )
}

fs.writeFileSync(apiChatPath, apiChat, 'utf8')
console.log('Successfully updated api/chat.js')

