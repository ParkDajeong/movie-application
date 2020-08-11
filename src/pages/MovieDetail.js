import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/modules/movie";
import MovieInfo from "../components/movieDetail/MovieInfo";
import MovieCast from "../components/movieDetail/MovieCast";
import MovieMedia from "../components/movieDetail/MovieMedia";
import SimilarMovies from "../components/movieDetail/SimilarMovies";

function MovieDetail(props) {
  const dispatch = useDispatch();
  const movieId = props.match.params.movieId;
  const movieDetail = useSelector((state) => state.movie.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, []);

  return (
    <React.Fragment>
      {movieDetail && (
        <section>
          <MovieInfo />
          <MovieCast />
          <MovieMedia />
          <SimilarMovies />
        </section>
      )}
    </React.Fragment>
  );
}

export default MovieDetail;
