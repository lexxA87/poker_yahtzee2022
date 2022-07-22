import React from "react";
import ModalAuth from "./ModalAuth";
import LoginForm from "../forms/LoginForm";

function LoginPage() {
  console.log("login");

  return (
    <ModalAuth url="/registration" link="Registration" title="Login">
      <LoginForm />
    </ModalAuth>
  );
}

export default LoginPage;
