import { useContext } from "react";
import UserContext from "./context/userContext";
import { useTasks } from "./hooks/useTasks";

const TaskList = () => {
  const { dispatch: taskDispatch, tasks } = useTasks();
  const { user } = useContext(UserContext);

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          taskDispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        disabled={!user}
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
