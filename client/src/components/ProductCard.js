import React from 'react';
import ShowImage from './ShowImage';

const ProductCard = ({ product }) => {
    return (
        <div className="shadow-lg bg-white rounded-xl overflow-hidden flex">
            <div className="flex flex-col">
                <ShowImage item={product} url="/photo" />
                <h1 className="text-lg font-bold leading-tight text-darken py-4 ml-4">{product.name}</h1>
                <p className="font-normal text-gray-700 px-4 flex-grow flex-1">{product.description}</p>
                <button className="bg-gray-900 text-white py-2 px-4 hover:bg-gray-600  focus:outline-none mt-4">+ d'info</button>
            </div>
        </div>
    )
}

export default ProductCard
