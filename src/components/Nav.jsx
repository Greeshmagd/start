import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {


    const [searchVal, setSearchVal] = useState("");

    return ( 
        <nav className="nav">
          <h1> Hungama</h1>

          <input type="search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value)}}/>
          <Link to={`/search${searchVal}`}>  
          <button>Search</button>
          </Link>
          <div className='nav2'>
          <Link to="/home"> Home</Link>
          <Link to="/add"> Add New Movies</Link>
          </div>
        </nav>
     );
}
 
export default Nav;