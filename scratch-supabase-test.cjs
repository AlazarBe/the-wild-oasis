const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qcqdbbbwrbyvzgkfrdut.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcWRiYmJ3cmJ5dnpna2ZyZHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NjI4MDcsImV4cCI6MjA5MzUzODgwN30.0dFZdrgjBR532eqYJcRB9FPCtLhQLUdbrBCTvfxHmCc";
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data: cabins } = await supabase.from('cabins').select('*');
  if (!cabins || cabins.length === 0) {
    console.log("No cabins found.");
    return;
  }
  const cabinToEdit = cabins[0];
  console.log("Editing cabin:", cabinToEdit.id, cabinToEdit.name);

  // Try the exact update payload that CreateCabinForm sends
  const { id, created_at, ...editValues } = cabinToEdit;
  
  // Simulate changing the name
  const newName = editValues.name + " (Edited)";
  
  let query = supabase.from('cabins');
  query = query.update({ ...editValues, name: newName }).eq("id", cabinToEdit.id);
  
  const { data, error } = await query.select().single();
  
  if (error) {
    console.error("Supabase Error:", error);
  } else {
    console.log("Update Success! Data:", data);
  }
}
test();
