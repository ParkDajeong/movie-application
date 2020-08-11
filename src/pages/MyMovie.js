import React, { Fragment } from "react";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { useSelector } from "react-redux";
import { Row } from "antd";

function MyMovie() {
  const likeList = useSelector((state) => state.movie.likeList);

  return (
    <Fragment>
      <GridWrapper nobanner>
        <h2>나의 영화</h2>
        {likeList ? (
          <Row gutter={[20, 30]}>
            {likeList.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard //
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.rate}
                  poster={movie.poster ? movie.poster : null}
                  nobanner
                />
              </Fragment>
            ))}
          </Row>
        ) : (
          <div>좋아요를 누른 영화가 없습니다.</div>
        )}
      </GridWrapper>
    </Fragment>
  );
}

export default MyMovie;
