const supabaseUrl = "https://stnjpquafragqjwxyjza.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0bmpwcXVhZnJhZ3Fqd3h5anphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MzI2MzAsImV4cCI6MjEwMDUwODYzMH0.r3YlozqWb2h96TLomC-VOfeQNLknio8x5xaiNVlQOkE";

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
