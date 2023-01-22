import React from "react";
import { movies } from "../data";

function Movies() {

  // const movieTime = movies.time.map((time) => (
  //   <p key={time}>{time}</p>
  // ))

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.title}>
            <h3>{movie.title}</h3>
            <p key={movie.time}>{movie.time}</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Movies;