import React, { Dispatch } from "react";
import { Task, AuthAction } from "../reducers/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<AuthAction>;
}

//  ?? what is this? why as fix the problem
const TaskContext = React.createContext<TasksContextType>(
  {} as TasksContextType,
);

export default TaskContext;
