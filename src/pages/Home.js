import React, { useState, useEffect, Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/movieList/MovieCard";
import MainBanner from "../components/movieList/MainBanner";
import { getMovieList, getMainBanner } from "../store/modules/movie";
import { getLikeList } from "../store/modules/like";
import { GridWrapper } from "../components/movieList/MovieCard.style";
import { Row } from "antd";

import useLoading from "../hooks/useLoading";

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
  const { bannerSuccess, result: mainMovie } = useSelector((state) => state.movie.mainBanner);
  const { searchSuccess, result: searchResults } = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const likeList = useSelector((state) => state.like.likeList.result);
  const likeMovieIdList = likeList.map((movie) => movie.id);
  const [isSearching, setIsSearching] = useState(false);

  console.log("홈 렌더링");

  useEffect(() => {
    const { pathname } = location;
    if (!pathname.includes("search")) return;

    setIsSearching(true);
    window.scrollTo(0, 0);
  }, [location]);

  const loadHomeData = useCallback(async () => {
    dispatch(await getMovieList(listType[type]));
    dispatch(await getMainBanner(listType[type]));
  }, [type]);

  /*
  useEffect(() => {
    const loadHomeData = async () => {
      dispatch(await getMovieList(listType[type]));
      dispatch(await getMainBanner(listType[type]));
    };
    loadHomeData();
    dispatch(finishLoading());
    window.scrollTo(0, 0);

    return () => {
      dispatch(startLoading());
      dispatch(getLikeList());
    };
  }, [type, dispatch]); */

  useLoading(loadHomeData);

  if (!isSearching) {
    return (
      <Fragment>
        {!isLoading && moviesSuccess && bannerSuccess && (
          <Fragment>
            <MainBanner mainMovie={mainMovie} />
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
