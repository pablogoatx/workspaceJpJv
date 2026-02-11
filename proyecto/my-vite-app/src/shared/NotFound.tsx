import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="w-9/12 m-auto py-16 flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            {/* Código de error */}
            <h1 className="text-9xl font-bold text-purple-400">404</h1>

            {/* Título */}
            <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>

            {/* Descripción */}
            <p className="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>

            {/* Botones */}
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Volver al Home */}
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6 transition"
              >
                HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
