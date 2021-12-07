import React, { useEffect, Fragment } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
//import { ReactComponent as ReactLogo } from '../assets/landing.svg';
import Features from './features/Features';
import logo from '../assets/logo.png'
const LandingPage = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto my-36 h-1/2 p-8 rounded-lg md:my-32">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
          <div className="flex flex-col justify-center items-start lg:order-last">
            <h1 className="text-3xl font-medium text-black-600 leading-normal xl:px-4">Find Your Perfect
              <strong>Future Home</strong>.</h1>
            <p class="text-gray-500 mt-4 mb-6 xl:px-4 text-lg">We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Realty.</p>
            <button className="xl:m-4 block py-4 px-12 text-white rounded-lg bg-red-500 hover:bg-red-400 transition-all outline-none">Get Started</button>
          </div>
          <div className="xl:mx-4 h-full w-full">
              <img src={logo} alt="" className="cursor-pointer"/>

          </div>
        </div>
    
      
      </div>
      {/* <Features /> */}

    </Fragment>

  )
}

export default LandingPage
