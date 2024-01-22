import React, { useState } from "react";
import "./Main.css";
import Circle from "./Circle";
import Button from "./Button";

const Main = (props) => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber((prev) => prev + 1);
  };
  const decrease = () => {
    setNumber((prev) => prev - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  return (
    <div className="middle">
      <div className="box1">
        <h1>react Counter App</h1>
        <Circle number={number} />
        <Button increase={increase} decrease={decrease} reset={reset} />
      </div>
    </div>
  );
};

export default Main;
