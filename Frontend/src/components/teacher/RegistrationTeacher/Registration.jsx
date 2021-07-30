import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Link, useHistory } from 'react-router-dom';
import { teacherSignup } from '../../../redux/actionCreators/teacher';
const { Option } = Select;

const initForm = { firstname: "", password: "", email: "", lastname: '', phone: '', gender: '', birthdate: '', language: '', level: '', introduction: 'hi' };
const TeacherSignup = () => {
  const history = useHistory();
  const [formValue, setFormValue] = useState(initForm);

  // const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();
  
  const onFinish = (formValue) => {
    console.log('formValue', formValue);
    dispatch(teacherSignup(formValue));
    setFormValue(initForm);
    history.push('/');
  };

  // const onChangeHandler = (e) => {
    
  //   // console.log('target', e.target);
  //   // console.log('name', name);
  //   // console.log('value', value)
  //   setFormValue((pre) => ({ ...pre, [e[name]]: e.value }));
  //   console.log('state', formValue);
  // };

  return (
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
      // onValuesChange={onChangeHandler}
    >
      <Form.Item
        name="firstname"
        label="Name"
        rules={[
          {
            // required: false,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input value='test' />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[
          {
            // required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input placeholder="Lastname" defaultValue={formValue.lastname}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="email"
        rules={[
          {
            required: false,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        name="languages"
        label="Languages"
        rules={[
          {
            // required: true,
            message: 'Please select languages you want to teach!',
          },
        ]}
      >
        <Select placeholder="select languages" value={formValue.language}>
          <Option value="English">English</Option>
          <Option value="German">German</Option>
          <Option value="Chinese">Chinese</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="level"
        label="Level"
        rules={[
          {
            // required: true,
            message: 'Please select you level of the language you chose!',
          },
        ]}
      >
        <Select placeholder="select level" value={formValue.level}>
          <Option value="Upper-Intermediate">Upper-Intermediate</Option>
          <Option value="Advanced">Advanced</Option>
          <Option value="Fluent">Fluent</Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        name="password"
        label="password"
        rules={[
          {
            // required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
          value={formValue.password}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            // required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input value={formValue.phoneNumber}/>
      </Form.Item>


      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            // required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender" value={formValue.gender}>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name='introduction'
        label="Introduction" 
      >
        <Input.TextArea placeholder="Please introduce yourself" value={formValue.intorduction}/>
      </Form.Item>

      <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16, }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <Link to="/login"> login now</Link>
        Or <Link to="/student/signup"> register as a student</Link>
      </Form.Item>
    </Form>
  );
};
export default TeacherSignup;
