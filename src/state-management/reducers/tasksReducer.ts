interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type AuthAction = AddTask | DeleteTask;

export interface Task {
  id: number;
  title: string;
}

function taskResucer(tasks: Task[], action: AuthAction): Task[] {
  switch (action.type) {
    case "ADD": {
      return [action.task, ...tasks];
    }
    case "DELETE": {
      return [...tasks].filter((t) => t.id !== action.taskId);
    }
  }
}

export default taskResucer;
