import type { Profile } from "../models/profile.models";

const PROFILE_URL = "/data/profile.json";

export async function getProfile(): Promise<Profile | null> {
  try {
    const response = await fetch(PROFILE_URL);

    if (!response.ok) {
      throw new Error("Error al cargar el perfil");
    }

    const data = await response.json();
    console.log("Perfil cargado correctamente");
    return data as Profile; // ✅ Un solo objeto Profile
  } catch (error) {
    console.error("ProfileService error:", error);
    return null;
  }
}
