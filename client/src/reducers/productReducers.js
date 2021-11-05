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
    totalProducts: '',
    error: ''
}

const productReducers = (state = inititalState, action) => {
    const { type, payload, totalProducts } = action;

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
                products: [...payload],
                totalProducts: totalProducts,
            };

        default:
            return state
    }
}

export default productReducers;