import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [price, setPrice] = useState();
  const getActitivy = () => {
    const response = axios
      .get("https://www.boredapi.com/api/activity")
      .then((response) => setPosts(response.data));
    return response;
  };
  const getMaxPrice = () => {
    const response = axios
      .get(`http://www.boredapi.com/api/activity?minprice=0&maxprice=${price}`)
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
      <input
        className="max-price"
        type="text"
        placeholder="e.g. 1.0"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="price-button" onClick={getMaxPrice}>
        Max price
      </button>
      <button className="new-button" onClick={getNewSuggestion}>
        New suggestion
      </button>
    </>
  );
}

export default App;
