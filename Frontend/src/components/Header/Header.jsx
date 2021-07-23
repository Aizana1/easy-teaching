import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
const { Header } = Layout;


const HeaderPage = () => {
  const teacher = useSelector((state) => state.teacher);
  const student = useSelector((state) => state.student);
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" style={{justifyContent: 'space-between'}}>
          {!teacher.email ? (<Link to="/login">Login</Link>) :
          (<Link to="/logout">Logout</Link>)}
          <Link to="/teacher/signup">Signup</Link>
        </Menu>
      </Header>
    </Layout>
  )
}
// { user ? (
//   <>
//   <Game />
//   <div>  <img src='/images/head2.png' alt='rick' className='rick' /></div>
//     </>
//   ) : (<h2>Вы не авторизованы. Перейдите для 
//      <Link onClick={() => history.push(`/registration`)}>  регистрации  </Link>
//      или 
//      <Link onClick={() => history.push(`/login`)}>  авторизации  </Link>
//      </h2>)}

export default HeaderPage;
