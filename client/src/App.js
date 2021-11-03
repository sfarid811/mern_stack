import React , {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dropdown from './components/Dropdown';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {

  //const date = new Date().toISOString().split("T")[0];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
 
  return (
    <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle}/>
          <Switch>
             <Route  path='/' exact component={LandingPage}/>
             <Route  path='/login' exact component={Login} />
             <Route  path='/sign-up' exact component={SignUp} />
             <Route  path='/products'  exact component={Products}/>
             <Route  component={NotFound}/>
          </Switch>
      </Router> 
  )
}

export default App
