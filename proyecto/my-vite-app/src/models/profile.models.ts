export interface Profile {
  id: string;              // Identificador único
  fullName: string;        // Nombre completo
  nickname?: string;       // Apodo o nombre corto
  email?: string;          // Correo electrónico
  phone?: string;          // Teléfono
  bio?: string;            // Breve descripción personal
  birthday?: string;       // Fecha de nacimiento
  location?: string;       // Ciudad / País
  profileImage?: string;   // URL de la foto de perfil
  favoriteMovies?: string[]; // Lista de películas favoritas
  socialLinks?: {          // Opcional, enlaces sociales
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
