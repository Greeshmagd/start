import {  useState } from "react";
import { useHistory } from "react-router-dom";


const Updatemovie = ({previousMovie}) => {

        const [moviename, setMovieName] = useState(previousMovie.moviename);
        const [hero, setHero] = useState(previousMovie.hero);
        const [director, setDirector] = useState(previousMovie.director);
        const [genere, setGenere] = useState(previousMovie.genere);


        let history = useHistory();

        let handleSubmit = (e)=>{
            
            e.preventDefault();
       
       
               let updatedmovie = {moviename , hero , director , genere};
       
                  
                   fetch(`http://localhost:4000/moviesList/${previousMovie.id}` , 
                   {method:"PUT" , 
                   headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                } , 
                   body: JSON.stringify(updatedmovie), } 
               )
               .then(()=>{ history.push("/home") })
                   }
                


    return (
        <div className="addmovie">
        <h1>Update Movie </h1>
            <hr />
            <form onSubmit={handleSubmit}>
                    <div>
                    <label>Movie Name : </label>
                    <input type="text" value={moviename} onChange={(e)=>{setMovieName(e.target.value)}}/>
                    <label>Hero : </label>
                    <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}}/>
                    <label>Director : </label>
                    <input type="text" value={director} onChange={(e)=>{setDirector(e.target.value)}}/>
                    <label>Genere : </label>
                    <input type="text" value={genere} onChange={(e)=>{setGenere(e.target.value)}} />
                    </div>
                    <input type="submit" value="Update Movie" />
            </form>
        </div>
    );
}
export default Updatemovie;