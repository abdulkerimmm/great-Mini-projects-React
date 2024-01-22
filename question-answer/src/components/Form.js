import React, { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [answer, setAnswer] = useState("");

  const handlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlerAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const handlerArray = (event) => {
    event.preventDefault();
    props.updateArray(title, answer);
    setTitle("");
    setAnswer("");
  };

  return (
    <div>
      <form
        onSubmit={handlerArray}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <label>your question:</label>
        <input
          style={{
            marginLeft: "10px",
            marginRight: "30px",
            fontWeight: "bolder",
          }}
          onChange={handlerTitle}
          value={title}
          type="text"
        />
        <label>answer:</label>
        <input
          style={{
            marginLeft: "10px",
            marginRight: "30px",
            fontWeight: "bolder",
          }}
          onChange={handlerAnswer}
          value={answer}
          type="text"
        />
        <button style={{ backgroundColor: "orangered" }}>add questions</button>
      </form>
    </div>
  );
};

export default Form;
