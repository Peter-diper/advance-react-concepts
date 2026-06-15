import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivetRoutes() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
