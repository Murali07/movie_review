import { useEffect, useState } from "react";
import { Movie } from './App';

export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://6251286d977373573f44d46e.mockapi.io/myapi/Movies", {
      method: "GET",
    })
      .then(data => data.json())
      .then(mv => setMovieList(mv));
  }

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(
      `https://6251286d977373573f44d46e.mockapi.io/myapi/Movies/${id}`,
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
