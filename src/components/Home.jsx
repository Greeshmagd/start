import Movieslist from "./Movieslist";
import useFetch from "./useFetch";
const Home = () => {

    let  {data : movies ,pending,error} = useFetch("http://localhost:4000/moviesList");

    return (
        <div className="home-content">  
        {error && <h1> {error}  </h1>}
        {pending &&   <div className="loader">   </div>}
        {movies && <Movieslist movies={movies} title="All Movies"  /> }
        </div>
    );
};
export default Home;


// sending the details by `$ and accept using :id, and use it using useParams with importing from react router dom.