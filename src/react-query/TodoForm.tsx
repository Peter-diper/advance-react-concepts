import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";
import { Todo } from "./services/httpServices";

interface TodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (ref.current) ref.current.value = "";
  };

  const { mutate: todoMutate } = useAddTodo(clearInput);

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) {
          todoMutate({
            id: 0,
            title: ref.current.value,
            completed: false,
            userId: Date.now(),
          });
        }
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
