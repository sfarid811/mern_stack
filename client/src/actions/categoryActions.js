import axios from 'axios';
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,

}
  from '../constants/categoryConstants';
import { API_CATEGORY } from '../config';

export const getAllCategories = () => async (dispatch) => {

  try {
    dispatch({ type: CATEGORY_LIST_REQUEST })

    const { data } = await axios.get(`${API_CATEGORY}/all`);

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data.categories
    })

  }
  catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.data 
        
    })
  }

}

