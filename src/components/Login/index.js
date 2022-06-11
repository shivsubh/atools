import React, { useState } from "react";
import { Layout, Space } from "antd";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import axios from "axios";

import "./index.css";
import { async } from "jshint/src/prod-params";

const { Content } = Layout;

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit({ email, password, remember }) {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const { data } = response;
      setSuccess(`Login Successfull: ${JSON.stringify(data)}`);
    } catch (err) {
      const { data } = err.response;
      const { error } = data;
      setError(error);
    }
  }

  return (
    <Content>
      <div className="form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <h2 className="title">Welcome Back</h2>
          <p className="sub-title">Sub-title text goes here.</p>
          {success && (
            <Form.Item>
              <Alert message={success} type="success" />
            </Form.Item>
          )}
          {error && (
            <Form.Item>
              <Alert message={error} type="error" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email Address!",
              },
            ]}
          >
            <Input placeholder="Email Address*" type="email" name="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input type="password" placeholder="Password*" name="password" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ fontWeight: "bold" }}>
                  Remember Password
                </Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/">
                Forgot password?
              </a>
            </Space>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="bg" />
    </Content>
  );
};

export default Login;
