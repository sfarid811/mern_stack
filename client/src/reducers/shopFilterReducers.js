import {
    ADD_CATEGORY,
    REMOVE_CATEGORY

}
    from '../constants/categoryConstants';

const shopFilterReducer = (state = { category: [] }, action) => {
        const {type, payload} = action;
    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, payload]
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                category: state.category.filter(category => category !== payload),
            };

        default:
            return state;
    }
};
export default shopFilterReducer;
