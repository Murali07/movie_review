import { useEffect, useState } from "react";
import { Movie } from './App';
import { API } from "./global";

export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/myapi/Movies`, {
      method: "GET",
    })
      .then(data => data.json())
      .then(mv => setMovieList(mv));
  }

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(
      `${API}/myapi/Movies/${id}`,
      {
        method: "DELETE",
      })
        .then((data) => data.json())
        .then(() => getMovies());
  }
  
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <Movie 
          key = {movie.id} 
          moviePoster={movie.movie_poster} 
          movieName={movie.movie_name} 
          movieRating={movie.movie_rating} 
          movieSummary={movie.movie_summary} 
          id={movie.id} 
          deleteButton = {
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        }
        />
      ))}
    </div>
  );
}
