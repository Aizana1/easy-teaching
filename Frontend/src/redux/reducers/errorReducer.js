import * as TYPES from '../actionTypes/error';

const initState = {
  err: null,
  message: '',
  status: false,
}
const errorReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TYPES.ERROR_SIGNUP:
      return { ...state, id: payload, loggedIn: true, name: payload };

    case TYPES.ERROR_LOGIN:
      return { ...state, id: payload.id, loggedIn: true, name: payload.name };

    default:
      return state
  }
}
export default errorReducer;
