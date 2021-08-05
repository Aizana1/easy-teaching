import { SHOW_TEACHER, CHOICE_TEACHER } from "../actionTypes/student";

const initState = null;

const showTeacherReducer = (state = initState, action ) => {
  switch (action.type) {
    case SHOW_TEACHER:
      return { ...state, teachers: action.payload};
    case CHOICE_TEACHER:
      return { ...state, teachers: action.payload};
    default:
      return state
  }
}
export default showTeacherReducer


