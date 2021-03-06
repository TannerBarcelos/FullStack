import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  msg: {}, // will hold error message
  status: null, // hold status of error
  id: null, // error ID (string we can use to identify errors)
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
