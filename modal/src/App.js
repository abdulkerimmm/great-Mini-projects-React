import { useState } from "react";
import "./App.css";

import Main from "./component/Main";
import Modal from "./component/Modal";

function App() {
  const [isActive, setIsActive] = useState(true);
  const handlerModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={handlerModal} className={isActive ? "App2" : "App"}>
      <Modal isActive={isActive} handlerModal={handlerModal} />
      <Main isActive={isActive} handlerModal={handlerModal} />
    </div>
  );
}

export default App;
