import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AddTest } from '../../teacher/teacherTasks/AddTest';
import { isLoggedIn }  from '../../../redux/actionCreators/teacher';
import { _Header } from '../../teacher/Header';
import Login from '../../LoginForm/loginForm';
import TeacherSignup  from "../../RegistrationTeacher/Registration";
import StudentSignup  from '../../registrationStudent/Registration';
import { Test } from '../../teacher/teacherTasks/test';
import { Privat } from '../../teacher/teacherTasks/Privat';
import MainPage from '../../socketComponents/MainPage'
import Notification from '../../socketComponents/Notifications'
import Editor from '../../../socket/Editor'
import Video from '../../socketComponents/Video'


export const StudMain = () => {
  return ( 
    <div>
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
        <Route exact path="/teacher">
          <Privat />
        </Route>
        {/* <Route path="/lessons/:id">
          <MainPage>
            <Notification />
            <Video />
            <Editor />
            </MainPage>
        </Route> */}
      </Switch>
    </div>
   );
}
 
