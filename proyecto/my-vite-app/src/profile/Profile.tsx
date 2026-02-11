import { useEffect, useState } from "react";
import type { Profile } from "../models/profile.models";
import { getProfile } from "../services/profile.service"; // supongamos que tienes un service
import ProfileCard from "./ProfileCard"; // el componente que muestra el perfil

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile(); // función que trae un perfil
        setProfile(data);
      } catch (error) {
        console.error("Error cargando el perfil:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Perfil</h1>

      <div className="w-full max-w-md">
        {loading ? (
          <div className="text-center py-16 text-gray-600">
            Cargando perfil...
          </div>
        ) : profile ? (
          <ProfileCard profile={profile} />
        ) : (
          <div className="text-center py-16 text-gray-600">
            No se encontró el perfil.
          </div>
        )}
      </div>
    </div>
  );
}
