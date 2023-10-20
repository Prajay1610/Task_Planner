import React, { createContext, useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const ComponentC = () => {
  const user = useContext(UserAuthContext);

  return (
    <div>
      <h1>From Component C</h1>
      <h1>City:{user.city}</h1>
    </div>
  );
};

export default ComponentC;
