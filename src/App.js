import Nav from "./components/Nav";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Moviedetails from "./components/Moviedetails";
import Addmovie from "./components/Addmovie";
import Searchpage from "./components/Searchpage";
import Notfoundpage from "./components/Notfound";

function App() {
  return (
    <Router>
    <div className="App">

      <Nav/>
      
      <Switch>

        <Route exact path="/home">
          <Home/>
        </Route>

        <Route path ="/add">
          <Addmovie/>
        </Route>

        <Route path="/moviedetails:id">
          <Moviedetails/>
        </Route>
        
        <Route path="/search:searchVal">
          <Searchpage/>
        </Route>

        <Route path="*">
          <Notfoundpage/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}
export default App;