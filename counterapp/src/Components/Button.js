import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={props.decrease}
      >
        -subtract
      </button>
      <button onClick={props.reset}>reset</button>
      <button
        style={{ backgroundColor: "#00ff00", color: "white" }}
        onClick={props.increase}
      >
        +Add
      </button>
    </div>
  );
};

export default Button;
