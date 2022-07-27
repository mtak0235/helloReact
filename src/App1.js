import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
function App1() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(`https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year`);
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading</h1> : 
      <div>
      {
        movies.map(movie => 
          <div key={movie.id}>
            <img src={movie.medium_cover_image}/>
            <h1>{movie.title}</h1>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(g=><li key={g}>{g}</li>)}
            </ul>
          </div>)
      }
      </div>}
    </div>
  );
}
export default App1;