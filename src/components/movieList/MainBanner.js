import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./MainBanner.style";

function MainBanner({ mainMovie }) {
  const history = useHistory();
  const { id, backdrop_path, title, tagline } = mainMovie;
  const onClickMoreBtn = () => history.push(`/movie/${id}`);

  return (
    <React.Fragment>
      <S.MainBanner image={backdrop_path}>
        <div className="player"></div>
        <S.BannerCover />
        <S.MovieDetail>
          <h2>{title}</h2>
          <p>{tagline}</p>
          <S.MoreBtn onClick={onClickMoreBtn}>자세히 보기</S.MoreBtn>
        </S.MovieDetail>
      </S.MainBanner>
    </React.Fragment>
  );
}

export default MainBanner;
