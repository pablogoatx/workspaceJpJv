import type { Movie } from "../models/movie.model";

const MOVIES_URL = "/data/movies.json";

export async function getMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(MOVIES_URL);

    if (!response.ok) {
      throw new Error("Error al cargar las películas");
    }

    const data = await response.json();
    console.log("Películas cargadas correctamente");
    return data as Movie[]; // ✅ Array de Movie
  } catch (error) {
    console.error("MovieService error:", error);
    return [];
  }
}


