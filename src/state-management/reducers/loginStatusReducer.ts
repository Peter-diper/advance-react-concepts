interface UserLogIn {
  type: "LOGIN";
  userName: string;
}
interface UserLogOut {
  type: "LOGOUT";
}

export type LoginAction = UserLogIn | UserLogOut;

export default function loginStatusReducer(
  user: string,
  action: LoginAction,
): string {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";
  return user;
}
