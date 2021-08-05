import { STUD_SHOW_TESTS } from "../actionTypes/testTypes";

export const studShowTestsFetch = async (id) => {
  const response = await fetch(`http://localhost:8080/tasks/mytests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const { test } = await response.json();
  return test;
};

export const studShowTestsAC = (id) => async (dispatch) => {
  const test = await studShowTestsFetch(id);
  dispatch({
    type: STUD_SHOW_TESTS,
    payload: test,
  })
}
