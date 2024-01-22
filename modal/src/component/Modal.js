import React from "react";

const Modal = (props) => {
  return (
    <>
      {props.isActive && (
        <div onClick={(e) => e.stopPropagation()} className="waringBox">
          <button className="cancelButon" onClick={props.handlerModal}>
            X
          </button>
          <div className="headerr">
            <h4 className="waricon">!</h4>{" "}
            <h4 style={{ marginLeft: "10px" }}> Do you want to continue?</h4>
          </div>

          <p>
            In this example, the container element has display: flex;,
            align-items: center;, and justify-content: center; properties which
            center the .box element both vertically and horizontally. The
          </p>
          <div className="buttons">
            <button onClick={props.handlerModal}>Cancel</button>
            <button className="approvbuton">Approv</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
