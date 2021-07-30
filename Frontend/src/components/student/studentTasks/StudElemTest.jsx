import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Radio, Divider } from 'antd';

export const StudElementTest = ({ index, test }) => {

  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  console.log(test);

  return ( 
    <div>
      {test[index].test?.map((question) => (
              <Some  question={question} key={question._id}/>
            ))}
    </div>
   );
}
const Some = ({ question }) => {
  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
                <p>Вопрос: {question.question_text}</p>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>{question.posAns1}</Radio>
                  <Radio value={2}>{question.posAns2}</Radio>
                  <Radio value={3}>{question.posAns3}</Radio>
                  <Radio value={4}>{question.posAns4}</Radio>
                </Radio.Group>
                <Divider />
              </div>
  )
}


{/* <div key={question._id}>
                <p>Вопрос: {question.question_text}</p>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>{question.posAns1}</Radio>
                  <Radio value={2}>{question.posAns2}</Radio>
                  <Radio value={3}>{question.posAns3}</Radio>
                  <Radio value={4}>{question.posAns4}</Radio>
                </Radio.Group>
                <Divider />
              </div> */}
