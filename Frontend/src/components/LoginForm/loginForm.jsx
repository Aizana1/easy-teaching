import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { teacherLogin } from '../../redux/actionCreators/teacher';
import { studentLogin } from '../../redux/actionCreators/student';
import { Link, useHistory } from 'react-router-dom';
const { Option } = Select;

const initForm = { email: '', password: '' };

const LoginForm = () => {
  const history = useHistory();
  const [formValue, setFormValue] = useState(initForm);

  const dispatch = useDispatch();
  
  const onFinish = (formValue) => {
    if (formValue.type === 'student') {
      dispatch(studentLogin(formValue));
      setFormValue(initForm);
      history.push('/');

    } else {
      dispatch(teacherLogin(formValue));
      setFormValue(initForm);
      history.push('/');
    }
  };


  return (
    <>
    <Form
      name="basic"
      style={{paddingTop: "50px"}}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 10,
      }}

      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input type="email" placeholder="email"/>
      </Form.Item>     
      
      <Form.Item
        name="password"
        label="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="type"
        label="Login as:"
        initialValue='student'
      >
        <Select
          defaultValue='student'
        >
          <Option value="student">Student</Option>
          <Option value="teacher">Teacher</Option>
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16, }}
      >
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/student/signup">register as a student now</Link>
        Or <Link to="/teacher/signup">register as a teacher now</Link>
      </Form.Item>
    </Form>
    </>
  );
};
export default LoginForm;
