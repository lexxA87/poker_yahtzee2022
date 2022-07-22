import React from "react";
import ModalAuth from "./ModalAuth";
import RegistrationForm from "../forms/RegistrationForm";

function RegistrationPage() {
  console.log("reg");

  return (
    <ModalAuth url="/login" link="Login" title="Registration">
      <RegistrationForm />
    </ModalAuth>
  );
}

export default RegistrationPage;
