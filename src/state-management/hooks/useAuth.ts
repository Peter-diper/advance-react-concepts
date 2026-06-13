import { useContext } from "react";
import UserContext from "../context/userContext";

export const useAuth = () => useContext(UserContext);
