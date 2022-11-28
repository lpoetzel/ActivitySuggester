import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const getActitivy = () => {
    const response = axios
      .get("https://www.boredapi.com/api/activity")
      .then((response) => setPosts(response.data));
    return response;
  };
  useEffect(() => {
    getActitivy();
  }, []);

  const getNewSuggestion = () => {
    getActitivy();
  };

  return (
    <>
      <div className="activity">{posts.activity}</div>
      <div className="activity-type">Type: {posts.type}</div>
      {posts.link ? (
        <a href={posts.link} target="_blank" rel="noreferrer">
          More information
        </a>
      ) : null}
      <button className="new-button" onClick={getNewSuggestion}>
        New suggestion
      </button>
    </>
  );
}

export default App;
