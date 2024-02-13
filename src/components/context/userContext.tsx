// "use client";
// import { createContext, useContext, useState } from "react";
// export const UserContext = createContext({
//   users: [],
//   changeUser: () => {},
// });
// export function UserContextProvider({ children }) {
//   const [users, setUser] = useState();
//   function changeUser(
//     value = {
//       name: "",
//       secondName: "",
//       id: Number(),
//       phoneNumber: Number(),
//     },
//     id
//   ) {
//     setUser(([id] = value));
//   }
//      return (
//        <UserContext.Provider value={{ users, changeUser }}>
//          {children}
//        </UserContext.Provider>
//      );
// }
// export function useUserContext() {
//   return useContext(UserContext);
// }
