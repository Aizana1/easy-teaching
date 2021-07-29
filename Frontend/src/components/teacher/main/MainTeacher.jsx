import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button } from 'antd';
import { showStudentsAC } from "../../../redux/actionCreators/showStudentsAC";


export const MainTeacher = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const teacher = JSON.parse(localStorage.getItem('teacher'))
  const students = useSelector((state)=> state.students);
  console.log(teacher);
  const id = teacher._id;

  useEffect(() => {
    console.log(id);
    console.log('Зашел в useEffect');
    const action = showStudentsAC(id);
    dispatch(action);
  }, []);



  return ( 
    <div
    className='containerTeacher'>
      <div className='cardElements'>
        <Card title={<Title level={3}>{teacher.firstname + ' ' + teacher.lastname}</Title>}
        extra={<a href="#">Редактировать</a>} 
        style={{ width: 400 }}>
          <p>Email: {teacher.email}</p>
          <p>Тел: {teacher.phone}</p>
          <p>Преподает язык: {teacher.languages[0]}</p>
          <p>Уровень владения языком {teacher.level}</p>
          <p>О себе: {teacher.introduction}</p>
        </Card>
      </div>
      <div>
        <Card title={<Title level={4}>Мои студенты</Title>} style={{ width: 400 }}>
          <ul>
            {teacher.students.length ? 
            teacher.students.map((student) => (
              <li className='studentsList' key={student.id}>{student.firstname + ' ' + student.lastname}</li>
            ))
            : <li>У вас нет активных студентов</li>}
          </ul> 
        </Card>
      </div>
      <div>
        <Card title={<Title level={4}>Домашние задания для студентов</Title>} style={{ width: 400 }}> 
          <p className='studentsList'><a href='/tasks/showtests' style={{color: 'black'}}>Тесты</a></p>
          <p className='studentsList'><a href='/' style={{color: 'black'}}>Карточки</a></p>
        </Card>
      </div>
    </div>
   );
}
 
