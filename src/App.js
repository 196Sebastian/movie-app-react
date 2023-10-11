import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 84e74c9b

const API_URL = "http://www.omdbapi.com/?apikey=84e74c9b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovie("spiderman");
  }, []);

  const searchMovie = async (title) => {
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json();

    setMovies(data.Search);
  };

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="Search for movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search icon"
            onClick={() => searchMovie(searchTerm)}
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
            <h1>No Movies Found...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
