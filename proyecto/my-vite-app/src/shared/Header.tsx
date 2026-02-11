import { Link, useLocation } from "react-router-dom";
import { FaHome, FaFilm, FaUser } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-2 font-semibold transition ${
      location.pathname === path
        ? "text-blue-400"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <header className="w-full bg-gray-900 px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">

        {/* Links izquierda */}
        <div className="flex items-center gap-8">
          <Link to="/" className={linkClasses("/")}>
            <FaHome />
            Home
          </Link>

          <Link to="/movies" className={linkClasses("/movies")}>
            <FaFilm />
            Movies
          </Link>
        </div>

        {/* Link derecha */}
        <Link to="/profile" className={linkClasses("/profile")}>
          <FaUser />
          Perfil
        </Link>

      </div>
    </header>
  );
}


