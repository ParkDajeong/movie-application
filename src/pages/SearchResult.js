import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { Row } from "antd";

function SearchResult() {
  const { searchSuccess, result: searchResults } = useSelector((state) => state.search.searchResults);
  const likeList = useSelector((state) => state.like.likeList.result);
  const likeMovieIdList = likeList.map((movie) => movie.id);

  return (
    <Fragment>
      {searchSuccess && (
        <Fragment>
          <GridWrapper nobanner>
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
          </GridWrapper>
        </Fragment>
      )}
    </Fragment>
  );
}

export default React.memo(SearchResult);
