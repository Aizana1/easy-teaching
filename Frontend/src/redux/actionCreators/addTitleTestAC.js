import { ADD_TEST_TITLE, ADD_TEST_TITLE_SAGA } from "../actionTypes/testTypes";

export const addTitleTestFetch = async({values, email}) => {
  const response = await fetch('http://localhost:8080/tasks/add/test/title', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    // credentials: 'include',
    body: JSON.stringify({ values, email}),
  })
  const result = await response.json();
  console.log(result);
  return result;
}

export const addTitleTestAC = ( test ) => ({
  type: ADD_TEST_TITLE,
  payload: test,
});

export const addTitleTestSagaAC = (values, email) => ({
  type: ADD_TEST_TITLE_SAGA,
  payload: values, email,
});
