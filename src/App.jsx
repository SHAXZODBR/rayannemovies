import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies("love");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=5fbe3e9c&s=${title}`
    );
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Rayanne</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
