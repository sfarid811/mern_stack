import {
    SET_ALERT,
     CLEAR_ALERT
    } from '../constants/alertConstants';




const alertReducers = (state = null, action) => {
    switch (action.type) {
      case SET_ALERT:
        return action.data;
      case CLEAR_ALERT:
        return action.data;
      default:
        return state;
    }
  };
  export default alertReducers;
  