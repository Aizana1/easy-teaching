import React, { useState } from 'react';
import { Switch, Route, useHistory, Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';

const { Header, Content, Footer } = Layout;

export const _Header = () => {

  // const teacher = useSelector((state) => state.teacher);
  // const student = useSelector((state) => state.student);

  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const [noLog, setNoLog] = useState(true)

  return ( 
    <div>
      <Layout className="layout">
        <Header>
          <>
          {teacher &&
          <Menu theme="dark" mode="horizontal" style={{justifyContent: 'space-between'}} defaultSelectedKeys={['2']}>
            <Menu.Item key='08'>
            <Link to='/'>Общая страница</Link>
            </Menu.Item>
            <Menu.Item key='04'>
            <Link to='/teacher'>Главная</Link>
            </Menu.Item>
            <Menu.Item key='05'>
            <Link to='/teacher/add/test'>Добавить тест</Link>
            </Menu.Item>
            <Menu.Item key='06'>
            <Link to='/teacher/check/test'>Тестовая страница</Link>
            </Menu.Item>
            <Menu.Item key='03'>
            <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
          } 
          {student &&
          <Menu theme="dark" mode="horizontal" style={{justifyContent: 'space-between'}} defaultSelectedKeys={['2']}>
            <Menu.Item key='08'>
            <Link to='/'>Общая страница</Link>
            </Menu.Item>
            <Menu.Item key='07'>
            <Link to="/student">Главная</Link>
            </Menu.Item>
            <Menu.Item key='03'>
            <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
          }
          {noLog &&
          <Menu theme="dark" mode="horizontal" style={{justifyContent: 'space-between'}} defaultSelectedKeys={['2']}>
            <Menu.Item key='08'>
            <Link to='/'>Общая страница</Link>
            </Menu.Item>
            <Menu.Item key='01'>
            <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key='02'>
            <Link to="/teacher/signup">Signup</Link>
            </Menu.Item>
          </Menu>
          }
          </>
            {/* {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
        </Header>
      </Layout>
    </div>
   );
}
 
