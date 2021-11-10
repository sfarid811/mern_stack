import {
    CATEGORY_LIST_SUCCESS,
}
    from '../constants/categoryConstants';



const categoryReducers = (
    state = { categories: null, category: null },
    action
) => {
    switch (action.type) {
        case CATEGORY_LIST_SUCCESS:
            return { ...state, categories: [...action.data] };

        default:
            return state;
    }
};

export default categoryReducers;