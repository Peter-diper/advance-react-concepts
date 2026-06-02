import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";

interface TodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);
  const { mutate: todoMutate } = useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (data: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", data)
        .then((res) => res.data),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos) => [
        newTodo,
        ...(oldTodos || []),
      ]);

      return {
        previousTodos,
      };
    },
    onSuccess: (todoData, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodo) =>
        oldTodo?.map((todo) => (todo === newTodo ? todoData : todo)),
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  // on mutate is used to do optimistic update, it will be called before the mutation function is called, and it will be called with the same variables that are passed to the mutation function
  // on mutate can return a context object that will be passed to the on error and on success functions, this is useful for rolling back the optimistic update in case of an error

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
