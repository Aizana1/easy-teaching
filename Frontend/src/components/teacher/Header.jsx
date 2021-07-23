import React from 'react';
import { Switch, Route, useHistory, Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export const _Header = () => {
  return ( 
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key='01'>
              <Link to='/teacher'>Главная</Link>
            </Menu.Item>
            <Menu.Item key='02'>
              <Link to='/teacher/add/test'>Добавить тест</Link>
            </Menu.Item>
            <Menu.Item key='03'>
              <Link to='/teacher/check/test'>Тестовая страница</Link>
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
 
