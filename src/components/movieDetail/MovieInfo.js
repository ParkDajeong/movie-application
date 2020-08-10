import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./MovieInfo.style";
import { useMediaQuery } from "react-responsive";
import Rate from "../movieList/Rate";
import { Like } from "../movieList/MovieCard.style";
import * as MovieAPI from "../../lib/movieAPI";

function MovieInfo() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const allLikeList = MovieAPI.getAllLikeMovies();
  const likeMovieIdList = allLikeList.map((movie) => movie.id);
  const [isLike, setIsLike] = useState(likeMovieIdList.includes(movieDetail.id));

  const addLike = () => {
    const likedMovie = {
      id: movieDetail.id,
      title: movieDetail.title,
      rate: movieDetail.vote_average,
      poster: movieDetail.poster_path,
    };
    localStorage.setItem(movieDetail.id, JSON.stringify(likedMovie));
  };

  const removeLike = () => {
    localStorage.removeItem(movieDetail.id);
  };

  const toggleLikeBtn = () => {
    isLike ? removeLike() : addLike();
    setIsLike(!isLike);
  };

  return (
    <S.MovieInfo>
      <S.BackgroundImg image={movieDetail.backdrop_path} />
      <S.MovieMeta mobile={isTabletOrMobile ? 1 : 0}>
        <S.Poster>
          <img src={movieDetail.poster_path} alt={movieDetail.title} />
        </S.Poster>
        <S.Description>
          <div>
            <S.Title>
              <h2>{movieDetail.title}</h2>
              <Like //
                detailpage
                onClick={toggleLikeBtn}
                liked={isLike ? 1 : 0}
                mobile={1}
              />
            </S.Title>
            <S.InfoData>
              <span>{movieDetail.genres}</span>
              <span>{movieDetail.runtime}분</span>
            </S.InfoData>
            <Rate detailpage rate={movieDetail.vote_average} />
          </div>
          <p>{movieDetail.overview}</p>
        </S.Description>
      </S.MovieMeta>
      <div></div>
    </S.MovieInfo>
  );
}

export default MovieInfo;
