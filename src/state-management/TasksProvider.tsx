import React, { ReactNode, useReducer } from "react";
import taskResucer from "./reducers/tasksReducer";
import TaskContext from "./context/taskContext";

interface Props {
  children: ReactNode;
}

export const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskResucer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
