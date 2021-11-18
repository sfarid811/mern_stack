import axios from 'axios';
import {PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS,
    MORE_PRODUCTS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL

}
     from '../constants/productConstants';

import {API_PRODUCT} from '../config';
import {listProductsByFilter, helperProduct} from './index';
import {isExists} from '../components/admin/helper';

export const getAllProducts = () => async (dispatch) => { 

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(`${API_PRODUCT}/allProducts`);
     
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


  // export const createProduct = (product) => {
  //   const { token, user } = extractAuth();
  //   return async (dispatch) => {
  //     let data = await helperProduct(token, user._id, product);
  //     dispatch({
  //       type: PRODUCT_CREATE_SUCCESS,
  //       data,
  //     });
  //   };
  // };
  
  



  export const createProduct = formData => async dispatch => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

      const {user, token} = isExists();
        console.log(user, token, "yoyo");

      const config = {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      }
      }
      const {data} = await axios.post(`${API_PRODUCT}/addProduct/${user._id}`, formData, config);

      console.log(data, "fffff")
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
    
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: error.data,
      });
    }
  };


  export const deleteProduct = productId => async dispatch => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });
      const {user, token} = isExists();

    const config = {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
    }
    }

      const {data} = await axios.delete(`${API_PRODUCT}/${productId}/${user._id}`, config);
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload: err.response.data.errorMessage,
      });
    }
  };