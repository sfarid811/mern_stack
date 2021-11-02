import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div
        className={
          isOpen
            ? 'grid grid-rows-4 text-center items-center bg-gray-100 shadow-lg'
            : 'hidden'
        }
        onClick={toggle}
      >
           
           <Link to="/" className="p-4">Home</Link>
           <Link to="/products" className="p-4">About</Link>
           <Link to="/login" className="p-4">Login</Link>
           <Link to="/sign-up" className="p-4 bg-gray-900 rounded-full text-white hover:bg-gray-700 w-1/2 mx-auto mb-2">Sign Up</Link>
           
            
        </div>
    )
}

export default Dropdown
