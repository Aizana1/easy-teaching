import { SHOW_ALL_TEACHER } from "../actionTypes/student";

export const allTeacherFetch = async () => {
  const response = await fetch(`http://localhost:8080/tasks/allteacher`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const allTeacherAC = () => async (dispatch) => {
  const allTeachers = await allTeacherFetch();
  dispatch({
    type: SHOW_ALL_TEACHER,
    payload: allTeachers,
  })
}
