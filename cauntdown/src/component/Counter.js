import React, { useEffect, useState } from "react";
import "./Counter.css";
const Counter = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const CalculateTime = () => {
    let interval = setInterval(() => {
      const a = new Date();
      const b = new Date("May 3,2023");
      const totalSecond = (b - a) / 1000;

      const day = Math.floor(totalSecond / 3600 / 24);
      const hour = Math.floor(totalSecond / 3600) % 24;
      const minute = Math.floor(totalSecond / 60) % 60;
      const second = Math.floor(totalSecond) % 60;

      if (totalSecond < 1) {
        props.finisedhSale();
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    }, 1000);
  };
  useEffect(() => {
    CalculateTime();
  });

  return (
    <div className="CounterMain">
      <div>
        <h3>{days}</h3>
        <p>Days</p>
      </div>
      <div>
        <h3>{hours}</h3>
        <p>hours</p>
      </div>
      <div>
        <h3>{minutes}</h3>
        <p>Minutes</p>
      </div>
      <div>
        <h3>{seconds}</h3>
        <p>Second</p>
      </div>
    </div>
  );
};

export default Counter;
