import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button, Table, Tag, Space } from 'antd';
import { showTeacherAC } from "../../../redux/actionCreators/showTeacherAC";
import { allTeacherAC } from '../../../redux/actionCreators/allTeacherAC';

export const ChoiceTeacher = () => {

  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem('student'));
  const allTeachers = useSelector((state)=> state.allTeachers);

  useEffect(() => {
    console.log('Зашел в useEffect');
    const action = allTeacherAC();
    dispatch(action);
  }, []);

  return ( 
    <div>
      <h1>Выбор учителя</h1>
    </div>
   );
}

