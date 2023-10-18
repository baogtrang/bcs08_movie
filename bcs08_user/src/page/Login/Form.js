// export default nên không sợ khác tên vs component
// copied from: https://ant.design/components/form
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { BASE_URL, configHeaders } from '../../api/config';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { SET_INFO } from '../../redux/constant/user';
import { useNavigate } from 'react-router-dom';
import { userLocalStorage } from '../../api/localService';
import { loginAction } from '../../redux/action/user';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// đổi tên từ Form thành FormLogin
// để không trùng với form của ant design
const FormLogin = () => {
  let navigate = useNavigate()

  // useDispatch is a hook from react-redux
  // that allows you to dispatch actions to the redux store
  let dispatch = useDispatch();

  // onFinish is an event handler for the form's "onFinish" event
  // gets triggerd when the form is sucessfully submitted
  const onFinish = (values) => {
    dispatch(loginAction(values));
  };

  return <Form
    className='w-1/2'
    // added
    layout="vertical"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 20,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 20,
      }}
    >
      <Button type="primary" className='bg-orange-600' htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form>;
};
export default FormLogin;