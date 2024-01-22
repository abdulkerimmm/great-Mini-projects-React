import React from "react";
import me from "../images/me1.jpg";

const Main = (props) => {
  return (
    <div className={props.isActive ? "container2" : "container"}>
      <img src={me} />
      <h1 style={{ color: "white" }}>Let's Create a Modal</h1>
      <p style={{ color: "white" }}>click button below</p>
      <button onClick={props.handlerModal}>OPEN MODEL</button>
    </div>
  );
};

export default Main;
