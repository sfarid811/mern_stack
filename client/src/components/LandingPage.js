import React, { useEffect, Fragment } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
//import { ReactComponent as ReactLogo } from '../assets/landing.svg';
import Features from './features/Features';
import logo from '../assets/real.jpg';
import Services from './Services/Services';
import Places from './Services/Places';
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
              <strong className="">Future Home</strong>.</h1>
            <p className="text-gray-500 mt-4 mb-6 xl:px-4 text-lg">We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Realty.</p>
            <div className="flex xs:flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="flex bg-gray-100 p-4 w-96 md:w-full rounded-lg space-x-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="bg-gray-100 outline-none sm:w-full" type="text" placeholder="Search ..." />
              </div>
              <div className="flex justify-center items-center  bg-yellow-500 sm:w-full py-3 px-5 h-full text-white font-semibold rounded-md hover:shadow-lg transition duration-3000 cursor-pointer">
                <span className="">Search</span>
              </div>
            </div>
          </div>
          <div className="xl:mx-4 h-full w-full">
            <img src={logo} alt="" className="cursor-pointer hover:opacity-75" />

          </div>
        </div>


      </div>
      {/* <Features /> */}
      <Services />
      <Places />

    </Fragment>

  )
}

export default LandingPage;
