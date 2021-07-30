import { ADD_STUD_TEST } from "../actionTypes/testTypes";

const initState = [];

const studToTestReducer = (state = initState, action ) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_STUD_TEST:
      // return { ...state, id: payload.id, name: payload.firstname, email: payload.email };
      return { ...state, testStudents: action.payload};
    default:
      return state
  }
}
export default studToTestReducer


