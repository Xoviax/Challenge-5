import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import App from "./App";

(async function() { 
  // Fetch API data on world countries.
  const url = 'https://valorant-api.com/v1/bundles';
  const apiResponse = await fetch(url);
  
  // Parse response JSON into an array.
  const valBundles = await apiResponse.json();
  console.log(valBundles.data);
  
  // Render the App component to the div#root in markup.
  const root = document.getElementById("root");
  ReactDOM.render(<App valBundles={valBundles.data} />, root);
})();
