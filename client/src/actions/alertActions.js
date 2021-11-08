import {SET_ALERT, CLEAR_ALERT} from '../constants/alertConstants';


export const NOTIFY = (msg, type, seconds) => {
    return (dispatch) => {
      dispatch({
        type: SET_ALERT,
        data: { msg, type },
      });
      setTimeout(() => {
        dispatch({
          type: CLEAR_ALERT,
          data: null,
        });
      }, 1000 * seconds);
    };
  };


export const REMOVE_ALERT = () => {
    return (dispatch) => {
      dispatch({
        type: CLEAR_ALERT,
        data: null,
      });
    };
  };
  