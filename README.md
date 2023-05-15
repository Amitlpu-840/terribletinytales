# Terribly Tiny Tales
## Deployed on netlify
Live link of website -  [click here](https://ttt-by-amitgiri.netlify.app/) or follow https://ttt-by-amitgiri.netlify.app/

## Screenshots
![image](https://github.com/Amitlpu-840/terribletinytales/assets/77196415/78141691-9c6f-40b0-b96f-03c0ec2e3c50)
![image](https://github.com/Amitlpu-840/terribletinytales/assets/77196415/752c2e92-fcf9-440a-a1c2-1d199e72144c)

## index.js

This is the entry point of the application. It renders the main `App` component and sets up the routing using `react-router-dom`.

### Usage

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Data from "./components/Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```

## Home Component

This component represents the home page of the application. It displays a message and a submit button. When the submit button is clicked, it redirects to the "/data" route.

### Usage

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Click on the submit button to get data from terriblytinytales.txt 👇</h2>
      <Link to="/data">
        <button className="submit-button">Submit</button>
      </Link>
    </div>
  );
}

export default Home;
```

## Header Component

This component represents the header section of the application. It displays the title of the application.

### Usage

```jsx
import React from "react";

function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">Terribly Tiny Tales Frontend Assignment</h1>
    </header>
  );
}

export default Header;
```
## Data Component

This component fetches data from the "https://www.terriblytinytales.com/test.txt" URL and displays it as a histogram chart. It also provides an export button to download the data as a CSV file.

### Usage

```jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Data() {
  // State and effect hooks are used for data fetching and handling

  return (
    <div className="container">
      {/* Export button */}
      <button className="export-button" onClick={handleExportData}>
        Export CSV
      </button>

      {/* Chart container */}
      <div className="chart-container">
        <h2>Top 20 Words</h2>
        {histogramData && <Bar data={histogramData} />}
      </div>
    </div>
  );
}

export default Data;
```

## Footer Component

This component represents the footer section of the application. It displays the name and student ID of the person who submitted the assignment (Amit giri).

### Usage

```jsx
import React from "react";

function Footer() {
  return <footer className="App-footer">Submitted by Amit Giri (12008090)</footer>;
}

export default Footer;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
