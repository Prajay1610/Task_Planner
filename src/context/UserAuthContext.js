import React, { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John",
    email: "john@gmail.com",
    city: "Pune",
  });

  //   const newu = setUser({ name: "Prajay" });
  return (
    <UserAuthContext.Provider value={user}>{children}</UserAuthContext.Provider>
  );
};
