import {USER_REGISTER_REQUEST} from '../constants/userConstants';
import {USER_REGISTER_SUCCESS} from '../constants/userConstants';
import {USER_REGISTER_FAIL} from '../constants/userConstants';




const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return {
             loading: true 
            }
      case USER_REGISTER_SUCCESS:
        return { 
            loading: false, 
            userInfo: [...action.payload]
        }
      case USER_REGISTER_FAIL:
        return {
             loading: false, 
             error: action.payload
             }
      
      default:
        return state
    }
  }



  export default userRegisterReducer;
  