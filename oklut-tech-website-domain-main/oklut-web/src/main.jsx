import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './lib/auth.jsx'
import { CookieConsentProvider } from './components/cookie/CookieConsentProvider.tsx'
import { TranslationProvider } from './i18n/TranslationContext'

const rawBase = import.meta.env.BASE_URL || '/'
const basename = rawBase === '/' ? '' : rawBase.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <TranslationProvider>
        <AuthProvider>
          <CookieConsentProvider>
            <App />
          </CookieConsentProvider>
        </AuthProvider>
      </TranslationProvider>
    </BrowserRouter>
  </StrictMode>,
)
