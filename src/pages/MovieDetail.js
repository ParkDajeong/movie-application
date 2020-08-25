import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikeList } from "../store/modules/like";
import { getMovieDetail } from "../store/modules/movie";
import { Loading } from "../components/common";
import { MovieInfo, MovieCast, MovieMedia, SimilarMovies } from "../components/movieDetail";
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

  useEffect(() => {
    return () => {
      dispatch(getLikeList());
    };
  }, []);

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
        <Loading />
      )}
    </React.Fragment>
  );
}

export default MovieDetail;
