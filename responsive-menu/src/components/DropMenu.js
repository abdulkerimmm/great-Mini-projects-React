import React from "react";
import "./DropMenu.css";

const DropMenu = (props) => {
  return (
    <div className="dropMenu">
      <h3 onClick={props.showMenuHandler}>Home</h3>
      <hr></hr>
      <h3 onClick={props.showMenuHandler}>Feature</h3>
      <hr></hr>
      <h3 onClick={props.showMenuHandler}>Download</h3>
      <hr></hr>
      <h3 onClick={props.showMenuHandlerSetting}>Setting {"->"}</h3>
      <hr className="lasthr"></hr>
      <button onClick={props.showMenuHandler} className="butonn">
        Get Started
      </button>
    </div>
  );
};

export default DropMenu;
