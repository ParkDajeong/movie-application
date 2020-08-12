import React, { useEffect } from "react";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { useSelector } from "react-redux";
import { Row } from "antd";

function SearchResult({ history }) {
  const searchResults = useSelector((state) => state.search.searchResults);
  const likeList = useSelector((state) => state.like.likeList);
  const likeMovieIdList = likeList.map((movie) => movie.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <GridWrapper nobanner>
        <Row gutter={[20, 30]}>
          {searchResults &&
            searchResults.map((movie, index) => (
              <React.Fragment key={index}>
                <MovieCard //
                  nobanner
                  movieId={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  poster={movie.poster_path ? movie.poster_path : null}
                  liked={likeMovieIdList.includes(movie.id)}
                />
              </React.Fragment>
            ))}
        </Row>
      </GridWrapper>
    </React.Fragment>
  );
}

export default SearchResult;
