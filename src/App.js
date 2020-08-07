import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyMovie from "./pages/MyMovie";
import MovieDetail from "./pages/MovieDetail";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mymovie" component={MyMovie} />
      <Route exact path="/movie/:movieId" component={MovieDetail} />
    </Switch>
  );
}

export default App;
