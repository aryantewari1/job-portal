import supabaseClient from "@/utils/supabase";

export const getJobs = async (token) => {
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").select("*");

  const { data, error } = await query;

  if (error) {
    console.log("Error fetching jobs :", error);
    return null;
  }

  return data;
};
