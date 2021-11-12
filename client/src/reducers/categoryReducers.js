import {
    CATEGORY_LIST_SUCCESS,
}
    from '../constants/categoryConstants';



const categoryReducers = (
    state = { categories: [] },
    action
) => {
    switch (action.type) {
        case CATEGORY_LIST_SUCCESS:
            return { 
                ...state,
                 categories: [...action.payload]
                 };

        default:
            return state;
    }
};

export default categoryReducers;