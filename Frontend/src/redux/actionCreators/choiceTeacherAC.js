import { CHOICE_TEACHER } from "../actionTypes/student";

export const choiceTeacherFetch = async (id, studentId) => {
  console.log('Зашел в fetch');
  console.log(id, studentId);
  const response = await fetch(`http://localhost:8080/tasks/choice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, studentId }),
  });
  const result = await response.json();
  console.log(result);
  // const resultArr = Object.values(result);

  return result;
};

export const choiceTeacherAC = (id, studentId) => async (dispatch) => {
  console.log(id);
  const { teachers } = await choiceTeacherFetch(id, studentId);
  console.log(teachers);
  dispatch({
    type: CHOICE_TEACHER,
    payload: teachers,
  })
}
