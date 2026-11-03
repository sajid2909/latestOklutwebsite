import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// 1. Fix server/chat-api.js
const serverChatPath = path.join(rootDir, 'server', 'chat-api.js')
let serverChat = fs.readFileSync(serverChatPath, 'utf8')

serverChat = serverChat.replace(
  `  console.error('[Chat API] All models failed. Last error:', lastError)\n  return res.status(500).json({ error: 'AI service currently unavailable. Please try again later.' })\n})\n  } catch (err) {\n    console.error('[Chat API] Top-level handler error:', err)\n    return res.status(500).json({ error: 'Internal server error. Please try again later.' })\n  }`,
  `  console.error('[Chat API] All models failed. Last error:', lastError)\n  return res.status(500).json({ error: 'AI service currently unavailable. Please try again later.' })\n  } catch (err) {\n    console.error('[Chat API] Top-level handler error:', err)\n    return res.status(500).json({ error: 'Internal server error. Please try again later.' })\n  }\n})`
)
fs.writeFileSync(serverChatPath, serverChat, 'utf8')

// 2. Fix api/chat.js unused import 'normalize'
const apiChatPath = path.join(rootDir, 'api', 'chat.js')
let apiChat = fs.readFileSync(apiChatPath, 'utf8')
apiChat = apiChat.replace(
  "import { resolveMenuReply, answerGeneralKnowledge, parseOptionIndex, normalize, tryMathCalculation, detectActiveMenu } from '../src/lib/chatMenus.js'",
  "import { resolveMenuReply, answerGeneralKnowledge, parseOptionIndex, tryMathCalculation, detectActiveMenu } from '../src/lib/chatMenus.js'"
)
fs.writeFileSync(apiChatPath, apiChat, 'utf8')

// 3. Fix Chatbot.tsx: remove unused import detectActiveMenu, pass currentMenuCategory to findActiveMenu
const chatbotPath = path.join(rootDir, 'src', 'components', 'Chatbot', 'Chatbot.tsx')
let chatbot = fs.readFileSync(chatbotPath, 'utf8')

chatbot = chatbot.replace(
  "import { parseMenuOptions, detectActiveMenu } from '../../lib/chatMenus'",
  "import { parseMenuOptions } from '../../lib/chatMenus'"
)

chatbot = chatbot.replace(
  "function findActiveMenu(messages: Message[]) {",
  "function findActiveMenu(messages: Message[], currentCategory?: 'services' | 'technologies' | 'products' | null) {"
)

chatbot = chatbot.replace(
  "if (parsed) return { index: i, type: parsed.type, options: parsed.options }",
  "if (parsed) return { index: i, type: currentCategory || parsed.type, options: parsed.options }"
)

chatbot = chatbot.replace(
  "const activeMenu = findActiveMenu(messages)",
  "const activeMenu = findActiveMenu(messages, currentMenuCategory)"
)

fs.writeFileSync(chatbotPath, chatbot, 'utf8')
console.log('Chatbot, server, and api fixes applied successfully!')

