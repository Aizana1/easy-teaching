import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
// const initForm = { word: '', meaning: '', type: '', examples: [] };

const FormConstructor = ({ setCards }) => {
  const [addMeaning, setAddMeaning] = useState(false);
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    setCards((pre) => [ ...pre, values ]);
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="add_card"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      // initialValues={initForm}
      // onChange={onChangeHandler}
      // onFinish={e=> submitHandler(e)}
      onFinish={onFinish}
    >
      <Form.Item
        label="Слово которое хотите добавить"
        name="word"
        rules={[
          {
            required: true,
            message: 'Type your word',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Definition"
        name="definition"
        rules={[
          {
            // required: true,
            message: 'Please choose defintion of this word',
          },
        ]}
      >
        <Select placeholder="definition">
          <Option value="verb">Verb</Option>
          <Option value="adjective">Adjective</Option>
          <Option value="noun">Noun</Option>
          <Option value="adverb">Adverb</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="meaning"
        name="meaning"
        rules={[
          {
            required: true,
            message: 'meaning',
          },
        ]}
      >
        <TextArea rows={2} cols={30} />
      </Form.Item>

      <Form.Item
        label="Examples"
        name="examples"
        rules={[
          {
            required: true,
            message: 'Type some examples',
          },
        ]}
      >
        <TextArea rows={4} cols={30} />
      </Form.Item>

      {!addMeaning && (
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setAddMeaning(true)}
          >
            Add another meaning
          </Button>
        </Form.Item>
      )}

      {addMeaning && (
        <>
          <Form.Item
            label="Another Definition"
            name="definition2"
            rules={[
              {
                // required: true,
                message: 'Please choose defintion of this word',
              },
            ]}
          >
            <Select placeholder="definition">
              <Option value="verb">Verb</Option>
              <Option value="adjective">Adjective</Option>
              <Option value="noun">Noun</Option>
              <Option value="adverb">Adverb</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Another meaning"
            name="meaning2"
            rules={[
              {
                required: true,
                message: 'meaning',
              },
            ]}
          >
            <TextArea rows={2} cols={30} />
          </Form.Item>

          <Form.Item
            label="Examples"
            name="examples2"
            rules={[
              {
                required: true,
                message: 'Type some examples',
              },
            ]}
          >
            <TextArea rows={4} cols={30} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" onClick={() => setAddMeaning(false)}>
              Close
            </Button>
          </Form.Item>
        </>
      )}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Сохранить карту со словом
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>
    </Form>
  );
};

export default FormConstructor;
