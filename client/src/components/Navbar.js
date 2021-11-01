import React from 'react';
import {Link} from "react-router-dom";
//import {getAllProducts} from '../actions/productActions';
//import logo from '../assets/logo_home.png'

const Navbar = () => {
  
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <nav className="flex justify-between items-center sm:flex-col">
                <Link className="text-2xl font-semibold sm:py-4 capitalize">rental dream</Link>
                <div>
                    
                </div>
                <div className="flex xs:ml-4 items-center">
                    <Link to="/" className="mr-10 text-lg ">Home</Link>
                    <Link to="/" className="mr-10 text-lg">About</Link>
                    <Link to="/" className="mr-10 text-lg text-center bg-white text-gray-800 rounded-full px-6 py-2">Login</Link>
                    <Link to="/products" className="mr-10 text-lg bg-yellow-500 text-white rounded-full px-6 py-2">Sign Up</Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
