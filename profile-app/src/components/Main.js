import React, { useEffect, useState } from "react";
import Profiles from "./Profiles";
import "./Main.css";

const Main = (props) => {
  const handleRemove = (b) => {
    props.DeleteUser(b);
  };

  return (
    <div className="Main">
      {props.array.map((profile) => {
        return (
          <Profiles
            handleRemove={handleRemove}
            key={profile.id}
            id={profile.id}
            name={profile.name}
            image={profile.image}
            jop={profile.jop}
          />
        );
      })}
    </div>
  );
};

export default Main;
