import React, { useState } from "react";
import "./App.css";
import Navbar1 from "./componants/Navbar1";
import MovieList from "./componants/MovieList";
import { dataMovies } from "./componants/data.js";
import Modal1 from "./componants/Modal.js";
import { Route, Routes } from "react-router-dom";
import Movieinfo from "./componants/Movieinfo";

function App() {
  const [key, setKey] = useState("");
  const getkeyword = (keyword) => {
    setKey(keyword);
    return keyword;
  };
  const [data, setData] = useState(dataMovies);

  const search = (data) => {
    const filter = data.filter(
      (movie) =>
        movie.title.toLowerCase().includes(key.toLocaleLowerCase().trim()) ||
        movie.rating.toString() >= key.toLocaleLowerCase().trim()
    );
    return filter;
  };
  const filterarray = search(data);

  const AddMovie = (movie) => {
    setData([...data, movie]);
  };
  return (
    <div className="App">
      <div className="navbar1">
        <Navbar1
          data={data}
          getkeyword={getkeyword}
          search={search}
          AddMovie={AddMovie}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <MovieList filter={filterarray} />
            </div>
          }
        />
        <Route
          path="/add"
          element={<Modal1 AddMovie={AddMovie} data={data} />}
        />
        <Route path="/movieinfo/:id" element={<Movieinfo data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
