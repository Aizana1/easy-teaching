export const addStudentsTestFetch = async (testId, studId) => {
  console.log('Зашел в fetch');
  const response = await fetch(`http://localhost:8080/tasks/addstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ testId, studId }),
  });
};

export const addStudentsTestAC = (testId, studId) => async (dispatch) => {
  const { students } = await addStudentsTestFetch(testId, studId);
} 
