import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Divider, Row, Col, Typography } from 'antd'
import { addTestSagaAC } from '../../../redux/actionCreators/addTestAC'
import { addTitleTestSagaAC } from '../../../redux/actionCreators/addTitleTestAC'
const { TextArea } = Input

const initForm = {
  question_text: '',
  posAns1: '',
  posAns2: '',
  posAns3: '',
  posAns4: '',
  trueAnswer: '',
}
const initTitle = { title: '' }

export const AddTest = () => {
  const [titleCounter, setTitleCounter] = useState(0)
  const history = useHistory()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { test } = useSelector((state) => state.test)

  const { Title } = Typography

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const titleHandler = async (values) => {
    const user = JSON.parse(localStorage.getItem('teacher'))
    const email = user.email
    const action = addTitleTestSagaAC({ values, email })
    dispatch(action)
    setTitleCounter(titleCounter + 1)
  }

  const onReset = async () => {
    const values = form.getFieldsValue()
    const id = test._id
    const action = addTestSagaAC({ values, id })
    dispatch(action)
    form.resetFields()
  }

  const onFinish = async (values) => {
    const id = test._id
    const action = addTestSagaAC({ values, id })
    dispatch(action)
    history.push('/')
  }

  return (
    <div>
      {titleCounter ? (
        <Row>
          <Col xs={24} md={{ span: 12, offset: 6 }}>
            <Title level={3}>Создание теста</Title>
            <Divider />
            <Divider />
            <Form
              name="add_test"
              form={form}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={initForm}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Текст вопроса"
                name="question_text"
                rules={[
                  {
                    required: true,
                    message: 'Введите текст вопроса!',
                  },
                ]}
              >
                <TextArea rows={4} cols={4} />
              </Form.Item>
              <Form.Item
                label="Вариант ответа 1"
                name="posAns1"
                rules={[
                  {
                    required: true,
                    message: 'Введите 1-ый вариант ответа!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Вариант ответа 2"
                name="posAns2"
                rules={[
                  {
                    required: true,
                    message: 'Введите 2-ый вариант ответа!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Вариант ответа 3"
                name="posAns3"
                rules={[
                  {
                    required: true,
                    message: 'Введите 3-ий вариант ответа!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Вариант ответа 4"
                name="posAns4"
                rules={[
                  {
                    required: true,
                    message: 'Введите 4-ый вариант ответа!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Правильный ответ"
                name="trueAnswer"
                rules={[
                  {
                    required: true,
                    message: 'Введите правильный ответ!',
                  },
                ]}
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
                  Сохранить тест
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button onClick={onReset} type="dashed">
                  Еще один вопрос
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={24} md={{ span: 12, offset: 6 }}>
            <Form
              name="add_test"
              form={form}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={initTitle}
              onFinish={titleHandler}
              onFinishFailed={onFinishFailed}
            >
              <br />
              <Form.Item
                label="Название теста"
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Введите 1-ый вариант ответа!',
                  },
                ]}
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
                  Продолжить
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      )}
    </div>
  )
}
