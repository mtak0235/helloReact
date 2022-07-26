import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({id, title, summary, genres, medium_cover_image}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title}/>
            <h1><Link to={`/movie/${id}`}>{title}</Link></h1>s
            <p>{summary}</p>
            <ul>
              {genres.map(g=><li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.string.isRequired,
    medium_cover_image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;