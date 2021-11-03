import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../constants/userConstants';
import { API_URL } from '../config';

export const register = (name, email, password) => async (dispatch) => {
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

    const { data } = await axios.post(`${API_URL}/register`, { name, email, password },
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

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post( `${API_URL}/login`,{ email, password }, config)
    console.log(data.user);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
      
    })
    
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}