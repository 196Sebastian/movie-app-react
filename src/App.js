import * as React from "react";
import { useEffect } from "react";

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
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
    </>
  );
};

export default App;
