import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductId } from '../../actions/productActions';
import Product from '../../components/Product';
import ReuseProduct from './ReuseProduct';

const ProductById = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => (state.product.product));
        console.log(product)
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProductId(id));

    }, [dispatch, id])
    return (
        <div className="max-w-7xl mx-auto my-36 bg-gray-100">
          {product && (
              <ReuseProduct product={product} />
          )}
        </div>
    )
}

export default ProductById
