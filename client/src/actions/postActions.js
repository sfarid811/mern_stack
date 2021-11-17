
    import {API_POST} from '../config';
    import axios from 'axios';
import {
    POST_LIST_REQUEST, 
    POST_LIST_SUCCESS,
     POST_LIST_FAIL,
     POST_CREATE_REQUEST,
     POST_CREATE_SUCCESS,
     POST_CREATE_FAIL

    } 
     from '../constants/postsConstants';

export const getAllPosts = () => async (dispatch) => { 

    try {
        dispatch({type: POST_LIST_REQUEST})

        const {data} = await axios.get(`${API_POST}/all`);
        console.log(data)
        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })
     

    }
    catch (error) {
        dispatch({
            type: POST_LIST_FAIL, 
            payload: error.data 
        })
    }

}



export const createPost = formData => async dispatch => {
    try {
      dispatch({ type: POST_CREATE_REQUEST });

  

      const {data} = await axios.post(`${API_POST}/add`, formData);

      console.log(data, "fffff")
      dispatch({
        type: POST_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
    
      dispatch({
        type: POST_CREATE_FAIL,
        payload: error.data,
      });
    }
  };