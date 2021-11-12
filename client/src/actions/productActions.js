import axios from 'axios';
import {PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS,
    MORE_PRODUCTS,
    
}
     from '../constants/productConstants';

import {API_PRODUCT} from '../config';
import {listProductsByFilter} from './index';

export const getAllProducts = () => async (dispatch) => { 

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(`${API_PRODUCT}/all`);
     
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
     

    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL, 
            payload: error.data 
        })
    }

}

export const POPULATE_PRODUCTS_BY_SEARCH = (skip, limit, filter) => {
    return async (dispatch) => {
      let data = await listProductsByFilter(skip, limit, filter);
      dispatch({
        type: FILTERED_PRODUCTS,
        data: { 
          products: data.products, 
          size: data.size 
        },
      });
      
    };
  };
  


  export const LOAD_MORE_PRODUCTS = (skip, limit, filter) => {
    return async (dispatch) => {
      let data = await listProductsByFilter(skip, limit, filter);
      if (!data.size) throw new Error("No More Products");
      dispatch({
        type: MORE_PRODUCTS,
        data: { products: data.products, size: data.size },
      });
    };
  };

 

  export const getProductsByFilter = arg => async (dispatch) => {
    try {
      dispatch({type: PRODUCT_LIST_REQUEST})

      const {data} = await axios.post(`${API_PRODUCT}/keyword`, arg);
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
      });
    }  catch (error) {
      dispatch({
          type: PRODUCT_LIST_FAIL, 
          data: error.data 
      })
  }
    
  };