import React from "react";
import * as S from "./MovieInfo.style";
import { useMediaQuery } from "react-responsive";
import Rate from "../movieList/Rate";
import { Like } from "../movieList/MovieCard.style";

function MovieInfo() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });

  return (
    <S.MovieInfo>
      <S.BackgroundImg></S.BackgroundImg>
      <S.MovieMeta mobile={isTabletOrMobile ? 1 : 0}>
        <S.Poster>
          <img src="http://image.tmdb.org/t/p/w500/65Qf0or6IYVPaxVy7vZXFsHWXAX.jpg" alt="" />
        </S.Poster>
        <S.Description>
          <div>
            <S.Title>
              <h2>하울의 움직이는 성</h2>
              <Like //
                detailPage
                onClick
                liked
                mobile
              />
            </S.Title>
            <S.InfoData>
              <span>액션, 판타지</span>
              <span>124분</span>
            </S.InfoData>
            <Rate detailPage rate={7.5} />
          </div>
          <p>
            수백 년 동안 어둠 속에서 싸워왔다. 인류를 지키는 불멸의 전사들. 큰 잠재력을 가진 신참을 발견하지만, 그들의 놀라운 힘도 발각된다. 잡혀선 안
            된다, 끝까지 싸운다.
          </p>
        </S.Description>
      </S.MovieMeta>
      <div></div>
    </S.MovieInfo>
  );
}

export default MovieInfo;
