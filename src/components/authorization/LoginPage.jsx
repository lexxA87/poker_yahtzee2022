import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Alert } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

function LoginPage() {
  const redirect = useNavigate();

  const handleClose = () => {
    redirect("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal onHide={handleClose} show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body bg="dark" variant="dark">
          <LoginForm />
          <Alert variant="light">
            or go to
            <Alert.Link onClick={() => redirect("/registration")}>
              registration
            </Alert.Link>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
}

export default LoginPage;
