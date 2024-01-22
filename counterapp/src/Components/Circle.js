import React, { useState } from "react";
import "./Circle.css";

const Circle = (props) => {
  var stateCase;
  switch (props.number) {
    case 0:
      stateCase = "zero";
      break;
    default:
      if (props.number > 0) {
        stateCase = "pozitive";
      } else {
        stateCase = "negative";
      }
  }

  console.log(stateCase);
  var currentColor1 = false;
  if (props.number > 0) {
    currentColor1 = true;
  } else if (props.number < 0) {
    currentColor1 = false;
  }

  return (
    <div className="circle">
      {stateCase === "zero" && <p className="status1">{props.number}</p>}
      {stateCase === "pozitive" && <p className="status2">{props.number}</p>}
      {stateCase === "negative" && <p className="status3">{props.number}</p>}
    </div>
  );
};

export default Circle;
