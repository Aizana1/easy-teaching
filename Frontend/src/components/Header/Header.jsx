import React, { useState } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { T_LOGOUT } from '../../redux/actionTypes/teacher'
import { LOGOUT } from '../../redux/actionTypes/student'
import uuid from 'uuid'
const { Header, Content, Footer } = Layout

export const _Header = ({ noLog, setNoLog }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const teacher = useSelector((state) => state.teacher)
  const student = useSelector((state) => state.student)
  // const [lessonId, setLessonId] = useState()
  const [isVisible, setIsVisible] = useState(false)

  const handleRoomNameChange = () => {
    if (student.student) {
      const currentStudent = student.student._id
      // setRoomName(currentStudent)
      history.push(`/chat/${currentStudent}`)

    } else if (teacher.teacher) {
      if (teacher.teacher.students.length !== null) {
        const currentStudent = teacher.teacher.students
       
        history.push(`/chat/${currentStudent[0]}`)

      } else if (teacher.teacher.students.length === []) {
        alert('У вас пока нет студентов')
      }
    }
  }

   const showChat = () => {
    setIsVisible(!isVisible)
   }

  const logoutHandler = async (event) => {
    localStorage.removeItem('token')
    localStorage.removeItem('student')
    localStorage.removeItem('teacher')
    dispatch({ type: T_LOGOUT })
    dispatch({ type: LOGOUT })
    history.push("/")
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
              <div style={{color: "white", fontWeight: "bold", fontSize: "26px"}}>Easy Teaching</div>   
                </Menu.Item>
                <Menu.Item key="04">
                  <Link to="/teacher">Главная</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link
                    to={`/lessons/${uuid()}`}
                    // onClick={()=> teacher.teacher.lessons.push()}
                  >
                    Начать урок
                  </Link>
                </Menu.Item>
                <Menu.Item key="05">
                  <Link to="/teacher/add/test">Добавить тест</Link>
                </Menu.Item>
                <Menu.Item key="09">
                  <div
                    onClick={handleRoomNameChange}
                  >
                    Мои сообщения
                  </div>
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
                <h1 style={{color: "white"}}>Easy Teaching</h1>   
                </Menu.Item>
                <Menu.Item key="07">
                  <Link to="/student">Главная</Link>
                </Menu.Item>
             
                <Menu.Item key="11">
                <div
                    onClick={handleRoomNameChange}
                  >
                    Связаться с моим учителем
                  </div>
                </Menu.Item>
                <Menu.Item key="09">
                  <Link to="/table/choiceteacher">Выбрать учителя</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/tests">Тесты</Link>
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
