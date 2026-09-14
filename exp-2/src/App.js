import React from "react";
import PostComposer from "./components/PostComposer";
import DraftList from "./components/DraftList";
import Stats from "./components/Stats";

function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <PostComposer />

      <hr />

      <Stats />

      <DraftList />
    </div>
  );
}

export default App;