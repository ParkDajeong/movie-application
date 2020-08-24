import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./MainBanner.style";

function MainBanner({ mainMovie }) {
  const history = useHistory();
  const onClickMoreBtn = () => history.push(`/movie/${mainMovie.id}`);

  console.log("ddddddddd");

  return (
    <React.Fragment>
      <S.MainBanner image={mainMovie.backdrop_path}>
        <div className="player"></div>
        <S.BannerCover />
        <S.MovieDetail>
          <h2>{mainMovie.title}</h2>
          <p>{mainMovie.tagline}</p>
          <S.MoreBtn //
            onClick={onClickMoreBtn}
          >
            자세히 보기
          </S.MoreBtn>
        </S.MovieDetail>
      </S.MainBanner>
    </React.Fragment>
  );
}

export default MainBanner;
