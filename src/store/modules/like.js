import { getAllLikeMovies } from "../api/likeAPI";
import { handleActions } from "redux-actions";

const GET_LIKELIST = "movieApp/GET_LIKELIST";

const initialState = {
  likeList: {
    likeListSuccess: false,
    result: [
      {
        id: "",
        title: "",
        rate: "",
        poster: "",
      },
    ],
  },
};

export const getLikeList = () => {
  const result = getAllLikeMovies();

  return {
    type: GET_LIKELIST,
    result,
  };
};

const likeReducer = handleActions(
  {
    [GET_LIKELIST]: (state, { result }) => ({
      ...state,
      likeList: {
        likeListSuccess: true,
        result,
      },
    }),
  },
  initialState
);

export default likeReducer;
