import { SHOW_TEACHER } from "../actionTypes/student";

const initState = null;

const showTeacherReducer = (state = initState, action ) => {
  console.log(action.payload);
  switch (action.type) {
    case SHOW_TEACHER:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, teachers: action.payload};
    default:
      return state
  }
}
export default showTeacherReducer


