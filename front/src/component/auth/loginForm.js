import { useState } from "react";

import Api from "../../api";

const LoginForm = ({ setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = async (evt) => {
    evt.preventDefault();
  };
};

export default LoginForm;
