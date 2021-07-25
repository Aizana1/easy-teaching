import React, { useState, useEffect } from 'react';
import { Main } from './components/teacher/main/Main';
import { StudMain } from './components/student/main/StudMain';
import { isLoggedIn }  from './redux/actionCreators/teacher';
import Login from './components/LoginForm/loginForm';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";

function App() {

  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(isLoggedIn());
    }
  }, [dispatch]);
  // const [teacher, setTeacher] = useState(true);
  // const [student, setStudent] = useState(false);

  return (
    <div className="App">
      {teacher && <Main />}
      {student && <StudMain />}
     
    </div>
  );
}

export default App;
