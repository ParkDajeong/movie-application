import * as MovieAPI from "../../lib/movieAPI";

const GET_MOVIES = "movieApp/GET_MOVIES";
const GET_MAINBANNERS = "movieApp/GET_MAINBANNERS";
const CHANGE_LIKELIST = "movieApp/CHANGE_LIKELIST";
const GET_MOVIE_INFO = "movieApp/GET_MOVIE_INFO";

export const getMovieList = async () => {
  const data = await MovieAPI.getData("trending/movie/week");

  return { type: GET_MOVIES, data: data.results };
};

export const getMainBanner = async () => {
  let randomMovie = {};
  const movieList = (await MovieAPI.getData("trending/movie/week")).results;

  while (true) {
    const randomMovieId = movieList[Math.floor(Math.random() * movieList.length)].id;
    randomMovie = await MovieAPI.getData(`movie/${randomMovieId}`);

    if (randomMovie.title && randomMovie.tagline && randomMovie.backdrop_path) {
      randomMovie = {
        data: randomMovie,
        type: GET_MAINBANNERS,
      };
      break;
    }
  }

  return randomMovie;
};

export const getMovieDetail = async (movieId) => {
  const data = await MovieAPI.getData(`movie/${movieId}`);

  return { type: GET_MOVIE_INFO, data };
};

export const changeLikeList = () => {
  return {
    type: CHANGE_LIKELIST, //
    payload: localStorage.length,
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    case GET_MAINBANNERS:
      return {
        ...state,
        mainBanner: action.data,
      };
    case GET_MOVIE_INFO:
      return {
        ...state,
        movieInfo: action.data,
      };
    case CHANGE_LIKELIST:
      return {
        listCnt: action.payload,
      };
    default:
      return state;
  }
}
