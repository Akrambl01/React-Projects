import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ytoheexjdlqkmmeliynv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0b2hlZXhqZGxxa21tZWxpeW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzA4MjEsImV4cCI6MjA2OTY0NjgyMX0.d2O0D3DDV8EM0zhLxdPiCAVpTBjHInc_Ht75WjJh0SU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase