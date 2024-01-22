import React, { useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineRocket, AiOutlineBars } from "react-icons/ai";
import SmallBar from "./SmallBar";

//custom hooks
const useHeaderState = () => {
  const [drop, setDrop] = useState(false);
  const [buttonn, setbuttonn] = useState(true);
  const [smallDrop, setSmallDrop] = useState(false);
  return {
    drop,
    buttonn,
    smallDrop,
    setDrop,
    setbuttonn,
    setSmallDrop,
  };
};

const Header = (props) => {
  const { drop, buttonn, smallDrop, setDrop, setbuttonn, setSmallDrop } =
    useHeaderState();

  const showSmallBarHandler = () => {
    setSmallDrop(!smallDrop);
  };
  const handlerWindows = () => {
    if (window.innerWidth < 650) {
      setDrop(true);
    } else {
      setDrop(false);
    }
    if (window.innerWidth < 750) {
      setbuttonn(false);
    } else {
      setbuttonn(true);
    }
  };

  useEffect(() => {
    handlerWindows();
    window.addEventListener("resize", handlerWindows);
    return () => {
      window.removeEventListener("resize", handlerWindows);
    };
  }, []);

  console.log("drop", drop);
  console.log("buttonn", buttonn);
  return (
    <div className="header">
      <div className="header2">
        <div className="lucy">
          <h1>
            <AiOutlineRocket color="white" size={"35px"}></AiOutlineRocket>
            Lucy.<span style={{ color: "orangered" }}>com</span>
          </h1>
        </div>

        {!drop && (
          <div className="items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className="mainul">
                <a onClick={showSmallBarHandler} href="#">
                  Setting {"->"}
                </a>
                {smallDrop && (
                  <SmallBar
                    showSmallBarHandler={showSmallBarHandler}
                    SmallBar={smallDrop}
                  ></SmallBar>
                )}
              </li>
            </ul>
            {buttonn && <button className="butonn">Get Started</button>}
          </div>
        )}
      </div>
      {drop && (
        <div className="box" onClick={props.showMenuHandler}>
          {props.showMenu ? (
            <h1 style={{ color: "white" }}>X</h1>
          ) : (
            <AiOutlineBars color="white" size={"38px"}></AiOutlineBars>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
