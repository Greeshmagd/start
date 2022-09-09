import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const Addmovie = () => {
    const [moviename, setMovieName] = useState("");
    const [hero, setHero] = useState("");
    const [director, setDirector] = useState("");
    const [genere, setGenere] = useState("");
    const [producer, setProducer]= useState("");

    let {data:movies} = useFetch("http://localhost:4000/moviesList");

    let history = useHistory();

    let handleSubmit = (e)=>{
     e.preventDefault();


        let movie = {moviename , hero , director , genere};

            //check the movie is present or not in db

            var duplicate=movies.some((m)=>{return m.moviename===moviename});

        if(duplicate===false && moviename != "")
        {
            fetch("http://localhost:4000/moviesList" , 
            {method:"POST" , 
            headers:{"Content-Type":"application/json"} , 
            body: JSON.stringify(movie) } 
        )
        .then(()=>{ history.push("/home") })
            }
            else
            {
                alert("movie is already present Or movie list is empty, please try with new movie name");
            }
        }

    return (

        <div className="addmovie">

            <h2 id="addmovieh1"> Add the New Movie </h2>
            <hr />        
            <form onSubmit={handleSubmit}>
​
                    <div>
​
                    <label>Movie Name : </label> 
                    <input type="text" value={moviename} onChange={(e)=>{setMovieName(e.target.value)}}/>
​
                    <label>Hero : </label> 
                    <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}}/>
​
                    <label>Director : </label> 
                    <input type="text" value={director} onChange={(e)=>{setDirector(e.target.value)}}/>
​
                    <label>Genere : </label> 
                    <input type="text" value={genere} onChange={(e)=>{setGenere(e.target.value)}} />

                    <label>Producer : </label> 
                    <input type="text" value={producer} onChange={(e)=>{setProducer(e.target.value)}} />
​
​
                    </div>
​
                    <input type="submit" value="Add Movie" />
​
            </form>
​
​
        </div>
    );
};
export default Addmovie;