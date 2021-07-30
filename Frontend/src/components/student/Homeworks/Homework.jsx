import React, { useEffect, useState } from 'react';

const Homework = () => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const listHomeworks = async () => {
      try {
        // здесь надо отправить fetch запрос
        // определенную домашку
        const response = await fetch('http://localhost:8080/student/homeworks', {
          method: 'GET',
          body: JSON.stringify(JSON.parse(localStorage.getItem('student'))),
        });
        if (!response.ok) {
          console.log(response.errStatus, response.errMessage);
        }
        const result = await response.json();
        setListHW(result);
      } catch (err) {
        console.log(err);
      }
    };
    listHomeworks();
  }, [dispatch]);
  return (
    // как то ли можно заново прорендерить component CardList чтобы отобразить все карточки
  )
}
