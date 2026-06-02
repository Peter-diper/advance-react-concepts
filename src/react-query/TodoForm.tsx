import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);
  const { mutate: todoMutate } = useMutation({
    mutationFn: (data: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", data)
        .then((res) => res.data),
    onSuccess: (todoData, newTodo) => {
      // queryClient.invalidateQueries({ queryKey: ["todos"] });

      // upadate catch!!
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos) => [
        todoData,
        ...(oldTodos || []),
      ]);
    },
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
