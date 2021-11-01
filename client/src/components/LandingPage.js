import React from 'react';
import landing from "../assets/landing.svg";
import {ReactComponent as ReactLogo} from '../assets/landing.svg';

const LandingPage = () => {
    return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex ">
        <div className="w-1/2 sm:w-full">
        <h1 className="text-5xl font-bold leading-tight text-darken">Lorem ipsum dolor sit amet.</h1>
        <p className="leading-7 text-gray-500 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore vel eaque facere harum quibusdam atque, sint, voluptatibus dolorum iste eos itaque? Dolore hic vitae aliquam consequuntur, quasi reprehenderit inventore!</p>
        <button className="mt-4 bg-gray-900 text-white rounded-full py-2 px-6 hover:bg-gray-400 xs:w-full">Learn More</button>
        </div>
     
      <img src="" alt="" className="w:1/2"/> 
      
      </div>
	  </div>
    )
}

export default LandingPage
