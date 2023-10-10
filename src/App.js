import * as React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

// 84e74c9b

const API_URL = "http://www.omdbapi.com/?apikey=84e74c9b";

const App = () => {
  useEffect(() => {
    searchMovie("spiderman");
  }, []);

  const searchMovie = async (title) => {
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json();
    console.log(data.Search);
  };

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search"></div>
      </div>
    </>
  );
};

export default App;
