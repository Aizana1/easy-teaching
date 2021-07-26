import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Typography, Radio, Divider } from 'antd';


const initState = { value: 'Студент' }
export const ChoiceReg = () => {

  const history = useHistory();
  const { Title } = Typography;

  const plainOptions = ['Студент', 'Преподователь'];
  const options = [
    { label: 'Студент', value: 'Студент' },
    { label: 'Преподователь', value: 'Преподователь' },
  ];
  const [radioState, setRadioState] = useState(initState);

  const onChangeHanler = ({target}) => {
    setRadioState(target.value);
  }

  const choiceDoneHandler = () => {
    console.log('Кликнул "Перейти"');
    console.log(radioState);
    if (radioState === 'Студент')  {
      history.push("/student/signup");
    } else if (radioState === 'Преподователь') {
      history.push("/teacher/signup");
    }
  }

  return ( 
    <div>
      <Row>
        <Col xs={24} md={{ span: 24, offset: 10 }}>
          <br />
          <Title level={3}>Выберите как зарегестрироваться</Title>
          <br />
          <Divider />
          <Radio.Group
              options={options}
              onChange={onChangeHanler}
              value={radioState}
              optionType="button"
            />
          <Button onClick={choiceDoneHandler} type="primary" htmlType="submit">Перейти</Button>
        </Col>
      </Row>
    </div>
   );
}
 

