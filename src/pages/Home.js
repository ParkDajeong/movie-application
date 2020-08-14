import React, { useState, useEffect, Fragment } from "react";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { getMovieList } from "../store/modules/movie";
import { getLikeList } from "../store/modules/like";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { Row } from "antd";

const listType = {
  trend: "trending/movie/week",
  latest: "movie/now_playing",
  rated: "movie/top_rated",
};

function Home({ match }) {
  const dispatch = useDispatch();
  const location = useLocation();
  let type = match.params.type;
  type = type ? type : "trend";
  const { moviesSuccess, result: movieList } = useSelector((state) => state.movie.movies);
  const { searchSuccess, result: searchResults } = useSelector((state) => state.search.searchResults);
  const likeList = useSelector((state) => state.like.likeList.result);
  const likeMovieIdList = likeList.map((movie) => movie.id);
  const [isSearching, setIsSearching] = useState(false);

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

    return () => dispatch(getLikeList());
  }, [type]);

  if (!isSearching) {
    return (
      <Fragment>
        {moviesSuccess && (
          <Fragment>
            <MainBanner type={listType[type]} />
            <GridWrapper>
              <Row gutter={[20, 30]}>
                {movieList.map((movie) => (
                  <MovieCard //
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
  } else {
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
}

export default React.memo(Home);
