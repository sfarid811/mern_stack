import {CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL } 
    from '../constants/categoryConstants';




const inititalState = {
    loading: false,
    categories : [],
    error : ''
}

const categoryReducers = (state = inititalState, action) => {

    switch(action.type) {
        case CATEGORY_LIST_REQUEST: 
        return {
            ...state,
            loading: true,
        }
        case CATEGORY_LIST_SUCCESS : 
        return {
            ...state,
            loading: false,
            categories : [...action.payload]
        }
        case CATEGORY_LIST_FAIL : 
        return {
            ...state,
            error: action.payload.error
        }
        default: 
      return state 
    }
}

export default categoryReducers;