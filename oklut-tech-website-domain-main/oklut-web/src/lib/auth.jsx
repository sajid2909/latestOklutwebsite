import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase'

// Public URL of the deployed site, used for links inside account emails.
// Falls back to the site's canonical domain so an email opened on another
// device (e.g. a phone) never points at localhost, which is unreachable there.
const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://oklut.com').replace(/\/+$/, '')

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isRecovery, setIsRecovery] = useState(false)
  const [isConfirmingEmail, setIsConfirmingEmail] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
      if (event === 'PASSWORD_RECOVERY') {
        setIsRecovery(true)
      }
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'USER_UPDATED') {
        setIsRecovery(false)
      }
    })

    return () => listener?.subscription.unsubscribe()
  }, [])

  // Email-confirmation callback: Supabase's default confirmation link
  // (token_hash in the query string) verifies the address AND establishes a
  // session, logging the visitor straight in. We want the visitor to confirm,
  // then sign in manually, so: mark the URL as a confirmation callback,
  // exchange/verify as Supabase intends, then immediately sign out of that
  // confirmation-created session and open the existing Sign In view.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isConfirmCallback =
      (params.get('token_hash') || params.get('hashed_token')) && params.get('type') !== 'recovery'
    const isImplicitCallback =
      (window.location.hash.includes('type=signup') ||
        window.location.hash.includes('type=email')) &&
      window.location.hash.includes('access_token')
    if (!isConfirmCallback && !isImplicitCallback) return

    let cancelled = false

    // Implicit (hash) links create the session automatically before we run;
    // PKCE/query links create it via exchangeCodeForSession below.
    if (isImplicitCallback) {
      setIsConfirmingEmail(true)
      supabase.auth
        .signOut()
        .catch(() => {})
        .finally(() => {
          if (cancelled) return
          window.history.replaceState(null, '', window.location.pathname + window.location.search.replace(/([?&])(code|token_hash|hashed_token|type)=[^&]*/g, '').replace(/\?&/, '?') || window.location.pathname)
          window.location.assign(window.location.origin + '/?confirmed=1#auth')
        })
      return () => {
        cancelled = true
      }
    }

    // Query-string confirmation link (current Supabase default).
    setIsConfirmingEmail(true)
    supabase.auth
      .exchangeCodeForSession(params.get('code') || window.location.href)
      .catch(() => {})
      .then(() => supabase.auth.signOut())
      .catch(() => {})
      .finally(() => {
        if (cancelled) return
        setIsConfirmingEmail(false)
        const clean = window.location.pathname + (window.location.search.replace(/([?&])(code|token_hash|hashed_token|type)=[^&]*/g, '').replace(/\?&/, '?') || '')
        window.history.replaceState(null, '', clean)
        window.location.assign(window.location.origin + '/?confirmed=1#auth')
      })
    return () => {
      cancelled = true
    }
  }, [])

  async function signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        // Supabase reads the confirmation-email redirect from emailRedirectTo
        // (not redirectTo, which is ignored by signUp). It must be a publicly
        // reachable URL because the email is usually opened on a different
        // device. When the visitor clicks the link they land back on the site
        // and are taken to the existing Sign In view.
        emailRedirectTo: `${SITE_URL}/`,
      },
    })
    if (error) throw error
    return data
  }

  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  async function resetPassword(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    })
    if (error) throw error
  }

  async function updatePassword(newPassword) {
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) throw error
  }

  const value = {
    session,
    user,
    loading,
    isRecovery,
    isConfirmingEmail,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function getAuthErrorMessage(error) {
  if (!error?.message) return 'Something went wrong. Please try again.'
  const msg = error.message.toLowerCase()
  if (msg.includes('invalid login credentials')) return 'Invalid email or password. Please try again.'
  if (msg.includes('email not confirmed') || msg.includes('email not verified'))
    return 'Please confirm your email address before signing in. Check your inbox for the confirmation link.'
  if (msg.includes('already registered')) return 'An account with this email already exists. Try signing in instead.'
  if (msg.includes('password should be at least')) return 'Password must be at least 6 characters.'
  if (msg.includes('rate limit') || msg.includes('too many requests'))
    return 'Too many attempts. Please wait a moment and try again.'
  if (msg.includes('network') || msg.includes('fetch')) return 'Could not reach our servers. Check your connection and try again.'
  return error.message
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
