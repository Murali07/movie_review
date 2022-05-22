import { useEffect, useState } from "react";
import { Movie } from './App';

export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://6251286d977373573f44d46e.mockapi.io/myapi/Movies", {
      method: "GET",
    })
      .then(data => data.json())
      .then(mv => setMovieList(mv));
  }, [])
  
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <Movie key = {movie.id} moviePoster={movie.movie_poster} movieName={movie.movie_name} movieRating={movie.movie_rating} movieSummary={movie.movie_summary} id={movie.id} />
      ))}
    </div>
  );
}
