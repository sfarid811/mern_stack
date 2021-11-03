import axios from 'axios';
import {USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS, 
     USER_REGISTER_FAIL
    } from '../constants/userConstants';
import { API_URL } from '../config';

    export const register = (formData) => async (dispatch) => {
        try {
          dispatch({
            type: USER_REGISTER_REQUEST,
          })
      
          const config = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(`${API_URL}/register`, formData,
            config
          )
      
          dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
          })
      
        
      
          localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: USER_REGISTER_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }