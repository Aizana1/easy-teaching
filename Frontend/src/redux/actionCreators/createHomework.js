import { ADD_CARD } from '../actionTypes/teacher';

const addHomeworkFetch = (homework) => {
  return async (dispatch) => {
    console.log('wordCards', homework);
    const response = await fetch('http://localhost:8080/teacher/add/homework', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ homework }),
    });
    if (!response.ok) {
      console.log('err', response.status);
    }
    const result = await response.json();
    dispatch(addCard(result));
  };
};

const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: card,
  };
};

export { addHomeworkFetch, addCard };
