import React from "react";
import { useSelector } from "react-redux";
import * as S from "./MovieInfo.style";
import { useMediaQuery } from "react-responsive";
import Rate from "../movieList/Rate";
import { Like } from "../movieList/MovieCard.style";
import { IMAGE_BASE_URL } from "../../config/config";

function MovieInfo() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const movieDetail = useSelector((state) => state.movie.movieInfo);

  return (
    <S.MovieInfo>
      <S.BackgroundImg image={`${IMAGE_BASE_URL}original${movieDetail.backdrop_path}`} />
      <S.MovieMeta mobile={isTabletOrMobile ? 1 : 0}>
        <S.Poster>
          <img src={`${IMAGE_BASE_URL}w500${movieDetail.poster_path}`} alt={movieDetail.title} />
        </S.Poster>
        <S.Description>
          <div>
            <S.Title>
              <h2>{movieDetail.title}</h2>
              <Like //
                detailPage
                onClick
                liked
                mobile
              />
            </S.Title>
            <S.InfoData>
              <span>{movieDetail.genres.map((gen) => gen.name).join(", ")}</span>
              <span>{movieDetail.runtime}</span>
            </S.InfoData>
            <Rate detailPage rate={movieDetail.vote_average} />
          </div>
          <p>{movieDetail.overview}</p>
        </S.Description>
      </S.MovieMeta>
      <div></div>
    </S.MovieInfo>
  );
}

export default MovieInfo;
