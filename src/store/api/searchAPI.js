import { getData } from "./getData";
import { IMAGE_BASE_URL } from "../../config/config";

export const getSearchResults = async (query) => {
  const result = (await getData(`search/movie`, "ko", query)).results;
  const searchResult = result.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null,
    };
  });

  return searchResult;
};
