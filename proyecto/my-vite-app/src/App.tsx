import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Home } from "./features/home/home";
import NotFound from "./shared/NotFound";
import Movies from "./movies/Movies";
import MovieDetails from "./movies/MovieDetails";
import Profile from "./profile/Profile";


function App() {
  return <BrowserRouter>
        <Header/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
           <Route path="/profile" element={<Profile />} />

          <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
        </BrowserRouter>;
}

export default App;
