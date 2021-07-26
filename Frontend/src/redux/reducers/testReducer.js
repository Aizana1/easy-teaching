import {
  ADD_TEST, 
  ADD_TEST_TITLE    
} from '../actionTypes/testTypes';
const initialStore = {
  test: [],
};

export default function testReducer(state=initialStore, action) {
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
    default:
      return state;
  }
};

