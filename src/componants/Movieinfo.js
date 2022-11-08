import React from "react";
import { useParams } from "react-router-dom";

const Movieinfo = ({ data }) => {
  const obj = useParams();
  const movie = data.find((el) => el.id === Number(obj.id));
  return (
    <div
      className="movieinfo"
      style={{
        backgroundImage: `url(${movie.posterUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1> {movie.title} </h1>
      <p>{movie.description}</p>
      <iframe
        title="trailer"
        width="720"
        height="400"
        src={movie.trailerSrc}
      ></iframe>
    </div>
  );
};

export default Movieinfo;
