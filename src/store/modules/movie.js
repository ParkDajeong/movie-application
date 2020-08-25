import * as MovieAPI from "../api/movieAPI";
import { handleActions } from "redux-actions";

const GET_MOVIES = "movieApp/GET_MOVIES";
const GET_MAINBANNERS = "movieApp/GET_MAINBANNERS";
const GET_MOVIE_DETAIL = "movieApp/GET_MOVIE_DETAIL";

const initialState = {
  movies: {
    moviesSuccess: false,
    result: [
      {
        id: "",
        title: "",
        vote_average: "",
        poster_path: "",
      },
    ],
  },
  mainBanner: {
    bannerSuccess: false,
    result: {
      id: "",
      title: "",
      original_title: "",
      tagline: "",
      backdrop_path: "",
    },
  },
  movieDetail: {
    detailSuccess: false,
    result: {
      id: "",
      title: "",
      original_title: "",
      overview: "",
      genres: "",
      runtime: "",
      vote_average: "",
      backdrop_path: "",
      poster_path: "",
      casts: [
        {
          cast_id: "",
          character: "",
          name: "",
          profile_path: "",
        },
      ],
      videos: [
        {
          url: "",
          thumbnail: "",
        },
      ],
      images: [],
      similarMovies: [
        {
          id: "",
          title: "",
          original_title: "",
          vote_average: "",
          poster_path: "",
        },
      ],
    },
  },
};

export const getMovieList = async (path) => {
  const result = await MovieAPI.getMovieList(path);

  return {
    type: GET_MOVIES,
    result,
  };
};

export const getMainBanner = async (path) => {
  let randomMovie = {};
  const movieList = await MovieAPI.getMovieList(path);

  while (true) {
    const randomMovieId = movieList[Math.floor(Math.random() * movieList.length)].id;
    randomMovie = await MovieAPI.getMainBannerData(randomMovieId);

    if (randomMovie.title && randomMovie.tagline && randomMovie.backdrop_path) {
      randomMovie = {
        type: GET_MAINBANNERS,
        result: randomMovie,
      };
      break;
    }
  }

  return randomMovie;
};

export const getMovieDetail = async (movieId) => {
  const info = await MovieAPI.getMovieDetail(movieId);
  const casts = await MovieAPI.getMovieCast(movieId);
  const videos = await MovieAPI.getMovieVideos(movieId);
  const images = await MovieAPI.getMovieImages(movieId);
  const similarMovies = await MovieAPI.getSimilarMovies(movieId);

  return {
    type: GET_MOVIE_DETAIL,
    result: { ...info, casts, videos, images, similarMovies },
  };
};

const movieReducer = handleActions(
  {
    [GET_MOVIES]: (state, { result }) => ({
      ...state,
      movies: {
        moviesSuccess: true,
        result,
      },
    }),
    [GET_MAINBANNERS]: (state, { result }) => ({
      ...state,
      mainBanner: {
        bannerSuccess: true,
        result,
      },
    }),
    [GET_MOVIE_DETAIL]: (state, { result }) => ({
      ...state,
      movieDetail: {
        detailSuccess: true,
        result,
      },
    }),
  },
  initialState
);

export default movieReducer;
