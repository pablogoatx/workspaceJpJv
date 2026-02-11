import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import type { Movie } from "../models/movie.model";
import { getMovies } from "../services/movie.service";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      
      <h1 className="text-4xl font-bold mb-6">Movies Page</h1>

      <div className="w-full max-w-5xl flex flex-col gap-4">
        {loading ? (
          <div className="text-center py-16 text-gray-600">
            Cargando películas...
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
}

