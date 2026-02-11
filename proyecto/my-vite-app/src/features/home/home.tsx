import { Link } from "react-router-dom";

export function Home() {
  const backgroundImageUrl =
    "https://www.shutterstock.com/image-illustration/modern-cinema-interior-rows-empty-600nw-2664467557.jpg";

  return (
    <div
      className="relative flex items-center justify-center min-h-screen px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay oscuro uniforme */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Bienvenido a <span className="text-blue-500">MovieHub</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10">
          Explora nuestra colección de películas de anime como Dragon Ball,
          Naruto y Bleach. Descubre nuevas aventuras y revive las mejores
          batallas épicas.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/movies"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105"
          >
            Ver Películas
          </Link>

          <Link
            to="/profile"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Mi Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}








