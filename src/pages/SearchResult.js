import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import Loading from "../components/common/Loading";
import { NoData } from "../components/common/NoData";
import { Row } from "antd";

function SearchResult() {
  const { searchSuccess, result: searchResults } = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const likeList = useSelector((state) => state.like.likeList.result);
  const likeMovieIdList = likeList.map((movie) => movie.id);

  return (
    <Fragment>
      {!isLoading && searchSuccess ? (
        <Fragment>
          <GridWrapper nobanner>
            {searchResults.length > 0 ? (
              <Row gutter={[20, 30]}>
                {searchResults.map((movie) => (
                  <MovieCard //
                    nobanner
                    key={movie.id}
                    movieId={movie.id}
                    title={movie.title}
                    rate={movie.vote_average}
                    poster={movie.poster_path ? movie.poster_path : null}
                    liked={likeMovieIdList.includes(movie.id)}
                  />
                ))}
              </Row>
            ) : (
              <NoData>검색 결과가 존재하지 않습니다.</NoData>
            )}
          </GridWrapper>
        </Fragment>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}

export default React.memo(SearchResult);
