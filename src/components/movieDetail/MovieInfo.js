import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import * as S from "./MovieInfo.style";
import { Like } from "../movieList/MovieCard.style";
import Rate from "../movieList/Rate";

function MovieInfo() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const movieDetail = useSelector((state) => state.movie.movieDetail.result);
  const { id, title, vote_average, poster_path, backdrop_path, genres, runtime, overview } = movieDetail;
  const [isLike, setIsLike] = useState(localStorage.getItem(movieDetail.id) !== null);

  const addLike = () => {
    const likedMovie = {
      id,
      title,
      rate: vote_average,
      poster: poster_path,
    };
    localStorage.setItem(id, JSON.stringify(likedMovie));
  };

  const removeLike = () => localStorage.removeItem(id);

  const onClickLikeBtn = () => {
    isLike ? removeLike() : addLike();
    setIsLike(!isLike);
  };

  return (
    <S.InfoSection>
      <S.BackgroundImg image={backdrop_path} />
      <S.MovieMeta mobile={isTabletOrMobile ? 1 : 0}>
        {poster_path && (
          <S.Poster>
            <img src={poster_path} alt={title} />
          </S.Poster>
        )}
        <S.Description>
          <div>
            <S.Title>
              <h2>{title}</h2>
              <Like //
                detailpage="true"
                onClick={onClickLikeBtn}
                liked={isLike ? 1 : 0}
                mobile={1}
              />
            </S.Title>
            <S.InfoData>
              <span>{genres}</span>
              <span>{runtime}분</span>
            </S.InfoData>
            <Rate detailpage="true" rate={vote_average} />
          </div>
          <p>{overview}</p>
        </S.Description>
      </S.MovieMeta>
    </S.InfoSection>
  );
}

export default React.memo(MovieInfo);
