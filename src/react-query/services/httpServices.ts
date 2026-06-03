import { APIClient } from "./api-clinet";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
export const todoApiClinet = new APIClient<Todo>("/todos");
