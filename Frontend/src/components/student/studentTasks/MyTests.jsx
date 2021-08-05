import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button } from 'antd';
import { studShowTestsAC } from "../../../redux/actionCreators/studShowTestsAC";
import { StudElementTest } from "./StudElemTest";

const initTarget = null;

export const MyTests = () => {

  const { Title } = Typography;
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem('student'));
  const id = student._id;
  const [showTests, setShowTests] = useState(); 
  useEffect(() => {
   
    const action = studShowTestsAC(id);
    dispatch(action);
  }, []);
  const { test } = useSelector((state)=> state.test);
  const showTarget = ({ target }, index) => {
    const oneElemIndex = index;
    setShowTests(<StudElementTest index={oneElemIndex} test={test}/>)
  }

  const hiddenTarget = ({ target }) => {
    setShowTests(initTarget)
  }

  return ( 
    <div className='testContainer'>
      <div className='showTestContainer'>
        {test?.map((oneTest, index) => (
          <Card key={oneTest._id} title={<Title level={3}>{oneTest.title}</Title>}
          style={{ width: 800 }}>
            <Button in={index} onClick={((e) => showTarget(e, index))} style={{ width: 100 }}>Показать</Button>
            <Button onClick={hiddenTarget} style={{ width: 100 }}>Убрать</Button>
          {showTests?.props.index == index && showTests}
          <Button  style={{ width: 100 }}>Проверить</Button>
          </Card>
            ))}
      </div>
    </div>
   );
}
 

