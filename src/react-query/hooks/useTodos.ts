import { useQuery } from "@tanstack/react-query";
import { QUERY_TODO_KEY } from "../constant";
import { APIClient } from "../services/apiClient";
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo>("/todos");
const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: QUERY_TODO_KEY,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
