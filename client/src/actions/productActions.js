import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  FILTERED_PRODUCTS,
  MORE_PRODUCTS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  GET_NEW_ARRIVALS

}
  from '../constants/productConstants';

import { API_PRODUCT } from '../config';
import { listProductsByFilter } from './index';
import { isExists } from '../components/admin/helper';

export const getAllProducts = (pageNumber = '') => async (dispatch) => {

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(`${API_PRODUCT}/listproducts?pageNumber=${pageNumber}`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })


  }
  catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }

}

export const getProductsByCount = () => async (dispatch) => {

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(`${API_PRODUCT}/count`);

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
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.post(`${API_PRODUCT}/keyword`, arg);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      data: error.data
    })
  }

};



export const createProduct = formData => async dispatch => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const { user, token } = isExists();
    console.log(user, token, "yoyo");

    const config = {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
    const { data } = await axios.post(`${API_PRODUCT}/addProduct/${user._id}`, formData, config);

    console.log(data)
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
    const { user, token } = isExists();

    const config = {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }

    const { data } = await axios.delete(`${API_PRODUCT}/${productId}/${user._id}`, config);
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

export const getProductId = id => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get(`${API_PRODUCT}/${id}`);
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.data,
    });
  }
};


export const updateProduct = (id, productUpdate) => async dispatch => {

  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST })

    const { data } = await axios.put(`${API_PRODUCT}/edit/${id}`, productUpdate);

    dispatch({
      type: PRODUCT_EDIT_SUCCESS,
      payload: data

    })
  } catch (error) {
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: error.data
    })
  }

}

export const getNewArrivals = (sortBy = 'desc', limit = 3) => async dispatch => {
		try {
			dispatch({ type: PRODUCT_LIST_REQUEST });
			const {data} = await axios.get(`${API_PRODUCT}/filterArrivals?sortBy=${sortBy}&limit=${limit}`
			);
			
			dispatch({
				type: GET_NEW_ARRIVALS,
				payload: data.newArrivals
			});
		} catch (error) {

			dispatch({
				type: PRODUCT_LIST_FAIL,
				payload: error.data
			});
		}
	};