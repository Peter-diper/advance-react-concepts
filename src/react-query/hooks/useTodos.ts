import { APIClient } from "./../services/api-clinet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TODO_QUERY_KEY } from "../constant";
import { Todo, todoApiClinet } from "../services/httpServices";

const useTodos = () => {
  const fetchData = todoApiClinet.getAll;
  return useQuery<Todo[], Error>({
    queryKey: TODO_QUERY_KEY,
    queryFn: fetchData,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
