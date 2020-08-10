import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import MyMovie from "./pages/MyMovie";
import MovieDetail from "./pages/MovieDetail";
import SearchResult from "./pages/SearchResult";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mymovie" component={MyMovie} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
        <Route exact path="/search/:query" component={SearchResult} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
