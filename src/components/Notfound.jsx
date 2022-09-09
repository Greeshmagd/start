import { Link } from "react-router-dom";
const Notfoundpage = () => {
    return ( 
        <div>
            <h1> 404 : Page not found</h1>
            <Link to="/home"> Go back to Homepage</Link>
        </div>
     );
}
 
export default Notfoundpage;