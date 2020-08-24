import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/modules/movie";
import MovieInfo from "../components/movieDetail/MovieInfo";
import MovieCast from "../components/movieDetail/MovieCast";
import MovieMedia from "../components/movieDetail/MovieMedia";
import SimilarMovies from "../components/movieDetail/SimilarMovies";
import { WaveTopBottomLoading } from "react-loadingg";
import useLoading from "../hooks/useLoading";

function MovieDetail({ match }) {
  const dispatch = useDispatch();
  const movieId = match.params.movieId;
  const isLoading = useSelector((state) => state.loading.isLoading);
  const { detailSuccess } = useSelector((state) => state.movie.movieDetail);

  const getMovieInfo = useCallback(async () => {
    dispatch(await getMovieDetail(movieId));
    window.scrollTo(0, 0);
  }, [movieId]);

  useLoading(getMovieInfo);

  // useEffect(() => {
  //   let mounted = true;
  //   const getDetail = async () => {
  //     dispatch(await getMovieDetail(movieId));
  //     mounted && setIsLoading(false);
  //   };

  //   getDetail();
  //   window.scrollTo(0, 0);

  //   return () => {
  //     mounted = false;
  //     setIsLoading(true);
  //   };
  // }, [movieId]);

  return (
    <React.Fragment>
      {!isLoading && detailSuccess ? (
        <section>
          <MovieInfo />
          <MovieCast />
          <MovieMedia />
          <SimilarMovies />
        </section>
      ) : (
        <WaveTopBottomLoading //
          color={"firebrick"}
          size={"large"}
        />
      )}
    </React.Fragment>
  );
}

export default MovieDetail;
