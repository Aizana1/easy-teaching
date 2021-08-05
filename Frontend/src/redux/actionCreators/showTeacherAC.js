import { SHOW_TEACHER } from "../actionTypes/student";

export const showteacherFetch = async (id) => {
    const response = await fetch(`http://localhost:8080/tasks/showteachers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const result = await response.json();
  return result;
};

export const showTeacherAC = (id) => async (dispatch) => {
  const { teachers } = await showteacherFetch(id);
  dispatch({
    type: SHOW_TEACHER,
    payload: teachers,
  })
} 
