import React, { Fragment, useState, useEffect } from "react";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import * as MovieAPI from "../lib/movieAPI";
import { useSelector } from "react-redux";
import { Row } from "antd";

function MyMovie() {
  const likeList = MovieAPI.getAllLikeMovies();
  const likeListCnt = useSelector((state) => state.movie.listCnt);
  const [storageLength, setStorageLength] = useState(localStorage.length);

  useEffect(() => {
    if (localStorage.length === storageLength) {
      setStorageLength(localStorage.length);
    }
  }, [likeListCnt]);

  return (
    <Fragment>
      <GridWrapper nobanner>
        <h2>나의 영화</h2>
        {likeList.length > 0 ? (
          <Row gutter={[20, 30]}>
            {likeList.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard //
                  nobanner
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.rate}
                  poster={movie.poster ? movie.poster : null}
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
