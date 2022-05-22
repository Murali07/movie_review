import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { INITIAL_MOVIE_LIST } from './App';
import { useEffect, useState } from "react";

export function MovieDetails() {

  const { id } = useParams();

  // const movie = INITIAL_MOVIE_LIST[id];

  // console.log(movie);
  // return(
  //   <div>
  //     <h1>Details of {movie.movie_name}</h1>
  //   </div>
  // )

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://6251286d977373573f44d46e.mockapi.io/myapi/Movies/${id}`, {
      method: "GET",
    })
      .then(data => data.json())
      .then(mv => setMovie(mv));
  }, [id]);

  const styles = {
    color: movie.movie_rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-details-container">

      <iframe
        width="700"
        height="400"
        src={movie.movie_trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-specs">
        <h3 className="movie-name">{movie.movie_name}</h3>
        <p style={styles}>⭐ {movie.movie_rating}</p>
      </div>

      <p className="movie-summary">{movie.movie_summary}</p>

      <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon></ArrowBackIosIcon>Back</Button>


    </div>
  );
}
