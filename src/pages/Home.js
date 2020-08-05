import React, { useState, useEffect, Fragment } from "react";
import NavBar from "../components/navbar/NavBar";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { IMAGE_BASE_URL } from "../config/config";
import { getMovieList } from "../store/modules/movie";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "antd";
import { GridWrapper } from "../components/movieList/MovieCard.style";

function Home() {
  const dispatch = useDispatch();
  const trendMovies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <Fragment>
      <NavBar />
      <MainBanner />
      <GridWrapper>
        <Row gutter={[20, 30]}>
          {trendMovies &&
            trendMovies.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard //
                  img={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                />
              </Fragment>
            ))}
        </Row>
      </GridWrapper>
    </Fragment>
  );
}

export default Home;
