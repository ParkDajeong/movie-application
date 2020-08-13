import React, { useState, useEffect, Fragment } from "react";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { getMovieList } from "../store/modules/movie";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Row } from "antd";
import { GridWrapper } from "../components/movieList/MovieCard.style";

const listType = {
  trend: "trending/movie/week",
  latest: "movie/now_playing",
  rated: "movie/top_rated",
};

function Home(props) {
  const dispatch = useDispatch();
  let type = props.match.params.type;
  type = type ? type : "trend";
  const movieList = useSelector((state) => state.movie.movies);
  const searchResults = useSelector((state) => state.search.searchResults);
  const likeList = useSelector((state) => state.like.likeList);
  const likeMovieIdList = likeList.map((movie) => movie.id);
  const [isSearching, setIsSearching] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname.includes("search")) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(getMovieList(listType[type]));
    window.scrollTo(0, 0);
  }, [type]);

  if (!isSearching) {
    return (
      <Fragment>
        <MainBanner type={listType[type]} />
        <GridWrapper>
          <Row gutter={[20, 30]}>
            {movieList &&
              movieList.map((movie, index) => (
                <Fragment key={index}>
                  <MovieCard //
                    movieId={movie.id}
                    title={movie.title}
                    rate={movie.vote_average}
                    poster={movie.poster_path ? movie.poster_path : null}
                    liked={likeMovieIdList.includes(movie.id)}
                  />
                </Fragment>
              ))}
          </Row>
        </GridWrapper>
      </Fragment>
    );
  } else {
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
}

export default Home;
