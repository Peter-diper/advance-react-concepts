import { useReducer, useState } from "react";
import loginStatusReducer from "./reducers/loginStatusReducer";

const LoginStatus = () => {
  const [user, userDispatch] = useReducer(loginStatusReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => userDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          userDispatch({ type: "LOGIN", userName: "mosh.hamedani" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
