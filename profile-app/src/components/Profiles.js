import React from "react";
import "./Profile.css";
import { FaTrashAlt } from "react-icons/fa";

const Profiles = (props) => {
  const deleteHanler = (id) => {
    props.handleRemove(id);
  };
  return (
    <div className="mainProfile">
      <img src={props.image} />

      <div className="texts">
        <p>
          <span style={{ fontWeight: "bolder" }}>Name: </span>
          {props.name}
        </p>
        <p>
          <span>Jop: </span>
          {props.jop}
        </p>
      </div>
      <div>
        <FaTrashAlt
          size={18}
          className="icon"
          onClick={() => deleteHanler(props.id)}
        />
      </div>
    </div>
  );
};

export default Profiles;
