import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    

    <div className="container">
      <h2>Click on the submit button to get data from terriblytinytales.txt <br/> 👇</h2>
      <Link to="/data">
        <button className="submit-button" >Submit</button>
      </Link>
    </div>
  );
}

export default Home;
