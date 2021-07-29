import { SHOW_ALL_TEACHER } from "../actionTypes/student";

const initState = null;

const allTeacherReducer = (state = initState, action ) => {
  console.log(action.payload);
  switch (action.type) {
    case SHOW_ALL_TEACHER:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, allTeachers: action.payload};
    default:
      return state
  }
}
export default allTeacherReducer


