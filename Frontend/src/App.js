import TeacherSignup  from "./components/RegistrationTeacher/Registration";
import StudentSignup  from './components/registrationStudent/Registration';
import { isLoggedIn }  from './redux/actionCreators/teacher';
import Login from './components/LoginForm/loginForm';
import HeaderPage from './components/Header/Header';
import { SET_STUDENT } from './redux/actionTypes/student';
import { SET_TEACHER } from './redux/actionTypes/teacher';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

function App() {
  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

 

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(isLoggedIn());
    }
  }, [dispatch]);




  //   if (JSON.parse(localStorage.getItem('student'))) {
  //     dispatch({ type: SET_STUDENT, payload: JSON.parse(localStorage.getItem('student')) });
  //   }
  //   if (JSON.parse(localStorage.getItem('teacher'))) {
  //     console.log('object', localStorage.getItem('teacher'));
  //     dispatch({ type: SET_TEACHER, payload: JSON.parse(localStorage.getItem('teacher')) });
  //   }
  // }, [dispatch]);

  // const history = useHistory();

  return (
    <div className="App">
      <HeaderPage />
      {teacher.email && <h1>you re logged in</h1>}
      <Switch>
        <Route exact path="/teacher/signup">
          <TeacherSignup />
        </Route>
        <Route exact path="/student/signup">
          <StudentSignup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

 /* { user ? (
        <Route exact path="/logout">
          <div>logout</div>
        </Route> ) :
        (
          <Route exact path="/login">
            <Login  />
          </Route>
        )}  */

export default App;
