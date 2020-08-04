import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import MyMovie from "./pages/MyMovie";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/mymovie" component={MyMovie} />
    </div>
  );
}

export default App;
