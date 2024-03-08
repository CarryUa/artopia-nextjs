"use client";
import { useContext, useState, createContext, ReactNode } from "react";

const LoginContext = createContext({
  state: false,
  changeState: (value: boolean) => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setLoginState] = useState(false);
  function changeState(newState: boolean) {
    setLoginState(newState);
  }
  return (
    <LoginContext.Provider value={{ state, changeState }}>
      {children}
    </LoginContext.Provider>
  );
}
export function useLoginContext() {
  return useContext(LoginContext);
}
