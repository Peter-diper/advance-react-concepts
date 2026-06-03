import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const { mutate: todoMutate, isLoading } = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

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
