import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    FILTERED_PRODUCTS,
    MORE_PRODUCTS,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_SUCCESS
}
    from '../constants/productConstants';

const inititalState = {
    loading: false,
    products: [],
    error: '',
    size : null
}

const productReducers = (state = inititalState, action) => {

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
                products: [...action.payload.products],
                pages: action.payload.pages,
                page: action.payload.page,

            }
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case PRODUCT_CREATE_SUCCESS : 
        return { 
         
             products: [...state.products, action.payload]
             };

             case PRODUCT_DELETE_SUCCESS:
			return {
				products: state.products.filter(product => product._id !== action.payload)
			};
        
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