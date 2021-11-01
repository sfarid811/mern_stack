
import axios from 'axios';
import {PRODUCT_LIST_REQUEST} from '../constantes/types';
import {PRODUCT_LIST_SUCCESS} from '../constantes/types';
import {PRODUCT_LIST_FAIL} from '../constantes/types';




export const getAllProducts = () => async (dispatch) => { 

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('http://localhost:8000/api/product/all');
        
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