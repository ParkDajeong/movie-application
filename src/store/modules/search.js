import * as MovieAPI from "../../lib/movieAPI";
import { handleActions } from "redux-actions";

const GET_SEARCH_RESULTS = "movieApp/GET_SEARCH_RESULTS";

const initialState = {};

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

const searchReducer = handleActions(
  {
    [GET_SEARCH_RESULTS]: (state, { result: searchResults }) => ({
      ...state,
      searchResults,
    }),
  },
  initialState
);

export default searchReducer;
