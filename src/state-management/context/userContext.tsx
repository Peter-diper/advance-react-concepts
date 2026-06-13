import React, { Dispatch } from "react";
import { LoginAction } from "../reducers/loginStatusReducer";

interface UserContextType {
  user: string;
  dispatch: Dispatch<LoginAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
