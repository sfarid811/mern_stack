import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
//import logo from '../assets/logo_home.png'

const Navbar = ({ toggle }) => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
    
        if (offset > 92) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    let x = ['max-w-7xl mx-auto py-6 px-4'];
    if (scrolled) {
        x.push('fixed left-0 right-0 bg-gray-100 blur-sm');
    }


    return (

        <div className={x.join(" ")}>
            <nav className="flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-semibold sm:py-4 capitalize border-l-4 
                border-indigo-600 rounded-md">rental dream</NavLink>
                <div className="flex justify-between items-center" onClick={toggle}>
                    <svg
                        className='w-8 h-8 hidden md:block hidden'
                        fill='none'
                        stroke='currentColor' 
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>

                </div>
                <div className="flex xs:ml-4 items-center md:hidden">
                    <NavLink to="/" className="mr-10 text-lg font-medium">Home</NavLink>
                    <NavLink to="/products" className="mr-10 text-lg font-medium">About</NavLink>
                    <NavLink to="/login" className="mr-10 text-lg font-medium text-center text-gray-800 rounded-full px-2">Login</NavLink>
                    <NavLink to="/sign-up" exact activeClassName="active" className="mr-10 text-lg font-medium bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2">Sign Up</NavLink>

                </div>

            </nav>
        </div>
    )
}

export default Navbar
