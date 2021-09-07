import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/FullPage/Home/Home';
import Deshbord from './components/Deshbord/Deshbord/Deshbord';


function App() {
  return (
    <Router>

    <Switch>
   <Route path="/">
   <Home></Home>
   </Route>
   <Route path="/home">
   <Home></Home>
   </Route>
  <Route path="/deshbord">
  <Deshbord></Deshbord>
  </Route>
   </Switch>
 
   
    </Router>
  );
}

export default App;
