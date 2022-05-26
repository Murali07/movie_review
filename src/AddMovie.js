import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie() {

  const [movie_name, setName] = useState("");
  const [movie_poster, setPoster] = useState("");
  const [movie_summary, setSummary] = useState("");
  const [movie_rating, setRating] = useState("");
  const [movie_trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      movie_name: movie_name,
      movie_rating: movie_rating,
      movie_summary: movie_summary,
      movie_poster: movie_poster,
      movie_trailer: movie_trailer,
    };

    console.log(newMovie);

    // setMovieList([...movieList, newMovie]);

    // 1. Method - POST
    // 2. Data (newMovie) - Body & JSON
    // 3. Header - JSON

    fetch(
      `https://6251286d977373573f44d46e.mockapi.io/myapi/Movies/`,
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "content-Type": "application/json",
        }
      })
        .then((data) => data.json());
  };

  return (
    <div className="add-movie">
      {/* <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Poster"></input>
            <input type="text" placeholder="Rating"></input>
            <input type="text" placeholder="Summary"></input> */}

      <TextField
        onChange={(event) => setName(event.target.value)}
        id="filled-basic"
        label="Name"
        variant="filled" />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        id="filled-basic"
        label="Poster"
        variant="filled" />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        id="filled-basic"
        label="Rating"
        variant="filled" />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        id="filled-basic"
        label="Summary"
        variant="filled" />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        id="filled-basic"
        label="Trailer"
        variant="filled" />

      {/* <button className="add">Add Movie</button> */}
      <Button onClick={addMovie} color="secondary" variant="contained">Add Movie</Button>



    </div>
  );
}
