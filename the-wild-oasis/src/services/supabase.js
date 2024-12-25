import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pmavbgmnytyhsdqcbwxn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYXZiZ21ueXR5aHNkcWNid3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxMTkwMzUsImV4cCI6MjA1MDY5NTAzNX0.7UWbdPK3MFG7xasfX5asOn4l0FTLa3RrIXkUlZPdo7Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
