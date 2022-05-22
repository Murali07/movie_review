import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { AddColor } from './AddColor';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Counter } from './Counter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



export const INITIAL_MOVIE_LIST = [
  {
    id: "100",
    movie_poster: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    movie_name : "Master",
    movie_rating: "7.3",
    movie_summary: "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    movie_trailer: "https://www.youtube.com/embed/UTiXQcrLlv4",
  },
  {
    id: "101",
    movie_poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
    movie_name : "K.G.F: Chapter 2",
    movie_rating: "8.9",
    movie_summary: "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
    movie_trailer: "https://www.youtube.com/embed/tLeTx5OdjZs",
  },
  {
    id: "102",
    movie_poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    movie_name : "Jai Bhim",
    movie_rating: "8.8",
    movie_summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    movie_trailer: "https://www.youtube.com/embed/pVOd8HAQQZM",
  },
  {
    id: "103",
    movie_poster: "https://static.toiimg.com/photo/71277352.cms",
    movie_name : "Bigil",
    movie_rating: "7.2",
    movie_summary: "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    movie_trailer:"https://www.youtube.com/embed/GR-Ui8-V2M0",
  },
  {
    id: "104",
    movie_poster: "https://pbs.twimg.com/media/EyfiAtmVEAkS3NN.jpg",
    movie_name : "Karnan",
    movie_rating: "8.1",
    movie_summary: "A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",
    movie_trailer:"https://www.youtube.com/embed/pgfUzQ8nzBY",
  },
  {
    id: "105",
    movie_poster: "https://static.moviecrow.com/gallery/20210924/189727-FADCTbOVUAUfUV_.jfif",
    movie_name: "Doctor",
    movie_rating: "7.5",
    movie_summary: "When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
    movie_trailer:"https://www.youtube.com/embed/oQiH_Iw0kDs",
  },
  {
    id: "106",
    movie_poster: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226579/Pushpa-1.jpg",
    movie_name: "Pushpa: The Rise",
    movie_rating: "7.6",
    movie_summary: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
    movie_trailer:"https://www.youtube.com/embed/Q1NKMPhP8PY",
  },
  {
    id: "107",
    movie_poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    movie_name: "Avengers: Endgame",
    movie_rating: "8.4",
    movie_summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    movie_trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
  },
];


function App() {

  const navigate = useNavigate();

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  


  return (

    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight: "100vh", borderRadius: "0px"}}>
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
              <Button onClick={() => navigate(`/`)} color="inherit"><HomeIcon></HomeIcon>Home</Button>
              <Button onClick={() => navigate(`/movies`)} color="inherit"><LocalMoviesIcon></LocalMoviesIcon>Movies</Button>
              <Button onClick={() => navigate(`/add-movie`)} color="inherit"><AddIcon></AddIcon>Add Movies</Button>
              <Button onClick={() => navigate(`/color-game`)} color="inherit"><ColorLensIcon></ColorLensIcon>Color Game</Button>
              <Button 
                startIcon = {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            {/* : makes the path matching dynamic */}
            <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/add-movie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />

          </Routes>   
              
          
        </div>
      </Paper>
    </ThemeProvider>
    
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

export function Movie({ moviePoster, movieName, movieRating, movieSummary, id}){

  const styles = {
    color: movieRating > 8 ? "green" : "red",
  }

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  }

  const navigate = useNavigate();

  return(
    <Card className="movie-container">
      <img className="movie-poster" src={moviePoster} alt={movieName} />
      <CardContent>      
        <div className="movie-specs">
          <h3 className="movie-name">{movieName} 
          <IconButton 
            onClick={() => navigate(`/movies/${id}`)} 
            color="primary"
            aria-label="Movie Details"
          >        
            <InfoIcon></InfoIcon>
          </IconButton> 
          <IconButton 
            onClick={() => setShow(!show)} 
            color="primary" 
            aria-label="Toggle Summary"
          >

          {show ? <ExpandLessIcon ></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
            
          </IconButton>      
          
          </h3>
          
          <p style={styles} >⭐ {movieRating}</p>
        </div>

        

        {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}      

        {/* <button onClick={() => setShow(!show)}>Toggle Summary</button> */}
        {/* <p style={paraStyles} className="movie-summary">{movieSummary}</p> */}

        {/* conditional redering */}
        {show ? <p className="movie-summary">{movieSummary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
     
    </Card> 
  )

}


