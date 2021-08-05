import { SHOW_STUDENTS } from '../actionTypes/teacher'

export const showStudentsFetch = async (id) => {
  const response = await fetch(`http://localhost:8080/tasks/showstudents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  const result = await response.json()
  return result
}

export const showStudentsAC = (id) => async (dispatch) => {
  const { students } = await showStudentsFetch(id)
  dispatch({
    type: SHOW_STUDENTS,
    payload: students,
  })
}
