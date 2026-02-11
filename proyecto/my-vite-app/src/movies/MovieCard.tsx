import { Link } from "react-router-dom";
import type { Movie } from "../models/movie.model";

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  const { id, title, description, image } = movie;

  return (
    <Link
      to={`/movies/${id}`}
      className="block transform hover:scale-105 transition duration-300"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">

        {/* Imagen arriba */}
        <div className="w-full h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info abajo */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {title}
          </h2>

          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}

