import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import * as S from "./MovieInfo.style";
import { Like } from "../movieList/MovieCard.style";
import Rate from "../movieList/Rate";

function MovieInfo() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const movieDetail = useSelector((state) => state.movie.movieDetail.result);
  const [isLike, setIsLike] = useState(localStorage.getItem(movieDetail.id) !== null);

  const addLike = () => {
    const likedMovie = {
      id: movieDetail.id,
      title: movieDetail.title,
      rate: movieDetail.vote_average,
      poster: movieDetail.poster_path,
    };
    localStorage.setItem(movieDetail.id, JSON.stringify(likedMovie));
  };

  const removeLike = () => localStorage.removeItem(movieDetail.id);

  const onClickLikeBtn = () => {
    isLike ? removeLike() : addLike();
    setIsLike(!isLike);
  };

  return (
    <S.InfoSection>
      <S.BackgroundImg image={movieDetail.backdrop_path} />
      <S.MovieMeta mobile={isTabletOrMobile ? 1 : 0}>
        {movieDetail.poster_path && (
          <S.Poster>
            <img src={movieDetail.poster_path} alt={movieDetail.title} />
          </S.Poster>
        )}
        <S.Description>
          <div>
            <S.Title>
              <h2>{movieDetail.title}</h2>
              <Like //
                detailpage="true"
                onClick={onClickLikeBtn}
                liked={isLike ? 1 : 0}
                mobile={1}
              />
            </S.Title>
            <S.InfoData>
              <span>{movieDetail.genres}</span>
              <span>{movieDetail.runtime}분</span>
            </S.InfoData>
            <Rate detailpage="true" rate={movieDetail.vote_average} />
          </div>
          <p>{movieDetail.overview}</p>
        </S.Description>
      </S.MovieMeta>
    </S.InfoSection>
  );
}

export default React.memo(MovieInfo);
