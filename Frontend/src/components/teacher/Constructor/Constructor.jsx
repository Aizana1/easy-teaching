import React, { useState, useEffect } from 'react';
import FormConstructor from './FormConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'antd';
import CardList from '../Cards/CardList';
import { addHomeworkFetch } from '../../../redux/actionCreators/createHomework';
import TitleForm from './Title';

const Constructor = () => {
  const [err, setErr] = useState(null);
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [sentences, setSentences] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const createHomework = () => {
    const homework = {
      title,
      cards,
      sentences,
    }
    dispatch(addHomeworkFetch(homework));
    history.push('/teacher/');
  };
  return (
    <div className="constructor">
      <h1>Create a home task for student</h1>
      {!title && <TitleForm setTitle={setTitle} />}
      {title && <FormConstructor setCards={setCards} />}
      {title && <h3>{title}</h3>}
      {cards.length && <CardList cards={cards} setCards={setCards} />}
      {cards.length && (
        <Button type="primary" htmlType="onClick" onClick={createHomework}>
          Создать домашнее задание
        </Button>
      )}
    </div>
  );
};
{/* <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} */}

export default Constructor;
