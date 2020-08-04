import React from "react";
import NavBar from "../components/navbar/NavBar";
import MainBanner from "../components/movieList/MainBanner";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <MainBanner />
    </React.Fragment>
  );
}

export default Home;
