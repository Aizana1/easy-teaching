import { SHOW_ALL_TEACHER } from "../actionTypes/student";

export const allTeacherFetch = async () => {
  console.log('Зашел в fetch');
  const response = await fetch(`http://localhost:8080/tasks/allteacher`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result);
  // const resultArr = Object.values(result);

  return result;
};

export const allTeacherAC = () => async (dispatch) => {
  const { allTeachers } = await allTeacherFetch();
  console.log(allTeachers);
  dispatch({
    type: SHOW_ALL_TEACHER,
    payload: allTeachers,
  })
}
