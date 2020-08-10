import React from "react";
import MovieCard from "../components/movieList/MovieCard";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { useSelector } from "react-redux";
import { Row } from "antd";

function SearchResult({ history }) {
  const searchResults = useSelector((state) => state.movie.searchResults);

  console.log("history", history);

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
                />
              </React.Fragment>
            ))}
        </Row>
      </GridWrapper>
    </React.Fragment>
  );
}

export default SearchResult;
