import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../actions/productActions';



const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => (state.productList.products));


    useEffect(() => {
        dispatch(getAllProducts())
      
    }, [dispatch])
    return (

        <div className="max-w-7xl mx-auto h-screen sm:my-8">
                  <input className="w-full border rounded-md pl-10 pr-4 py-2 my-4 focus:border-blue-500 focus:outline-none focus:shadow-outline" 
                 placeholder="Search"  
                name="text"
            
                />
             
            <div className="grid gap-4 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:mx-4 sm:mx-4" >
                {productList.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>

        </div>
    )
}

export default Products;
