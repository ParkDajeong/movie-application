import { createAction, handleActions } from "redux-actions";

const START_LOADING = "movieApp/START_LOADING";
const FINISH_LOADING = "movieApp/FINISH_LOADING";

const initialState = {
  isLoading: false,
};

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const loadingReducer = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      isLoading: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      isLoading: false,
    }),
  },
  initialState
);

export default loadingReducer;
