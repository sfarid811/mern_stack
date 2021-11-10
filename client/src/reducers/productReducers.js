import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS,
    MORE_PRODUCTS
}
    from '../constants/productConstants';



const inititalState = {
    loading: false,
    products: [],
    error: '',
    size : null
}

const productReducers = (state = inititalState, action) => {
    // const { type, data } = action;

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...action.data],

            }
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                error: action.data.error
            }
        case FILTERED_PRODUCTS:

            return {
                ...state,
                products: [...action.data.products],
                size: action.data.size,
            };
            case MORE_PRODUCTS:
                return {
                  ...state,
                  products: [...state.products, ...action.data.products],
                  size: action.data.size,
                };
        default:
            return state
    }
}

export default productReducers;