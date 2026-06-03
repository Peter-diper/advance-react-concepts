import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_TODO_KEY } from "../constant";
import { Todo } from "./useTodos";
import { APIClient } from "../services/apiClient";

interface TodoContext {
  previousTodos: Todo[];
}

const apiClient = new APIClient<Todo>("/todos");

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: apiClient.post,

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: QUERY_TODO_KEY });
      const previousTodos =
        queryClient.getQueryData<Todo[]>(QUERY_TODO_KEY) || [];
      queryClient.setQueryData<Todo[]>(QUERY_TODO_KEY, (oldTodos = []) => [
        newTodo,
        ...oldTodos,
      ]);

      onAdd();
      return {
        previousTodos,
      };
    },
    onSuccess: (todoData, newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_TODO_KEY, (oldTodo) =>
        oldTodo?.map((todo) => (todo === newTodo ? todoData : todo)),
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(QUERY_TODO_KEY, context.previousTodos);
    },
  });
};

export default useAddTodo;
