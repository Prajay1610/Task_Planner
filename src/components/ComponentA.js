import React, { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const ComponentA = () => {
  const user = useContext(UserAuthContext);
  console.log(user);
  return (
    <div>
      <h1>From ComponentA</h1>

      <h2>Name:{user.name}</h2>
    </div>
  );
};

export default ComponentA;
