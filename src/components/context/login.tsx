"use client";
import { useContext, useState, createContext, ReactNode } from "react";
type AuthContextType = {
  isLoggedIn: boolean;
  changeIsLoggedIn: () => void;
};
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  changeIsLoggedIn: () => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function changeIsLoggedIn() {
    setIsLoggedIn((prev) => !prev);
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, changeIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
