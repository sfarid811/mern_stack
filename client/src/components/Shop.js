import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import FilterShop from './FilterShop';
import { POPULATE_PRODUCTS_BY_SEARCH, LOAD_MORE_PRODUCTS, 
  POPULATE_SEARCHED_PRODUCTS,
   getProductsByFilter
} from '../actions/productActions';



const Shop = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const resetState = () => {
		setText('');

	};

  const shopFilter = useSelector((state) => state.filterReducer.category);

  const productList = useSelector((state) => state.productList.products);


  
  const handleSearch = (e) => {
    resetState()
		setText(e.target.value);

		dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
    
	};

  const skip = useRef(0);
  let limit = 4;
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
           <div className="relative my-12 max-w-lg mx-auto"  >
            {/* <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 
                    6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span> */}

                <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" 
                 placeholder="Search"  
                name="search"
                value={text}
								onChange={handleSearch}  
                />
              {JSON.stringify(text)}
            </div>
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
