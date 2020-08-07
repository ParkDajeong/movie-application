import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/modules/movie";
import NavBar from "../components/navbar/NavBar";
import MovieInfo from "../components/movieDetail/MovieInfo";
import MovieCast from "../components/movieDetail/MovieCast";

function MovieDetail(props) {
  const dispatch = useDispatch();
  const movieId = props.match.params.movieId;
  const movieDetail = useSelector((state) => state.movie.movieInfo);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      {movieDetail && (
        <section>
          <MovieInfo />
          <MovieCast />
        </section>
      )}
    </React.Fragment>
  );
}

export default MovieDetail;
