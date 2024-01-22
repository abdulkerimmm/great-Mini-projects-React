import React, { useState } from "react";
import "./Header.css";
import ZuluShop from "./ZuluShop";
import Counter from "./Counter";

const Header = () => {
  const [saleActive, setSaleActive] = useState(true);
  const [b, setB] = useState(false);

  const handlerXbutton = () => {
    console.log("worked");
    setSaleActive(false);
  };

  const finisedhSale = () => {
    setB(true);
  };

  return (
    <div>
      {saleActive && (
        <div className="Mainheaders">
          <h1 className="hone"> {b ? "Sale finished" : "Ramadan Sale!"}</h1>
          <Counter finisedhSale={finisedhSale} />
          <button onClick={handlerXbutton} className="buton1">
            X
          </button>
        </div>
      )}
      <ZuluShop />
    </div>
  );
};

export default Header;
