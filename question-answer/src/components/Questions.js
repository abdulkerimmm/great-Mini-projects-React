import React, { useState } from "react";
import "./Question.css";

const Questions = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handler = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="main-box">
      <div className="box1">
        <h3>{props.title}</h3>
        <button
          style={isActive ? { color: "red" } : { color: "blue" }}
          onClick={handler}
        >
          {" "}
          {isActive ? "-" : "+"}
        </button>
      </div>
      {isActive && <p>{props.answer}</p>}
    </div>
  );
};

export default Questions;
