import { useState } from "react";
import usePost from "./hooks/usePost";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const {
    data: posts,
    error,
    isLoading,
  } = usePost({
    page,
    pageSize,
  });

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts!.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
        {posts!.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
        {posts!.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn btn-primary"
        >
          perv
        </button>
        <span className="btn">{page}</span>
        <button
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          next
        </button>
      </div>
    </>
  );
};

export default PostList;
