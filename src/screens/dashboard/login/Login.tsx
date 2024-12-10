import React, { useState, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import "./Login.scss";

const Login = () => {
  const error: any = useActionData();

  return (
    <>
      {error?.response?.data?.message && (
        <span className="error">
          {error.response.data.message} with status: {error?.status}
        </span>
      )}
      <Form method="post" id="login-form">
        <Input placeholder="E-mail" type="email" name="email" title="Email" />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          title="Password"
        />
        <Button _name="intent" value="login" />
      </Form>
    </>
  );
};

export default Login;
