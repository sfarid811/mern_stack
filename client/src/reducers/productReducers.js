import {PRODUCT_LIST_REQUEST} from '../constants/productConstants';
import {PRODUCT_LIST_SUCCESS} from '../constants/productConstants';
import {PRODUCT_LIST_FAIL} from '../constants/productConstants';



const inititalState = {
    loading: false,
    products : [],
    error : ''
}

const productReducers = (state = inititalState, action) => {

    switch(action.type) {
        case PRODUCT_LIST_REQUEST: 
        return {
            ...state,
            loading: true,
        }
        case PRODUCT_LIST_SUCCESS : 
        return {
            ...state,
            loading: false,
            products : [...action.payload]
        }
        case PRODUCT_LIST_FAIL : 
        return {
            ...state,
            error: action.payload.error
        }
        default: 
      return state 
    }
}

export default productReducers;