import axios from 'axios';
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    ADD_CATEGORY,
    REMOVE_CATEGORY
}
    from '../constants/categoryConstants';
import { API_CATEGORY } from '../config';


export const populateCategory = () => async (dispatch) => {

    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })

        const { data } = await axios.get(`${API_CATEGORY}/all`);

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.data && error.data.message
                ? error.response.data.message
                : error.message,
        })
    }

}

export const addCategory = (data) => {
    return (dispatch) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: data
      });
    };
  };
  
  export const removeCategory = (data) => {
    return (dispatch) => {
      dispatch({
        type: REMOVE_CATEGORY,
        payload: data
      
      });
    };
  };
