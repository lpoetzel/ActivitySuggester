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
      <div className="activity-type">{posts.type}</div>
      <button className="new-button" onClick={getNewSuggestion}>
        New suggestion
      </button>
    </>
  );
}

export default App;
