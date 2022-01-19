import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, getProductsByFilter } from '../actions/productActions';
import ShowLoading from './helpers/ShowLoading'

const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => (state.productList));

    const { loading, products, totalProducts, numOfPages, page } = productList;
    console.log(page, products, totalProducts, numOfPages ,"humm")
  
    const [text, setText] = useState('');

    const resetState = () => {
        setText('');

    };

    const handleSearch = (e) => {
        resetState()
        setText(e.target.value);
        dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
    }


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (

        <div className="max-w-7xl mx-auto h-screen sm:my-8">
            <div className="relative my-12 max-w-lg mx-auto">
                <span className="absolute inset-y-0 left-0 pl-3 xs:pl-4 flex items-center">
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 
               6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                
                <input className="w-full xs:mx-4 border rounded-md xs:pl-6 pl-10 pr-4 py-2 focus:border-gray-500 focus:outline-none focus:shadow-outline"
                    placeholder="Search"
                    name="search"
                    value={text}
                    onChange={handleSearch}
                />
                {/* <span>Number of results : {products.length}</span>  */}
            </div>

            {loading ? <ShowLoading /> : (
                <div className="grid gap-4 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:mx-4 sm:mx-4" >
                    {products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Products;
