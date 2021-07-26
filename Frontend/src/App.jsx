import React, { useState, useEffect } from 'react';
// import { TeacherMain } from './components/teacher/main/TeacherMain';
// import { StudMain } from './components/student/main/StudMain';
import { isLoggedIn }  from './redux/actionCreators/teacher';
import Login from './components/LoginForm/loginForm';
import { _Header } from './components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useHistory, Link } from "react-router-dom";
import { AddTest } from '../src/components/teacher/teacherTasks/AddTest';
import TeacherSignup from './components/teacher/RegistrationTeacher/Registration'
import StudentSignup from './components/student/registrationStudent/Registration';
import { Test } from '../src/components/teacher/teacherTasks/test';
import { MainTeacher } from './components/teacher/main/MainTeacher';
import { MainStudent } from './components/student/main/MainStudent';
import { GeneralPage } from './components/General/GeneralPage';
import MainPage from './components/socketComponents/MainPage';
import Notification from 'rc-notification/lib/Notification';
import Editor from './socket/Editor';
import Video from './components/socketComponents/Video';
import Chat from './components/socketComponents/Chat';

function App() {

  
  const dispatch = useDispatch();
  // const student = useSelector((state) => state.student);
  // const teacher = useSelector((state) => state.teacher);
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(isLoggedIn());
    }
  }, [dispatch]);
  // const [teacher, setTeacher] = useState(true);
  // const [student, setStudent] = useState(false);
  
  return (
    <div className="App">
      {/* {teacher && <TeacherMain />}
      {student && <StudMain />} */}
      <_Header />
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
        <Route path="/teacher/add/test">
          <AddTest />
        </Route>
        <Route path="/teacher/check/test">
          <Test />
        </Route>
        <Route path="/teacher">
          <MainTeacher />
        </Route>
        <Route exact path="/">
          <GeneralPage />
        </Route>
        <Route path="/student">
          <MainStudent />
        </Route>
        <Route path="/lessons/:id">
          <MainPage>
            <Notification />
            <Chat />
            <Video />
            <Editor />
            </MainPage>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
