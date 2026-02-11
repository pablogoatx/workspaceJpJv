// src/features/profile/ProfileCard.tsx
import type { Profile } from "../models/profile.models"; // Ajusta la ruta según la ubicación

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const { fullName, nickname, bio, profileImage, socialLinks } = profile;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Imagen de fondo */}
      {profileImage && (
        <div className="w-full h-56 overflow-hidden">
          <img
            src={profileImage}
            alt={fullName}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {fullName} {nickname && `(${nickname})`}
        </h2>

        {bio && <p className="text-gray-600 mt-2">{bio}</p>}

        {/* Instagram */}
        {socialLinks?.instagram && (
          <div className="mt-4 flex items-center gap-2 text-gray-600">
            <i className="fa fa-instagram text-pink-500"></i>
            <a
              href={`https://instagram.com/${socialLinks.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{socialLinks.instagram}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
