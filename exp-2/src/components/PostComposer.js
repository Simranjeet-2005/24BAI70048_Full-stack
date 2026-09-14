import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postsSlice";
import { changePlatform } from "../redux/platformSlice";

function PostComposer() {
  const dispatch = useDispatch();

  const platform = useSelector(
    (state) => state.platform.selectedPlatform
  );

  const limits = useSelector(
    (state) => state.platform.limits
  );

  const limit = limits[platform];

  const [post, setPost] = useState("");

  const savePost = () => {
    if (post.trim() === "") {
      alert("Please enter a post");
      return;
    }

    if (post.length > limit) {
      alert("Character limit exceeded");
      return;
    }

    dispatch(
      addPost({
        id: Date.now(),
        platform,
        content: post,
      })
    );

    setPost("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Social Media Post Manager
      </h1>

      <label><b>Select Platform</b></label>

      <br /><br />

      <select
        value={platform}
        onChange={(e) =>
          dispatch(changePlatform(e.target.value))
        }
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <option>Twitter</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
      </select>

      <br /><br />

      <textarea
        rows="6"
        value={post}
        placeholder="Write your post..."
        onChange={(e) => setPost(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <p>
        Characters : {post.length}/{limit}
      </p>

      {post.length > limit ? (
        <p style={{ color: "red" }}>
          Character Limit Exceeded
        </p>
      ) : (
        <p style={{ color: "green" }}>
          Ready To Post
        </p>
      )}

      <button
        onClick={savePost}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </div>
  );
}

export default PostComposer;