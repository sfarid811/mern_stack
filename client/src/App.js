import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => {

  //const date = new Date().toISOString().split("T")[0];
 
  return (
    <Router>
        <Navbar />
        <LandingPage />
          <Switch>
             <Route exact path="/" />
           
          </Switch>
      </Router> 
  )
}

export default App
