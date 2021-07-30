import { STUD_SHOW_TESTS } from "../actionTypes/testTypes";

export const studShowTestsFetch = async (id) => {
  console.log(id);
  const response = await fetch(`http://localhost:8080/tasks/mytests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  console.log('После fetch');
  const { test } = await response.json();
  console.log(test);
  // const resultArr = Object.values(result);

  return test;
};

export const studShowTestsAC = (id) => async (dispatch) => {
  const test = await studShowTestsFetch(id);
  console.log(test);
  dispatch({
    type: STUD_SHOW_TESTS,
    payload: test,
  })
}
