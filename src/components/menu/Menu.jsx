import React from "react";
import MenuButtons from "./MenuButtons";

function Menu() {
  return (
    <div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
    >
      <MenuButtons />
    </div>
  );
}

export default Menu;
