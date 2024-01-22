import React from "react";
import "./dropDown2.css";

const DropMenu2 = (props) => {
  return (
    <div className="dropMenu3">
      <h3 onClick={props.showMenuHandlerSetting}>{"<-"} Back To Menu</h3>
      <hr className="hrrr"></hr>
      <h3>Profile Setting</h3>
      <hr className="hrrr"></hr>
      <h3>Account Setting</h3>
      <hr className="hrrr"></hr>
      <h3>User Setting </h3>
      <hr className="lasthr"></hr>
      <button className="butonn">Get Started</button>
    </div>
  );
};

export default DropMenu2;
