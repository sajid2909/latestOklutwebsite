import { createClient } from '@supabase/supabase-js'

const env = (typeof import.meta !== 'undefined' && import.meta.env) || (typeof process !== 'undefined' && process.env) || {}
const supabaseUrl = env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key'

if (!env.VITE_SUPABASE_URL || !env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    'Missing Supabase environment variables. Using placeholder values. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file to enable live backend features.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const TABLE = {
  services: 'services',
  projects: 'projects',
  messages: 'messages',
}