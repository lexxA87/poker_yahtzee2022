import React from "react";
import "./StartPageAnimation.css";

function StartPageAnimation(props) {
  return (
    <div className="text-center">
      <div className="animated">{props.children}</div>
    </div>
  );
}

export default StartPageAnimation;
