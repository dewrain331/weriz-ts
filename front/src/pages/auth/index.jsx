import { useState } from "react";

import ModalComp from "../../components/modal";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const AuthModal = ({ show, setShow }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <ModalComp
      show={show}
      setShow={setShow}
      title="SIGN IN"
      main={
        isLoginForm ? (
          <LoginForm setShow={setShow} />
        ) : (
          <RegisterForm setShow={setShow} />
        )
      }
      children={
        isLoginForm ? (
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              setIsLoginForm(false);
            }}
          >
            아직 회원이 아니십니까?
          </a>
        ) : (
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              setIsLoginForm(true);
            }}
          >
            이미 회원이십니까?
          </a>
        )
      }
    />
  );
};

export default AuthModal;
