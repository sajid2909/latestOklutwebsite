import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// 1. Update normalize in src/lib/chatMenus.js
const chatMenusPath = path.join(rootDir, 'src', 'lib', 'chatMenus.js')
let cm = fs.readFileSync(chatMenusPath, 'utf8')

const oldNormIndex = cm.indexOf('export function normalize(text) {')
const oldNormEnd = cm.indexOf('export function titleCase', oldNormIndex)

if (oldNormIndex !== -1 && oldNormEnd !== -1) {
  const newNorm = `export function normalize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/['\\u2019]/g, '')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .normalize('NFC')
    .replace(/[^\\p{L}\\p{M}\\p{N}\\s+./@-]/gu, ' ')
    .replace(/\\s+/g, ' ')
    .trim()
}

`
  cm = cm.substring(0, oldNormIndex) + newNorm + cm.substring(oldNormEnd)
}

fs.writeFileSync(chatMenusPath, cm, 'utf8')
console.log('Updated normalize in chatMenus.js')

