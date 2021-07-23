import React from 'react';
import { Switch, Route, useHistory, Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';

const { Header, Content, Footer } = Layout;

export const _Header = () => {

  const teacher = useSelector((state) => state.teacher);
  const student = useSelector((state) => state.student);

  return ( 
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{justifyContent: 'space-between'}} defaultSelectedKeys={['2']}>
            <Menu.Item key='01'>
              <Link to='/teacher'>Главная</Link>
            </Menu.Item>
            <Menu.Item key='02'>
              <Link to='/teacher/add/test'>Добавить тест</Link>
            </Menu.Item>
            <Menu.Item key='03'>
              <Link to='/teacher/check/test'>Тестовая страница</Link>
            </Menu.Item>
            <Menu.Item key='04'>
            <Link to="/login">Login</Link>)
            </Menu.Item>
            <Menu.Item key='05'>
            <Link to="/logout">Logout</Link>
            </Menu.Item>
            <Menu.Item key='06'>
            <Link to="/teacher/signup">Signup</Link>
            </Menu.Item>
            {/* {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
          </Menu>
        </Header>
      </Layout>
    </div>
   );
}
 
