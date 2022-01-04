import React, { useEffect, useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { useLocation } from "react-router-dom";


const Navbar = ({ toggle }) => {

    const dispatch = useDispatch();

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/")[1];



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const [top, setTop] = useState(true);

    
    useEffect(() => {
        const scrollHandler = () => {
          window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
      }, [top]);  
 
    const handleLogout = () => {
        dispatch(logout())
    }
   

    //bg-app-background
    return (

        <div className={`fixed py-4 top-0 w-full z-30 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
              <div className="max-w-7xl mx-auto px-5">
                <nav className="flex justify-between items-center">
                    <NavLink to="/" 
                    className="text-2xl font-semibold sm:py-4 capitalize border-l-4 
                border-red-600 rounded-md">rental dream</NavLink>
                    <div className="flex justify-between items-center" onClick={toggle}>
                        <svg class="w-8 h-8 hidden md:block"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7">
                            </path></svg>

                    </div>
                    <div className="flex xs:ml-4 items-center md:hidden">

                        {userInfo && (
                            <Fragment>
                                <NavLink to="/admin/products" className={`mr-10 text-lg font-medium text-center text-gray-800 rounded-full px-2`}>
                                    Dashboard</NavLink>
                                <NavLink to="/login" exact className={`mr-10 text-lg font-medium
                                 bg-gradient-to-r from-yellow-300  to-red-400 hover:opacity-90 text-white 
                            px-6 py-2`}
                                    onClick={handleLogout}
                                >Logout </NavLink>

                            </Fragment>
                        )}

                        {!userInfo && (
                            <Fragment>
                                <NavLink to="/search" 
                                
                                className={`mr-10 text-lg font-medium border-b-2 border-yellow-500`}>Search</NavLink>
                                <NavLink 
                                to="/products" 
                             
                                className={`mr-10 text-lg font-medium`}>About</NavLink>
                                <NavLink 
                                to="/login" 
                           
                                className={`mr-10 text-lg font-medium text-center text-gray-800 rounded-full px-2`}>Login</NavLink>
                                <NavLink 
                                to="/register" 
                              
                                className={`mr-10 text-lg font-medium bg-gradient-to-r from-yellow-500 to-yellow-600 hover:opacity-80 text-white px-6 py-2`}>Sign Up</NavLink>
                            </Fragment>
                        )}

                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar
