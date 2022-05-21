import { Movie } from './App';

export function MovieList({ movieList, setMovieList }) {
  // const movieList = INITIAL_MOVIE_LIST;
  return (
    <div className="movie-list">
      {movieList.map((movie, index) => (
        <Movie moviePoster={movie.movie_poster} movieName={movie.movie_name} movieRating={movie.movie_rating} movieSummary={movie.movie_summary} id={index} />
      ))}
    </div>
  );
}
