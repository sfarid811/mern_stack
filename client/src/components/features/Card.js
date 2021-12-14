import React from 'react';
// import ImageProduct from './ImageProduct';
import {Link} from 'react-router-dom';

const Card = ({ product }) => {

    return (
        <div className="flex bg-white relative shadow rounded-lg text-gray-800 hover:shadow-lg">
            <div className="flex flex-col">
                    <img src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`} className="h-52 w-full object-cover cursor-pointer bg-opacity-500" />
                        <h2 className="px-4 text-lg font-bold leading-tight text-darken my-2">{product.name}</h2>
                        <p className="px-4 text-gray-700 text-md mb-2 flex-1">{product.description}</p>
                    <Link to={`/product/${product._id}`} className="bg-gray-900 block text-center text-white px-4 py-2 w-full hover:bg-gray-700 focus:outline-none">View More</Link>
              
            </div>
            
        </div>
    )
}

export default Card;
