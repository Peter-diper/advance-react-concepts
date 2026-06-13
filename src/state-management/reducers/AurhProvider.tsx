import { ReactNode, useReducer } from "react";
import loginStatusReducer from "./loginStatusReducer";
import UserContext from "../context/userContext";
interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
