export interface Movie {
  id: string;
  title: string;
  description?: string;
  image: string; // url de la imagen
  director: string;
  duracion: string;
  rating: number;
  genre: string;
}

