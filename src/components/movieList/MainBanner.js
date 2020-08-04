import React, { useEffect, useState } from "react";
import * as S from "./MainBanner.style";

function MainBanner() {
  return (
    <S.MainBanner>
      <div className="player"></div>
      <S.BannerCover />
      <S.MovieDetail>
        <h2>하울의 움직이는 성</h2>
        <p>태그 라인 있는 것만 출력하게 한다.</p>
        <S.MoreBtn>자세히 보기</S.MoreBtn>
      </S.MovieDetail>
    </S.MainBanner>
  );
}

export default MainBanner;
