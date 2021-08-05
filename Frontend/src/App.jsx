import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route} from 'react-router-dom'
import { AddTest } from '../src/components/teacher/teacherTasks/AddTest'
import Editor from './socket/Editor'
import { LOGIN } from '../src/redux/actionTypes/student'
import { T_LOGIN } from '../src/redux/actionTypes/teacher'
import {
  Login,
  _Header,
  TeacherSignup,
  StudentSignup,
  Test,
  MainTeacher,
  MainStudent,
  GeneralPage,
  ChoiceReg,
  MainPage,
  Video,
  Notifications,
  ChatRoom,
  ShowTests,
  ChoiceTeacher,
  MyTests,
} from './components'

function App() {
  const dispatch = useDispatch()
  const student = useSelector((state) => state.student)
  const teacher = useSelector((state) => state.teacher)
  const [noLog, setNoLog] = useState(false)


  useEffect(() => {
    dispatch({
      type: LOGIN,
      payload: JSON.parse(localStorage.getItem('student')),
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: T_LOGIN,
      payload: JSON.parse(localStorage.getItem('teacher')),
    })
  }, [])

  useEffect(() => {
    if (
      (!teacher && !student) ||
      (teacher?.teacher === null && student?.student === null)
    ) {
      setNoLog(true)
    }
  }, [])
  useEffect(() => {
    if (teacher?.teacher || student?.student) {
      setNoLog(false)
    }
  }, [teacher, student])

  return (
    <div className="App">
      <_Header noLog={noLog} setNoLog={setNoLog} />
      <Switch>
        <Route path="/signup">
          <ChoiceReg />
        </Route>
        <Route path="/teacher/signup">
          <TeacherSignup />
        </Route>
        <Route path="/student/signup">
          <StudentSignup />
        </Route>
        <Route path="/login">
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
        <Route path="/chat/:roomId">
          <ChatRoom />
        </Route>
        <Route path="/student">
          <MainStudent />
        </Route>
        <Route path="/table/choiceteacher">
          <ChoiceTeacher />
        </Route>
        <Route path="/tasks/showtests">
          <ShowTests />
        </Route>
        <Route path="/tests">
          <MyTests />
        </Route>
        <Route exact path="/lessons/:id" >
          <MainPage>
            <Notifications />
            <Video />
          <Editor />
          </MainPage>

        </Route>
      </Switch>
    </div>
  )
}

export default App
