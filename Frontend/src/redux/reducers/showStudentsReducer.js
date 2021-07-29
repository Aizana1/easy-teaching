import { SHOW_STUDENTS } from "../actionTypes/teacher";

const initState = null;

const showStudentsReducer = (state = initState, action ) => {
  console.log(action.payload);
  switch (action.type) {
    case SHOW_STUDENTS:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, students: action.payload};
    default:
      return state
  }
}
export default showStudentsReducer


