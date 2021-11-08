import React from 'react';
import ShowImage from './ShowImage';

const ProductCard = ({product}) => {
    return (
        <div>
            <ShowImage item={product} url="/photo" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard
