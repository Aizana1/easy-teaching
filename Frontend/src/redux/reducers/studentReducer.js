import * as TYPES from '../actionTypes/student';

// const initState = {
//   id: '',
//   name: '',
// }
const initState = null

const studentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TYPES.SIGNUP:
      return { ...state, student: payload};

    case TYPES.LOGIN:
      return { ...state, student: payload};

    case TYPES.LOGOUT:
      return null 
    case TYPES.SET_STUDENT:
        return { id: payload.id, name: payload.name }

    default:
      return state
  }
}
export default studentReducer;
