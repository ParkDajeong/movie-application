import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainBanner } from "../../store/modules/movie";
import { IMAGE_BASE_URL } from "../../config/config";
import * as S from "./MainBanner.style";

function MainBanner() {
  const dispatch = useDispatch();
  const mainMovie = useSelector((state) => state.movie.mainBanner);

  useEffect(() => {
    dispatch(getMainBanner());
  }, []);

  return (
    <React.Fragment>
      {mainMovie && (
        <S.MainBanner image={`${IMAGE_BASE_URL}original${mainMovie.backdrop_path}`}>
          <div className="player"></div>
          <S.BannerCover />
          <S.MovieDetail>
            <h2>{mainMovie.title}</h2>
            <p>{mainMovie.tagline}</p>
            <S.MoreBtn>자세히 보기</S.MoreBtn>
          </S.MovieDetail>
        </S.MainBanner>
      )}
    </React.Fragment>
  );
}

export default MainBanner;
