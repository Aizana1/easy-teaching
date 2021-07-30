import React, { useState, useEffect } from 'react'
import { isLoggedIn } from './redux/actionCreators/teacher'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory, Link, useParams } from 'react-router-dom'
import { AddTest } from '../src/components/teacher/teacherTasks/AddTest'
import Editor from './socket/Editor'
import { LOGIN } from '../src/redux/actionTypes/student'
import { T_LOGIN } from '../src/redux/actionTypes/teacher'
import { ContextProvider, SocketContext } from './socket/SocketContext'
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
} from './components'

function App() {
  const dispatch = useDispatch()
  const student = useSelector((state) => state.student)
  const teacher = useSelector((state) => state.teacher)
  const [noLog, setNoLog] = useState(false)

  // console.log(teacher);

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
      // setNoLog((pre) => !pre);
      setNoLog(true)
    }
  }, [])
  useEffect(() => {
    if (teacher?.teacher || student?.student) {
      setNoLog(false)
      // console.log(noLog);
    }
  }, [teacher, student])

  // console.log(noLog);

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
        <Route exact path="/lessons/:id">
          <MainPage>
            <Notifications />
            <Video />
          </MainPage>
          <Editor />
        </Route>
      </Switch>
    </div>
  )
}

export default App
