import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <div className="relative bg-white border-t-2 border-gray-200 mt-12">
            <footer className="max-w-7xl mx-auto py-8">
            <div className="grid gap-4 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4 ">
                <div className="">
                    <h1 className="mb-2">ContactUs</h1>
                    <div className="flex space-x-2 mb-2">
                        <Link to="/">Houses </Link>
                        <Link to="/">Services </Link>
                        <Link to="/">News </Link>
                        <Link to="/">Histoire</Link>

                    </div>
                    <p>RentalDreams © {new Date().getFullYear()}</p>
                </div>

                <div className="">
                    <div className="mb-4">
                    <i className="fas fa-map-marker"></i>
                        <span className="ml-4">Route du Verney 18
                            1070, Puidoux</span>
                    </div>
                    <div className="mb-4">
                    <i className="fas fa-phone"></i>
                        <span className="ml-4">(407) 362-7955</span>
                    </div>
                    <div className="mb-4">
                    <i className="fas fa-envelope"></i>
                        <span className="ml-4">support@rental-dreams.com</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">History</h3>
                    <p className="text-gray-600 leading-7 mb-2">Your home away from home Vacation Rental minutes from Orlando’s Main Attractions awaits! After a long day at the parks, leave the crowed hotels behind & come to a space where you can enjoy your family & friends in a beautiful, spacious home filled with all the amenities you could ask for.</p>
                    <div className="flex space-x-4">
                 
                        <Link to="/"><i className="fab fa-facebook text-3xl text-gray-700"></i></Link>
                        <Link to="/"><i className="fab fa-instagram text-3xl text-gray-700"></i></Link>
                        <Link to="/"><i className="fab fa-youtube text-3xl text-gray-700"></i></Link>
                       
                    </div>
                </div>
            </div>
        </footer>
       </div>
    )
}

export default Footer
