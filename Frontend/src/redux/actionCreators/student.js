import * as TYPES from '../actionTypes/student';
// import ERROR_LOGIN from '../actionTypes/error';
// import ERROR_SIGNUP from '../actionTypes/error';


export const studentSignup = (formValue) => {
	return async (dispatch) => {
    try {
		  const response = await fetch('http://localhost:8080/student/signup', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
			  body: JSON.stringify(formValue),
      });
		  if (!response.ok) {
			  const student = await response.json();
        throw new Error(student.massage);
		  }
		  const data = await response.json();
      dispatch(signupAction(data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('student', JSON.stringify(data.student));
    } catch(err) {
      console.log(err);
    }
	};
}

export const studentLogin = (data) => {
	return async (dispatch) => {
    try {
		  const response = await fetch('http://localhost:8080/student/login', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
			  body: JSON.stringify(data),
      });
		  if (!response.ok) {
        console.log('response', response);
			  const student = await response.json();
        throw new Error(student.message);
		  }
		  const student = await response.json();

      dispatch(loginAction(student))
      localStorage.setItem('token', JSON.stringify.apply(student.token));
      // localStorage.setItem('student', JSON.stringify('student', 'true'));
      localStorage.setItem('student', JSON.stringify( student.student));
    } catch(err) {
      console.log('err', err);
    }
	};
}

export const studentLogout = () => {
  localStorage.remove('token');
  localStorage.remove('student');
}


const signupAction = (user) => {
  return {
    type: TYPES.SIGNUP,
    payload: user
  }
}

const loginAction = (user) => {
  return {
    type: TYPES.LOGIN,
    payload: user
  }
}


const logoutAction = () => {
  return {
    type: TYPES.LOGOUT
  }
}
