import { useState } from "react";
import { Form } from "react-bootstrap";

import Api from "../../api";
import Button from "../button";

const LoginForm = ({ setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = async (evt) => {
    evt.preventDefault();
  };

  return (
    <Form onSubmit={submitLoginForm}>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="type email"
        autoComplete="off"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <br />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="type password"
        autoComplete="off"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button type="submit">Sign In</Button>
    </Form>
  );
};

export default LoginForm;
