import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders, https } from "../../api/config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/userSlice";
import { userLocalStorage } from "../../api/localService";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormLogin = () => {
  // Redux useDispatch hook to get the dispatch function
  let dispatch = useDispatch();
  // React Router useNavigate hook to get the navigate function.
  let navigate = useNavigate();

  const onFinish = (values) => {
    // makes an API request to log in
    https
      //Make a POST request to the /QuanLyNguoiDung/DangNhap endpoint and 
      //send the values (form data) as the request body. 
      .post("/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        dispatch(setLogin(res.data.content));
        userLocalStorage.set(res.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form
      className="w-1/2"
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
            message: "Please input your username!",
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
            message: "Please input your password!",
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
        <Button type="primary" className="bg-orange-600" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
