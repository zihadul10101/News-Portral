import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Deshbord from './components/Deshbord/Deshbord/Deshbord';
import Home from './components/FullPage/Home/Home';
import AddNews from './components/Deshbord/AdminDeshbord/AddNews/AddNews';
import AddAdmin from './components/Deshbord/AddAdmin/AddAdmin';
import LogIn from './components/Authentication/LogIn/LogIn';
import PrivateRoute from './components/Authentication/PrivetRoute/PrivateRoute';
import ReadMore from './components/FullPage/BlogNews/ReadMore';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/readMore" >
            <ReadMore></ReadMore>
          </PrivateRoute>
          <PrivateRoute path="/deshbord">
            <Deshbord></Deshbord>
          </PrivateRoute>
          <PrivateRoute path="/deshbord/addNews">
            <AddNews></AddNews>
          </PrivateRoute>
          <PrivateRoute path="/deshbord/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
