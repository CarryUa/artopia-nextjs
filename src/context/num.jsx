"use client";
const { createContext, useState, useContext } = require("react");

export const NumContext = createContext({ num: 0, changeNum: () => {} });

export function NumProvider({ children }) {
  const [num, setNum] = useState(0);
  function changeNum(number) {
    setNum(number);
  }
  return (
    <NumContext.Provider value={{ num, changeNum }}>
      {children}
    </NumContext.Provider>
  );
}

export function useNumContext() {
  return useContext(NumContext);
}
