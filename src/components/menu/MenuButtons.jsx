import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserStore } from "../../data/stores/useCurrentUserStore";
import { Button } from "react-bootstrap";

function MenuButtons() {
  const navigate = useNavigate();
  const isAuth = useCurrentUserStore((state) => state.isAuth);
  const setIsAuth = useCurrentUserStore((state) => state.setIsAuth);
  const currentUser = useCurrentUserStore((state) => state.currentUser);

  const clickRefLoginButton = () => {
    if (isAuth) {
      setIsAuth(false);
    } else {
      navigate("login");
    }
  };

  return (
    <>
      <h2 style={{ color: "white" }}>
        Hey, {isAuth ? currentUser.name : "stranger"}!
      </h2>
      <Button onClick={() => navigate("game")} disabled={!isAuth}>
        Play
      </Button>
      <Button onClick={() => navigate("settings")}>Settings</Button>
      <Button onClick={() => navigate("statistics")} disabled={!isAuth}>
        Statistics
      </Button>
      <Button onClick={() => navigate("rating")}>Rating</Button>
      <Button onClick={() => clickRefLoginButton()}>
        {isAuth ? "Logout" : "Login"}
      </Button>
    </>
  );
}

export default MenuButtons;
