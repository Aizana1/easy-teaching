import { SHOW_STUDENTS } from "../actionTypes/teacher";

const initState = [];

const showStudentsReducer = (state = initState, action ) => {
  switch (action.type) {
    case SHOW_STUDENTS:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, students: action.payload};
    default:
      return state
  }
}
export default showStudentsReducer


