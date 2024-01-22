import React from "react";
import "./bigDiv.css";

const BigDiv = (props) => {
  return (
    <div className="bigDiv">
      <div className="tabs">
        <button
          style={{
            backgroundColor:
              props.currentText === props.texts[0] ? "red" : "gray",
          }}
          onClick={props.handler1}
        >
          Who we are
        </button>
        <button
          style={{
            backgroundColor:
              props.currentText === props.texts[1] ? "red" : "gray",
          }}
          onClick={props.handler2}
        >
          What we do
        </button>
        <button
          style={{
            backgroundColor:
              props.currentText === props.texts[2] ? "red" : "gray",
          }}
          onClick={props.handler3}
        >
          Get in Touch
        </button>
      </div>
      <div className="text">
        <h4>{props.currentText === props.texts[0] && "Who are you"}</h4>
        <h4>{props.currentText === props.texts[1] && "  What we do"}</h4>
        <h4>{props.currentText === props.texts[2] && "Get in Touch"}</h4>
        <p>{props.currentText}</p>
      </div>
    </div>
  );
};

export default BigDiv;
