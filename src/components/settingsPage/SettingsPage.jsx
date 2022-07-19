import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import SettingsForm from "../forms/SettingsForm";

function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
    >
      <h2 className="fw-bold text-light">Settings</h2>
      <SettingsForm />
      <Button onClick={() => navigate("/")}>Main menu</Button>
    </div>
  );
}

export default SettingsPage;
