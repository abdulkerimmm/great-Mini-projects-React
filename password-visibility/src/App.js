import { useState } from "react";
import "./App.css";

function App() {
  const [value1, setValu1] = useState("");
  const [value2, setValue2] = useState(value1.length);
  const [isActive, setIsActive] = useState(true);

  const handler = (event) => {
    console.log(event.target.value);
    setValu1(event.target.value);
  };

  const handlerEye = () => [setIsActive(!isActive)];

  return (
    <div className="App">
      <div className="main">
        <h1>Login</h1>
        <form>
          <input placeholder="Username" />

          <div className="passw">
            <input
              style={{ width: "95%", position: "relative" }}
              value={value1}
              type={isActive ? "password" : "text"}
              onChange={handler}
              placeholder="password"
            />
            <span
              id="toggle-icon"
              onClick={handlerEye}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                bottom: "10px",
              }}
            >
              {isActive ? "🔓" : "👁️"}
            </span>
          </div>

          <button
            style={{ backgroundColor: "blue", color: "white" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
