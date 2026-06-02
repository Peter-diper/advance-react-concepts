import React, { useState } from "react";
import usePost from "./hooks/usePost";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    {
      pageSize,
    },
  );

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li className="list-group-item" key={post.id}>
                {post.body}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button onClick={() => fetchNextPage()} className="btn btn-info">
        {isFetchingNextPage ? "loading..." : "load more"}
      </button>
    </>
  );
};

export default PostList;
