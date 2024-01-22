import React from "react";
import Questions from "./Questions";

const Main = (props) => {
  console.log(props.array);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Question about React</h1>
      {props.array.map((question) => {
        return (
          <Questions
            id={question.id}
            title={question.title}
            answer={question.answer}
          />
        );
      })}
    </div>
  );
};

export default Main;
