import './App.css';
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">

      <nav>
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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/add-movie" element={<AddMovie />} />

      </Routes>   
          
      
    </div>
    
  );
}

export default App;

function Home(){
  return <h1>Welcome to the Movie App 😊 🍿 </h1>
}

function MovieDetails(){
  
  const {id} = useParams();

  return(
    <div>
      <h1>Movie details page {id}</h1>
    </div>
  )
}

function MovieList(){
  const movieList = [
    {
      movie_poster: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      movie_name : "Master",
      movie_rating: "7.3",
      movie_summary: "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    },
    {
      movie_poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
      movie_name : "K.G.F: Chapter 2",
      movie_rating: "8.9",
      movie_summary: "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
    },
    {
      movie_poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      movie_name : "Jai Bhim",
      movie_rating: "8.8",
      movie_summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    },
    {
      movie_poster: "https://static.toiimg.com/photo/71277352.cms",
      movie_name : "Bigil",
      movie_rating: "7.2",
      movie_summary: "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    },
    {
      movie_poster: "https://pbs.twimg.com/media/EyfiAtmVEAkS3NN.jpg",
      movie_name : "Karnan",
      movie_rating: "8.1",
      movie_summary: "A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",
    },
    {
      movie_poster: "https://static.moviecrow.com/gallery/20210924/189727-FADCTbOVUAUfUV_.jfif",
      movie_name: "Doctor",
      movie_rating: "7.5",
      movie_summary: "When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
    },
    {
      movie_poster: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226579/Pushpa-1.jpg",
      movie_name: "Pushpa: The Rise",
      movie_rating: "7.6",
      movie_summary: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
    },
    {
      movie_poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      movie_name: "Avengers: Endgame",
      movie_rating: "8.4",
      movie_summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
  ];
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
        <h3 className="movie-name">{movieName}</h3>
        <p style={styles} >⭐ {movieRating}</p>
      </div>

      <button onClick={() => navigate(`/movies/${id}`)}>Info</button>

      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      {/* <p style={paraStyles} className="movie-summary">{movieSummary}</p> */}

      {/* conditional redering */}
      {show ? <p className="movie-summary">{movieSummary}</p> : ""}

      <Counter />
    </div> 
  )

}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button className="btn-dislike" onClick={() => setDisLike(dislike + 1)}>
        👎 {dislike}
      </button>
    </div>
  );
}

function AddMovie(){

  return (
    <div className="add-movie">
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Poster"></input>
      <input type="text" placeholder="Rating"></input>
      <input type="text" placeholder="Summary"></input>

      <button className="add">Add Movie</button>
    </div>
  )
}


function AddColor(){
  const [color, setColor] = useState("purple");
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  return (
    <div>
      <div className="add-color">
        <input
          // event.target.value (newColor) -> color
          // setColor - Informs React color is changed - re-render
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color}
        ></input>

        {/* setColorList - Informs React colorList is changed - re-render */}
        {/* copy the colorList and then add newColor to it */}
        <button onClick={ () => setColorList([...colorList, color])}>
          Add Color
        </button>
      </div>
      
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}      

    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
  };

  return <div style={styles}></div>;
}