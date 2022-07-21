import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function MenuButtons() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Button onClick={() => navigate("game")} disabled={!isAuth}>
        Play
      </Button>
      <Button onClick={() => navigate("settings")}>Settings</Button>
      <Button onClick={() => navigate("statistics")} disabled={!isAuth}>
        Statistics
      </Button>
      <Button onClick={() => navigate("rating")}>Rating</Button>
      <Button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Logout" : "Login"}
      </Button>
    </>
  );
}

export default MenuButtons;
