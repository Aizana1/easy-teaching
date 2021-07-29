import { SHOW_TESTS } from "../actionTypes/testTypes";

export const showTestsFetch = async (email) => {
  console.log(email);
  const response = await fetch(`http://localhost:8080/tasks/showtests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const result = await response.json();
  console.log(result);
  // const resultArr = Object.values(result);

  return result;
};

export const showTestsAC = (email) => async (dispatch) => {
  const { test } = await showTestsFetch(email);
  console.log(test);
  dispatch({
    type: SHOW_TESTS,
    payload: test,
  })
}
