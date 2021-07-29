import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const TitleForm = ({ setTitle }) => {
  const [form] = Form.useForm();
  return (
    <Form onFinish={({ title }) => {
      setTitle(title);
    }}>
      <Form.Item
        label="Название темы"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please provide Title',
          },
        ]}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Создать тему
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TitleForm;
