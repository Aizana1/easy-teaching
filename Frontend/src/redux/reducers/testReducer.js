import {
  ADD_TEST, 
  ADD_TEST_TITLE,  
  SHOW_TESTS,
  STUD_SHOW_TESTS  
} from '../actionTypes/testTypes';
const initialStore = {
  test: [],
};

export default function testReducer(state=initialStore, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TEST:
    return {
      ...state,
      test: action.payload,
    }
    case ADD_TEST_TITLE:
    return {
      ...state,
      test: action.payload,
    }
    case SHOW_TESTS:
    return { 
      ...state,
      test: action.payload,
    }
    case STUD_SHOW_TESTS:
    return { 
      ...state,
      test: action.payload,
    }
    default:
      return state;
  }
};

