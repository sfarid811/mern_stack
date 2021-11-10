import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import FilterShop from './FilterShop';
import { POPULATE_PRODUCTS_BY_SEARCH, LOAD_MORE_PRODUCTS } from '../actions/productActions';



const Shop = () => {

  const dispatch = useDispatch();

  const shopFilter = useSelector((state) => state.filterReducer.category);

  const productList = useSelector((state) => state.productList.products);


  const skip = useRef(0);
  let limit = 2;
  useEffect(() => {
    skip.current = 0;
    dispatch(POPULATE_PRODUCTS_BY_SEARCH(skip.current, limit, shopFilter))
  }, [dispatch, shopFilter, skip, limit]);

  const loadMore = async () => {
  
    try {
      let toSkip = skip.current + limit;
      await dispatch(LOAD_MORE_PRODUCTS(toSkip, limit, shopFilter));
      skip.current = toSkip;
    } catch (error) {
      skip.current = 0;
      alert(error.message);
    }
    
  };


  return (
    <div className="max-w-7xl mx-auto py-32">
      <div className="flex md:flex-col sm-flex-col">
        <div className="w-1/3 bg-indigo-100 mr-2 sm:w-full sm:mb-12">
          <FilterShop />

        </div>
        <div className="w-2/3 sm:w-full">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:mx-4 sm:mx-4">
            {productList.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>

          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 w-full my-12"
          onClick={() => loadMore()}
          >Load More</button>
        </div>

      </div>
    </div>
  )
}

export default Shop
