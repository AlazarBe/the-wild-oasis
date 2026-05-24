import { createClient } from '@supabase/supabase-js'

globalThis.WebSocket = class {};

const supabaseUrl = 'https://qcqdbbbwrbyvzgkfrdut.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcWRiYmJ3cmJ5dnpna2ZyZHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NjI4MDcsImV4cCI6MjA5MzUzODgwN30.0dFZdrgjBR532eqYJcRB9FPCtLhQLUdbrBCTvfxHmCc"
const supabase = createClient(supabaseUrl, supabaseKey)

async function testInsert() {
  console.log("Testing insert on cabins table...");
  const testCabin = {
    name: "Test Cabin",
    maxCapacity: 2,
    regularPrice: 100,
    discount: 10,
    image: "https://example.com/image.jpg",
    description: "Test description"
  };
  
  const { data, error } = await supabase.from('cabins').insert([testCabin]).select();
  if (error) {
    console.error("Insert failed:", error);
  } else {
    console.log("Insert succeeded! Data:", data);
    
    // Clean up
    console.log("Cleaning up test cabin...");
    const { error: deleteError } = await supabase.from('cabins').delete().eq('id', data[0].id);
    if (deleteError) {
      console.error("Cleanup failed:", deleteError);
    } else {
      console.log("Cleanup succeeded!");
    }
  }
}

testInsert();
