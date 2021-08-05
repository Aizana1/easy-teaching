import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button, Table, Tag, Space, Divider, Row, Col } from 'antd';
import { allTeacherAC } from '../../../redux/actionCreators/allTeacherAC';

export const ChoiceTeacher = () => {

  const { Title } = Typography;
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem('student'));
  const allTeachers = useSelector((state)=> state.allTeachers);
  let ArrT = []

  useEffect(() => {
    console.log('Зашел в useEffect');
    const action = allTeacherAC();
    dispatch(action);
  }, []);
  console.log(typeof(allTeachers));
  if(allTeachers) {
    ArrT = Object.values((allTeachers));
  }
  let data = [];
  let dataSource = [];
  if (ArrT[0]) {
    data.push(ArrT[0].map((elem) => {
      return {
        key: elem._id,
        firstname: elem.firstname,
        lastname: elem.lastname,
        gender: elem.gender,
        level: elem.level,
        languages: elem?.languages,
        introduction: elem.introduction,
      }
    }))
  }
  dataSource = data[0];
  console.log(dataSource);

  const columns = [
    {
      title: 'firstname',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'languages',
      dataIndex: 'languages',
      key: 'languages',
    },
    {
      title: 'introduction',
      dataIndex: 'introduction',
      key: 'introduction',
    },
      ]


  return ( 
    <div>
      <Row>
        <Col xs={24} md={{ span: 16, offset: 6 }}>
          <Divider />
        <Title level={3}><Row><Col xs={24} md={{ span: 12, offset: 6 }}>Выбор преподавателя</Col></Row></Title>
          <Divider />
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </div>
   );
}

