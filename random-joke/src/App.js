import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const url = "http://api.icndb.com/jokes/random";

  const [test, setTest] = useState("ad");
  const [testTwo, setTestTwo] = useState("ad2");
  const [isActive, setIsActive] = useState(false);

  const generateJoke = async () => {
    setIsActive(true);
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const a = await response.json();
    setTest(a.setup);
    setTestTwo(a.punchline);
    setIsActive(false);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     generateJoke();
  //   }, 90000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      generateJoke();
    }, 9999000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Random Joke Generator</h2>
        <h1>{"\u{1F60A}"}</h1>
        <hr style={{ color: "black" }} />

        {isActive ? (
          <p>Loading...</p>
        ) : (
          <p>
            {test},{testTwo}
          </p>
        )}

        <button className="buton" onClick={generateJoke}>
          Generate new joke
        </button>
      </div>
    </div>
  );
}

export default App;
