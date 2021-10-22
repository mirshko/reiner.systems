import { createClient } from "@supabase/supabase-js";
import { RecordSchema } from "../types/supabase";

export const db = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export async function getRecordsInDb() {
  const { data, error } = await db
    .from<RecordSchema>("records")
    .select()
    .order("date_added", { ascending: false });

  if (error) throw error;

  return data as RecordSchema[];
}
