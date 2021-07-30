import React, { useContext, useState, useEffect } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { T_LOGOUT } from '../../redux/actionTypes/teacher'
import { LOGOUT } from '../../redux/actionTypes/student'
import { SocketContext } from '../../socket/SocketContext'
import uuid from 'uuid'
const { Header, Content, Footer } = Layout

export const _Header = ({ noLog, setNoLog }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const teacher = useSelector((state) => state.teacher)
  const student = useSelector((state) => state.student)
  const [roomName, setRoomName] = useState('')
  const [lessonId, setLessonId] = useState()

  const handleRoomNameChange = () => {
    if (student.student) {
      const currentStudent = student.student._id
      setRoomName(currentStudent)
    } else if (teacher.teacher) {
      if (teacher.teacher.students.length !== null) {
        const currentStudent = teacher.teacher.students
        console.log(currentStudent)
        setRoomName(currentStudent[0])
      } else if (teacher.teacher.students.length === []) {
        alert('У вас пока нет студентов')
      }
    }

  }
  //  const showChat = () => {

  //  }

  const logoutHandler = async (event) => {
    console.log('Зашел в logoutHandler')
    localStorage.removeItem('token')
    localStorage.removeItem('student')
    localStorage.removeItem('teacher')
    dispatch({ type: T_LOGOUT })
    dispatch({ type: LOGOUT })
    history.push('/')
    setNoLog(true)
  }

  return (
    <div>
      <Layout className="layout">
        <Header>
          <>
            {teacher?.teacher && (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ justifyContent: 'space-between' }}
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="08">
                  <Link to="/">Общая страница</Link>
                </Menu.Item>
                <Menu.Item key="04">
                  <Link to="/teacher">Главная</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link
                    to={`/lessons/${lessonId}`}
                    onClick={() => setLessonId(uuid())}
                  >
                    Начать урок
                  </Link>
                </Menu.Item>
                <Menu.Item key="05">
                  <Link to="/teacher/add/test">Добавить тест</Link>
                </Menu.Item>
                <Menu.Item key="09">
                  <Link
                    to={`/chat/${roomName}`}
                    onClick={() => handleRoomNameChange()}
                  >
                    Мои сообщения
                  </Link>
                </Menu.Item>
                <Menu.Item key="06">
                  <Link to="/teacher/check/test">Тестовая страница</Link>
                </Menu.Item>
                <Menu.Item key="03">
                  <div onClick={logoutHandler}>Выйти</div>
                </Menu.Item>
              </Menu>
            )}
            {student?.student && (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ justifyContent: 'space-between' }}
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="08">
                  <Link to="/">Общая страница</Link>
                </Menu.Item>
                <Menu.Item key="07">
                  <Link to="/student">Главная</Link>
                </Menu.Item>
                {/* <Menu.Item key='10'>
            <Link to={`/lessons/${lessonId}`} onClick={() => setLessonId(uuid())} >Начать урок</Link>
            </Menu.Item> */}
                <Menu.Item key="11">
                  <Link
                    to={`/chat/${roomName}`}
                    onClick={() => handleRoomNameChange()}
                  >
                    Связаться с моим учителем
                  </Link>
                </Menu.Item>
                <Menu.Item key="09">
                  <Link to="/table/choiceteacher">Выбрать учителя</Link>
                </Menu.Item>
                <Menu.Item key="03">
                  <div onClick={logoutHandler}>Выйти</div>
                </Menu.Item>
              </Menu>
            )}
            {noLog && (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ justifyContent: 'space-between' }}
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="08">
                  <Link to="/">Общая страница</Link>
                </Menu.Item>
                <Menu.Item key="01">
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="02">
                  <Link to="/signup">Signup</Link>
                </Menu.Item>
              </Menu>
            )}
          </>
        </Header>
      </Layout>
    </div>
  )
}
