import React , {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dropdown from './components/Dropdown';
import NotFound from './components/NotFound';
import TableAdmin from './components/admin/TableAdmin';
import PrivateRoute from './components/admin/PrivateRoute';
import Search from './components/search/Search';
import ProductById from './components/Product/ProductById';
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
             <Route  path='/register' exact component={SignUp} />
             <Route  path='/products'  exact component={Products}/>
             <Route  path='/search'  exact component={Search}/>
             <Route  path='/product/:id'  exact component={ProductById}/>
             <PrivateRoute  path='/admin/products'  exact component={TableAdmin}/>
             <Route  component={NotFound}/>
          </Switch>
      </Router> 
  )
}

export default App
