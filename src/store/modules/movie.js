import * as MovieAPI from "../../lib/movieAPI";
import { API_URL, API_KEY } from "../../config/config";

const GET_MOVIES = "movieApp/GET_MOVIES";
const GET_MAINBANNERS = "movieApp/GET_MAINBANNERS";

export const getMovieList = () => {
  const path = `${API_URL}trending/movie/week?api_key=${API_KEY}&language=ko&page=1`;

  return (dispatch) => {
    return MovieAPI.getMovies(path) //
      .then((res) => dispatch({ type: GET_MOVIES, data: res.results }))
      .catch((err) => console.log(err));
  };
};

export const getMainBanner = () => {
  const path = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    default:
      return state;
  }
}
