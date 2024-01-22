import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Main from "./components/Main";
import { questions } from "./components/data";

function App() {
  const [array, setArray] = useState(questions);

  const updateArray = (a, b) => {
    console.log("aaaaaaaaaaaaaaaaaaaaa", a, b);
    setArray((prev) => {
      return [...prev, { id: 4, title: a, answer: b }];
    });
  };

  return (
    <div className="App">
      <div className="App2">
        <Form updateArray={updateArray} />
      </div>
      <br></br>
      <div style={{ marginTop: "200px" }}>
        <Main array={array} />
      </div>
    </div>
  );
}

export default App;
