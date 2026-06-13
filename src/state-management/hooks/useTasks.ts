import { useContext } from "react";
import TaskContext from "../context/taskContext";

export const useTasks = () => useContext(TaskContext);
