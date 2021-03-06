import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({ product }) => {

    return (
        <div className="shadow-lg bg-white rounded-xl overflow-hidden flex">
            <div className="flex flex-col">
                <img src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`}
                    className="h-96 w-full object-cover cursor-pointer bg-opacity-500" />
                <h1 className="text-lg font-bold leading-tight text-darken py-4 ml-4">{product.name}</h1>
                <p className="font-normal text-gray-700 px-4 flex-grow flex-1 pb-4">{product.description}
                    <span className="text-xl font-bold text-gray-900">...</span></p>
                <div className="flex px-4 justify-around items-center">
                    <span className="text-xl text-gray-900 font-bold">{product.price.toLocaleString('en-US')}/mo</span>
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-4 py-2 cursor-pointer">For rent</span>
                </div>
                <div className="flex my-6 px-4 justify-around">
                    <span className="flex justify-center items-center"><i class="fas fa-bed text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>2 bed</span>
                    <span className="flex justify-center items-center"><i class="fas fa-bath text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>2 Bathroom</span>
                    <span className="flex justify-center items-center"><i class="fas fa-home text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>1700 sqft</span>
                </div>
                <Link to={`/product/${product._id}`} className="block text-center bg-gray-900 text-white py-2 px-4 hover:bg-gray-600 capitalize focus:outline-none mt-4">view more</Link>

            </div>
        </div>
    )
}

export default Product;
