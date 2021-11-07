import axios from 'axios';
import {PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS
}
     from '../constants/productConstants';

import {API_PRODUCT} from '../config';
import {listProductsByFilter} from './index';


export const getAllProducts = () => async (dispatch) => { 

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(`${API_PRODUCT}/all`);
        // console.log(data.length)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
            totalProducts: data.length,
        })
     

    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL, 
            payload: error.data && error.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}

export const POPULATE_PRODUCTS_BY_SEARCH = (skip, limit, filter) => {
    return async (dispatch) => {
      let data = await listProductsByFilter(skip, limit, filter);
      dispatch({
        type: FILTERED_PRODUCTS,
        data: { products: data.products, size: data.size },
      });
    };
  };
  