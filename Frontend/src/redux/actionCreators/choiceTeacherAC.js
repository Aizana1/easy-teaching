import { CHOICE_TEACHER } from "../actionTypes/student";

export const choiceTeacherFetch = async (id, studentId) => {
    const response = await fetch(`http://localhost:8080/tasks/choice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, studentId }),
  });
  const result = await response.json();

  return result;
};

export const choiceTeacherAC = (id, studentId) => async (dispatch) => {
  const { teachers } = await choiceTeacherFetch(id, studentId);
  dispatch({
    type: CHOICE_TEACHER,
    payload: teachers,
  })
}
