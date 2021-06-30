import { createClient } from "@supabase/supabase-js";
import { RecordSchema } from "../types/supabase";

export const db = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function getRecordsInDb() {
  const { data, error } = await db
    .from<RecordSchema>("records")
    .select()
    .order("date_added", { ascending: false });

  if (error) throw error;

  return data;
}
