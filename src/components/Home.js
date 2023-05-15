import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Word Frequency Histogram</h2>
      <Link to="/data">
        <button>Submit</button>
      </Link>
    </div>
  );
}

export default Home;
