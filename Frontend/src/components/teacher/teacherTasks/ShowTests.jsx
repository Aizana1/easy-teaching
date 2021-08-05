import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button, Divider, Modal } from 'antd';
import { showTestsAC } from "../../../redux/actionCreators/showTestsAc";
import { showStudentsAC } from "../../../redux/actionCreators/showStudentsAC";
import { addStudentsTestAC } from "../../../redux/actionCreators/addStudentTestAC";
import { ElementTest } from "./ElementTest";

const initTarget = null;

export const ShowTests = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const teacher = JSON.parse(localStorage.getItem('teacher'));
  const id = teacher._id;
  const email = teacher.email;
  const students = useSelector((state)=> state.students);

  useEffect(() => {
    const action = showTestsAC(email);
    dispatch(action);
  }, []);

  useEffect(() => {
    const action = showStudentsAC(id);
    dispatch(action);
  }, []);
  
  const { test } = useSelector((state)=> state.test)
  const testId = test[0]?._id;

  const [showTests, setShowTests] = useState(); 

  const showTarget = ({ target }) => {
    const oneElemIndex = target.lastChild.ownerDocument.activeElement.attributes.in.value;
    setShowTests(<ElementTest index={oneElemIndex} test={test}/>)
  }

  const hiddenTarget = ({ target }) => {
    setShowTests(initTarget)
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const choiceStudent = ({target}) => {
      console.log(target.id);
      const action = addStudentsTestAC(testId, target.id);
      dispatch(action);
    }
  
  return ( 
    <div className='testContainer'>
      <div className='showTestContainer'>
        {test?.map((oneTest, index) => (
          <Card key={oneTest._id} title={<Title level={3}>{oneTest.title}</Title>}
          extra={<a href="#">Редактировать</a>} 
          style={{ width: 600 }}>
            <Button in={index} onClick={((e) => showTarget(e))} style={{ width: 100 }}>Показать</Button>
            <Button onClick={hiddenTarget} style={{ width: 100 }}>Убрать</Button>
            <Button style={{ width: 100 }}>Удалить</Button>
            <Button id={oneTest._id} onClick={showModal} style={{ width: 100 }}>Отправить</Button>
            <Modal title='Выберите студента' visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}>
              <ul>
              {students?.students ? 
                students.students.map((student) => (
                  <Button 
                  className='studentsList' 
                  key={student._id}
                  id={student._id}
                  onClick={(e) => choiceStudent(e)}>
                  <span id={student._id}>{student.firstName + ' ' + student.lastName}</span>
                  </Button>
                ))
                : <li>У вас нет активных студентов</li>}
              </ul>
            </Modal>
          {showTests?.props.index == index && showTests}
          </Card>
            ))}
      </div>
    </div>
   );
}
