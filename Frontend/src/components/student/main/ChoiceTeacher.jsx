import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button, Table, Tag, Space, Divider, Row, Col } from 'antd';
import { showTeacherAC } from "../../../redux/actionCreators/showTeacherAC";
import { allTeacherAC } from '../../../redux/actionCreators/allTeacherAC';
import { choiceTeacherAC } from '../../../redux/actionCreators/choiceTeacherAC';

export const ChoiceTeacher = () => {

  const { Title } = Typography;
  const { Column } = Table;
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem('student'));
  const allTeachers = useSelector((state)=> state.allTeachers);
  let ArrT = []

  useEffect(() => {
    console.log('Зашел в useEffect');
    const action = allTeacherAC();
    dispatch(action);
  }, []);
  if(allTeachers) {
    ArrT = Object.values((allTeachers));
    // allTeachers.map((elem) => console.log(elem));
  }

  const choiceHandler = (id, studentId) => {
    console.log(id);
    const action = choiceTeacherAC(id, studentId);
    dispatch(action);
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
  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstname',
      key: 'nafirstnameme',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Languages',
      dataIndex: 'languages',
      key: 'languages',
    },
    {
      title: 'Introduction',
      dataIndex: 'introduction',
      key: 'introduction',
    },
    {
      title: 'Выбор',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
       <Button type="dashed" onClick={()=> choiceHandler(record.key, student._id)}>
         {"Выбрать"} 
       </Button>
      ),
    },

  ]


  return ( 
    <div>
      <Row>
        <Col xs={24} md={{ span: 16, offset: 6 }}>
          <Divider />
        <Title level={3}><Row><Col xs={24} md={{ span: 12, offset: 6 }}>Выбор преподавателя</Col></Row></Title>
          <Divider />
          <Table dataSource={dataSource} columns={columns}>
            <Column title='Имя' dataIndex='firstname' key='firstname' />
            <Column title='Фамилия' dataIndex='lastname' key='lastname' />
            <Column title='Пол' dataIndex='gender' key='gender' />
            <Column title='Язык' dataIndex='languages' key='languages' />
            <Column title='Уровень владения' dataIndex='level' key='level' />
            <Column title='О преподавателе' dataIndex='introduction' key='introduction' />
            {/* <Column
              title="Выбрать"
              key="action"
              render={(text, record) => (
                  <Button onClick={((event) => choiceHandler(event))}	type="dashed">Выбрать</Button>
              )}
            /> */}
          </Table>
        </Col>
      </Row>
    </div>
   );
}

