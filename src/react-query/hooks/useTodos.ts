import { useQuery } from "@tanstack/react-query";
import { QUERY_TODO_KEY } from "../constant";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: QUERY_TODO_KEY,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
