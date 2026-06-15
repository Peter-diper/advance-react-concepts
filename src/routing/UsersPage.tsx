import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

export default function UsersPage() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <UserList />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
