import { SHOW_TEACHER } from "../actionTypes/student";

export const showteacherFetch = async (id) => {
  console.log('Зашел в fetch');
  console.log(id);
  const response = await fetch(`http://localhost:8080/tasks/showteachers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const result = await response.json();
  console.log(result);
  // const resultArr = Object.values(result);

  return result;
};

export const showTeacherAC = (id) => async (dispatch) => {
  console.log(id);
  const { teachers } = await showteacherFetch(id);
  console.log(teachers);
  dispatch({
    type: SHOW_TEACHER,
    payload: teachers,
  })
} 
