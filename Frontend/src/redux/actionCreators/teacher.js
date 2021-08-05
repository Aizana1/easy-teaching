import { T_LOGIN, T_LOGOUT, T_SIGNUP} from '../actionTypes/teacher';

export const teacherSignup = (formValue) => {
	return async (dispatch) => {
    try {
		  const response = await fetch('http://localhost:8080/teacher/signup', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
			  body: JSON.stringify(formValue),
      });
		  if (!response.ok) {
			  const result = await response.json();
        throw new Error(result.message);
		  }
		  const { teacher } = await response.json();
      dispatch(signupAction(teacher))
      localStorage.setItem('teacher', JSON.stringify(teacher));
    } catch(err) {
      console.log(err);
    }
	};
}
const signupAction = (teacher) => {
  return {
    type: T_SIGNUP,
    payload: teacher
  }
}

export const isLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response= await fetch('http://localhost:8080/getuser', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      },
    })
    const data = await response.json();
    dispatch()
    console.log('data', data);
    }
  }
};

export const teacherLogin = (data) => {
  console.log('Зашел в teacherLogin');
	return async (dispatch) => {
    try {
		  const response = await fetch('http://localhost:8080/teacher/login', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
			  body: JSON.stringify(data),
      });
		  if (!response.ok) {
			  const result = await response.json();
        throw new Error(result.message);
		  }
		  const { teacher } = await response.json();
      localStorage.setItem('teacher', JSON.stringify(teacher));
      dispatch(loginAction(teacher))
    } catch(err) {
      console.log(err);
    }
	};
}
const loginAction = (teacher) => {
  return {
    type: T_LOGIN,
    payload: teacher
  }
}

export const teacherLogout = () => {
  localStorage.remove('teacher');
}
const logoutAction = (teacher) => {
  return {
    type: T_LOGOUT,
    payload: teacher
  }
}

