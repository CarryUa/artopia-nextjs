"use client";
import { createContext, useState, useContext } from "react";

const [layoutStat, setStat] = useState(true);
export let LayoutStatusContext = createContext({
  layoutStat: true,
  changeStat: () => {
    setStat(true);
  },
});
export function setLayoutStat(state = true) {}
export function LayoutStatusProvider({ children }) {
  function changeStat(value = true) {
    setStat(value);
  }
  return (
    <LayoutStatusContext.Provider value={{ layoutStat, changeStat }}>
      {children}
    </LayoutStatusContext.Provider>
  );
}

export function useStateContext() {
  return useContext(LayoutStatusContext);
}
