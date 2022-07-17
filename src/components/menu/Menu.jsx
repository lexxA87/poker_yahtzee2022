import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Menu() {
  const navigate = useNavigate();

  return (
    <div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
    >
      <Button onClick={() => navigate("game")}>Play</Button>
      <Button onClick={() => navigate("settings")}>Settings</Button>
      <Button onClick={() => navigate("statistics")}>Statistics</Button>
      <Button onClick={() => navigate("rating")}>Rating</Button>
      <Button>Login/Logout</Button>
    </div>
  );
}

export default Menu;
