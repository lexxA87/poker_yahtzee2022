import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import SettingsForm from "../forms/SettingsForm";

function SettingsPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="fw-bold text-light">Settings</h2>
      <SettingsForm />
      <Button onClick={() => navigate("/")}>Main menu</Button>
    </motion.div>
  );
}

export default SettingsPage;
