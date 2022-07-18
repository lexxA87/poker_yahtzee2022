import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function MenuButtons() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("game")}>Play</Button>
      <Button onClick={() => navigate("settings")}>Settings</Button>
      <Button onClick={() => navigate("statistics")}>Statistics</Button>
      <Button onClick={() => navigate("rating")}>Rating</Button>
      <Button>Login/Logout</Button>
    </>
  );
}

export default MenuButtons;
