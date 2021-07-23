import { ADD_TEST, ADD_TEST_SAGA } from '../types/actionTypes';

export const addTestFetch = async(values , titleId) => {
  console.log(values);
  console.log(titleId);
  const response = await fetch('http://localhost:8080/tasks/add/test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    credentials: 'include',
    body: JSON.stringify({ values, titleId }),
  })
  const result = await response.json();
  console.log(result);
  return result;
}

export const addTestAC = (test) => (
  {
  type: ADD_TEST,
  payload: test,
});

export const addTestSagaAC = (values, titleId) => ({
  type: ADD_TEST_SAGA,
  payload: values, titleId,
});
