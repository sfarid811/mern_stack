
import axios from 'axios';
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/productConstants';

import {API_PRODUCT} from '../config';


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
            payload: error.data && error.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}