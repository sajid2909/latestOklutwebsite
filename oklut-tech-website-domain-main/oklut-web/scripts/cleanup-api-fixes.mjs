import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// 1. Fix server/chat-api.js
const serverChatPath = path.join(rootDir, 'server', 'chat-api.js')
let serverChat = fs.readFileSync(serverChatPath, 'utf8')

// Fix double hyphen
serverChat = serverChat.replace(
  '- - Whenever you display a numbered list',
  '- Whenever you display a numbered list'
)

// Fix closing try/catch
serverChat = serverChat.replace(
  `  console.error('[Chat API] All models failed. Last error:', lastError)
  return res.status(500).json({ error: 'AI service currently unavailable. Please try again later.' })
})
  } catch (err) {
    console.error('[Chat API] Top-level handler error:', err)
    return res.status(500).json({ error: 'Internal server error. Please try again later.' })
  }`,
  `  console.error('[Chat API] All models failed. Last error:', lastError)
  return res.status(500).json({ error: 'AI service currently unavailable. Please try again later.' })
  } catch (err) {
    console.error('[Chat API] Top-level handler error:', err)
    return res.status(500).json({ error: 'Internal server error. Please try again later.' })
  }
})`
)

fs.writeFileSync(serverChatPath, serverChat, 'utf8')

// 2. Fix api/chat.js sanitizedLang in fallback
const apiChatPath = path.join(rootDir, 'api', 'chat.js')
let apiChat = fs.readFileSync(apiChatPath, 'utf8')
apiChat = apiChat.replace(
  `response: await translateText(
        'Thank you for contacting Oklut Technologies. Please feel free to book a consultation or email us at info@oklut.com.',
        lang,
      ),`,
  `response: await translateText(
        'Thank you for contacting Oklut Technologies. Please feel free to book a consultation or email us at info@oklut.com.',
        sanitizedLang,
      ),`
)

fs.writeFileSync(apiChatPath, apiChat, 'utf8')
console.log('Cleanup fixes applied successfully!')

