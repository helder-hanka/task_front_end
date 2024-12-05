import React from "react";
import { Form } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./Login.scss";

const Login = () => {
  return (
    <Form method="post" id="login-form">
      <Input placeholder="E-mail" type="email" name="email" title="Email" />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        title="Password"
      />
      <Button />
    </Form>
  );
};

export default Login;
