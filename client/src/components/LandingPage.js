import React from 'react';
//import landing from "../assets/landing.svg";
//import { ReactComponent as ReactLogo } from '../assets/landing.svg';

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 h-screen">
      <div className="flex justify-center">
        <div className="sm:w-full">
          <h1 className="text-5xl font-bold leading-tight text-darken text-center sm:text-center">Your Property, Our Priority.</h1>
          <p className="text-2xl text-gray-500 py-4 sm:px-4 tracking-tight">Your best investment opportunity won’t fit into a safety deposit box, but you can live in it.</p>
          <div className="flex justify-center">
          <button className="mr-4 bg-gray-900 text-white rounded-full py-2 px-6 hover:bg-gray-400 xs:w-full sm:w-1/2">Learn More</button>
          <button className="mr-4 bg-gray-900 text-white rounded-full py-2 px-6 hover:bg-gray-400 xs:w-full sm:w-1/2">Learn More</button>
          </div>
        </div>
    
        {/* <div className=" w:1/2 sm:w-full">
          <img src="https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" className="object-contain h-96 sm:w-full mt-4" />
        </div> */}
      </div>
    </div>
  )
}

export default LandingPage
