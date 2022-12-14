import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Updatemovie from "./Updatemovie";
import useFetch from "./useFetch";


const Moviedetails = () => {

  let { id } = useParams();
  let history = useHistory();
  let [update , setUpdate] = useState(false);

  let {
    data: movie,
    pending,
    error,
  } = useFetch(`http://localhost:4000/moviesList/${id}`);
  let handleDelete = (id) => {
    fetch(`http://localhost:4000/moviesList/${id}`, { method: "DELETE" }).then(
      () => {
        history.push("/home");
      }
    );
  };
  return (
    <div>
      {error && <h1> {error} </h1>}
      {pending && <div className="loader"> </div>}
      {!update && movie && (
        <div className="movie-detail">
        <img src={movie.poster}/>

        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>
          <h1>{movie.moviename}</h1>
          <h1> {movie.hero}</h1>
          <h1> {movie.genere}</h1>
          <button
            onClick={() => {
              handleDelete(movie.id);
            }}
          >
            delete
          </button>
          <button onClick={()=>{setUpdate(true);}}>Update</button>
        </div>
      )}
      {update && <Updatemovie previousMovie={movie}/>}
    </div>
  );
};
export default Moviedetails; 