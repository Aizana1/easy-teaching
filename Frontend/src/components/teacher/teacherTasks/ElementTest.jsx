import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Divider } from 'antd';

export const ElementTest = ({ index, test }) => {
  return ( 
    <div>
      {test[index].test?.map((question) => (
              <div key={question._id}>
                <p>Вопрос: {question.question_text}</p>
                <p>Вариант 1: {question.posAns1}</p>
                <p>Вариант 2: {question.posAns2}</p>
                <p>Вариант 3: {question.posAns3}</p>
                <p>Вариант 4: {question.posAns4}</p>
                <p>Правильный ответ: {question.trueAnswer}</p>
                <Divider />
              </div>
            ))}
    </div>
   );
}

