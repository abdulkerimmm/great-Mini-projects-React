import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DropMenu from "./components/DropMenu";
import DropMenu2 from "./components/DropMenu2";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [setting, setSetting] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const showMenuHandlerSetting = () => {
    setSetting(!setting);
  };

  console.log("showMenu", showMenu);

  return (
    <div className="App">
      <Header showMenuHandler={showMenuHandler} showMenu={showMenu} />

      {showMenu && (
        <DropMenu
          showMenuHandler={showMenuHandler}
          showMenuHandlerSetting={showMenuHandlerSetting}
        />
      )}
      {setting && (
        <DropMenu2 showMenuHandlerSetting={showMenuHandlerSetting}></DropMenu2>
      )}

      <h1 className="bodyheader">welcome</h1>
    </div>
  );
}

export default App;
