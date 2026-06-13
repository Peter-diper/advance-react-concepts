import { useReducer } from "react";
import taskResucer from "./reducers/tasksReducer";

const TaskList = () => {
  const [tasks, taskDispatch] = useReducer(taskResucer, []);

  return (
    <>
      <button
        onClick={() =>
          taskDispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => taskDispatch({ taskId: task.id, type: "DELETE" })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
