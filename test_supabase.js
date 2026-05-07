import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qcqdbbbwrbyvzgkfrdut.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcWRiYmJ3cmJ5dnpna2ZyZHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NjI4MDcsImV4cCI6MjA5MzUzODgwN30.0dFZdrgjBR532eqYJcRB9FPCtLhQLUdbrBCTvfxHmCc"
const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
  const { data, error } = await supabase.from('cabins').select('*').limit(1)
  console.log(JSON.stringify(data, null, 2))
}

test()
