import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/modules/movie";
import MovieInfo from "../components/movieDetail/MovieInfo";
import MovieCast from "../components/movieDetail/MovieCast";
import MovieMedia from "../components/movieDetail/MovieMedia";
import SimilarMovies from "../components/movieDetail/SimilarMovies";
import { WaveTopBottomLoading } from "react-loadingg";

function MovieDetail({ match }) {
  const dispatch = useDispatch();
  const movieId = match.params.movieId;
  const { detailSuccess } = useSelector((state) => state.movie.movieDetail);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const getDetail = async () => {
      dispatch(await getMovieDetail(movieId));
      mounted && setIsLoading(false);
    };

    getDetail();
    window.scrollTo(0, 0);

    return () => {
      mounted = false;
      setIsLoading(true);
    };
  }, [movieId]);

  return (
    <React.Fragment>
      {detailSuccess && !isLoading ? (
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
