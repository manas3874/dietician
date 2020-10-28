// ! React import

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// ! Components import

import Dashboard from "./Components/Dashboard";
import Recipes from "./Components/recipes";
// ! Styles import
import "./Components/styles/app.scss";

// ! App component
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route path="/recipes" component={Recipes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
