import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductId } from '../../actions/productActions';

const ProductById = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => (state.product.product));

    const { id } = useParams();
    useEffect(() => {
        dispatch(getProductId(id));

    }, [dispatch, id])
    return (
        <div className="max-w-7xl mx-auto my-36">
            {/* Id product {id} */}
            <span>{product.name}</span>
            <br></br>
            <span>{product.price}</span>
            <img src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`} />
         
        </div>
    )
}

export default ProductById
