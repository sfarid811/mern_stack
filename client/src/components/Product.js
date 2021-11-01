import React from 'react';
import ImageProduct from './ImageProduct';

const Product = ({product}) => {
  
    return (
        <div className="shadow-lg">
          <ImageProduct item={product} url="/photo"/>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
    )
}

export default Product;
