import React, { useEffect, Fragment } from "react";
import NavBar from "../components/navbar/NavBar";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { getMovieList } from "../store/modules/movie";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "antd";
import { GridWrapper } from "../components/movieList/MovieCard.style";

function Home() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <Fragment>
      <NavBar />
      <MainBanner />
      <GridWrapper>
        <Row gutter={[20, 30]}>
          {movieList &&
            movieList.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard //
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  poster={movie.poster_path ? movie.poster_path : null}
                />
              </Fragment>
            ))}
        </Row>
      </GridWrapper>
    </Fragment>
  );
}

export default Home;
