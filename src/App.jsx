import React, { useEffect, useState } from "react";
import "./App.css";
import getActitivy from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getActitivy().then((json) => {
      setPosts(json);
    });
  }, []);
  return (
    <>
      <p>{posts.activity}</p>
      <button>New suggestion</button>
    </>
  );
}

export default App;
