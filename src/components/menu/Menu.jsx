import React from "react";
import { Button } from "react-bootstrap";

function Menu() {
  return (
    <div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
    >
      <Button>Play</Button>
      <Button>Settings</Button>
      <Button>Statistic</Button>
      <Button>Reiting</Button>
      <Button>Login/Logout</Button>
    </div>
  );
}

export default Menu;
