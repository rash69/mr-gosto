import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/Pages/HomePage';
import NotFound from './Components/Pages/NotFound/NotFound';
import Login from './Components/LogUser/Login';
import Signup from './Components/LogUser/Signup';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path ='/'>
            <HomePage></HomePage>
          </Route>
          
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
