import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { getLikeList } from "./store/modules/like";
import NavBar from "./components/navbar/NavBar";
import { Home, SearchResult, MyMovie, MovieDetail } from "./pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    //console.log(pathname);
  }, [location]);

  useEffect(() => {
    dispatch(getLikeList());
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/movie" component={Home} />
        <Route exact path="/list/:type" component={Home} />
        <Route exact path="/mymovie" component={MyMovie} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
        <Route exact path="/search" component={SearchResult} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
