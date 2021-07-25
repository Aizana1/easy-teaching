import * as TYPES from '../actionTypes/student';

const initState = {
  id: '',
  name: '',
}
const studentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TYPES.SIGNUP:
      return { ...state, id: payload, name: payload };

    case TYPES.LOGIN:
      return { ...state, id: payload.id, name: payload.name };

    case TYPES.LOGOUT:
      return { id: '', name: ''}
    case TYPES.SET_STUDENT:
        return { id: payload.id, name: payload.name }

    default:
      return state
  }
}
export default studentReducer;
