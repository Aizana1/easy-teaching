import React, { useEffect, useState } from 'react';
import { List, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHomeworks } from '../../../redux/actionCreators/student';

const Homeworks = () => {
  const [homeworks, setHomeworks] = useState(null);
  const dispatch = useDispatch();
  const [listHW, setListHW] = useState([]);

  useEffect(() => {
    const listHomeworks = async () => {
      try {
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
    <>
      <List
        itemLayout="horizontal"
        dataSource={listHW}
        renderItem={(obj) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/homeworks/${obj.id}`}>{obj.title}</Link>}
              description={obj.cards[0].defintion}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Homeworks;
