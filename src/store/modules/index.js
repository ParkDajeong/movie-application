import { combineReducers } from "redux";
import movie from "./movie";
import like from "./like";
import search from "./search";

export default combineReducers({
  movie,
  like,
  search,
});
