import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../constants/userConstants';
import { toast } from "react-toastify";


const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      toast("Welcome...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
      case USER_LOGOUT:
        return {}

    default:
      return state
  }
}

 const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { 
        loading: true 
      }
    case USER_LOGIN_SUCCESS:
      return {
         loading: false, 
         userInfo: action.payload 
        }
    case USER_LOGIN_FAIL:
      return {
         loading: false, 
         error: action.payload 
        }
        case USER_LOGOUT:
          return {
            
          }
   
    default:
      return state
  }
}

export default (userRegisterReducer, userLoginReducer );
