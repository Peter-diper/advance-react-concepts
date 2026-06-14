import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

export interface Task {
  id: number;
  title: string;
}

function taskResucer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD": {
      return [action.task, ...tasks];
    }
    case "DELETE": {
      return [...tasks].filter((t) => t.id !== action.taskId);
    }
  }
}

taskResucer;

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskResucer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
