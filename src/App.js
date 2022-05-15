import './App.css';
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { AddColor } from './AddColor';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Counter } from './Counter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

const INITIAL_MOVIE_LIST = [
  {
    movie_poster: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    movie_name : "Master",
    movie_rating: "7.3",
    movie_summary: "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    movie_trailer: "https://www.youtube.com/embed/UTiXQcrLlv4",
  },
  {
    movie_poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
    movie_name : "K.G.F: Chapter 2",
    movie_rating: "8.9",
    movie_summary: "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
    movie_trailer: "https://www.youtube.com/embed/tLeTx5OdjZs",
  },
  {
    movie_poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    movie_name : "Jai Bhim",
    movie_rating: "8.8",
    movie_summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    movie_trailer: "https://www.youtube.com/embed/pVOd8HAQQZM",
  },
  {
    movie_poster: "https://static.toiimg.com/photo/71277352.cms",
    movie_name : "Bigil",
    movie_rating: "7.2",
    movie_summary: "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    movie_trailer:"https://www.youtube.com/embed/GR-Ui8-V2M0",
  },
  {
    movie_poster: "https://pbs.twimg.com/media/EyfiAtmVEAkS3NN.jpg",
    movie_name : "Karnan",
    movie_rating: "8.1",
    movie_summary: "A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",
    movie_trailer:"https://www.youtube.com/embed/pgfUzQ8nzBY",
  },
  {
    movie_poster: "https://static.moviecrow.com/gallery/20210924/189727-FADCTbOVUAUfUV_.jfif",
    movie_name: "Doctor",
    movie_rating: "7.5",
    movie_summary: "When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
    movie_trailer:"https://www.youtube.com/embed/oQiH_Iw0kDs",
  },
  {
    movie_poster: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226579/Pushpa-1.jpg",
    movie_name: "Pushpa: The Rise",
    movie_rating: "7.6",
    movie_summary: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
    movie_trailer:"https://www.youtube.com/embed/Q1NKMPhP8PY",
  },
  {
    movie_poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    movie_name: "Avengers: Endgame",
    movie_rating: "8.4",
    movie_summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    movie_trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
  },
];


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          <li>
            <Link to="/add-movie">Add Movies</Link>
          </li>
          <li>
            <Link to="/refsdfsasf">Random</Link>
          </li>
        </ul>
      </nav> */}

      <AppBar position="static">
        <Toolbar>                   
          <Button onClick={() => navigate(`/`)} color="inherit">Home</Button>
          <Button onClick={() => navigate(`/movies`)} color="inherit">Movies</Button>
          <Button onClick={() => navigate(`/add-movie`)} color="inherit">Add Movies</Button>
          <Button onClick={() => navigate(`/color-game`)} color="inherit">Color Game</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        {/* : makes the path matching dynamic */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />

      </Routes>   
          
      
    </div>
    
  );
}

export default App;

function Home(){
  return <h1 className="home">Welcome to the Movie App 😊🎇🎇✨🎉🎉</h1>
}

function NotFound(){
  return(
    <div>
      <img src="https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png"></img>
    </div>
  )
}

function MovieDetails(){

  const {id} = useParams();

  const movie = INITIAL_MOVIE_LIST[id];

  // console.log(movie);

  // return(
  //   <div>
  //     <h1>Details of {movie.movie_name}</h1>
  //   </div>
  // )
  
   
  const styles = {
    color: movie.movie_rating > 8 ? "green" : "red",
  }

  const navigate = useNavigate();

  return(
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
        <p style={styles} >⭐ {movie.movie_rating}</p>
      </div>

      <p className="movie-summary">{movie.movie_summary}</p>

      <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon></ArrowBackIosIcon>Back</Button>

            
    </div> 
  )
}

function MovieList(){
  const movieList = INITIAL_MOVIE_LIST;

  return(
    <div className="movie-list">
        {movieList.map((movie, index) => (
          <Movie moviePoster = {movie.movie_poster} movieName = {movie.movie_name} movieRating = {movie.movie_rating} movieSummary = {movie.movie_summary} id = {index}/>
        ))}
    </div>
  )
}

function Movie({ moviePoster, movieName, movieRating, movieSummary, id}){

  const styles = {
    color: movieRating > 8 ? "green" : "red",
  }

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  }

  const navigate = useNavigate();

  return(
    <div className="movie-container">
      <img className="movie-poster" src={moviePoster} alt={movieName} />
      <div className="movie-specs">
        <h3 className="movie-name">{movieName} 
        <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary">        
          <InfoIcon></InfoIcon>
        </IconButton>       
        {show ? <ExpandLessIcon onClick={() => setShow(!show)} color="primary"></ExpandLessIcon> : <ExpandMoreIcon onClick={() => setShow(!show)} color="primary"></ExpandMoreIcon>}
        </h3>
        
        <p style={styles} >⭐ {movieRating}</p>
      </div>

      

      {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}      

      {/* <button onClick={() => setShow(!show)}>Toggle Summary</button> */}
      {/* <p style={paraStyles} className="movie-summary">{movieSummary}</p> */}

      {/* conditional redering */}
      {show ? <p className="movie-summary">{movieSummary}</p> : ""}
    
      <Counter />
    </div> 
  )

}

function AddMovie(){

  return (
    <div className="add-movie">
      {/* <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Poster"></input>
      <input type="text" placeholder="Rating"></input>
      <input type="text" placeholder="Summary"></input> */}

      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Poster" variant="filled" />
      <TextField id="filled-basic" label="Rating" variant="filled" />
      <TextField id="filled-basic" label="Summary" variant="filled" />
      <TextField id="filled-basic" label="Trailer" variant="filled" />

      {/* <button className="add">Add Movie</button> */}
      <Button color="success" variant="contained">Add Movie</Button>

      {/* <button>
        onClick={() => {
          const newMovie = {
            name: name,
            rating: rating,
            summary: summary,
            poster: poster,
            trailer: trailer,
          };
        }}
      </button> */}

      
    </div>
  )
}



