import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filter }) => {
  return (
    <div>
      <div className="movie_list">
        {filter.map((el) => (
          <div key={el.id}>
            <MovieCard el={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
