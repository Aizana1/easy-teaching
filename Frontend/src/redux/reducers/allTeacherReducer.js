import { SHOW_ALL_TEACHER } from "../actionTypes/student";

const initState = null;

const allTeacherReducer = (state = initState, action ) => {
  switch (action.type) {
    case SHOW_ALL_TEACHER:
      return { ...state, allTeachers: action.payload};
    default:
      return state
  }
}
export default allTeacherReducer


