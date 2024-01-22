import React, { useState } from "react";

const SearchBar = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const SearchHandler = (event) => {
    props.handlerName(event.target.value);
  };
  return (
    <div>
      <input
        onChange={SearchHandler}
        // value={currentValue}
        placeholder="Enter Search term..."
      ></input>
    </div>
  );
};

export default SearchBar;
