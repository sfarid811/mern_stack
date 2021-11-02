import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
//import logo from '../assets/logo_home.png'

const Navbar = () => {
      
      const location = useLocation();
      const { pathname } = location;
      const splitLocation = pathname.split("/")[1];
   
  
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <nav className="flex justify-between items-center sm:flex-col">
                <NavLink to="/" className="text-2xl font-semibold sm:py-4 capitalize">rental dream</NavLink>
                <div>
                    
                </div>
                <div className="flex xs:ml-4 items-center">
                    <NavLink to="/" exact activeClassName="active" className="mr-10 text-lg ">Home</NavLink>
                    <NavLink to="/products" exact activeClassName="active" className="mr-10 text-lg">About</NavLink>
                    <NavLink to="/login" exact activeClassName="active" className="mr-10 text-lg text-center bg-white text-gray-800 rounded-full px-6 py-2">Login</NavLink>
                    <NavLink to="/sign-up" exact activeClassName="active" className="mr-10 text-lg bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2">Sign Up</NavLink>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
