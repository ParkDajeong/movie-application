import * as MovieAPI from "../../lib/movieAPI";

const GET_MOVIES = "movieApp/GET_MOVIES";
const GET_MAINBANNERS = "movieApp/GET_MAINBANNERS";
const CHANGE_LIKELIST = "movieApp/CHANGE_LIKELIST";
const GET_MOVIE_INFO = "movieApp/GET_MOVIE_INFO";
const GET_SEARCH_RESULTS = "movieApp/GET_SEARCH_RESULTS";

export const getMovieList = async () => {
  const data = await MovieAPI.getMovieList();

  return {
    type: GET_MOVIES,
    data,
  };
};

export const getMainBanner = async () => {
  let randomMovie = {};
  const movieList = (await MovieAPI.getData("trending/movie/week", "ko")).results;

  while (true) {
    const randomMovieId = movieList[Math.floor(Math.random() * movieList.length)].id;
    randomMovie = await MovieAPI.getData(`movie/${randomMovieId}`, "ko");

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
  const info = await MovieAPI.getMovieDetail(movieId);
  const credits = await MovieAPI.getMovieCredits(movieId);
  const videos = await MovieAPI.getMovieVideos(movieId);
  const images = await MovieAPI.getMovieImages(movieId);
  const recommendations = await MovieAPI.getMovieRecommendations(movieId);

  return {
    type: GET_MOVIE_INFO,
    data: { ...info, credits, videos, images, recommendations },
  };
};

export const getSearchData = async (query) => {
  if (query === "") {
    return {
      type: GET_SEARCH_RESULTS,
      result: [],
    };
  }
  const result = await MovieAPI.getSearchResults(query);

  return {
    type: GET_SEARCH_RESULTS,
    result,
  };
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
        movieDetail: action.data,
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.result,
      };
    case CHANGE_LIKELIST:
      return {
        listCnt: action.payload,
      };
    default:
      return state;
  }
}
