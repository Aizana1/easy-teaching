import { SHOW_TESTS } from "../actionTypes/testTypes";

export const showTestsFetch = async (email) => {
  const response = await fetch(`http://localhost:8080/tasks/showtests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const result = await response.json();
  return result;
};

export const showTestsAC = (email) => async (dispatch) => {
  const { test } = await showTestsFetch(email);
  dispatch({
    type: SHOW_TESTS,
    payload: test,
  })
}
