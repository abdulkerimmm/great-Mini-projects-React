import React, { useState } from "react";
import "./mainBox.css";
import { data } from "./data";
import Content from "./Content";
import icon from "../images/icon.png";

const MainBox = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [persons, setPersons] = useState(data);

  const nextPerson = () => {
    if (currentPerson === persons.length - 1) {
      setCurrentPerson(0);
    } else {
      setCurrentPerson((prev) => prev + 1);
    }
  };
  const pervPerson = () => {
    if (currentPerson === 0) {
      setCurrentPerson(persons.length - 1);
    } else {
      setCurrentPerson((prev) => prev - 1);
    }
  };
  console.log(persons.length - 1);
  return (
    <div className="mainBox">
      <img className="icon" src={icon} />
      <Content
        key={persons[currentPerson].key}
        name={persons[currentPerson].name}
        text={persons[currentPerson].text}
        image={persons[currentPerson].image}
        jop={persons[currentPerson].jop}
      />
      <div class="button-container">
        <button onClick={pervPerson} class="button1">
          &larr;
        </button>
        <button onClick={nextPerson} class="button2">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default MainBox;
