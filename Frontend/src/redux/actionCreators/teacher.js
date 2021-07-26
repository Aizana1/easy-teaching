import { T_LOGIN, T_LOGOUT, T_SIGNUP} from '../actionTypes/teacher';

export const teacherSignup = (formValue) => {
	return async (dispatch) => {
    try {
		  const response = await fetch('http://localhost:8080/teacher/signup', {
			  method: 'POST',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
			  body: JSON.stringify(formValue),
      });
		  if (!response.ok) {
        console.log('response', response);
			  const result = await response.json();
        throw new Error(result.message);
		  }
		  const data = await response.json();
      dispatch(signupAction(data.teacher))
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('teacher', JSON.stringify(data.teacher));
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


// эта фукнкция ранится в самом начале в useEffect если есть токен
// и мы получаем обратно юзера
// здесь нужна функция dispatch и ссохранить в state 
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
      console.log('После response');
		  const result = await response.json();
      console.log(result.teacher);
      localStorage.setItem('token', result.token);
      // localStorage.setItem('teacher', 'true');
      localStorage.setItem('teacher', JSON.stringify(result.teacher));
      dispatch(loginAction(result.teacher))
    } catch(err) {
      // dispatch((err));
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
  localStorage.remove('token');
  localStorage.remove('teacher');
  // сюда кажется надо добавить thunk, чтобы отчистить reducer
}
const logoutAction = (teacher) => {
  return {
    type: T_LOGOUT,
    payload: teacher
  }
}

