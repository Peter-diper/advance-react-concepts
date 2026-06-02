import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PageQuery {
  page: number;
  pageSize: number; // limit!
}

const usePost = (pageQuery: PageQuery) =>
  useQuery<Post[], Error>({
    queryKey: ["posts", pageQuery.page],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageQuery.page - 1) * pageQuery.pageSize,
            _limit: pageQuery.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true,
  });

export default usePost;
