import React, { createContext } from "react";

export const contexto = createContext();

export default function ContexDemo({ children }) {
  return (
    <>
      <contexto.Provider value={{}}>{children}</contexto.Provider>
    </>
  );
}
