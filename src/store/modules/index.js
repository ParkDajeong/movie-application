import { combineReducers } from "redux";
import movie from "./movie";
import like from "./like";
import search from "./search";
import loading from "./loading";

export default combineReducers({
  movie,
  like,
  search,
  loading,
});
