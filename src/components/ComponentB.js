import React, { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const ComponentB = () => {
  const user = useContext(UserAuthContext);

  return (
    <div>
      <h1>From component B</h1>
      <h1>Email:{user.email}</h1>
    </div>
  );
};

export default ComponentB;
