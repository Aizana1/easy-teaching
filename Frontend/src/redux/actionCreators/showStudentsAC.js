import { SHOW_STUDENTS } from "../actionTypes/teacher";

export const showStudentsFetch = async (id) => {
  console.log('Зашел в fetch');
  console.log(id);
  const response = await fetch(`http://localhost:8080/tasks/showstudents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  console.log('После Fetch');
  const result = await response.json();
  console.log(result);
  // const resultArr = Object.values(result);

  return result;
};

export const showStudentsAC = (id) => async (dispatch) => {
  console.log(id);
  const { students } = await showStudentsFetch(id);
  console.log(students);
  dispatch({
    type: SHOW_STUDENTS,
    payload: students,
  })
} 
