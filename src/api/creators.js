import { supabase } from "../clients";

const TABLE = "creators";

const ALLOWED_COLUMNS = [
  "name",
  "url",
  "description",
  "image_url",
  "youtube",
  "twitter",
  "instagram",
];

function pickAllowed(payload) {
  const result = {};
  for (const key of ALLOWED_COLUMNS) {
    if (payload[key] !== undefined && payload[key] !== null) {
      result[key] = payload[key];
    }
  }
  return result;
}

export async function listCreators() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getCreatorById(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

export async function createCreator(payload) {
  const safePayload = pickAllowed(payload);
  const { data, error } = await supabase
    .from(TABLE)
    .insert([safePayload])
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateCreator(id, payload) {
  const safePayload = pickAllowed(payload);
  const { data, error } = await supabase
    .from(TABLE)
    .update(safePayload)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteCreator(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
