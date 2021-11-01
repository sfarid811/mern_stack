import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {

  //const date = new Date().toISOString().split("T")[0];
 
  return (
    <Router>
        <Navbar />
        <LandingPage />
        <Products />
          <Switch>
             <Route exact path='/' />
          </Switch>
      </Router> 
  )
}

export default App
