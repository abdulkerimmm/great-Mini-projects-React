import React from "react";
import "./smallBar.css";
const SmallBar = (props) => {
  return (
    <>
      <ul className={props.SmallBar ? "newUl" : ""}>
        <li onClick={props.showSmallBarHandler}> {"<-"} Back to Main</li>
        <li>Profile Setting</li>
        <li>Acount Setting</li>
        <li>User setting</li>
      </ul>
    </>
  );
};

export default SmallBar;
