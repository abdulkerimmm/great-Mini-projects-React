import { useState } from "react";
import "./App.css";
import BigDiv from "./components/BigDiv";

function App() {
  const texts = [
    "Hello this is the first line",
    "welcome to the second line",
    "and you know this was the last part",
  ];
  const [currentText, setCurrentText] = useState(texts[0]);

  const handler1 = () => {
    setCurrentText(texts[0]);
  };

  const handler2 = () => {
    setCurrentText(texts[1]);
  };

  const handler3 = () => {
    setCurrentText(texts[2]);
  };

  return (
    <div className="App">
      <div className="mainDiv">
        <h2>More About As</h2>
        <p>clicks tab buttons to learn</p>
        <BigDiv
          handler1={handler1}
          handler2={handler2}
          handler3={handler3}
          currentText={currentText}
          texts={texts}
        />
      </div>
    </div>
  );
}

export default App;
