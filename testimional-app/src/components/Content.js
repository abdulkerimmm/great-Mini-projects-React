import React from "react";
import "./content.css";

const Content = (props) => {
  return (
    <div>
      <p className="text">{props.text}</p>
      <hr></hr>
      <img className="photo" src={props.image} />
      <h3>{props.name}</h3>
      <p className="jop">{props.jop}</p>
    </div>
  );
};

export default Content;
