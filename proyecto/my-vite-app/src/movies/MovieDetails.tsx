import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Movie } from "../models/movie.model";
import { getMovies } from "../services/movie.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      const movies = await getMovies();
      const foundMovie = movies.find((m) => m.id === id) || null;
      setMovie(foundMovie);
      setLoading(false);
    };
    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700">
        Cargando película...
      </div>
    );
  }

  if (!movie) return null; // No mostrar nada si no hay película

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      {/* Botón volver */}
      <Link
        to="/movies"
        className="mb-6 self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow"
      >
        ← Volver a Movies
      </Link>

      {/* Tarjeta de película */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Imagen */}
        <div className="md:w-1/3 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{movie.title}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{movie.description}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm sm:text-base">
            <div>
              <span className="font-medium">Director:</span> {movie.director}
            </div>
            <div>
              <span className="font-medium">Duración:</span> {movie.duracion}
            </div>
            <div>
              <span className="font-medium">Rating:</span> {movie.rating} ⭐
            </div>
            <div>
              <span className="font-medium">Género:</span> {movie.genre}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
