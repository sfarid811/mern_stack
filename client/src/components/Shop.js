import React , {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Products from './Products';
import FilterShop from './FilterShop';
import {POPULATE_PRODUCTS_BY_SEARCH} from '../actions/productActions';

const Shop = () => {

  const dispatch = useDispatch();

  const shopFilter = useSelector((state) => state.filterReducer.category);
  
  const productList = useSelector((state) => state.productList.products);
  const categoryReducer = useSelector((state) => state.categoryReducer.categories);

  console.log(shopFilter)
  console.log(productList)
  console.log(categoryReducer)
  const skip = useRef(0);
  let limit = 6;

  useEffect(() => {
    async function populate() {
      try {
        skip.current = 0;
        await dispatch(
          POPULATE_PRODUCTS_BY_SEARCH(skip.current, limit, shopFilter)
        );
      } catch (error) {
        dispatch({
          msg : "failed"
        });
      }
    }
    populate();
  }, [dispatch, shopFilter, skip, limit]);
    return (
        <div className="max-w-7xl mx-auto py-32">
        <div className="flex md:flex-col sm-flex-col">
          <div className="w-1/3 bg-indigo-100 mr-2 sm:w-full sm:mb-12">
              <FilterShop />

          </div>
          <div className="w-2/3 sm:w-full">
            <div className="">
              <Products />
            </div>
          </div>
  
        </div>
      </div>
    )
}

export default Shop
