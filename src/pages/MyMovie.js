import React, { Fragment, useEffect } from "react";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { useSelector } from "react-redux";
import { NoData } from "../components/movieDetail/MovieMedia.style";
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
        {likeListSuccess ? (
          <Row gutter={[20, 30]}>
            {likeList.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard //
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.rate}
                  poster={movie.poster ? movie.poster : null}
                  liked={true}
                  nobanner
                />
              </Fragment>
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
