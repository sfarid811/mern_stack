import React , {useEffect} from 'react';
import Product from './Product';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts} from '../actions/productActions';
import {Link} from 'react-router-dom';


const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => (state.productList));
  
    const { error, loading, products } = productList;
  

    useEffect(() => {
        dispatch(getAllProducts())
       
    }, [dispatch])
    return (
       
        <div className="max-w-7xl mx-auto h-screen sm:my-8">
            <div className="grid gap-4 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:mx-4 sm:mx-4" >
                 {products.map((product, index) => (
                <Product product={product} key={index} />
            ))}
            </div>
           
        </div>
    )
}

export default Products;
