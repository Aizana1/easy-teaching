import * as TYPES from '../actionTypes/teacher';

// const initState = {
//   id: '',
//   firstname: '',
//   email: ''
// }
const initState = null

const teacherReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TYPES.T_SIGNUP:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, teacher: payload};

    case TYPES.T_LOGIN:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, teacher: payload };

    case TYPES.T_LOGOUT:
      return null 
    case TYPES.SET_TEACHER:
      return { id: payload.id, name: payload.firstname, email: payload.email }

    default:
      return state
  }
}
export default teacherReducer
