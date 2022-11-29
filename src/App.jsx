import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const activities = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

function App() {
  const [posts, setPosts] = useState([]);
  const [price, setPrice] = useState(999);
  const [type, setType] = useState("");
  const getActitivy = () => {
    const response = axios
      .get(
        `http://www.boredapi.com/api/activity?minprice=0&maxprice=${price}&type=${type}`
      )
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
      <div>Price: {posts.price}</div>
      <label>
        Max Price:
        <input
          className="max-price"
          type="text"
          placeholder="e.g. 1.0"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Type:
        <select onChange={(e) => setType(e.target.value)}>
          <option value="">---</option>
          {activities.map((activity, i) => {
            return (
              <option key={i} value={activity}>
                {activity}
              </option>
            );
          })}
        </select>
      </label>
      <button className="new-button" onClick={getNewSuggestion}>
        New suggestion
      </button>
    </>
  );
}

export default App;
