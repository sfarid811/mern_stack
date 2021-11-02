import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {

  //const date = new Date().toISOString().split("T")[0];
 
  return (
    <Router>
        <Navbar />
          <Switch>
             <Route  path='/' exact component={LandingPage}/>
             <Route  path='/login' component={Login} />
             <Route  path='/sign-up' component={SignUp} />
             <Route  path='/products'  component={Products}/>
          </Switch>
      </Router> 
  )
}

export default App
