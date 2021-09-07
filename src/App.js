import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Deshbord from './components/Deshbord/Deshbord/Deshbord';
import Authentication from './components/Authentication/Authentication';
import Home from './components/FullPage/Home/Home';
import AddNews from './components/Deshbord/AdminDeshbord/AddNews/AddNews';
import AddAdmin from './components/Deshbord/AddAdmin/AddAdmin';
export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
  <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="signUp">
          <Authentication></Authentication>
        </Route>
        <Route path="/deshbord">
          <Deshbord></Deshbord>
        </Route>
        <Route path="/deshbord/addNews">
         <AddNews></AddNews>
        </Route>
        <Route path="/deshbord/addAdmin">
        <AddAdmin></AddAdmin>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>


    </Router>
    </UserContext.Provider>
  );
}

export default App;
