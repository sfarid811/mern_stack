import {
    POST_LIST_SUCCESS,
    POST_CREATE_SUCCESS

}
    from '../constants/postsConstants';


const postReducers = (state = { posts: [] }, action) => {


    switch (action.type) {
        case POST_LIST_SUCCESS:
            return {
                ...state,
                posts: [...action.payload.posts]
            };
        case POST_CREATE_SUCCESS:
            return {

                posts: [...state.posts, action.payload]
            };


        default:
            return state
    }
}

export default postReducers;