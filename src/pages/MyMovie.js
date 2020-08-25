import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { NoData } from "../components/common";
import { MovieCard } from "../components/movieList";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { Row } from "antd";

function MyMovie() {
  const { likeListSuccess, result: likeList } = useSelector((state) => state.like.likeList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <GridWrapper nobanner>
        <h2>나의 영화</h2>
        {likeListSuccess && likeList.length > 0 ? (
          <Row gutter={[20, 30]}>
            {likeList.map((movie) => (
              <MovieCard //
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                rate={movie.rate}
                poster={movie.poster ? movie.poster : null}
                liked={true}
                nobanner
                mymovie
              />
            ))}
          </Row>
        ) : (
          <NoData>좋아요를 누른 영화가 없습니다.</NoData>
        )}
      </GridWrapper>
    </Fragment>
  );
}

export default MyMovie;
