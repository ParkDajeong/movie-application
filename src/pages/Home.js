import React, { useEffect, Fragment } from "react";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { getMovieList } from "../store/modules/movie";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "antd";
import { GridWrapper } from "../components/movieList/MovieCard.style";

function Home() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movies);
  const likeList = useSelector((state) => state.like.likeList);
  const likeMovieIdList = likeList.map((movie) => movie.id);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <Fragment>
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
                  liked={likeMovieIdList.includes(movie.id)}
                />
              </Fragment>
            ))}
        </Row>
      </GridWrapper>
    </Fragment>
  );
}

export default Home;
