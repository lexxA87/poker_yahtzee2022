import React from "react";
import ModalAuth from "./ModalAuth";
import RegistrationForm from "../forms/RegistrationForm";

function RegistrationPage() {
  return (
    <ModalAuth url="/login" link="Login" title="Registration">
      <RegistrationForm />
    </ModalAuth>
  );
}

export default RegistrationPage;
