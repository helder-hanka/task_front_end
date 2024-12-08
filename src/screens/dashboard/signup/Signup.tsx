import React from "react";
import { Form } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Signup = () => {
  return (
    <Form method="post" id="login-form">
      <Input placeholder="E-mail" type="email" name="email" />
      <Input placeholder="Password" type="text" name="password" />
      <Input placeholder="Confirm your password" type="text" name="password" />
      <Button />
    </Form>
  );
};

export default Signup;
