import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/postsSlice";
import { selectPosts } from "../redux/selectors";

function DraftList() {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Saved Posts</h2>

      {posts.length === 0 ? (
        <p>No Posts Available</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h4>{post.platform}</h4>

            <p>{post.content}</p>

            <button
              onClick={() =>
                dispatch(deletePost(post.id))
              }
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default React.memo(DraftList);