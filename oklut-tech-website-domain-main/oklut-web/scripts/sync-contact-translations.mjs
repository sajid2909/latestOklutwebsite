import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

const itemsToTranslate = [
  { path: 'contact.eyebrowDash', text: 'CONTACT US' },
  { path: 'contact.sendUsAMessage', text: 'Send us a message' },
  { path: 'contact.subMessage', text: 'Have a question, a project in mind, or want to explore a partnership? Fill out the form and our team will get back to you shortly.' },
  { path: 'contact.firstNameLabel', text: 'First Name' },
  { path: 'contact.lastNameLabel', text: 'Last Name' },
  { path: 'contact.workEmailLabel', text: 'Work Email' },
  { path: 'contact.phoneNumberLabel', text: 'Phone Number' },
  { path: 'contact.subjectLabel', text: 'Subject' },
  { path: 'contact.messageLabel', text: 'Message' },
  { path: 'contact.sendMessageBtn', text: 'Send Message' },
  { path: 'contact.reachUsTitle', text: 'Reach us' },
  { path: 'contact.reachUsDirectlyWord', text: 'directly' },
  { path: 'contact.callUs', text: 'Call Us' },
  { path: 'contact.emailUs', text: 'Email Us' },
  { path: 'contact.ourOffices', text: 'Our Offices' },
  { path: 'footer.dubaiLocation', text: 'Middle East hub · United Arab Emirates' },
  { path: 'contact.quickResponse', text: 'Quick Response' },
  { path: 'contact.replyPromptly', text: 'We reply promptly' },
  { path: 'contact.businessSupport', text: 'Business Support' },
  { path: 'contact.inquiryToDelivery', text: 'From inquiry to delivery' },
  { path: 'contact.consultOurExperts', text: 'Consult Our Experts' },
  { path: 'contact.getRightSolution', text: 'Get the right solution' },
  { path: 'contact.placeholders.firstName', text: 'Enter your first name' },
  { path: 'contact.placeholders.lastName', text: 'Enter your last name' },
  { path: 'contact.placeholders.workEmail', text: 'Enter your email address' },
  { path: 'contact.placeholders.phoneNumber', text: 'Enter your phone number' },
  { path: 'contact.placeholders.selectSubject', text: 'Select a subject' },
  { path: 'contact.placeholders.messageNew', text: 'Type your message here...' },
  { path: 'contact.validation.firstNameRequired', text: 'First name is required.' },
  { path: 'contact.validation.lastNameRequired', text: 'Last name is required.' },
  { path: 'contact.validation.emailRequired', text: 'Email is required.' },
  { path: 'contact.validation.emailInvalid', text: 'Enter a valid email.' },
  { path: 'contact.validation.subjectRequired', text: 'Please select a subject.' },
  { path: 'contact.validation.messageRequired', text: 'Message is required.' },
  { path: 'contact.subjects.generalInquiry', text: 'General Inquiry' },
  { path: 'contact.subjects.customDev', text: 'Custom Software Development' },
  { path: 'contact.subjects.cloudDevOps', text: 'Cloud & DevOps' },
  { path: 'contact.subjects.aiMl', text: 'AI & Machine Learning' },
  { path: 'contact.subjects.mobileDev', text: 'Mobile App Development' },
  { path: 'contact.subjects.uiUx', text: 'UI/UX Design' },
  { path: 'contact.subjects.consulting', text: 'Consulting / Partnership' },
  { path: 'contact.subjects.other', text: 'Other' },
]

function setDeep(obj, pathStr, value) {
  const parts = pathStr.split('.')
  let curr = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i]
    if (!curr[p] || typeof curr[p] !== 'object') {
      curr[p] = {}
    }
    curr = curr[p]
  }
  curr[parts[parts.length - 1]] = value
}

// 1. Update English first
const enPath = path.join(localesDir, 'en/translation.json')
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'))
for (const item of itemsToTranslate) {
  setDeep(enData, item.path, item.text)
}
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8')
console.log('✓ English canonical keys updated')

// 2. Fetch translations for other languages
async function translateForLang(langCode) {
  const texts = itemsToTranslate.map((k) => k.text)
  const joined = texts.join('\n')
  const u = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
    langCode
  )}&dt=t&q=${encodeURIComponent(joined)}`

  try {
    const res = await fetch(u, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })
    if (!res.ok) {
      console.warn(`[${langCode}] HTTP error:`, res.status)
      return null
    }
    const d = await res.json()
    const fullTranslated = d[0].map((item) => item[0]).join('')
    const lines = fullTranslated.split('\n')
    if (lines.length === texts.length) {
      return lines.map((l) => l.trim())
    }
    console.warn(`[${langCode}] Line mismatch: got ${lines.length}, expected ${texts.length}`)
    return null
  } catch (err) {
    console.error(`[${langCode}] Translation error:`, err.message)
    return null
  }
}

// 3. Process all locale folders
const allDirs = fs
  .readdirSync(localesDir)
  .filter((f) => f !== 'en' && fs.statSync(path.join(localesDir, f)).isDirectory())

console.log(`Starting translation sync for ${allDirs.length} non-English languages...`)

async function processInBatches(concurrency = 8) {
  let idx = 0
  let successCount = 0
  let failCount = 0

  async function worker() {
    while (idx < allDirs.length) {
      const code = allDirs[idx++]
      const filePath = path.join(localesDir, code, 'translation.json')
      if (!fs.existsSync(filePath)) continue

      const translatedLines = await translateForLang(code)
      if (translatedLines) {
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
          for (let i = 0; i < itemsToTranslate.length; i++) {
            const val = translatedLines[i] || itemsToTranslate[i].text
            setDeep(content, itemsToTranslate[i].path, val)
          }
          fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8')
          successCount++
          process.stdout.write(`✓ [${code}] `)
        } catch (err) {
          console.error(`\nFailed writing ${code}:`, err.message)
          failCount++
        }
      } else {
        // Fallback: copy canonical values so keys are present
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
          for (const item of itemsToTranslate) {
            setDeep(content, item.path, item.text)
          }
          fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8')
          failCount++
          process.stdout.write(`! [${code}] `)
        } catch (e) {
          // ignore
        }
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker())
  await Promise.all(workers)
  console.log(`\n\nFinished! Successfully translated: ${successCount}, Fallback: ${failCount}`)
}

processInBatches().catch(console.error)
