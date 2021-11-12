import {
    ADD_CATEGORY,
    REMOVE_CATEGORY

}
    from '../constants/categoryConstants';

const shopFilterReducer = (state = { category: [] }, action) => {
        
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.data]
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                category: state.category.filter(data => data !== action.data),
            };

        default:
            return state;
    }
};
export default shopFilterReducer;
