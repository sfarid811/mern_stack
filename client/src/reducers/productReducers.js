import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS
}
    from '../constants/productConstants';



const inititalState = {
    loading: false,
    products: [],
    error: '',
    size : null
}

const productReducers = (state = inititalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...payload],

            }
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                error: payload.error
            }
        case FILTERED_PRODUCTS:
            return {
                ...state,
                products: [...action.data.products],
                size: action.data.size,
              };

        default:
            return state
    }
}

export default productReducers;