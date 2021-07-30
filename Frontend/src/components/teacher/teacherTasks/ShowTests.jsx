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
  // useEffect(() => {
  //   dispatch({ type: T_LOGIN, payload: JSON.parse(localStorage.getItem('teacher')) });
  // }, []);
  // const { teacher } = useSelector((state) => state.teacher);
  const teacher = JSON.parse(localStorage.getItem('teacher'));
  const id = teacher._id;
  const email = teacher.email;
  const students = useSelector((state)=> state.students);

  useEffect(() => {
    console.log('Зашел в useEffect');
    const action = showTestsAC(email);
    dispatch(action);
  }, []);
  useEffect(() => {
    console.log(id);
    console.log('Зашел в useEffect');
    const action = showStudentsAC(id);
    dispatch(action);
  }, []);
  
  const { test } = useSelector((state)=> state.test)
    console.log(test[0]?._id);
    const testId = test[0]?._id;

  const [showTests, setShowTests] = useState(); 

  const showTarget = ({ target }) => {
    const oneElemIndex = target.lastChild.ownerDocument.activeElement.attributes.in.value;
    // console.log(target.target.lastChild.ownerDocument.activeElement.attributes.in.value);
    setShowTests(<ElementTest index={oneElemIndex} test={test}/>)
    // return <ElementTest index={oneElemIndex} test={test}/>
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
  // useEffect(() => {
  // }, [showTests]);
  // target lastChild  ownerDocument  activeElement  attributes   in  value
  console.log(showTests?.props.index);
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



// return ( 
//   <div className='testContainer'>
//     <div className='showTestContainer'>
//       {test?.map((oneTest) => (
//         <Card key={oneTest._id} title={<Title level={3}>{oneTest.title}</Title>}
//         extra={<a href="#">Редактировать</a>} 
//         style={{ width: 600 }}>
//           <Button onClick={() => setShowTests((pre) => !pre)} style={{ width: 150 }}>Показать вопросы</Button>
//           <Button style={{ width: 150 }}>Удалить</Button>
//           <Button style={{ width: 150 }}>Отправить студенту</Button>
//           {showTests &&
//             oneTest.test?.map((question) => (
//             <div>
//               <p>Вопрос: {question.question_text}</p>
//               <p>Вариант 1: {question.posAns1}</p>
//               <p>Вариант 2: {question.posAns2}</p>
//               <p>Вариант 3: {question.posAns3}</p>
//               <p>Вариант 4: {question.posAns4}</p>
//               <p>Правильный ответ: {question.trueAnswer}</p>
//               <Divider />
//             </div>
//           ))}
//         </Card>
//         ))}
//     </div>
//   </div>
//  );


// return ( 
//   <div onClick={((e) => showTarget(e))} className='testContainer'>
//     <div className='showTestContainer'>
//       {test?.map((oneTest, index) => (
//         <Card key={oneTest._id} title={<Title level={3}>{oneTest.title}</Title>}
//         extra={<a href="#">Редактировать</a>} 
//         style={{ width: 600 }}>
//           <Button in={index} onClick={() => setShowTests((pre) => !pre)} style={{ width: 150 }}>Показать вопросы</Button>
//           <Button style={{ width: 150 }}>Удалить</Button>
//           <Button style={{ width: 150 }}>Отправить студенту</Button>
//           {showTests &&
//             oneTest.test?.map((question) => (
//             <div key={question._id}>
//               <p>Вопрос: {question.question_text}</p>
//               <p>Вариант 1: {question.posAns1}</p>
//               <p>Вариант 2: {question.posAns2}</p>
//               <p>Вариант 3: {question.posAns3}</p>
//               <p>Вариант 4: {question.posAns4}</p>
//               <p>Правильный ответ: {question.trueAnswer}</p>
//               <Divider />
//             </div>
//           ))}
//         </Card>
//         ))}
//     </div>
//   </div>
//  );
