import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const Searchpage = () => {

    let  {data : movies ,pending,error}=useFetch("http://localhost:4000/moviesList");
    let {searchVal} = useParams();
   
    return ( 
        <div>
        <h1>Search page {searchVal}</h1>

        {movies && <Movieslist
         movies={movies.filter((movie)=>{ return movie.moviename.toLowerCase().includes
         (searchVal.toLowerCase())})} 
         
         title="search result"/>}

        </div>
     );
}
 
export default Searchpage;