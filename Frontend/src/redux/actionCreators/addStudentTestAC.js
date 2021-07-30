import { ADD_STUD_TEST } from "../actionTypes/testTypes";

export const addStudentsTestFetch = async (testId, studId) => {
  console.log('Зашел в fetch');
  const response = await fetch(`http://localhost:8080/tasks/addstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ testId, studId }),
  });
  // console.log('После Fetch');
  // const result = await response.json();
  // console.log(result);
  // const resultArr = Object.values(result);

  // return result;
};

export const addStudentsTestAC = (testId, studId) => async (dispatch) => {
  const { students } = await addStudentsTestFetch(testId, studId);
  // console.log(students);
  // dispatch({
  //   type: ADD_STUD_TEST,
  //   payload: students,
  // })
} 
