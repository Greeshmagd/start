import { Link } from "react-router-dom";
import logo from './images/nature.jpg';

const Movieslist = ( {movies , title } ) => {
  return (
      <div className="movies-list">
          <h1> {title} </h1>
          {
          movies.map((movie)=>
              {
                  return( 
                    <Link to = { `/moviedetails${movie.id}` } >
                      <div key={movie.id} className="movie" >
                          <img src={logo} />
                          <h1> Movie Name : {movie.moviename} </h1>
                          <h2> Hero : {movie.hero} </h2>
                          <h2> Genere : {movie.genere} </h2>
                          <h2> Director : {movie.director}</h2>
                          <h2>
                            
                          </h2>
                      </div>
                      </Link>
                  )
              })
          }
      </div>
  );
}
export default Movieslist;