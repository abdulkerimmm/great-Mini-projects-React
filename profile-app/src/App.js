import { useState } from "react";
import "./App.css";
import { persons } from "./components/data";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";

function App() {
  const [array, setArray] = useState(persons);
  const [f, setF] = useState(persons);
  const handlerName = (incomingText) => {
    const arr = [];
    array.map((item) => {
      if (
        item.name.toLocaleLowerCase().includes(incomingText.toLocaleLowerCase())
      ) {
        arr.push(item);
      }
      setArray(arr);
    });

    if (incomingText === "") {
      return setArray(f);
    }
  };

  const DeleteUser = (T) => {
    const d = array.filter((item) => item.id !== T);
    setF(d);
    setArray(d);
  };

  return (
    <div className="App">
      <h1 className="header">Profile App</h1>
      <SearchBar handlerName={handlerName} />
      <Main array={array} DeleteUser={DeleteUser} />
    </div>
  );
}

export default App;
