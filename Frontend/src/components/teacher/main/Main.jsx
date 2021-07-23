import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AddTest } from '../teacherTasks/AddTest';
import { _Header } from '../Header';
import { Test } from '../teacherTasks/test';
import { Privat } from '../teacherTasks/Privat';
import MainPage from '../../socketComponents/MainPage'
import Notification from '../../socketComponents/Notifications'
import Editor from '../../../socket/Editor'
import Video from '../../socketComponents/Video'




export const Main = () => {
  return ( 
    <div>
      {/* <AddTest /> */}
      <_Header />
      <Switch>
        <Route path="/teacher/add/test">
          <AddTest />
        </Route>
        <Route path="/teacher/check/test">
          <Test />
        </Route>
        <Route exact path="/teacher">
          <Privat />
        </Route>
        <Route path="/lessons/:id">
          <MainPage>
            <Notification />
            <Video />
            <Editor />
            </MainPage>
      </Route>
      </Switch>
    </div>
   );
}
 
