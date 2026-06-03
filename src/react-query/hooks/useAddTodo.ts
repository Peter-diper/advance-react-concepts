import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TODO_QUERY_KEY } from "../constant";
import { APIClient } from "../services/api-clinet";
import { Todo, todoApiClinet } from "../services/httpServices";

interface TodoContext {
  previousTodos: Todo[];
}

export default (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: todoApiClinet.post,

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: TODO_QUERY_KEY });
      const previousTodos =
        queryClient.getQueryData<Todo[]>(TODO_QUERY_KEY) || [];
      queryClient.setQueryData<Todo[]>(TODO_QUERY_KEY, (oldTodos = []) => [
        newTodo,
        ...oldTodos,
      ]);

      onAdd();

      return {
        previousTodos,
      };
    },
    onSuccess: (todoData, newTodo) => {
      queryClient.setQueryData<Todo[]>(TODO_QUERY_KEY, (oldTodo) =>
        oldTodo?.map((todo) => (todo === newTodo ? todoData : todo)),
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(TODO_QUERY_KEY, context.previousTodos);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY });
    // },
  });
};
