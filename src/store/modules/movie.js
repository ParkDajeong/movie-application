import * as MovieAPI from "../../lib/movieAPI";

const GET_MOVIES = "movieApp/GET_MOVIES";
const GET_MAINBANNERS = "movieApp/GET_MAINBANNERS";
const CHANGE_LIKELIST = "movieApp/CHANGE_LIKELIST";

export const getMovieList = async () => {
  const data = await MovieAPI.getData("trending/movie/week");

  return { type: GET_MOVIES, data: data.results };
};

export const getMainBanner = async () => {
  let randomMovie = {};
  const movieList = (await MovieAPI.getData("trending/movie/week")).results;

  console.log("메인배너리스트", movieList);

  while (true) {
    const randomMovieId = movieList[Math.floor(Math.random() * movieList.length)].id;
    randomMovie = await MovieAPI.getData(`movie/${randomMovieId}`);

    if (randomMovie.title && randomMovie.tagline && randomMovie.backdrop_path) {
      randomMovie = {
        data: randomMovie,
        type: GET_MAINBANNERS,
      };
      console.log("랜덤무비", randomMovie);
      break;
    }
  }

  return randomMovie;
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
    case CHANGE_LIKELIST:
      return {
        listCnt: action.payload,
      };
    default:
      return state;
  }
}
