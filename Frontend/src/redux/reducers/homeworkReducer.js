import { ADD_CARD } from '../actionTypes/teacher';
const initialStore = {
  cards: [],
  tests: [],
  sentences: {},

};

export default function createHomeworkReducer(state=initialStore, { type, payload }) {
  switch (type) {
    case ADD_CARD:
    return {
      ...state,
      cards: payload,
    }
    default:
      return state;
  }
};
